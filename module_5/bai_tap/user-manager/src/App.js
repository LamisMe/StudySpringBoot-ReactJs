import { Route, Routes } from 'react-router-dom';
import './App.css';
import "react-toastify/dist/ReactToastify.css"
import UserList from './components/UsertList';
import { ToastContainer } from 'react-toastify';
function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<UserList/>}></Route>
    </Routes>
    <ToastContainer/>
    </>
  );
}

export default App;
