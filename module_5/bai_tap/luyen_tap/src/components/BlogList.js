import { useEffect, useState } from "react";
import * as blogService from "../services/BlogService";
import {toast} from "react-toastify";
import { Link } from "react-router-dom";
export function BlogList() {
  const [blogs, setBlogs] = useState([]);
  const [blogDelete, setBlogDelete] = useState([]);
  const [find,setFind] =useState( {
        title: "",
        dayStart: 0,
        dayEnd: 0
  })
  useEffect(()=>{
        getAll();
  },[]);
  const getAll = async () =>{
    let res = await blogService.getAll();
    setBlogs(res);
  }
  const handlerDelete = (value) =>{
    setBlogDelete(value);
  }
  const deleteBlog = async () =>{
    let isSuccess = await blogService.deleteBlog(blogDelete.id);
    if(isSuccess){
        toast.error("Delete successfully!!!!!");
        getAll();
    }
  }
  const handlerDateEnd = (event) =>{
    setFind({
        ...find,
        dayEnd: event
    })
  }
  const handlerDateStart = (event) =>{
    setFind({
        ...find,
        dayStart: event
    })
  }
  const handlerTitle = (event) =>{
    setFind({
        ...find,
        title: event
    })
  }
  const findByTitle = async () =>{
    if(find.dayEnd === 0|| find.dayStart === 0){
        let res = await blogService.findByTitle(find.title);
        console.log(find);
        setBlogs(res);
    }else{
        let res = await blogService.findByTitleAndDay(find.title,find.dayStart,find.dayEnd);
        console.log(find);
        setBlogs(res);
    }
    
  }
  if(!blogs) return null;
  return (
    blogs &&(
        <>
      <div class="container-fluid mt-3">
        <h1 class="fst-italic text-center text-dark-50 pt-3">DANH SÁCH</h1>
        <div class="text-lg-end mb-3">
          <button
            type="button"
            class="btn btn-secondary me-lg-3 fst-italic"
            data-bs-toggle="modal"
            data-bs-target="#exampleModalSearch"
          >
            Bộ lọc tìm kiếm
          </button>

         
            <Link to="/create" class="btn btn-primary fst-italic">Thêm Mới Sản Phẩm</Link>
          
        </div>
        <table class="table">
          <thead class="table-secondary fst-italic">
            <tr>
              <th>STT</th>
              <th>Tiêu đề</th>
              <th>Ngày</th>
              <th>Tác giả</th>
              <th>Thể loại</th>
              <th>Chức năng</th>
            </tr>
          </thead>
          <tbody>
            { blogs.length !==0 ?
            blogs.map((item,index)=>(
                <tr key={item.id} className="fst-italic">
              <td>{index+1}</td>
              <td>{item.title}</td>
              <td>{item.day}</td>
              <td>{item.author}</td>
              <td>{item.type.name}</td>
              <td>
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
             )) : ( <tr>
                <td className="text-center"></td>
             <td className="text-center"></td>
             <td className="text-end">No data</td>
             <td className="text-center"></td>
             <td className="text-center"></td>
                </tr>)}
           
          </tbody>
        </table>
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
              <h5 class="fst-italic">Bạn có chắc chắn muốn xóa "{blogDelete.title}" không ?</h5>
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
                onClick={deleteBlog}
              >
                Xóa
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        class="modal fade"
        id="exampleModalSearch"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1
                class="modal-title fs-5 fst-italic text-primary"
                id="exampleModalLabel"
              >
                Nhập thông tin cần tìm
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div class="col-auto mt-2">
                <label for="inputNameSearch" class="visually">
                  <strong class="text-secondary">Nhập tên tìm kiếm</strong>
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="inputNameSearch"
                  placeholder="Nhập tên tìm kiếm"
                  onChange={(event) => handlerTitle(event.target.value)}
                />
              </div>
              <div class="col-auto mt-2">
                <label for="inputDateStart" class="visually">
                  <strong class="text-secondary">Ngày bắt đầu</strong>
                </label>
                <input type="date" class="form-control" 
                onChange={(event)=> handlerDateStart(event.target.value)}/>
              </div>
              <div class="col-auto mt-2">
                <label for="inputDateStart fw-bold" class="visually">
                  <strong class="text-secondary">Ngày kết thúc</strong>
                </label>
                <input
                  type="date"
                  class="form-control"
                  id="inputDateStart"
                  placeholder="Password"
                  onChange={(event)=> handlerDateEnd(event.target.value)}
                />
              </div>
              <div class="col-auto mt-4 text-end me-lg-3">
                <button
                  type="submit"
                  class="btn btn-primary mb-3 fst-italic"
                  data-bs-dismiss="modal"
                  onClick={findByTitle}
                >
                  Tìm kiếm
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      </>
  ))
}
