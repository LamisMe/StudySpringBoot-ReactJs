import { Formik,Field,ErrorMessage,Form } from "formik";
import * as Yup from "yup";

function MedicalForm() {
  const initValue = {
    name: "",
    idCard: "",
    yearOfBirth: 0,
    gender: "",
    nationality: "",
    company: "",
    workingParts: "",
    status: "",
    province: "",
    district: "",
    ward: "",
    village: "",
    phone: "",
    email: "",
  };
  const validateForm = {
    name: Yup.string().required("Tên không được để trống"),
    idCard: Yup.string().required("CMND không được để trống"),
    yearOfBirth: Yup.number()
      .required("Năm sinh không được để trống")
      .min(1900, "Năm sinh không được trước 1900")
      .max(2023, "Năm sinh không được sau 2023"),
    nationality: Yup.string().required("Quốc tịch không được để trống"),
    province: Yup.string().required("Tỉnh/Thành phố không được để trống"),
    district: Yup.string().required("Quận/Huyện không được để trống"),
    ward: Yup.string().required("Phường/Xã không được để trống"),
    village: Yup.string().required(
      "Số nhà, phố, tổ dân phố /thôn /đội không được để trống"
    ),
    phone: Yup.string().required("Số điện thoại không được để trống"),
    email: Yup.string()
      .required("Email không được để trống")
      .matches(
        /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/,
        "Địa chỉ email không hợp lệ"
      ),
  };
  return (
    <>
      <div className="container">
        <h1>Tờ khai y tế</h1>
        <Formik
          initialValues={initValue}
          onSubmit={(values) => {
            values.yearOfBirth = values.yearOfBirth*1
            console.log(values);
          }}
          validationSchema={Yup.object(validateForm)}
        >
          <Form>
            <div class="mb-3">
              <label for="exampleInputName" class="form-label">
                Tên
              </label>
              <ErrorMessage name="name" component="span" className="err-name" />
              <Field
                type="text"
                class="form-control"
                id="exampleInputName"
                aria-describedby="emailHelp"
                name="name"
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputIdCard" class="form-label">
                Số hộ chiếu /CMND
              </label>
              <ErrorMessage
                name="idCard"
                component="span"
                className="err-name"
              />
              <Field
                type="text"
                class="form-control"
                id="exampleInputIdCard"
                name="idCard"
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputYearOfBirth" class="form-label">
                Năm sinh
              </label>
              <ErrorMessage
                name="yearOfBirth"
                component="span"
                className="err-name"
              />
              <Field
                type="number"
                class="form-control"
                id="exampleInputYearOfBirth"
                name="yearOfBirth"
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputIdCard" class="form-label">
                Giới tính
              </label>
              <div class="form-check form-check-inline">
                <Field
                  class="form-check-input"
                  type="radio"
                  name="gender"
                  id="inlineRadio1"
                  value="1"
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
            </div>
            <div class="mb-3">
              <label for="exampleInputNationality" class="form-label">
                Quốc tịch
              </label>
              <ErrorMessage
                name="nationality"
                component="span"
                className="err-name"
              />
              <Field
                type="text"
                class="form-control"
                id="exampleInputNationality"
                name="nationality"
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputCompany" class="form-label">
                Công ty làm việc
              </label>
              <Field
                type="text"
                class="form-control"
                id="exampleInputEmail"
                name="exampleInputCompany"
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputWorkingParts" class="form-label">
                Bộ phận làm việc
              </label>
              <Field
                type="text"
                class="form-control"
                id="exampleInputEmail"
                name="exampleInputWorkingParts"
              />
            </div>
            <div class="mb-3">
              <div class="form-check">
                <label class="form-check-label" for="flexCheckChecked">
                  Có thẻ bảo hiểm y tế
                </label>
                <Field
                  class="form-check-input"
                  type="checkbox"
                  value="1"
                  id="flexCheckChecked"
                  name="status"
                />
              </div>
            </div>
            <div class="mb-3">
              <label for="exampleInputProvince" class="form-label">
                Tỉnh thành
              </label>
              <ErrorMessage
                name="province"
                component="span"
                className="err-name"
              ></ErrorMessage>
              <Field
                type="text"
                class="form-control"
                id="exampleInputProvince"
                name="province"
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputDistrict" class="form-label">
                Quận /huyện
              </label>
              <ErrorMessage
                name="district"
                component="span"
                className="err-name"
              ></ErrorMessage>
              <Field
                type="text"
                class="form-control"
                id="exampleInputDistrict"
                name="district"
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputWard" class="form-label">
                Phường /xã
              </label>
              <ErrorMessage
                name="ward"
                component="span"
                className="err-name"
              ></ErrorMessage>
              <Field
                type="text"
                class="form-control"
                id="exampleInputWard"
                name="ward"
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputMessage" class="form-label">
                Số nhà, phố, tổ dân phố /thôn /đội
              </label>
              <ErrorMessage
                name="village"
                component="span"
                className="err-name"
              ></ErrorMessage>
              <Field
                component="textarea"
                type="text"
                class="form-control"
                id="exampleInputMessage"
                name="village"
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputPhone" class="form-label">
                Số điện thoại
              </label>
              <ErrorMessage
                name="phone"
                component="span"
                className="err-name"
              ></ErrorMessage>
              <Field
                type="text"
                class="form-control"
                id="exampleInputPhone"
                name="phone"
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputEmail" class="form-label">
                Email
              </label>
              <ErrorMessage
                name="email"
                component="span"
                className="err-name"
              ></ErrorMessage>
              <Field
                type="text"
                class="form-control"
                id="exampleInputEmail"
                name="email"
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

export default MedicalForm;