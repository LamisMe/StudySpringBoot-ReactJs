import { Formik,Field,ErrorMessage,Form } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import * as contractService from "../../services/ContractService";


function ContractList(){
  const [contracts, setContracts] = useState([]);
  
  useEffect(() => {
    getAll();
  },[]);
  const getAll = async () => {
    let data = await contractService.getAllContract();
    setContracts(data);
  };
  if (!contracts) {
    return null;
  }
    return(
        <>
        <div class="container" style={{marginTop: "6rem"}}>
        <h3 class="title fst-italic">DANH SÁCH HỢP ĐỒNG</h3>
        <div className="text-end fst-italic">
        <Link class="nav-link active" className="btn btn-success mb-3" aria-current="page" to="/create-contract"
                  >Tạo mới hợp đồng</Link
                >
        </div>
        <table class="table">
           <thead className="table-dark">
            <tr>
                <th>Mã hợp đồng</th>
                <th>Khách hàng</th>
                <th>Ngày làm hợp đồng</th>
                <th>Ngày kết thúc hợp đồng</th>
                <th>Tiền đặt cọc (Vnd)</th>
                <th>Chức năng</th>
            </tr>
           </thead>
           <tbody className="table-light fst-italic">
           {contracts.map((item) => (
              <tr key={item.id}>
                <td>{item.codeContract}</td>
                <td>{item.customer.name}</td>
                <td>{new Date(item.dateStart).toLocaleDateString()}</td>
                <td>{new Date(item.dateEnd).toLocaleDateString()}</td>
                <td>{item.pricePrevious}</td>
                <td>
                <Link
                    className="btn btn-sm btn-primary rounded-0 me-3"
                    type="button"
                    to={`/update-contract/${item.id}`}
                  >
                    Edit
                  </Link>
                <button
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    className="btn btn-sm btn-danger rounded-0"
                
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
                <h5>Bạn có chắc chắn xóa dịch vụ này không?</h5>
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

export default ContractList;