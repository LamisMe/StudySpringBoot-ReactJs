import React from "react";
import './main.css'
import { Link, NavLink } from "react-router-dom";

function Header(){
  return(
    <>
     <header>
      <nav
        class="navbar fixed-top navbar-expand-lg d-flex text-light" style={{backgroundColor:"#343a40"}}
      >
        <div class="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav" className="text-end">
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/"
                  >Trang chủ</Link
                >
              </li>
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/list-contract"
                  >Hợp đồng</Link
                >
              </li>
              <li class="nav-item">
              <Link class="nav-link active" aria-current="page" to="/list-customer"
                  >Khách hàng</Link
                >
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
    </>
  )
}

export default Header;