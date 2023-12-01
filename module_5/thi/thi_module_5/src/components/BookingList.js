import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as bookingSevices from "../services/BookingServices";
import { toast } from "react-toastify";

export function BookingList() {
  const [bookings, setBookings] = useState([]);
  const [bookingDelete, setBookingdelete] = useState([]);
  useEffect(() => {
    getAllBooking();

  }, []);
 
  const getAllBooking = async () => {
    let data = await bookingSevices.getAllBooking();
    setBookings(data);
  };

  const handlerDelete = (value) =>{
        setBookingdelete(value);
        console.log(value);
  };

  const deleteBooking = async() =>{
    let isSuccess = await bookingSevices.deleteBooking(bookingDelete.id);
    if(isSuccess){
        toast.success("Xóa thành công !!!!")
        getAllBooking();
    }
  }
  if (!bookings) return null;
  return (
    <>
      <div class="container-fluid mt-3">
        <h1 class="fst-italic text-center text-dark-50 pt-3">DANH SÁCH</h1>
        <div class="text-lg-end mb-3">

          <Link to="/create" className="btn btn-success me-lg-3 fst-italic">
            Thêm Mới Sản Phẩm
          </Link>
        </div>
        <table class="table">
          <thead class="table-secondary fst-italic">
            <tr>
              <th>STT</th>
              <th>Mã đơn hàng</th>
              <th>Giá(USD)</th>
              <th>Ngày Mua</th>
              <th>Sản Phẩm</th>
              <th>Chức năng</th>
            </tr>
          </thead>
          <tbody>
            { bookings.length !==0 ?
            bookings.map((item, index) => (
              <tr key={item.id}>
                <td>{index+1}</td>
                <td>{item.codeOrder}</td>
                <td>{item.totalPrice}</td>
                <td>{item.buyDate}</td>
                <td>{item.productEntity.name}</td>
                <td>
                <Link
                    className="btn btn-sm btn-primary rounded-0 me-3"
                    type="button"
                    to={`/update/${item.id}`}
                  >
                    <i class='bx bx-edit bx-sm'></i>
                  </Link>
                  <button
                    type="button"
                    class="btn btn-danger"
                    data-bs-toggle="modal"
                    data-bs-target="#modalDelete"
                    onClick={() => handlerDelete(item)}
                  >
                    <i class="bx bxs-trash-alt"></i>
                  </button>
                </td>
              </tr>
            )) :(<tr>
                <td></td>
                <td></td>
                <td></td>
                <td>No Data</td>
                <td></td>
                <td></td>
            </tr>)}
          </tbody>
        </table>
      </div>

      <div
        class="modal fade"
        id="modalDelete"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5
                class="modal-title fst-italic text-danger"
                id="staticBackdropLabel"
              >
                Xóa Sản Phẩm
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <h5 class="fst-italic">Bạn có chắc chắn muốn xóa đơn hàng "{bookingDelete.codeOrder}" không ?</h5>
              <p class="text-danger">Lưu ý: Hành dộng này không thể hoàn tác</p>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Đóng
              </button>
              <button
                type="button"
                class="btn btn-danger"
                data-bs-dismiss="modal"
                onClick={deleteBooking}
              >
                Xóa
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
