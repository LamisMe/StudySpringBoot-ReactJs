import { useEffect, useState } from "react";
import * as bookServices from "../services/BookServices";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

export function BookList() {
  const [books, setBooks] = useState([]);
  const [bookDelete, setBookDelete] = useState([]);
  useEffect(() => {
    getAll();
  }, []);
  const getAll = async () => {
    let data = await bookServices.getAll();
    setBooks(data);
  };
  const handlerBook = (book) => {
    setBookDelete(book);
  };
  const deleteBook = async () => {
    const isSuccess = await bookServices.deleteBook(bookDelete.id);
    if (isSuccess) {
      toast.error("Delete successfully!!!!!");
      getAll();
    }
  };
  if (!books) {
    return null;
  }
  return (
    <>
      <div className="container">
        <h3>Library</h3>
        <div className="text-end">
          <Link
            className="btn btn-sm btn-success rounded-0 mb-3"
            type="button"
            to="/create"
          >
            Add a new book
          </Link>
        </div>
        <table class="table">
          <thead class="table-dark">
            <tr>
              <th scope="col" className="col-6">
                Title
              </th>
              <th scope="col" className="col-3">
                Quantity
              </th>
              <th scope="col" className="col-3">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {books.map((item) => (
              <tr key={item.id}>
                <td>{item.title}</td>
                <td>{item.quantity}</td>
                <td>
                  <Link
                    className="btn btn-sm btn-primary rounded-0 me-3"
                    type="button"
                    to={`/update/${item.id}`}
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    className="btn btn-sm btn-danger rounded-0"
                    onClick={() => handlerBook(item)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content text-center">
              <div className="modal-header justify-content-center">
                <div>
                  <h1
                    className="modal-title text-danger fs-4"
                    id="exampleModalLabel"
                  >
                    DELETE BOOK
                  </h1>
                  <h5 className="modal-title text-danger fw-bold">
                    {bookDelete.title}
                  </h5>
                </div>
              </div>
              <div className="modal-body">
                <h5>Are you sure you want to delete book?</h5>
                This action cannot be undone!
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-sm btn-secondary rounded-0"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-sm btn-danger rounded-0"
                  data-bs-dismiss="modal"
                  onClick={deleteBook}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
