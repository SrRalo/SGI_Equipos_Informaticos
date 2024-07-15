import React from 'react';

const Navbar = () => {
  
  return (
    <nav className='navbar'>
        <a href="/">
        <img className='logo-link'
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/d1e6f2a7a497c173bef046bcf02d4e4f2e1eaa87849764b895623dd135fbd267?"
        />
        </a>

        <ul className='menu'>
        <li><a href="/dashboard" className='menu-link'>Dashboard</a></li>
        <li><a href="/buscar" className='menu-link'>Buscar</a></li>
        <li><a href="/crud" className='menu-link'>Administrar</a></li>
        <li><a href="/reportes" className='menu-link'>Emitir reportes</a></li>
        <li><a href="/" className='menu-link'>Cerrar sesión</a></li>

        </ul>
    </nav>
  )
}

export default Navbar;