import {useEffect, useState} from "react";
import {Formik, Form, Field} from "formik";
import * as bookServices from "../services/BookServices";
import {useNavigate, useParams} from "react-router-dom";

export function BookUpdate(){
    const navigate = useNavigate();
    const[book,setBook] = useState();
    const {id} = useParams();
    useEffect(()=>{
      findById()
    },[]);
    const findById = async () => {
      let data = await bookServices.findById(id);
      console.log(data);
      setBook(data);
    }
    const updateBook = (values) =>{
        let isSuccess = bookServices.updateBook(values,book);
        if(isSuccess){
            navigate("/books");
        }
    }
    if(!book){
      return null;
    }
        return(
<>
<div className="container">
<h1>Update book</h1>
<Formik
initialValues={{...book}}
onSubmit={(values)=>{
    updateBook(values);
}}>
<Form>
<Field type="hidden" name="id" class="form-control" id="id" aria-describedby="emailHelp"/>
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
</div>
</>
        )
}