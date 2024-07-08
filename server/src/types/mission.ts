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

export interface MissionQuery {
  beginDate?: { $gte: string };
  endDate?: { $lte: string };
}

export interface MissionData {
  firstname: string;
  lastname: string;
  beginMission: string;
  endMission: string;
  id: string;
}

export interface MissionRecords {
  [date: string]: MissionData[];
}
