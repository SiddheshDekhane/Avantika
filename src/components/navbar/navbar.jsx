import React from 'react';
import './navbar.css';

function Navbar({ onHomeClick, onServiceClick, onContactClick, onBookClick }) {
  return (
    <nav>
      <div className="nav-brand">Sarika Parlour</div>
      <ul>
        <li onClick={onHomeClick}>Home</li>
        <li onClick={onServiceClick}>Services</li>
        <li onClick={onContactClick}>Contact Us</li>
        <li className="book-btn" onClick={onBookClick}>Book Appointment</li>
      </ul>
    </nav>
  );
}

export default Navbar;