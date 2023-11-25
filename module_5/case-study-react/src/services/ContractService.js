import axios from "axios";

export const getAllContract = async () => {
  try {
    let res = await axios.get("http://localhost:8080/contracts");
    return res.data;
  } catch (e) {
    return undefined;
  }
};

export const saveContract = async (contract) => {
  try {
    await axios.post("http://localhost:8080/contracts", contract);
    return true;
  } catch (e) {
    return false;
  }
};

export const deleteContract = async (id) => {
  try {
    await axios.delete(`http://localhost:8080/contracts/${id}`);
    return true;
  } catch (e) {
    return false;
  }
}

export const findByIdContract = async (id) => {
    try {
        let res = await axios.get(`http://localhost:8080/contracts/${id}`);
        return res.data;
      } catch (e) {
        return undefined;
      }
}

export const editCustomer = async (customer) =>{
    try {
        await axios.patch(`http://localhost:8080/customers/${customer.id}`,customer);
        return true;
    } catch (e) {
        return false;
    }
}