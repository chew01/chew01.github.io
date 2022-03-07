import React from 'react';

type MainProps = {
  children: React.ReactNode;
};

function Main({ children }: MainProps) {
  return <main className="sm:ml-20 p-4">{children}</main>;
}

export default Main;
