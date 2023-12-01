import axios from "axios";

export const getAllProduct = async () =>{
    try {
        let res = await axios.get("http://localhost:8080/api/products");
        return res.data; 
    } catch (e) {
        return undefined;
    }
}