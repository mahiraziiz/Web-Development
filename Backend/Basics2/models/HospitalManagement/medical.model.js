import mongoose from "mongoose";

const medicalRecordSchema = mongoose.Schema({}, { timestamps: true });

export const medicalRecord = mongoose.model(
  "medicalRecord",
  medicalRecordSchema
);
