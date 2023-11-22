import axios from "axios";

export const getAll = async () => {
    try {
        let res = await axios.get("http://localhost:8080/todos");
        return res.data;
    } catch (e) {
        return undefined;
    }
}

export const saveToDo = async (toDo) =>{
    try {
         await axios.post("http://localhost:8080/todos",toDo);
        return true;
    } catch (e) {
        return false;
    }
}