import React from 'react';
import { motion } from 'framer-motion';

import { AppWrap } from '../../wrapper';
import { images } from '../../constants';
import './Header.scss';

const Header = () => (
  <div className="app__header">
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="app__header-info"
    >
      <p className="app__header-eyebrow">Hello, I’m Ibrahim Nassar</p>
      <h1>Software developer building <span>practical digital solutions.</span></h1>
      <p className="app__header-intro">
        I build modern web applications and APIs, combining software development,
        data, design, and Agile teamwork.
      </p>
      <div className="app__header-actions">
        <a className="app__header-button app__header-button-primary" href="#work">View my work</a>
        <a className="app__header-button" href="#contact">Contact me</a>
      </div>
      <div className="app__header-focus" aria-label="Core focus areas">
        <span>Backend APIs</span>
        <span>Web Development</span>
        <span>Agile Delivery</span>
      </div>
    </motion.section>

    <motion.section
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, delay: 0.15 }}
      className="app__header-visual"
      aria-label="Portrait and technology specialties"
    >
      <div className="app__header-img">
        <img src={images.profile} alt="Ibrahim Nassar" />
      </div>
      <div className="app__header-circles">
        {[
          { image: images.adobe, label: 'Design' },
          { image: images.programming, label: 'Development' },
          { image: images.economics, label: 'Business' },
        ].map(({ image, label }) => (
          <div className="app__header-specialty" key={label}>
            <img src={image} alt="" />
            <span>{label}</span>
          </div>
        ))}
      </div>
    </motion.section>
  </div>
);

export default AppWrap(Header, 'home');
