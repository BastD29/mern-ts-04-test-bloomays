import { BloomerType } from "../models/bloomer";

// Utility function to add a bloomer to the specified record
const addBloomerToRecord = (
  record: Record<string, BloomerType[]>,
  date: string,
  bloomer: BloomerType
) => {
  if (!record[date]) {
    record[date] = [];
  }
  record[date].push(bloomer);
};

export { addBloomerToRecord };
