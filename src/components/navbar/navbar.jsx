import React from 'react';
import './navbar.css';

function Navbar({  onServiceClick, onContactClick, onBookClick }) {
  return (
    <nav>
      <div className="nav-brand">Avantika Parlour</div>
      <ul>
       
        <li onClick={onServiceClick}>Services</li>
        <li onClick={onContactClick}>Contact Us</li>
        <li className="book-btn" onClick={onBookClick}>Book Appointment</li>
      </ul>
    </nav>
  );
}

export default Navbar;