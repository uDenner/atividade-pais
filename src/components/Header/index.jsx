import React from 'react';
import './style.css';
import logo from '../../assets/react.svg';

export default function Header() {
    return (
    <header className="main-header">
        <div className="header-container">
        <div className="logo-area">
            <img src={logo} alt="Logo" className="header-logo" />
            <h1>Nossos Heróis</h1>
        </div>
        <nav className="header-nav">
            <a href="#mae">Mãe</a>
            <a href="#pai">Pai</a>
            <a href="#galeria">Memórias</a>
        </nav>
        </div>
    </header>
    );
}