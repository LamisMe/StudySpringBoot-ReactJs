import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div class="banner">
        <div
          id="carouselExampleSlidesOnly"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                src="https://furamavietnam.com/wp-content/uploads/2018/07/Vietnam_Danang_Furama_Resort_Exterior-Furama-girl-with-pink-hat.jpg"
                class="d-block w-100"
                alt="..."
              />
            </div>
            <div class="carousel-item">
              <img
                src="https://furamavietnam.com/wp-content/uploads/2019/07/Vietnam_Danang_Furama_Resort_Exterior_Ocean-Pool-6.jpg"
                class="d-block w-100"
                alt="..."
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-3">
        <h1 className="text-center fw-bolder fst-italic mb-3">
          Danh sách Villa nổi bật
        </h1>
        <div className="row">
          <div className="col-4">
            <div class="card" style={{ width: "18rem" }}>
              <img
                src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/128146406.jpg?k=e578a6304e65af63e07b2b1b661f74ddd074d8c0c31e13a09fda113f194762ae&o=&hp=1"
                class="card-img-top"
                style={{
                  width: "286pxs",
                  height: "196.625px",
                  objectFit: "cover",
                }}
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">Studio Suite with Ocean View</h5>
                <p class="card-text fst-italic">1 extra-large double bedor2 single beds</p>
                <div className="text-end">
                  <Link to="/create-contract" class="btn btn-primary fst-italic">
                    Ký hợp đồng
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div class="card" style={{ width: "18rem" }}>
              <img
                src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/496537448.jpg?k=a4e8f80d7c4f1722d26cc3557fe5ad07ba1e2342740624d050bf444f671b25f3&o=&hp=1"
                style={{
                  width: "286pxs",
                  height: "196.625px",
                  objectFit: "cover",
                }}
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">
                  Deluxe Double or Twin Room with Garden View
                </h5>
                <p class="card-text fst-italic">1 extra-large double bedor2 single beds</p>
                <div className="text-end fst-italic">
                  <Link to="/create-contract" class="btn btn-primary fst-italic">
                    Ký hợp đồng
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div class="card" style={{ width: "18rem" }}>
              <img
                src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/160407105.jpg?k=9db3214928c5013d29fe7e34e8f741c0e52c6907960385cfa045a766ee6f8731&o=&hp=1"
                class="card-img-top"
                style={{
                  width: "286pxs",
                  height: "196.625px",
                  objectFit: "cover",
                }}
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">
                  Three-Bedroom Pool Villa with Breakfast
                </h5>
                <p class="card-text fst-italic">
                  Bedroom 1:2 single beds Bedroom 2:1 extra-large double bed
                </p>
                <div className="text-end">
                  <Link to="/create-contract" class="btn btn-primary fst-italic">
                    Ký hợp đồng
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;