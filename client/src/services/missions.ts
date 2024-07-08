import { BASE_URL, MISSIONS } from "../constants/endpoints";

const getMissions = async () => {
  try {
    const response = await fetch(`${BASE_URL}${MISSIONS}`);
    if (!response.ok) {
      throw new Error("Failed to fetch users");
    }
    const data = await response.json();
    console.log("data from mission service:", data);
    return data;
  } catch (error) {
    console.error("Error fetching missions:", error);
    throw error;
  }
};

export { getMissions };
