import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import type { LinkProps } from 'react-router-dom';
import { ReactComponent as ReactLogo } from '../assets/gitpushbored.svg';

function SmartLink({ children, to }: LinkProps) {
  const resolved = useResolvedPath(to);
  const match = useMatch({ path: resolved.pathname, end: true });

  return (
    <Link
      className={`hover:text-gray-900 transition duration-300 ${
        match ? 'text-gray-900' : 'text-gray-400'
      }`}
      to={to}
    >
      {children}
    </Link>
  );
}

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
        <SmartLink to="/profile">profile</SmartLink>
        <SmartLink to="/ongoing">ongoing</SmartLink>
      </nav>
    </header>
  );
}

export default Header;
