import axios from "axios";

export const getAll = async () => {
  try {
    let res = await axios.get("http://localhost:8080/users");
    return res.data;
  } catch (e) {
    return undefined;
  }
};

export const findById = async (id) => {
  try {
    let res = await axios.get(`http://localhost:8080/users/${id}`);
    return res.data;
  } catch (e) {
    return undefined;
  }
};

export const saveUser = async (user) => {
  try {
    await axios.post("http://localhost:8080/users", user);
    return true;
  } catch (e) {
    return false;
  }
};

export const editUser = async (user) =>{
    try {
        await axios.patch(`http://localhost:8080/users/${user.id}`,user);
        return true;
    } catch (e) {
        return false;
    }
}

export const deleteUser = async (id) =>{
    try {
        await axios.delete(`http://localhost:8080/users/${id}`)
        return true;
    } catch (e) {
        return false;
    }
}