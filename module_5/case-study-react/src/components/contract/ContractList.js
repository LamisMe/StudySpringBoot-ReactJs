import { Formik,Field,ErrorMessage,Form } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";

function ContractList(){
    return(
        <>
        <div class="container" style={{marginTop: "6rem"}}>
        <h3 class="title">DANH SÁCH HỢP ĐỒNG</h3>
        <div className="text-end">
        <Link class="nav-link active" className="btn btn-success mb-3" aria-current="page" to="/create-contract"
                  >Tạo mới hợp đồng</Link
                >
        </div>
        <table class="table">
           <thead className="table-dark">
            <tr>
                <th>Mã hợp đồng</th>
                <th>Khách hàng</th>
                <th>Dịch vụ</th>
                <th>Ngày làm hợp đồng</th>
                <th>Ngày kết thúc hợp đồng</th>
                <th>Tiền đặt cọc (Vnd)</th>
                <th>Chức năng</th>
            </tr>
           </thead>
           <tbody className="table-success">
            <tr>
                <td>1</td>
                <td>LNTN</td>
                <td>Villa</td>
                <td>17/11/2023</td>
                <td>19/11/2023</td>
                <td>200.000</td>
                <td>
                <Link class="nav-link active" className="btn btn-primary" aria-current="page" to="/update-contract"
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

export default ContractList;