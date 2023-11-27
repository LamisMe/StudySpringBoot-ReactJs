import { Link,useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import * as furamaFacilityService from "../../services/FuramaFacilityServices";

function FuramaServiceList(){
    const navigate = useNavigate();
    const[facilities,setFacilities] = useState([]);
    const[facilityDelete,setFacilityDelete] = useState([]);
    useEffect(()=>{
            getAll()
    },[]);
    const getAll =async () =>{
        let data = await furamaFacilityService.getAllFacility();
        setFacilities(data);
    }
    const handlerFacility = (value) =>{
        setFacilityDelete(value);
    }
    const deleteFacility = async () =>{
        let isSuccess = await furamaFacilityService.deleteFacility(facilityDelete.id);
        if(isSuccess){
            toast.success("Xóa thành công")
            navigate("/")
        }
    }
    if(!facilities) return null;
    return(
        <>
<div class="container" style={{marginTop: "6rem"}}>
        <h3 class="title fst-italic">DANH SÁCH DỊCH VỤ</h3>
        <table class="table">
           <thead className="table-dark">
            <tr>
                <th>STT</th>
                <th>Tên dịch vụ</th>
                <th>Chức năng</th>
            </tr>
           </thead>
           <tbody className="table-light fst-italic">
            {facilities.map((item,index)=>(
                <tr key={item.id}>
                <td>{index+1}</td>
                <td>{item.name}</td>
                <td>
                <button
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    className="btn btn-sm btn-danger rounded-0"
                    onClick={() =>handlerFacility(item)}
                  >
                    Delete
                  </button>
                </td>
                </tr>
            ))}
            
           </tbody>
          </table>
          <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content text-center">
              <div className="modal-header justify-content-center">
                <div>
                  <h1
                    className="modal-title text-danger fs-4"
                    id="exampleModalLabel"
                  >
                    Xóa dịch vụ
                  </h1>
                  <h5 className="modal-title text-danger fw-bold">
                  </h5>
                </div>
              </div>
              <div className="modal-body">
                <h5>Bạn có chắc chắn xóa dịch vụ {facilityDelete.name} không?</h5>
                Hành dộng này không thể hoàn tác!
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-sm btn-secondary rounded-0"
                  data-bs-dismiss="modal"
                >
                  Đóng
                </button>
                <button
                  type="button"
                  className="btn btn-sm btn-danger rounded-0"
                  data-bs-dismiss="modal"
                  onClick={deleteFacility}
                >
                  Xác nhận
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
        </>
    )
}

export default FuramaServiceList;