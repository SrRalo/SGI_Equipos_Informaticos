import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from '../Dashboard/Dashboard';
import Crud from '../CRUD/Crud';
import Reportes from '../Reportes/Reportes';
import Navbar from '../Navbar/Navbar';
import Buscar from '../Busqueda/Search';


const Main = () => {

  return (
    <div>
        <Navbar/>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/buscar" element={<Buscar />} />
          <Route path="/crud" element={<Crud/>} item={2}/>
          <Route path="/reportes" element={<Reportes />} item={3} />
        </Routes>
    </BrowserRouter>
    
    </div>
  );
};

export default Main;
