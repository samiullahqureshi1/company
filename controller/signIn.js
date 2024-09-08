import { userModel } from "../model/signUp.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
const createToken = (user, res) => {
  const { email, id, firstName } = user;
  const payload = {
    email,
    id: id,
    firstName,
  };
  console.log(payload);
  jwt.sign(
    { payload },
    process.env.SECRET_KEY,
    { expiresIn: "200h" },
    (error, token) => {
      if (error) {
        res.status(404).send("unable to generate");
      } else {
        res.json({
          token,
        });
      }
    }
  );
};

const logIn = (req, res) => {
  const { email, password } = req.body;
  userModel.findOne({ email }).then((user) => {
    if (user) {
      bcrypt.compare(password, user.password).then((result) => {
        if (result) {
          createToken(user, req);
        } else {
          res.status(404).send("unable to generate");
        }
      });
    } else {
      res.status(404).send("no user exist with this email");
    }
  });
};

export default logIn;
