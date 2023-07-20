import React from 'react';

const Home = () => {
  return <div>Home</div>;
};

const Links = () => {
  return <div>Links</div>;
};

const About = ({ children }) => {
  return (
    <div>
      About
      {children}
    </div>
  );
};

export { Home, About, Links };
