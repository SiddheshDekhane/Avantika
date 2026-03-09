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
        'Bridal Makeup: ₹3000-5000',
        'Party Makeup: ₹1500-2500',
        'Daily Makeup: ₹500-1000',
        'Eye Makeup: ₹300-500'
      ]
    },
    {
      id: 2,
      name: 'Skin Care',
      description: 'Comprehensive skincare treatments',
      details: [
        'Facial: ₹800-1500',
        'Cleanup: ₹300-500',
        'Bleach: ₹400-700',
        'Threading: ₹100-200',
        'Skin Treatment: ₹1000-2000'
      ]
    },
    {
      id: 3,
      name: 'Hair Styles',
      description: 'Trendy and elegant hair styling',
      details: [
        'Bridal Hair Style: ₹1500-2500',
        'Party Style: ₹800-1500',
        'Regular Style: ₹300-800',
        'Hair Spa: ₹800-1500'
      ]
    },
    {
      id: 4,
      name: 'Hair Cuts',
      description: 'Professional haircuts for all ages',
      details: [
        'Women Hair Cut: ₹400-800',
        'Kids Hair Cut: ₹200-400',
        'Layer Cut: ₹600-1000',
        'Styling with Cut: ₹800-1500'
      ]
    },
    {
      id: 5,
      name: 'Nail Care',
      description: 'Nail art and care services',
      details: [
        'Manicure: ₹300-600',
        'Pedicure: ₹400-700',
        'Nail Art: ₹500-1000',
        'Gel Nails: ₹800-1500'
      ]
    },
    {
      id: 6,
      name: 'Hair Color',
      description: 'Professional hair coloring services',
      details: [
        'Full Color: ₹1500-3000',
        'Roots Touch-up: ₹1000-1500',
        'Highlights: ₹1500-2500',
        'Hair Treatment: ₹1000-2000'
      ]
    }
  ];

  return (
    <>
      <Banner />
      <div className="services-container">
        <h1>Our Services</h1>
        <p className="services-intro">Sarika Parlour offers a wide range of beauty and grooming services</p>
        <div className="service-options">
          {services.map((service) => (
            <div className="option-card" key={service.id}>
              <h3>{service.name}</h3>
              <p className="service-description">{service.description}</p>
              <div className="service-details">
                {service.details.map((detail, index) => (
                  <div key={index} className="detail-item">{detail}</div>
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