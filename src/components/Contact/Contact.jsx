import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>Get in touch with Avantika Parlour</p>
      </div>

      <div className="contact-content">
        <div className="contact-info">
          <div className="info-card">
            <div className="info-icon">📞</div>
            <h3>Phone</h3>
            <p>
              <a href="tel:9511688804">9511688804</a>
            </p>
            <p className="owner-name">Owner: Sarika</p>
          </div>

          <div className="info-card">
            <div className="info-icon">📍</div>
            <h3>Address</h3>
            <p>
              Dr. Ambedkar Road BeSide<br />
              Vikas Palm<br />
              Thane<br />
              Maharashtra, India
            </p>
          </div>

          <div className="info-card">
            <div className="info-icon">⏰</div>
            <h3>Working Hours</h3>
            <p>
              Monday - Saturday<br />
              10:00 AM - 8:00 PM<br />
              <br />
              Sunday<br />
              10:00 AM - 5:00 PM
            </p>
          </div>
        </div>

        <div className="contact-form-section">
          <h2>Send us a Message</h2>
          <form className="contact-form">
            <div className="form-group">
              <label>Your Name</label>
              <input type="text" placeholder="Enter your name" required />
            </div>

            <div className="form-group">
              <label>Phone Number</label>
              <input type="tel" placeholder="Enter your phone number" required />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input type="email" placeholder="Enter your email" />
            </div>

            <div className="form-group">
              <label>Message</label>
              <textarea rows="5" placeholder="Enter your message" required></textarea>
            </div>

            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>
      </div>

      {/* MAP SECTION */}
      <div className="map-section">
        <h2>Find Us</h2>

        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60286.019986509134!2d72.8994914486328!3d19.2006067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b93b7fb239c5%3A0xa3c9e65ce2d005ba!2sAvantika%20Beauty%20Parlour%20%26%20Institute!5e0!3m2!1sen!2sin!4v1773123056297!5m2!1sen!2sin"
            width="100%"
            height="400"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            title="Avantika Parlour Location"
          ></iframe>

          <a
            href="https://www.google.com/maps/place/Avantika+Beauty+Parlour+%26+Institute/"
            target="_blank"
            rel="noopener noreferrer"
            className="map-button"
          >
            Open in Google Maps
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;