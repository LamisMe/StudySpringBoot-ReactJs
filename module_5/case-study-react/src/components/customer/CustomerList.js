import React from "react";
import { Link } from "react-router-dom";

function CustomerList(){
    return(
        <>
<div class="container" style={{marginTop: "6rem"}}>
        <h3 class="title">DANH SÁCH KHÁCH HÀNG</h3>
        <div className="text-end">
        <Link class="nav-link active" className="btn btn-success mb-3" aria-current="page" to="/create-customer"
                  >Thêm khách hàng</Link
                >
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
            <tr>
                <td>1</td>
                <td>LNTN</td>
                <td>08/03/2002</td>
                <td>Quảng Bình</td>
                <td>Dinamond</td>
                <td>
                <Link class="nav-link active" className="btn btn-primary" aria-current="page" to="/update-customer"
                  >Sửa</Link
                >
                <Link class="nav-link active" className="btn btn-danger" aria-current="page" to="/"
                  style={{marginLeft:"20px"}}>Xóa</Link
                >
                </td>
            </tr>
           </tbody>
          </table>
      </div>
        </>
    )
}

export default CustomerList;