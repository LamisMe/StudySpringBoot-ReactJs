import axios from "axios";

export const getAll = async () =>{
    try {
        let res = await axios.get("http://localhost:8080/blogs?_sort=day&_order=desc");
        return res.data;
    } catch (e) {
        return undefined;
    }
}
export const findByTitleAndDay = async (title,dayStart,dayEnd) =>{
    try {
        let res = await axios.get(`http://localhost:8080/blogs?title_like=${title}&day_gte=${dayStart}&day_lte=${dayEnd}`);
        return res.data;
    } catch (e) {
        return undefined;
    }
}
export const findByTitle = async (title) =>{
    try {
        let res = await axios.get(`http://localhost:8080/blogs?title_like=${title}`);
        return res.data;
    } catch (e) {
        return undefined;
    }
}
export const deleteBlog = async (id) =>{
    try {
     await axios.delete(`http://localhost:8080/blogs/${id}`);
        return true;
    } catch (e) {
        return false;
    }
}