import { Document, Types } from "mongoose";

export interface IMission extends Document {
  _id: Types.ObjectId;
  label: string;
  beginDate: string;
  endDate: string;
  missionType: string;
  freelance: IFreelance;
}

export interface IFreelance extends Document {
  firstname: string;
  lastname: string;
  email: string;
}
