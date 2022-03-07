import React from 'react';
import { FaTwitter, FaLinkedinIn, FaInstagram, FaGithub } from 'react-icons/fa';

function Sidebar() {
  return (
    <nav className="hidden sm:block fixed inset-0 w-20 mt-52">
      <ul>
        <li className="flex justify-center pb-8">
          <a href="https://twitter.com/lifelessfruit">
            <FaTwitter
              size={28}
              className="fill-gray-400 hover:fill-gray-900 transition duration-300"
            />
          </a>
        </li>
        <li className="flex justify-center pb-8">
          <a href="https://www.linkedin.com/in/chewjunheng/">
            <FaLinkedinIn
              size={28}
              className="fill-gray-400 hover:fill-gray-900 transition duration-300"
            />
          </a>
        </li>
        <li className="flex justify-center pb-8">
          <a href="https://www.instagram.com/jun.cjh/">
            <FaInstagram
              size={28}
              className="fill-gray-400 hover:fill-gray-900 transition duration-300"
            />
          </a>
        </li>
        <li className="flex justify-center">
          <a href="https://github.com/chew01">
            <FaGithub
              size={28}
              className="fill-gray-400 hover:fill-gray-900 transition duration-300"
            />
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Sidebar;
