import logo from './logo.svg';
import './App.css';
import Product from './Component/Product';
import Navbar from './Component/Navbar';
import {Provider}from 'react-redux';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Product />
    </div>
  );
}

export default App;
