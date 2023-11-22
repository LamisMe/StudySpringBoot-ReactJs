import { Formik,Field,ErrorMessage,Form } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";

function ContractCreate(){
    return(
        <>
        <div class="container" style={{marginTop: "6rem"}}>
        <h3 class="mt-3">Thêm hợp đồng</h3>
        <for >
            <div class="mb-3">
              <label for="name" class="form-label">Mã hợp đồng<span class="text-danger">(*)</span></label>
              <Field type="text" class="form-control" id="name"/>
            </div>
            <div class="mb-3">
                <label for="service" class="form-label">Khách hàng sử dụng dịch vụ<span class="text-danger">(*)</span></label>
                <Field type="text" class="form-control" id="service"/>
              </div>
              <div class="mb-3">
                <label for="typeCustomer" class="form-label">Loại dịch vụ<span style={{color: "red"}}>(*)</span></label>
                <select class="form-select" aria-label="Default select example">
                    <option selected>Chọn loại dịch vụ</option>
                    <option value="1">Villa</option>
                    <option value="2">House</option>
                    <option value="3">Room</option>
                  </select>
              </div>
            <div class="mb-3">
              <label for="dateStart" class="form-label">Ngày bắt đầu<span class="text-danger">(*)</span></label>
              <Field type="date" class="form-control" id="dateStart"/>
            </div>
            <div class="mb-3">
                <label for="date" class="form-label">Ngày kết thúc<span class="text-danger">(*)</span></label>
                <Field type="date" class="form-control" id="date"/>
              </div>
              <div class="mb-3">
                <label for="inputPricePrevious" class="form-label">Số tiền cọc trước<span class="text-danger">(*)</span></label>
                <Field type="text" class="form-control" id="inputPricePrevious"/>
              </div>
              <div class="mb-3">
                <label for="totalPrice" class="form-label">Tổng số tiền thanh toán<span class="text-danger">(*)</span></label>
                <Field type="text" class="form-control" id="totalPrice"/>
              </div>
              <div class="mb-3">
                <label for="inputAddress" class="form-label">Địa chỉ<span class="text-danger">(*)</span></label>
                <Field type="text" class="form-control" id="inputAddress"/>
              </div>
            <button type="submit" class="btn btn-primary">Xác nhận</button>
          </for>
      </div>
        </>
    )
}

export default ContractCreate;