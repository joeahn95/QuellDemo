import quellLogo from '/client/src/assets/images/quell_logos/quell-logo-side.svg';
import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// import { HashLink } from 'react-router-hash-link'; 

export const Footer = () => {
  return (
    <nav className="relative container mx-auto bg-background w-full p-8 text-white md:mt-14 md:mb-28 xl:max-w-10xl">
      <div className="flex items-center justify-between">
        <div className="pt-2">
          <Link to="/">
          <img className="bird-icon" src={quellLogo} />
          </Link>
        </div>
        <div className="hidden font-sans font-light space-x-12 md:flex">
          <a href="#" className="hover:underline underline-offset-8 decoration-lightblue">Docs</a>
          {/* <a href="#" className="hover:underline underline-offset-8 decoration-lightblue">Team</a> */}
          <Link to="/team">
          <button className="hover:underline underline-offset-8 decoration-lightblue">
            Team
          </button>
        </Link>
          <a href="#" className="hover:underline underline-offset-8 decoration-lightblue">Blog</a>
          <a href="#" className="hover:underline underline-offset-8 decoration-lightblue">Try Demo</a>
        </div>
      </div>
    </nav>
  );
};
