import * as blogService from "../services/BlogService";
import { Link, useNavigate } from "react-router-dom";

export function BlogCreate(){
    const intitValue = {
        title : "",
        day: "",
        type:JSON.stringify({
          id:1,
          name:"thể thao"
        }),
        author: ""
    }

    const validationSchema = () =>{
        
    }
return(
<>
<div class="container mt-3">
<h1 class="fst-italic text-center pt-3">THÊM MỚI</h1>
      <form>
        <div class="mb-3">
          <label for="inputName" class="form-label fw-bold fst-italic"
            >Họ Tên <span class="text-danger">(*)</span></label
          >
          <input
            type="text"
            class="form-control"
            id="inputName"
            aria-describedby="emailHelp"
          />
        </div>
        <div class="mb-3">
          <label for="inputDate" class="form-label fw-bold fst-italic"
            >Ngày Sinh <span class="text-danger">(*)</span></label
          >
          <input type="date" class="form-control" id="inputDate" />
        </div>
        <div class="mb-3">
          <label for="inputDate" class="form-label fw-bold fst-italic"
            >Giới Tính
          </label>
          <div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio1"
                value="option1"
                checked
              />
              <label class="form-check-label" for="inlineRadio1">Nam</label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio2"
                value="option2"
              />
              <label class="form-check-label" for="inlineRadio2">Nữ</label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio3"
                value="option3"
              />
              <label class="form-check-label" for="inlineRadio3">Khác</label>
            </div>
          </div>
          <div class="mb-3 mt-2">
            <label for="inputDate" class="form-label fw-bold fst-italic"
              >Chức vụ <span class="text-danger">(*)</span></label
            >
            <select class="form-select" aria-label="Default select example">
                <option selected>Chọn chức vụ</option>
                <option value="1">Trưởng phòng</option>
                <option value="2">Nhân viên</option>
                <option value="3">Giám đốc</option>
              </select>
          </div>
          
        </div>
        <div class="text-end mt-3">
         
          <Link to="/" class="btn btn-secondary fst-italic">Quay Lại</Link>
          <button type="submit" class="btn btn-success fst-italic ms-3">
            Xác nhận
          </button>
        </div>
      </form>
    </div>
</>
)
}