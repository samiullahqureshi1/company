import { bloodBankModel } from "../model/bloodBank.js";
import { userModel } from "../model/signUp.js";


const addBloodBank = (req, res) => {
  const { branchName, branchCode, location } = req.body;
  const blood = new bloodBankModel({
    branchName,
    branchCode,
    location,
  });
  blood.save().then((result) => {
    if (result) {
      res.status(201).send(result);
    } else {
      res.status(404).send("unable to find");
    }
  });
};

const getBloodBanks = (req, res) => {
  bloodBankModel.find().then((bloodBanks) => {
    if (bloodBanks) {
      res.status(201).send(bloodBanks);
    }
  });
};

const getSingle = (req, res) => {
  const { id } = req.params;
  bloodBankModel.findOne({ _id: id }).then((result) => {
    if (!result) {
      res.status(404).send("unable to find bloodBanks");
    } else {
      res.status(201).send(result);
    }
  });
};

const updateBloodBanks = (req, res) => {
  const { id } = req.params;
  const query = { $set: req.body };
  bloodBankModel.findByIdAndUpdate(id, query).then((showUpdate) => {
    if (showUpdate) {
      res.status(201).send("successfully updated");
    }
  });
};



async function getAllLocation(req,res) {
  try {
    const { longitude, latitude, maxDistance = 5000 } = req.query;

    if (!longitude || !latitude) {
      return res.status(400).send("Longitude and Latitude are required");
    }

    const nearestBloodBanks = await bloodBankModel.find({
      location: {
        $near: {
          $geometry: {
            type: "Point",
            coordinates: [parseFloat(longitude), parseFloat(latitude)],
          },
          $maxDistance: parseInt(maxDistance),
        },
      },
    });

    res.status(200).send(nearestBloodBanks);
  } catch (error) {
    res.status(500).send("Error finding blood banks: " + error.message);
  }
}


export default {
  addBloodBank,
  getBloodBanks,
  getSingle,
  updateBloodBanks,
  getAllLocation,
};
