import { Link, useNavigate, useParams } from "react-router-dom";
import { Form, Formik, ErrorMessage, Field } from "formik";
import * as Yup from "yup";
import * as bookingService from "../services/BookingServices";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import * as productService from "../services/ProductServices";

export function BookingUpdate() {
  const [products, setProducts] = useState([]);
  const [booking, setBooking] = useState();
  const { id } = useParams();
  const navigate = useNavigate();

  
  useEffect(() => {
    findById();
    getAllProduct();
  }, []);

  const findById = async () => {
    let data = await bookingService.findById(id);
    setBooking(data);
  };

  const currentDay = new Date();
  const initValidate = {
    codeOrder: Yup.string().required("Không được để trống trường này"),
    buyDate: Yup.date()
      .required("Không được để trống trường này")
      .max(currentDay, "Không nhập lớn hơn ngày hiện tại"),
    totalPrice: Yup.number()
      .required("Không được để trống trường này")
      .min(1000, "Không được nhập dưới 1000"),
    quantity: Yup.number()
      .required("Không được để trống trường này")
      .min(1, "Không được nhập số bé hoặc bằng 0"),
  };

  const updateBooking = async (booking) => {
    booking.productEntity = JSON.parse(booking.productEntity);
    let isSuccess = await bookingService.editBooking(booking);
    if (isSuccess) {
      toast.success("Cập nhật đơn hàng thành công!!!");
      navigate("/");
    }
  };

  const getAllProduct = async () => {
    let data = await productService.getAllProduct();
    setProducts(data);
  };
  if (!booking) return null;
  if (!products) return null;
  return (
    <>
      <div class="container mt-3 w-50 form-control rounded-4">
        <h1 class="fst-italic text-center pt-3">Cập Nhật</h1>
        <Formik
          initialValues={{...booking}}
          onSubmit={(values) => {
            updateBooking(values);
          }}
          validationSchema={Yup.object(initValidate)}
        >
          <Form>
            <div class="mb-3">
              <label for="inputName" class="form-label fw-bold fst-italic">
                Mã Sản Phẩm <span class="text-danger">(*)</span>
              </label>
              <Field
                name="codeOrder"
                type="text"
                class="form-control"
                id="inputName"
                aria-describedby="emailHelp"
              />
              <ErrorMessage
                component="span"
                className="text-danger"
                name="codeOrder"
              ></ErrorMessage>
            </div>
            <div class="mb-3">
              <label for="inputDate" class="form-label fw-bold fst-italic">
                Ngày Mua <span class="text-danger">(*)</span>
              </label>
              <Field
                name="buyDate"
                type="date"
                class="form-control"
                id="inputDate"
              />
              <ErrorMessage
                component="span"
                className="text-danger"
                name="buyDate"
              ></ErrorMessage>
            </div>
            <div class="mb-3">
              <label for="inputTotal" class="form-label fw-bold fst-italic">
                Tổng Tiền <span class="text-danger">(*)</span>
              </label>
              <Field
                name="totalPrice"
                type="number"
                class="form-control"
                id="inputTotal"
              />
              <ErrorMessage
                component="span"
                className="text-danger"
                name="totalPrice"
              ></ErrorMessage>
            </div>
            <div class="mb-3">
              <label for="inputQuantity" class="form-label fw-bold fst-italic">
                Số Lượng<span class="text-danger">(*)</span>
              </label>
              <Field
                name="quantity"
                type="number"
                class="form-control"
                id="inputQuantity"
              />
              <ErrorMessage
                component="span"
                className="text-danger"
                name="quantity"
              ></ErrorMessage>
            </div>

            <div class="mb-3 mt-2">
              <label for="inputProduct" class="form-label fw-bold fst-italic">
                Sản phẩm <span class="text-danger">(*)</span>
              </label>
              <Field
                name="productEntity"
                as="select"
                class="form-select"
                aria-label="Default select example"
              >
                {products.map((item) => (
                  <option key={item.id} value={JSON.stringify(item)}>
                    {item.name}
                  </option>
                ))}
              </Field>
            </div>

            <div class="text-end mt-3">
              <Link to="/" className="btn btn-secondary fst-italic">
                Quay lại
              </Link>
              <button type="submit" class="btn btn-success fst-italic ms-3">
                Xác nhận
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </>
  );
}
