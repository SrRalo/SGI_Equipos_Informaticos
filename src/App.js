import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import SignForm from './Components/SignForm/SignForm';
import Dashboard from './Components/Dashboard/Dashboard';
import Crud from './Components/CRUD/Crud';
import Reportes from './Components/Reportes/Reportes';
import Navbar from './Components/Navbar/Navbar';
import Buscar from './Components/Busqueda/Search';

function App() {
  return (
    <div>
      <Navbar/>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignForm/>} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/buscar" element={<Buscar />} />
          <Route path="/crud" element={<Crud/>} item={2}/>
          <Route path="/reportes" element={<Reportes />} item={3} />
        </Routes>
    </BrowserRouter>
    
    </div>
  );
}

export default App;