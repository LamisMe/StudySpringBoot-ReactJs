import React from "react";

function CustomerList(){
    return(
        <>
<div class="container" style={{marginTop: "6rem"}}>
        <h3 class="title">DANH SÁCH KHÁCH HÀNG</h3>
        <table class="table table-striped table-hover">
           <thead>
            <tr>
                <th>STT</th>
                <th>Tên</th>
                <th>Ngày Sinh</th>
                <th>Địa chỉ</th>
                <th>Hạng khách</th>
            </tr>
           </thead>
           <tbody>
            <tr>
                <td>1</td>
                <td>LNTN</td>
                <td>08/03/2002</td>
                <td>Quảng Bình</td>
                <td>Dinamond</td>
            </tr>
           </tbody>
          </table>
      </div>
        </>
    )
}

export default CustomerList;