import React from "react";
import * as yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";

function CustomerUpdate(){
  const initValue = {
    name: "",
    dayOfBirth: "",
    gender: "",
    idCard:"",
    phoneNumber:"",
    customersType: "",
    address:""
}
const validateForm = {
  name : yup.string().required("Không được để trống trường này *"),
  dayOfBirth : yup.string().required("Không được để trống trường này *"),
  gender : yup.string().required("Không được để trống trường này *"),
  idCard : yup.string().required("Không được để trống trường này *"),
  phoneNumber : yup.string().required("Không được để trống trường này *"),
  address : yup.string().required("Không được để trống trường này *"),
}
    return(
    <>
     <div class="container" style={{marginTop: "6rem"}}>
        <h3 class="mt-3">Cập nhật khách hàng</h3>
        <Formik initialValues={initValue}
        onSubmit={()=>{

        }}
        validationSchema={yup.object(validateForm)}>
          <Form>
            <div class="mb-3">
              <label for="name" class="form-label">
                Họ tên<span style={{ color: "red" }}>(*)</span>
              </label>
              <Field type="text" name="name" class="form-control" id="name" />
              <ErrorMessage
                name="name"
                component="span"
                className="err-name"
              ></ErrorMessage>
            </div>
            <div class="mb-3">
              <label for="date" name="date" class="form-label">
                Ngày sinh<span style={{ color: "red" }}>(*)</span>
              </label>
              <Field type="text" name="dayOfBirth" class="form-control" id="date" />
              <ErrorMessage
                name="dayOfBirth"
                component="span"
                className="err-name"
              ></ErrorMessage>
            </div>
            <div class="mb-3">
              <label for="inputTool" class="form-label">
                Giới tính
              </label>
              <div class="form-check form-check-inline">
                <Field
                  class="form-check-input"
                  type="radio"
                  name="gender"
                  id="inlineRadio1"
                  value="1"
                  checked
                />
                <label class="form-check-label" for="inlineRadio1">
                  Nam
                </label>
              </div>
              <div class="form-check form-check-inline">
                <Field
                  class="form-check-input"
                  type="radio"
                  name="gender"
                  id="inlineRadio2"
                  value="0"
                />
                <label class="form-check-label" for="inlineRadio2">
                  Nữ
                </label>
              </div>
              <div class="form-check form-check-inline">
                <Field
                  class="form-check-input"
                  type="radio"
                  name="gender"
                  id="inlineRadio2"
                  value="2"
                />
                <label class="form-check-label" for="inlineRadio2">
                  Khác
                </label>
              </div>
            </div>
            <div class="mb-3">
              <label for="inputCMND" class="form-label">
                Số CMND<span style={{ color: "red" }}>(*)</span>
              </label>
              <Field type="text" name="idCard" class="form-control" id="inputIdCard" />
              <ErrorMessage
                name="idCard"
                component="span"
                className="err-name"
              ></ErrorMessage>
            </div>
            <div class="mb-3">
              <label for="inputPhoneNumber" class="form-label">
                Số Điện Thoại<span style={{ color: "red" }}>(*)</span>
              </label>
              <Field type="text" name="phoneNumber" class="form-control" id="inputPhoneNumber" />
              <ErrorMessage
                name="phoneNumber"
                component="span"
                className="err-name"
              ></ErrorMessage>
            </div>
            <div class="mb-3">
              <label for="typeCustomer" class="form-label">
                Loại khách<span style={{ color: "red" }}>(*)</span>
              </label>
              <Field
                class="form-select"
                name="customersType" component="select"
                aria-label="Default select example"
              >
                <option selected>Chọn loại khách</option>
                <option value="1">Vip</option>
                <option value="2">Thường</option>
                <option value="3">None</option>
              </Field>
            </div>
            <div class="mb-3">
              <label for="inputAddress" class="form-label">
                Địa chỉ<span style={{ color: "red" }}>(*)</span>
              </label>
              <Field
                type="text"
                name="address"
                class="form-control"
                id="inputAddress"
              />
              <ErrorMessage
                name="address"
                component="span"
                className="err-name"
              ></ErrorMessage>
            </div>
            <button type="submit" class="btn btn-primary">
              Xác nhận
            </button>
          </Form>
        </Formik>
      </div>
    </>
    )
}

export default CustomerUpdate;