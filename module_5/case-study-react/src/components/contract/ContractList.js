import { Formik,Field,ErrorMessage,Form } from "formik";
import * as Yup from "yup";

function ContractList(){
    return(
        <>
        <div class="container" style={{marginTop: "6rem"}}>
        <h3 class="title">DANH SÁCH HỢP ĐỒNG</h3>
        <table class="table table-striped table-hover">
           <thead>
            <tr>
                <th>Mã hợp đồng</th>
                <th>Khách hàng</th>
                <th>Dịch vụ</th>
                <th>Ngày làm hợp đồng</th>
                <th>Ngày kết thúc hợp đồng</th>
                <th>Tiền đặt cọc (Vnd)</th>
            </tr>
           </thead>
           <tbody>
            <tr>
                <td>1</td>
                <td>LNTN</td>
                <td>Villa</td>
                <td>17/11/2023</td>
                <td>19/11/2023</td>
                <td>200.000</td>
            </tr>
           </tbody>
          </table>
      </div>
        </>
    )
}

export default ContractList;