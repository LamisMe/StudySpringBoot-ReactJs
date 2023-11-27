import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import CustomerCreate from "./components/customer/CustomerCreate";
import CustomerList from "./components/customer/CustomerList";
import CustomerUpdate from "./components/customer/CustomerUpdate";
import FuramaServiceList from "./components/facility/FuramaServiceList";
import FuramaServiceCreate from "./components/facility/FuramaServiceCreate";
import FuramaServiceUpdate from "./components/facility/FuramaServiceUpdate";
import ContractList from "./components/contract/ContractList";
import ContractCreate from "./components/contract/ContractCreate";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import ContractUpdate from "./components/contract/ContractUpdate";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/list-service" element={<FuramaServiceList/>} />
        <Route path="/create-service" element={<FuramaServiceCreate/>} />
        <Route path="/update-service/:id" element={<FuramaServiceUpdate/>} />
        <Route path="/list-customer" element={<CustomerList/>} />
        <Route path="/create-customer" element={<CustomerCreate/>} />
        <Route path="/update-customer/:id" element={<CustomerUpdate/>} />
        <Route path="/list-contract" element={<ContractList/>} />
        <Route path="/create-contract" element={<ContractCreate/>} />
        <Route path="/update-contract/:id" element={<ContractUpdate/>} />
      </Routes>
      <Footer /> 
      <ToastContainer/>     
    </>
  );
}

export default App;
