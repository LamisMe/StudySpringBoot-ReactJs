import * as userService from "../../services/UserServices";

export const getAllUser = () => async (dispatch) =>{
    const res = await userService.getAll();
    dispatch({
        type: "GET_ALL_USER",
        payload: res
    })
}

export const createNewUser = (user) =>async(dispatch)=>{
    await userService.saveUser(user);
    dispatch({
        type: "ADD_NEW_USER",
        payload: user
    })
}

export const removeUserById = (id) => async(dispatch) =>{
    await userService.deleteUser(id);
    dispatch({
        type: "REMOVE_USER",
        payload: id
    })
}

export const updateUser = (user) => async(dispatch) =>{
    await userService.editUser(user)
    dispatch({
        type: "EDIT_USER",
        payload: user
    })
}

export const findById = (id) => async(dispatch) =>{
    const res = await userService.findById(id);
    dispatch({
        type: "FIND_BY_ID",
        payload: res
    })
}