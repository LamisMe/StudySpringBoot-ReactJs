import axios from "axios";

export const getAllType = async () => {
  try {
    let res = await axios.get("http://localhost:8080/customers_type");
    return res.data;
  } catch (e) {
    return undefined;
  }
};