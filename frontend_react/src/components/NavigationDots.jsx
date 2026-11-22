import React from 'react';

const NavigationDots = ({ active }) => (
  <div className="app__navigation">
    {['home', 'about', 'work', 'skills', 'testimonial', 'contact'].map((item, index) => (
      <a
        href={`#${item}`}
        key={item + index}
        className="app__navigation-dot"
        aria-label={`Go to ${item} section`}
        aria-current={active === item ? 'location' : undefined}
        style={active === item ? { backgroundColor: '#313BAC' } : {}}
      >
        <span className="app__visually-hidden">{item}</span>
      </a>
    ))}
  </div>
);

export default NavigationDots;