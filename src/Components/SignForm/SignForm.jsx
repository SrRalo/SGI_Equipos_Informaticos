import React, { useState } from 'react';
import './SignForm.css';
import { useNavigate } from 'react-router-dom';
import { MdEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { FaUser } from "react-icons/fa";

const SignForm = () => {
  const history = useNavigate();
  const [action, setAction] = useState('');
  const [registerData, setRegisterData] = useState({});

  const registerLink = () => {
    setAction(' active');
  };

  const loginLink = () => {
    setAction('');
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const nombres = document.getElementById('nombres').value;
    const email = document.getElementById('email').value;
    const contraseña = document.getElementById('contraseña').value;
    setRegisterData({ nombres, email, contraseña });
    localStorage.setItem('registerData', JSON.stringify({ nombres, email, contraseña }));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const email = document.querySelector('#login-form input[type="email"]').value;
    const contraseña = document.querySelector('#login-form input[type="password"]').value;
    const storedData = JSON.parse(localStorage.getItem('registerData'));
    if (storedData && storedData.email === email && storedData.contraseña === contraseña) {
      history.push('/Dashboard'); // Redirigir a la ruta /main
    } else {
      alert('Credenciales incorrectas');
    }
  };

  return (
    <div className={`wrapper${action}`}>
      <div className='form-box login'>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/d1e6f2a7a497c173bef046bcf02d4e4f2e1eaa87849764b895623dd135fbd267?"
          className="img"/>
        <form id='login-form' onSubmit={handleLogin}>
          <h1>Ingresar</h1>
          <div className='input-box'>
            <MdEmail className='icon' />
            <input type="email" placeholder='Correo' required/>
          </div>
          <div className='input-box'>
            <RiLockPasswordLine className='icon'/>
            <input type="password" placeholder='Contraseña' required/>
          </div>
          <button type='submit'>Ingresar</button>
          <div className='register-link'>
            <p>Aún no tienes una Cuenta?<a href="#" onClick={registerLink}> Registrarse</a></p>
          </div>
        </form>
      </div>
      <div className='form-box register'>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/d1e6f2a7a497c173bef046bcf02d4e4f2e1eaa87849764b895623dd135fbd267?"
          className="img"/>
        <form id='register-form' onSubmit={handleRegister}>
          <h1>Registro</h1>
          <div className='input-box'>
            <FaUser className='icon'/>
            <input type="text" id='nombres' placeholder='Nombres' required/>
          </div>
          <div className='input-box'>
            <MdEmail className='icon' />
            <input type="email" id='email' placeholder='Correo' required/>
          </div>
          <div className='input-box'>
            <RiLockPasswordLine className='icon'/>
            <input type="password" id='contraseña' placeholder='Contraseña' required/>
          </div>
          <button type='submit'>Registrarse</button>
          <div className='register-link'>
            <p>Ya tienes una Cuenta?<a href="#" onClick={loginLink}> Ingresar</a></p>
          </div>
        </form>
      </div>    
    </div>
  )
}

export default SignForm;




















































