import React, { useState } from 'react';
import './BookingForm.css';
import { sendWhatsAppMessage } from '../../utils/whatsappService';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Makeup',
    date: '',
    time: '',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const services = [
    'Makeup',
    'Skin Care',
    'Hair Styles',
    'Hair Cuts',
    'Nail Care',
    'Hair Color'
  ];

  const timeSlots = [
    '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
    '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM',
    '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM',
    '4:00 PM', '4:30 PM', '5:00 PM', '5:30 PM',
    '6:00 PM', '6:30 PM', '7:00 PM', '7:30 PM'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!formData.name || !formData.phone || !formData.date || !formData.time) {
      alert('Please fill in all required fields');
      return;
    }

    if (formData.phone.length < 10) {
      alert('Please enter a valid phone number');
      return;
    }

    setLoading(true);

    // Simulate API call
    setTimeout(() => {
      try {
        // Send WhatsApp messages
        const whatsappService = sendWhatsAppMessage(formData);
        whatsappService.sendBoth();

        // Show success message
        setSubmitted(true);
        setLoading(false);

        // Reset form after 3 seconds
        setTimeout(() => {
          setFormData({
            name: '',
            phone: '',
            email: '',
            service: 'Makeup',
            date: '',
            time: '',
            notes: ''
          });
          setSubmitted(false);
        }, 3000);
      } catch (error) {
        console.error('Error submitting booking:', error);
        alert('Error submitting booking. Please try again.');
        setLoading(false);
      }
    }, 1000);
  };

  // Get minimum date (today)
  const today = new Date().toISOString().split('T')[0];

  return (
    <div className="booking-container">
      <div className="booking-header">
        <h1>Book Your Appointment</h1>
        <p>Reserve your spot at Sarika Parlour</p>
      </div>

      <div className="booking-content">
        {submitted && (
          <div className="success-message">
            <div className="success-icon">✓</div>
            <h2>Booking Confirmed!</h2>
            <p>Thank you, {formData.name}!</p>
            <p>Check your WhatsApp at <strong>{formData.phone}</strong> for confirmation.</p>
            <p>Our team will contact you shortly to confirm your appointment.</p>
          </div>
        )}

        {!submitted && (
          <form onSubmit={handleSubmit} className="booking-form">
            <div className="form-section">
              <h2>Your Details</h2>

              <div className="form-group">
                <label htmlFor="name">
                  Full Name <span className="required">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">
                  Phone Number <span className="required">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your 10-digit phone number"
                  required
                  maxLength="10"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email (Optional)</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email address"
                />
              </div>
            </div>

            <div className="form-section">
              <h2>Appointment Details</h2>

              <div className="form-group">
                <label htmlFor="service">
                  Service <span className="required">*</span>
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                >
                  {services.map(service => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="date">
                    Preferred Date <span className="required">*</span>
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    min={today}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="time">
                    Preferred Time <span className="required">*</span>
                  </label>
                  <select
                    id="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select time</option>
                    {timeSlots.map(slot => (
                      <option key={slot} value={slot}>
                        {slot}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <div className="form-section">
              <div className="form-group">
                <label htmlFor="notes">
                  Additional Notes
                </label>
                <textarea
                  id="notes"
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  placeholder="Any special requests or notes?"
                  rows="4"
                ></textarea>
              </div>
            </div>

            <button
              type="submit"
              className="submit-btn"
              disabled={loading}
            >
              {loading ? 'Processing...' : 'Confirm Booking & Send WhatsApp'}
            </button>

            <p className="booking-note">
              📱 After booking, you'll receive confirmation via WhatsApp on your phone number.
            </p>
          </form>
        )}
      </div>

      <div className="booking-info">
        <div className="info-box">
          <h3>📍 Location</h3>
          <p>Dr. Ambedkar Road<br />Vikas Palm, Satara</p>
        </div>
        <div className="info-box">
          <h3>📞 Call Us</h3>
          <p><a href="tel:9511688804">9511688804</a></p>
        </div>
        <div className="info-box">
          <h3>⏰ Hours</h3>
          <p>Mon-Sat: 10 AM - 8 PM<br />Sun: 10 AM - 5 PM</p>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;
