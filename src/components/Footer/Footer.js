import React from 'react';
import './Footer.css';

const Footer = () => (
  <footer className="footer">
    <span>
      API:{' '}
      <a
        className="footer-link"
        href="https://forismatic.com/en/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Forismatic
      </a>
    </span>
    <span>|</span>
    <span>
      <a
        className="footer-link"
        href="https://github.com/maulikpkanani/Quote-Machine"
        target="_blank"
        rel="noopener noreferrer"
      >
        Repo Link
      </a>
    </span>
    <p>
      Created by:{' '}
      <a
        className="footer-link"
        href="#"
        target="_blank"
        rel="noopener noreferrer"
      >
        Maulik Kanani
      </a>
    </p>
  </footer>
);

export default Footer;
