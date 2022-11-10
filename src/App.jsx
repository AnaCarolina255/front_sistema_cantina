import React from 'react';
import Home from './pages/Home';
import './App.css';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import Cart from './pages/Cart'
import Cadastro from './pages/CadProd/Components/Cadastro'
import CadFuncionario from './pages/CadFunc/Components/CadFuncionario';
import ListaFuncionarios from './pages/ListaCliente/component/listas/ListaFuncionarios';
import ListPrazo from './pages/CompPrazo/Components/ListPrazo';
import ListaReserva from './pages/ListaReserva/Components/ListReservas'

const App = () => {
  return (
    <div className='container'>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/cart' element={<Cart/>} />
          <Route exact path='/cadProd' element={<Cadastro/>}/>
          <Route exact path='/cadFunc' element={<CadFuncionario/>}/>
          <Route exact path='/listaCliente' element={<ListaFuncionarios/>}/>
          <Route exact path='/listaPrazo' element={<ListPrazo/>}/>
          <Route exact path='/listaReserva' element={<ListaReserva/>}/>
          <Route path="*" element={<Navigate to="/" repleace />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
