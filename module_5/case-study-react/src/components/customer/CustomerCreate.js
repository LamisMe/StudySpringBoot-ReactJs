import React from "react";

function CustomerCreate(){
    return(
        <>
        <div class="container" style={{marginTop: "6rem"}}>
        <h3 class="mt-3">Thêm khách hàng</h3>
        <for >
            <div class="mb-3">
              <label for="name" class="form-label">Họ tên<span style={{color: "red"}}>(*)</span></label>
              <input type="text" class="form-control" id="name"/>
            </div>
            <div class="mb-3">
              <label for="date" class="form-label">Ngày sinh<span style={{color: "red"}}>(*)</span></label>
              <input type="date" class="form-control" id="date"/>
            </div>
            <div class="mb-3">
                <label for="inputTool" class="form-label">Giới tính</label>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
                    <label class="form-check-label" for="inlineRadio1">Nam</label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
                    <label class="form-check-label" for="inlineRadio2">Nữ</label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
                    <label class="form-check-label" for="inlineRadio2">Khác</label>
                  </div>
              </div>
              <div class="mb-3">
                <label for="inputCMND" class="form-label">Số CMND<span style={{color: "red"}}>(*)</span></label>
                <input type="text" class="form-control" id="inputCMND"/>
              </div>
              <div class="mb-3">
                <label for="inputPhoneNumber" class="form-label">Số Điện Thoại<span style={{color: "red"}}>(*)</span></label>
                <input type="text" class="form-control" id="inputPhoneNumber"/>
              </div>
              <div class="mb-3">
                <label for="typeCustomer" class="form-label">Loại khách<span style={{color: "red"}}>(*)</span></label>
                <select class="form-select" aria-label="Default select example">
                    <option selected>Chọn loại khách</option>
                    <option value="1">Vip</option>
                    <option value="2">Thường</option>
                    <option value="3">None</option>
                  </select>
              </div>
              <div class="mb-3">
                <label for="inputAddress" class="form-label">Địa chỉ<span style={{color: "red"}}>(*)</span></label>
                <input type="text" class="form-control" id="inputAddress"/>
              </div>
            <button type="submit" class="btn btn-primary">Xác nhận</button>
          </for>
      </div>
        </>
    )
}

export default CustomerCreate;