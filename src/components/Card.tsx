import React from 'react';
import LinkButton from './LinkButton';

type CardProps = {
  name: string;
  type: string;
  image_src: string;
  link: string;
  link_descriptor: string;
};

function Card({ name, type, image_src, link, link_descriptor }: CardProps) {
  return (
    <article className="rounded-xl h-64 shadow-md flex justify-center items-center group relative overflow-hidden select-none">
      <img
        src={image_src}
        alt=""
        className="absolute min-h-full object-cover group-hover:blur-[2px] group-hover:transition duration-500"
      />
      <div className="p-4 rounded-xl shadow-md border bg-white flex flex-col z-10 group-hover:scale-110 transition">
        <span className="p-1 text-center border-b font-osw font-medium text-gray-900 text-lg">
          {name}
        </span>
        <span className="p-1 text-center font-osw text-gray-500 text-lg group-hover:p-0 group-hover:translate-y-4 group-hover:scale-0 group-hover:max-h-0 transition">
          {type}
        </span>
        <LinkButton link_descriptor={link_descriptor} link={link} />
      </div>
    </article>
  );
}

export default Card;
