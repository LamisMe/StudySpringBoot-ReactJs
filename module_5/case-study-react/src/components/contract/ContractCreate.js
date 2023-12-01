import { Formik, Field, ErrorMessage, Form } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import * as contractService from "../../services/ContractService";
import { toast } from "react-toastify";
import * as customerService from "../../services/CustomerService";
import React, { useState, useEffect } from "react";

function ContractCreate() {
  const navigate = useNavigate();
  const [customers, setCustomers] = useState([]);
  useEffect(() => {
    getAll();
  }, []);

  const getAll = async () => {
    let res = await customerService.getAllCutomers();
    setCustomers(res);
  };
  if (!customers) {
    return null;
  }

  const initValue = {
    codeContract: "",
    totalPrice: "",
    customer: "",
    dateStart: "",
    dateEnd: "",
    pricePrevious: "",
    address: "",
    typeFacility: 1,
  };

  const validateForm = {
    codeContract: Yup.string().required("Không được để trống trường này *"),
    dateStart: Yup.date()
      .required("Không được để trống trường này *")
      .min(new Date(), "Không nhỏ hơn ngày hiện tại"),
    dateEnd: Yup.date()
      .required("Không được để trống trường này *")
      .min(Yup.ref('dateStart'), "Không nhỏ hơn ngày bắt đầu"),
    pricePrevious: Yup.string().required("Không được để trống trường này *"),
    totalPrice: Yup.string().required("Không được để trống trường này *"),
    address: Yup.string().required("Không được để trống trường này *"),
  };
  const createContract = (contract) => {
    contract.customer = JSON.parse(contract.customer);
    let isSuccess = contractService.saveContract(contract);
    if (isSuccess) {
      toast.success("Create successfully!!!!!");
      navigate("/list-contract");
    }
    console.log("fail");
  };

  return (
    <>
      <div class="container" style={{ marginTop: "6rem" }}>
        <h3 class="mt-3">Thêm hợp đồng</h3>
        <Formik
          initialValues={initValue}
          onSubmit={(values) => {
            createContract(values);
          }}
          validationSchema={Yup.object(validateForm)}
        >
          <Form>
            <div class="mb-3">
              <label for="name" class="form-label">
                Mã hợp đồng<span class="text-danger">(*)</span>
              </label>
              <Field
                type="text"
                name="codeContract"
                class="form-control"
                id="name"
              />
              <ErrorMessage
                name="codeContract"
                component="span"
                className="err-name"
              ></ErrorMessage>
            </div>
            <div class="mb-3">
              <label for="service" class="form-label">
                Khách hàng sử dụng dịch vụ<span class="text-danger">(*)</span>
              </label>
              <Field
                component="select"
                name="customer"
                class="form-control"
                id="service"
              >
                <option>Chọn</option>
                {customers.map((values) => (
                  <option key={values.id} value={JSON.stringify(values)}>
                    {values.name}
                  </option>
                ))}
              </Field>
              <ErrorMessage
                name="customer"
                component="span"
                className="err-name"
              ></ErrorMessage>
            </div>
            <div class="mb-3">
              <label for="typeCustomer" class="form-label">
                Loại dịch vụ<span style={{ color: "red" }}>(*)</span>
              </label>
              <Field
                name="typeFacility"
                class="form-select"
                component="select"
                aria-label="Default select example"
              >
                <option selected="">Chọn loại dịch vụ</option>
                <option value="1">Villa</option>
                <option value="2">House</option>
                <option value="3">Room</option>
              </Field>
              <ErrorMessage
                name="typeFacility"
                component="span"
                className="err-name"
              ></ErrorMessage>
            </div>
            <div class="mb-3">
              <label for="dateStart" class="form-label">
                Ngày bắt đầu<span class="text-danger">(*)</span>
              </label>
              <Field
                type="date"
                name="dateStart"
                class="form-control"
                id="dateStart"
              />
              <ErrorMessage
                name="dateStart"
                component="span"
                className="err-name"
              ></ErrorMessage>
            </div>
            <div class="mb-3">
              <label for="date" class="form-label">
                Ngày kết thúc<span class="text-danger">(*)</span>
              </label>
              <Field
                type="date"
                name="dateEnd"
                class="form-control"
                id="date"
              />
              <ErrorMessage
                name="dateEnd"
                component="span"
                className="err-name"
              ></ErrorMessage>
            </div>
            <div class="mb-3">
              <label for="inputPricePrevious" class="form-label">
                Số tiền cọc trước<span class="text-danger">(*)</span>
              </label>
              <Field
                type="text"
                name="pricePrevious"
                class="form-control"
                id="inputPricePrevious"
              />
              <ErrorMessage
                name="pricePrevious"
                component="span"
                className="err-name"
              ></ErrorMessage>
            </div>
            <div class="mb-3">
              <label for="totalPrice" class="form-label">
                Tổng số tiền thanh toán<span class="text-danger">(*)</span>
              </label>
              <Field
                type="text"
                name="totalPrice"
                class="form-control"
                id="totalPrice"
              />
              <ErrorMessage
                name="totalPrice"
                component="span"
                className="err-name"
              ></ErrorMessage>
            </div>
            <div class="mb-3">
              <label for="inputAddress" class="form-label">
                Địa chỉ<span class="text-danger">(*)</span>
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
  );
}

export default ContractCreate;
