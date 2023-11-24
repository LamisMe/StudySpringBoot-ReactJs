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
      <div class="container" style={{ marginTop: "6rem" }}>
        <h3 class="title">DANH SÁCH KHÁCH HÀNG</h3>
        <div className="text-end">
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
          <tbody className="table-success">
            {customers.map((item,index) => (
              <tr key={item.id}>
                <td>{index+1}</td>
                <td>{item.name}</td>
                <td>{item.dayOfBirth}</td>
                <td>{item.address}</td>
                <td>{item.phoneNumber}</td>
                <td>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default CustomerList;
