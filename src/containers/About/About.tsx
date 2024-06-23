import NavBar from 'components/Layout/Header/Navbar/Navbar';
import Link from 'next/link';
import React from "react"

const About = () => {
  return (
    <div>
      <NavBar />
      <div className="pt-20 bg-white">
        <div className="container mx-auto px-4 py-8">
          <h2 className="mb-4 lg:mb-5 text-3xl font-extrabold tracking-tight leading-tight text-center text-gray-900 md:text-4xl">About Us</h2>
          <p className="text-center text-lg text-gray-700">Welcome to Cosplay.in! We are the best cosplay rental service in the world. Whether you need a full costume, accessories, or wigs, we've got you covered. Rent with us and experience top-quality service and a wide variety of options.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
