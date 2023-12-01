import logo from './logo.svg';
import './App.css';
import {Route, Routes} from"react-router-dom";
import { BlogList } from './components/BlogList';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { BlogCreate } from './components/BlogCreate';

function App() {
  return (
    <>
    <Routes>
       <Route path='/' element={<BlogList/>}></Route>
       <Route path='/create' element={<BlogCreate/>}></Route>
    </Routes>
    <ToastContainer/>
    </>
  );
}

export default App;
