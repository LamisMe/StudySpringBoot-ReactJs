import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function ContactForm() {
  const initValue = {
    name: "",
    email: "",
    phone: "",
    message: "",
  };

  const validateForm = {
    name: Yup.string()
      .required("Tên không được để trống")
      .min(5, "Tên phải nhiều hơn 5 ký tự")
      .max(50, "Tên phải ít hơn 50 ký tự")
      .matches(
        /^[^\u00C0-\u1EF9]+$/i,
        "Nhập sai định dạng, chữ cái đầu phải viết hoa"
      ),
    email: Yup.string()
      .required("Email không được để trống")
      .min(5, "Email phải nhiều hơn 5 ký tự")
      .max(50, "Email phải ít hơn 50 ký tự")
      .matches(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,"Nhập sai định dạng"),
    phone: Yup.string().required("Số điện thoại không được để trống")
    .matches(/^(0[3|5|7|8|9])+([0-9]{9})$/,"Nhập sai định dạng"),
    message: Yup.string().required("Lời nhắn không được để trống")
    .max(500, "Lời nhắn phải ít hơn 500 ký tự"),
  };
  function handleOnSumit(){
    alert("Add contact successfully!!!")
  }
  return (
    <>
      <div className="container">
        <h1>Liên Hệ</h1>
        <Formik
          initialValues={initValue}
          onSubmit={handleOnSumit}
          validationSchema={Yup.object(validateForm)}
        >
          <Form>
            <div class="mb-3">
              <label for="exampleInputName" class="form-label">
                Tên 
              </label>
              <ErrorMessage name="name" component="span" className="err-name"/>
              <Field
                type="text"
                class="form-control"
                id="exampleInputName"
                aria-describedby="emailHelp" name="name"
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputEmail" class="form-label">
                Email
              </label>
              <ErrorMessage name="email" component="span" className="err-name"/>
              <Field
                type="text"
                class="form-control"
                id="exampleInputEmail"
                name="email"
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputPhone" class="form-label">
                Số điện thoại
              </label>
              <ErrorMessage name="phone" component="span" className="err-name"></ErrorMessage>
              <Field
                type="text"
                class="form-control"
                id="exampleInputPhone"
                name="phone"
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputMessage" class="form-label">
                Lời nhắn
              </label>
              <ErrorMessage name="message" component="span" className="err-name"></ErrorMessage>
              <Field component="textarea"
                type="text"
                class="form-control"
                id="exampleInputMessage"
                name="message"
              />
            </div>
            <button type="submit" class="btn btn-primary">
              Xác nhận
            </button>
          </Form>
        </Formik>
      </div>
    </>
  );
}
export default ContactForm;