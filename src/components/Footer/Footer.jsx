import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="contact-info">
    <h2>Contact Me</h2>
    <p>Email: Asher@example.com</p>
    <p>Phone: (126) 758-4415</p>
    <p className="description">
        Which seems to confirm the idea that the <br />
        possibility of achieving some part of the feedback <br />
        system, as far as the direct access to key <br />
        resources is questionable, has common features <br />
        with The Network of Particular Record.
    </p>
  </div>
  <div className="contact-form">
    <div className="input-group">
      <input className="input-field" type="text" placeholder="Name" />
      <input className="input-field" type="email" placeholder="Email" />
    </div>
    <textarea className="message-field" placeholder="Message"></textarea>
    <button className="send-button">Send</button>
  </div>
    </footer>
  );
};

export default Footer;
