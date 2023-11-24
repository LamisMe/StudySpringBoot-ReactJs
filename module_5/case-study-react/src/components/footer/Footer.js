import React from "react";
import './main.css'

function Footer(){
  return(
    <>
    <footer class="text-dark col-12 fw-bolder mt-3" style={{backgroundColor:"#f8f9fa"}}>
      <div class="content col col-4" scope="col" className="col-4" style={{marginLeft: "50px"}}>
        Adress: 103 - 105 Vo Nguyen Giap Street, Khue My Ward, Ngu Hanh Son
        District, Danang City, Vietnam
      </div>
      <div class="content text-content col col-4" style={{marginLeft: "50px"}}>Tel.: 84-236-3847 333/888 - Fax: 84-236-3847 666</div>
      <div class="content text-end fs-1 fw-bolder" style={{marginRight: "90px"}}>Furama Resort</div>
      <div class="content text-end fw-bolder fst-italic" style={{marginRight: "90px"}}>Niềm tin hãy đặt ở chúng tôi</div>
      <p>Furama@2018. All rights reserved.</p>
    </footer>
    </>
  )
}

export default Footer;