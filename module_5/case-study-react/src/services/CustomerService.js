import axios from "axios";

export const getAllCutomers = async () => {
  try {
    let res = await axios.get("http://localhost:8080/customers");
    return res.data;
  } catch (e) {
    return undefined;
  }
};

export const saveCusstomer = async (customer) => {
  try {
    await axios.post("http://localhost:8080/customers", customer);
    return true;
  } catch (e) {
    return false;
  }
};

export const deleteCustomer = async (id) => {
  try {
    await axios.delete(`http://localhost:8080/customers/${id}`);
    return true;
  } catch (e) {
    return false;
  }
};

export const findByIdCustomer = async (id) => {
    try {
        let res = await axios.get(`http://localhost:8080/customers/${id}`);
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