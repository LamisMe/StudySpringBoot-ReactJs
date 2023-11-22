import {useEffect, useState} from "react";
import {Formik, Form, Field} from "formik";
import * as bookServices from "../services/BookServices";
import {useNavigate} from "react-router-dom";


export function BookUpdate(){
    const navigate = useNavigate();
    const initValue = {
        title : "",
        quantity: 0
    }
    const updateBook = (book) =>{
        let isSuccess = bookServices.updateBook(book.id);
        if(isSuccess){
            navigate("/books");
        }
    }
        return(
<>
<h1>Update book</h1>
<Formik
initialValues={initValue}
onSubmit={(book)=>{
    updateBook(book);
}}>
<Form>
<Field type="hidden" name="id" class="form-control" id="exampleInputTitle" aria-describedby="emailHelp"/>
  <div class="mb-3">
    <label for="exampleInputTitle" class="form-label">Title</label>
    <Field type="text" name="title" class="form-control" id="exampleInputTitle" aria-describedby="emailHelp"/>
  </div>
  <div class="mb-3">
    <label for="exampleInputQuantity" class="form-label">Quantity</label>
    <Field type="number" name="quantity" class="form-control" id="exampleInputQuantity"/>
  </div>
  <button type="submit" class="btn btn-success">Save</button>
</Form>
</Formik>

</>
        )
}