import React from 'react';
import ContactForm from './ContactForm';
import MapSection from './MapSection';
import './ContactUsLayout.css'
const ContactUsLayout = () => {
  return (
    <div className='contactUs1-layout'>
      <div style={{
        flexGrow: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <ContactForm />
      </div>
      <div style={{
        flexGrow: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <MapSection />
      </div>
    </div>
  );
};

export default ContactUsLayout;