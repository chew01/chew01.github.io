import React from 'react';
import { RiLoader4Line } from 'react-icons/ri';

function Loading() {
  return (
    <div className="min-h-screen min-w-screen flex justify-center items-center">
      <div className="px-3 py-2 rounded-xl font-semibold text-gray-700 text-2xl flex gap-3 items-center select-none">
        <RiLoader4Line size={24} className="animate-spin" />
        Loading...
      </div>
    </div>
  );
}

export default Loading;
