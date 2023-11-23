import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import CustomerCreate from "./components/customer/CustomerCreate";
import CustomerList from "./components/customer/CustomerList";
import CustomerUpdate from "./components/customer/CustomerUpdate";
import FuramaServiceList from "./components/service/FuramaServiceList";
import FuramaServiceCreate from "./components/service/FuramaServiceCreate";
import FuramaServiceUpdate from "./components/service/FuramaServiceUpdate";
import ContractList from "./components/contract/ContractList";
import ContractCreate from "./components/contract/ContractCreate";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/list-service" element={<FuramaServiceList/>} />
        <Route path="/create-service" element={<FuramaServiceCreate/>} />
        <Route path="/update-service" element={<FuramaServiceUpdate/>} />
        <Route path="/list-customer" element={<CustomerList/>} />
        <Route path="/create-customer" element={<CustomerCreate/>} />
        <Route path="/update-customer" element={<CustomerUpdate/>} />
        <Route path="/list-contract" element={<ContractList/>} />
        <Route path="/create-contract" element={<ContractCreate/>} />
      </Routes>
      <Footer />      
    </>
  );
}

export default App;
