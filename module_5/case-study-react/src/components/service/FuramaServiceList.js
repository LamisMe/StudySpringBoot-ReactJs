import React from "react";

function FuramaServiceList(){
    return(
        <>
<div class="container" style={{marginTop: "6rem"}}>
        <h3 class="title fst-italic">DANH SÁCH DỊCH VỤ</h3>
        <table class="table">
           <thead className="table-dark">
            <tr>
                <th>STT</th>
                <th>Tên dịch vụ</th>
            </tr>
           </thead>
           <tbody className="table-light fst-italic">
            <tr>
                <td>1</td>
                <td>Villa</td>
                </tr>
           </tbody>
          </table>
      </div>
        </>
    )
}

export default FuramaServiceList;