import React from "react";

function FuramaServiceCreate(){
    return(
        <>
        <div class="container" style={{marginTop: "6rem"}}>
        <h3 class="mt-3">Thêm dịch vụ</h3>
        <for >
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">Tên dịch vụ <span style={{color: "red"}}>(*)</span></label>
              <select class="form-select" aria-label="Default select example">
                <option selected>Chọn dịch vụ</option>
                <option value="1">Villa</option>
                <option value="2">House</option>
                <option value="3">Room</option>
              </select>
            </div>
            <div class="mb-3">
              <label for="inputAria" class="form-label">Diện tích sử dụng<span style={{color: "red"}}>(*)</span></label>
              <input type="text" class="form-control" id="inputAria"/>
            </div>
            <div class="mb-3">
                <label for="inputTool" class="form-label">Tiện ích khác</label>
                <input type="text" class="form-control" id="inputTool"/>
              </div>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Kiểu thuê <span style={{color: "red"}}>(*)</span></label>
                <select class="form-select" aria-label="Default select example">
                  <option selected>Chọn kiểu thuê</option>
                  <option value="1">Năm</option>
                  <option value="2">Tháng</option>
                  <option value="3">Ngày</option>
                </select>
              </div>
              <div class="mb-3">
                <label for="inputServiceFree" class="form-label">Dịch vụ miễn phí đi kèm</label>
                <input type="text" class="form-control" id="inputServiceFree"/>
              </div>
              <div class="mb-3">
                <label for="inputRoomStar" class="form-label">Tiêu chuẩn phòng<span style={{color: "red"}}>(*)</span></label>
                <input type="text" class="form-control" id="inputRoomStar"/>
              </div>
            <button type="submit" class="btn btn-primary">Xác nhận</button>
          </for>
      </div>
        </>
    )
}

export default FuramaServiceCreate;