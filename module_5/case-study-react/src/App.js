import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import CustomerCreate from './components/customer/CustomerCreate';
import CustomerList from './components/customer/CustomerList';
import CustomerUpdate from './components/customer/CustomerUpdate';
import FuramaServiceList from './components/service/FuramaServiceList';
import FuramaServiceCreate from './components/service/FuramaServiceCreate';
import FuramaServiceUpdate from './components/service/FuramaServiceUpdate';
import ContractList from './components/contract/ContractList';
import ContractCreate from './components/contract/ContractCreate';

function App() {
  return (
    <>
    <Header />
    {/* <CustomerCreate/> */}
    {/* < CustomerList /> */}
    {/* < CustomerUpdate /> */}
    {/* <FuramaServiceList/>
    <FuramaServiceCreate/> */}
    {/* <FuramaServiceUpdate/> */}
    {/* < ContractCreate /> */}
    < ContractList />
    < Footer/>
    </>
  );
}

export default App;
