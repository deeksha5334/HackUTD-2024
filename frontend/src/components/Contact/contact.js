import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import "./contact.css";
import LinkedIn from '../../assets/linkedin.png';
import GitHub from '../../assets/github.png';
import Instagram from '../../assets/instagram.png';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    
    emailjs.sendForm(
      'service_o4om1c5',      // Replace with your EmailJS Service ID
      'template_birmncy',     // Replace with your EmailJS Template ID
      form.current,
      'kAGxgUjHlud3S2ETh'          // Replace with your EmailJS User ID
    )
    .then((result) => {
      alert('Message sent successfully!');
    }, (error) => {
      alert('Failed to send message, please try again.');
    });
    
    e.target.reset();
  };

  return (
    <section className="contactPage">
        <div id="contact">
            <h1 className="contactPageTitle">Contact Me</h1>
            <span className="contactDesc">Please fill out the form below to discuss any work opportunities or to get in touch with me.</span>
            <form ref={form} onSubmit={sendEmail} className="ContactForm">
                <input type="text" name="name" className="name" placeholder="Your Name" required/>
                <input type="email" name="email" className="email" placeholder="Your Email" required/>
                <textarea name="message" rows="5" placeholder="Your Message" required/>
                <button type="submit" className="submitBtn">Submit</button>
                <div className="links">
                    <img src={LinkedIn} alt="LinkedIn" className="link"/>
                    <img src={GitHub} alt="GitHub" className="link"/>
                    <img src={Instagram} alt="Instagram" className="link"/>
                </div>
            </form>
        </div>
    </section>
  );
}

export default Contact;
