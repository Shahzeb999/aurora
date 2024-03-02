import React from 'react';
import '../App.css';

const Feature = ({ title, description }) => {
  return (
    <section className="feature">
      <h2>{title}</h2>
      <p>{description}</p>
    </section>
  );
};

export default Feature;
