import React from 'react';
import Banner from '../Banner/Banner';
import './Service.css';

const Service = () => {
  const services = [
    {
      id: 1,
      name: 'Makeup',
      description: 'Professional makeup services for all occasions',
      details: [
        'HD Makeup: ₹5000',
        '3D Makeup: ₹5000',
        'Party Makeup: ₹2000',
        'Traditional Makeup: ₹1500',
        'Western Makeup: ₹2000',
        'Bridal Makeup: Price on consultation'
      ]
    },
    {
      id: 2,
      name: 'Skin Care',
      description: 'Complete skincare treatments for glowing skin',
      details: [
        'Facial: ₹350',
        'Cleanup: ₹250',
        'Pimple Treatment: ₹500'
      ]
    },
    {
      id: 3,
      name: 'Hair Treatment',
      description: 'Professional hair care and treatment services',
      details: [
        'Hair Smoothing',
        'Keratin Treatment',
        'Hair Spa',
        'Hair Oil Massage',
        'Dandruff Treatment'
      ]
    },
    {
      id: 4,
      name: 'Haircut',
      description: 'Modern and stylish haircuts',
      details: [
        'Butterfly Cut',
        'Long Hair Cut',
        'Short Layer Cut',
        'Feather Cut',
        'Blunt Cut',
        'Layer Bob',
        'Pixie Cut',
        'Step Cut'
      ]
    },
    {
      id: 5,
      name: 'Baby Haircut',
      description: 'Special haircuts for kids',
      details: [
        'Round Cut',
        'Mushroom Cut',
        'Apple Cut',
        'Baby Boy Cut'
      ]
    },
    {
      id: 6,
      name: 'Hair Colour & Highlights',
      description: 'Professional hair coloring services',
      details: [
        'Hair Colour',
        'Hair Highlights'
      ]
    }
  ];

  return (
    <>
      <Banner />
      <div className="services-container">
        <h1>Our Services</h1>
        <p className="services-intro">
      Avantika Parlour offers a wide range of beauty and grooming services
        </p>

        <div className="service-options">
          {services.map((service) => (
            <div className="option-card" key={service.id}>
              <h3>{service.name}</h3>
              <p className="service-description">{service.description}</p>

              <div className="service-details">
                {service.details.map((detail, index) => (
                  <div key={index} className="detail-item">
                    {detail}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Service;