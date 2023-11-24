import React from "react";
import './main.css'
import { Link, NavLink } from "react-router-dom";

function Header(){
  return(
    <>
    <nav class="navbar navbar-expand-lg navbar-light text-light fixed-top" style={{backgroundColor: "#20c997"}}>
  <div class="container-fluid">
    <Link class="navbar-brand text-light fst-italic fw-bold" to="/">Furama Resort</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
        <li class="nav-item">
          <NavLink class="nav-link" aria-current="page" to="/">Trang chủ</NavLink>
        </li>
        <li class="nav-item">
          <NavLink class="nav-link" aria-current="page" to="/list-customer">Khách hàng</NavLink>
        </li>
        <li class="nav-item">
          <NavLink class="nav-link" aria-current="page" to="/list-contract">Hợp đồng</NavLink>
        </li>
        <li class="nav-item">
          <NavLink class="nav-link" aria-current="page" to="/list-service">Dịch vụ</NavLink>
        </li>
      </ul>
      <span class="navbar-text text-light fw-bold" style={{marginRight: "10px"}}>
        Đăng Nhập
      </span>
    </div>
  </div>
</nav>

    </>
  )
}

export default Header;