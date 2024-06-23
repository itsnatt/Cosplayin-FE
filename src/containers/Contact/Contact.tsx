import NavBar from 'components/Layout/Header/Navbar/Navbar';
import Link from 'next/link';
import React from "react"

const Contact = () => {
  return (
    <div>
        <NavBar />
      <div className="pt-20 bg-white">
        <div className="container mx-auto px-4 py-8">
          <h2 className="mb-4 lg:mb-5 text-3xl font-extrabold tracking-tight leading-tight text-center text-gray-900 md:text-4xl">Contact Us</h2>
          <p className="text-center text-lg text-gray-700">Feel free to reach out to us through our social media channels:</p>
          <div className="flex justify-center mt-4">
            <a href="https://discord.gg/h65vrTdZcZ" target="_blank"><i className="fab fa-discord fa-xl mx-2 text-red-500"></i></a>
            <a href="https://twitter.com/kobokanaeru" target="_blank"><i className="fab fa-twitter fa-xl mx-2 text-red-500"></i></a>
            <a href="https://www.instagram.com/animexepriwer/" target="_blank"><i className="fab fa-instagram fa-xl mx-2 text-red-500"></i></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
