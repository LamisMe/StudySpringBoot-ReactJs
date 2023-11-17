import React from "react";
import './main.css'

function Header(){
  return(
    <>
     <header>
      <nav
        class="navbar fixed-top navbar-expand-lg navbar-light d-flex bg-light text-black"
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
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#"
                  >GIỚI THIỆU</a
                >
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#"
                  >LOẠI PHÒNG</a
                >
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="#">ẨM THỰC</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="#">HỘI NGHỊ VÀ SỰ KIỆN</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="#">TIỆC CƯỚI</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="#">SPA</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="#">GIẢI TRÍ</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="#">ĐIỂM ĐẾN</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="#">ƯU ĐÃI</a>
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