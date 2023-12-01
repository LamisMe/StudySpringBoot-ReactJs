import axios from "axios";

export const getAllBooking = async () =>{
    try {
        let res = await axios.get("http://localhost:8080/api/orders");
        return res.data.content; 
    } catch (e) {
        return undefined;
    }
}

export const deleteBooking = async (id) =>{
    try {
        await axios.delete(`http://localhost:8080/api/orders/${id}`);
        console.log(id);
        return true; 
    } catch (e) {
        return false;
    }
}

export const saveBooking = async (orders) =>{
    try {
        await axios.post("http://localhost:8080/api/orders",orders);
        return true; 
    } catch (e) {
        return false;
    }
}

export const findById = async (id) => {
    try {
        let res = await axios.get(`http://localhost:8080/api/orders/${id}`);
        return res.data;
      } catch (e) {
        return undefined;
      }
}

export const editBooking = async (booking) =>{
    try {
        await axios.patch(`http://localhost:8080/api/orders/${booking.id}`,booking);
        return true;
    } catch (e) {
        return false;
    }
}