'use client';

import { useState } from 'react';
import PropTypes from 'prop-types';
import './ContactForm.css';

const ContactForm = ({ defaultName, defaultPhone, defaultMessage }) => {
  const [formData, setFormData] = useState({
    name: defaultName,
    phone: defaultPhone,
    message: defaultMessage
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="contact-form-container">
      <div className="form-header">
        <h1>Travel Beyond Limits</h1>
        <p>Got questions or just want to say hi? Drop us a message below, and we'll get back to you faster than your vacation countdown!</p>
      </div>
      
      <form onSubmit={handleSubmit}>
        <div className="input-row">
          <div className="input-group">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          
          <div className="input-group">
            <label>Phone Number</label>
            <input
              type="tel"
              name="phone"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="input-group">
          <label>Message</label>
          <textarea
            name="message"
            placeholder="Type your destination or query here"
            value={formData.message}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="submit-button">
          Send
        </button>
      </form>

      <div className="contact-info">
        <div className="info-item">
          <img src="https://dashboard.codeparrot.ai/api/assets/Z44u6r9JV5SvYOwp" alt="email" />
          <span>team@lazyatra.com</span>
        </div>
        <div className="info-item">
          <img src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e7a53107-a952-4b29-86b9-7755396fb1cd" alt="phone" />
          <span>1234567890</span>
        </div>
      </div>
    </div>
  );
};

ContactForm.propTypes = {
  defaultName: PropTypes.string,
  defaultPhone: PropTypes.string,
  defaultMessage: PropTypes.string
};

ContactForm.defaultProps = {
  defaultName: '',
  defaultPhone: '',
  defaultMessage: ''
};

export default ContactForm;
