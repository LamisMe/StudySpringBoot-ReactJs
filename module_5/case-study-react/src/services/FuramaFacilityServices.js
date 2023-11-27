import axios from "axios";

export const getAllFacility = async () => {
  try {
    let res = await axios.get("http://localhost:8080/facilities");
    return res.data;
  } catch (e) {
    return undefined;
  }
};

export const saveFacility= async (facility) => {
  try {
    await axios.post("http://localhost:8080/facilities", facility);
    return true;
  } catch (e) {
    return false;
  }
};

export const deleteFacility = async (id) => {
  try {
    await axios.delete(`http://localhost:8080/facilities/${id}`);
    return true;
  } catch (e) {
    return false;
  }
};