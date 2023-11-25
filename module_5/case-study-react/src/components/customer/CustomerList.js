import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import * as customerService from "../../services/CustomerService";
import * as typeCustomerService from "../../services/TypeCustomerService";

function CustomerList() {
  const [customers, setCustomers] = useState([]);
  const [customerTypes, setCustomerTypes] = useState([]);
  useEffect(() => {
    getAll();
  },[]);
  const getAll = async () => {
    let data = await customerService.getAllCutomers();
    let dataType = await customerService.getAllCutomers();
    setCustomers(data);
    setCustomerTypes(dataType);
  };
  if (!customers) {
    return null;
  }
  return (
    <>
      <div class="container" style={{ marginTop: "6rem"}}>
        <h3 class="title fst-italic">DANH SÁCH KHÁCH HÀNG</h3>
        <div className="text-end fst-italic">
          <Link
            class="nav-link active"
            className="btn btn-success mb-3"
            aria-current="page"
            to="/create-customer"
          >
            Thêm khách hàng
          </Link>
        </div>

        <table class="table">
          <thead className="table-dark">
            <tr>
              <th>STT</th>
              <th>Tên</th>
              <th>Ngày Sinh</th>
              <th>Địa chỉ</th>
              <th>Hạng khách</th>
              <th>Chức năng</th>
            </tr>
          </thead>
          <tbody className="table-light fst-italic">
            {customers.map((item,index) => (
              <tr key={item.id}>
                <td>{index+1}</td>
                <td>{item.name}</td>
                <td>{new Date(item.dayOfBirth).toLocaleDateString()}</td>
                <td>{item.address}</td>
                <td>{item.customersType.name}</td>
                <td>
                <Link
                    className="btn btn-sm btn-primary rounded-0 me-3"
                    type="button"
                    to={`/update-customer/${item.id}`}
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
                    Xóa khách hàng
                  </h1>
                  <h5 className="modal-title text-danger fw-bold">
                  </h5>
                </div>
              </div>
              <div className="modal-body">
                <h5>Bạn có chắc chắn xóa khách hàng này không?</h5>
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
  );
}

export default CustomerList;
