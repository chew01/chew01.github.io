import React from 'react';

type LinkProps = {
  link_descriptor: string;
  link: string;
};

function LinkButton({ link_descriptor, link }: LinkProps) {
  return (
    <a
      href={link}
      className="rounded-lg border font-osw text-white bg-cyan-700 scale-0 max-h-0 group-hover:mt-2 group-hover:p-2 group-hover:scale-100 group-hover:max-h-full hover:group-hover:scale-105 hover:group-hover:bg-cyan-800 transition"
    >
      {link_descriptor}
    </a>
  );
}

export default LinkButton;
