import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import ContactForm from '../components/contactform';
import ContactHero from '../components/contactHero';
const Contact = () => {
  return (
    <div>
      <Navbar />
      <ContactHero></ContactHero>
      <ContactForm></ContactForm>
      <Footer></Footer>

    </div>
  );
}

export default Contact;
