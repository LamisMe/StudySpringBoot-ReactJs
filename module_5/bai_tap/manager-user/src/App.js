import { Route, Routes } from 'react-router-dom';
import './App.css';
import "react-toastify/dist/ReactToastify.css"
import UserList from './components/UsertList';
import UserCreate from './components/UserCreate';
import UserUpdate from './components/UserUpdate';
import { ToastContainer } from 'react-toastify';
function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<UserList/>}></Route>
      <Route path='/create' element={<UserCreate/>}></Route>
      <Route path='/update' element={<UserUpdate/>}></Route>
    </Routes>
    <ToastContainer/>
    </>
  );
}

export default App;
