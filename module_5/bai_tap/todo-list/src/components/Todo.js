import { useEffect, useState } from "react";
import * as todoService from "../services/TodoService";
import yup from "yup";
import {Formik,Form, Field} from "formik";

export function Todo() {
  const [todos, setTodos] = useState([]);
  const initValue = {
        name: ""
  };

  const createTodo = async (values) =>{
    let isSuccess = await todoService.saveToDo(values);
    if(isSuccess){
        getAll();
    }
  }
  useEffect(() => {
    getAll();
  }, []);
  const getAll = async () => {
    let data = await todoService.getAll();
    setTodos(data);
  };
  if (!todos) {
    return null;
  }
  return (
    <>
      <h1>Todo List</h1>
      <Formik
      initialValues={initValue}
      onSubmit={(values) => {
        createTodo(values)
      }}>
        <Form>
            <Field type="text" id="name" name="name" />
        <button type='submit' >Submit</button>
        </Form>       
      </Formik>
      <ul>
        {todos.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </>
  );
}
