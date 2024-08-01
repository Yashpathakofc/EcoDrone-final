// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white mt-5 py-4" style={{display:"flex",justifyContent:'space-evenly'}}>
      {/* <img className="mx-4 " src="logo.png" height={100} width={80}/> */}
      {/* <h1 className='heading mt-4'>EcoDrone</h1> */}
      <div className="container mx-auto text-center">
        
        <p>&copy; {new Date().getFullYear()} EcoDrone. All rights reserved.</p>
        <div className="mt-2">
          <a href="#" className="text-green-500 mx-2">Home</a>
          <a href="#" className="text-green-500 mx-2">About</a>
          <a href="#" className="text-green-500 mx-2">Services</a>
          <a href="#" className="text-green-500 mx-2">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
