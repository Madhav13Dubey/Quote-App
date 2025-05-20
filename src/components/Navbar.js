import React from 'react';
import './Navbar.css';

const Navbar = ({ onNavigate }) => {
  return (
    <nav className="navbar">
      <h2>📚 Quote Explorer</h2>
      <div className="nav-links">
        <button onClick={() => onNavigate('home')}>Home</button>
        <button onClick={() => onNavigate('authors')}>Authors</button>
        <button onClick={() => onNavigate('quotes')}>Quotes</button>
      </div>
    </nav>
  );
};

export default Navbar;
