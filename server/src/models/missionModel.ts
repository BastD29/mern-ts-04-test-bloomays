import { Schema, model } from "mongoose";
import { IFreelance, IMission /* IMissionModel */ } from "../types/mission";

const freelanceSchema = new Schema<IFreelance>({
  firstname: { type: String, required: [true, "Please add a first name"] },
  lastname: { type: String, required: [true, "Please add a last name"] },
  email: { type: String, required: [true, "Please add an email"] },
});

const missionSchema = new Schema<IMission>({
  label: { type: String, required: [true, "Please add a label"] },
  beginDate: { type: String, required: [true, "Please add a begin date"] },
  endDate: { type: String, required: [true, "Please add an end date"] },
  missionType: { type: String, required: [true, "Please add a mission type"] },
  freelance: {
    type: freelanceSchema,
    required: [true, "Please add a freelance"],
  },
});

const Mission = model<IMission>("Mission", missionSchema);

export default Mission;
