import './App.css';
import {Routes,Route} from "react-router-dom";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BookingList } from './components/BookingList';
import { BookingCreate } from './components/BookingCreate';
import { BookingUpdate } from './components/BookingUpdate';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<BookingList/>}></Route>
      <Route path='/create' element={<BookingCreate/>}></Route>
      <Route path='/update/:id' element={<BookingUpdate/>}></Route>
    </Routes>
    <ToastContainer/>
    </>
  );
}

export default App;
