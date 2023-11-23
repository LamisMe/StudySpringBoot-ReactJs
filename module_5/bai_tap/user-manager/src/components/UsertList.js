import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import { getAllUser,removeUserById } from "../redux/middleware/UserMiddleware";
import {toast} from "react-toastify";

function UserList() {
    const users = useSelector(store => store.users)
    const dispatch = useDispatch();
    const [userDelete, setUserDelete] = useState({});
    useEffect(() => {
        dispatch(getAllUser());
    }, );
    const removeUser = () => {
        dispatch(removeUserById(userDelete.id))
        toast.success("Xóa thành công");
    };

    if (!users) {
        return null;
    }

    return (
        <>
            <h1>Danh sách học sinh lớp </h1>
            <table className="table">
                <thead>
                <tr>
                    <th>STT</th>
                    <th>Tên</th>
                    <th>Email</th>
                    <th>Website</th>
                    <th>Chức năng</th>
                   
                </tr>
                </thead>
                <tbody>
                {users.map((item, index) => (
                    <tr key={item.id}>
                        <td>{index+1}</td>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.website}</td>
                       <td>
                       <button onClick={() => setUserDelete(item)} type="button" class="btn btn-danger"
                                    data-bs-toggle="modal" data-bs-target="#deleteModal">
                                Delete
                            </button>
                       </td>
                    </tr>
                ))}
                </tbody>
            </table>
            <div className="modal fade" id="deleteModal" tabIndex="-1" aria-labelledby="exampleModalLabel"
                 aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Xóa User</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            Bạn có chắc muốn xóa {userDelete.name} không?
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" onClick={removeUser} data-bs-dismiss="modal" className="btn btn-danger">Xóa</button>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default UserList;
