import mongoose from "mongoose";
const bloodBankSchema = new mongoose.Schema(
  {
    branchName: {
      type: String,
    },
    branchCode: {
      type: Number,
    },
    location: {
      type: {
        type: String,
        enum: ['Point'],
        required: true,
      },
      coordinates: {
        type: [Number],
        required: true,
      },
    },
  },
  {
    timestamps: true,
    collection: "bloodBanks",
  }
);


export const bloodBankModel = mongoose.model("bloodBanks", bloodBankSchema);
