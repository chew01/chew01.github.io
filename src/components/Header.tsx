import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as ReactLogo } from '../assets/gitpushbored.svg';

function Header() {
  return (
    <header className="py-10 flex justify-between sm:ml-20 sm:justify-start">
      <h1 className="px-4">
        <Link to="/">
          <ReactLogo
            width={120}
            className="fill-gray-700 hover:fill-gray-900 transition duration-200"
          />
        </Link>
      </h1>
      <nav className="px-4 flex flex-col font-jbm font-bold text-right sm:text-left sm:ml-20">
        <Link
          to="/profile"
          className="text-gray-400 hover:text-gray-900 transition duration-300"
        >
          profile
        </Link>
        <Link
          to="/projects"
          className="text-gray-400 hover:text-gray-900 transition duration-300"
        >
          projects
        </Link>
        <Link
          to="/blog"
          className="text-gray-400 hover:text-gray-900 transition duration-300"
        >
          blog
        </Link>
      </nav>
    </header>
  );
}

export default Header;
