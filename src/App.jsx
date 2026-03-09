import React, { useState } from 'react';

import './App.css';
import Navbar from './components/navbar/navbar';
import Banner from './components/Banner/Banner';
import Service from './components/Services/Service';
import Contact from './components/Contact/Contact';
import BookingForm from './components/BookingForm/BookingForm';

const App = () => {
  const [currentView, setCurrentView] = useState('home');

  return (
    <div className="App">
      <Navbar 
        onHomeClick={() => setCurrentView('home')}
        onServiceClick={() => setCurrentView('services')}
        onContactClick={() => setCurrentView('contact')}
        onBookClick={() => setCurrentView('booking')}
      />
      {currentView === 'home' && <Banner />}
      {currentView === 'services' && <Service />}
      {currentView === 'contact' && <Contact />}
      {currentView === 'booking' && <BookingForm />}
    </div>
  );
};

export default App;