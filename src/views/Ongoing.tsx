import React from 'react';
import Header from '../components/Header';
import Main from '../components/Main';
import Sidebar from '../components/Sidebar';

function Ongoing() {
  return (
    <>
      <Header />
      <Sidebar />
      <Main>
        <h2 className="font-psn font-bold text-5xl uppercase break-normal text-gray-600 max-w-5xl mb-8">
          Last update: 7 March 2022
        </h2>
        <p className="text-gray-700 mb-4">
          Currently reading{' '}
          <strong>Structure and Interpretation of Computer Programs</strong>.
          The original Scheme version of course. <br />
          <br />I actually stumbled upon a Javascript version, which is
          apparently taught in the NUS module CS1011S (which I think I will
          probably be taking).
          <br />
          Though after seeing ternary abuse like this, I decided I might as well
          read the original and learn a new language:
        </p>
        <img
          src="https://i.redd.it/670ulkm4jee81.png"
          alt="SICP JS ternary hell"
          className="max-w-5xl border-4 mb-4"
        />
        <p className="text-gray-700 mb-4">
          Now that I&apos;ve more or less finished the crux of this website, I
          kinda have to figure out what I want to do next (other than adding a
          Dark Mode).
          <br />
          <br />I guess I could do something like a Telegram bot, a game like
          Wordle to strengthen my Javascript skills...
          <br />
          Or I could learn a new language like Python, C, C++, C#. <br />
          <br />
          Either way, I intend to learn all of them, since they seem pretty
          interesting and I think I&apos;m ready to delve deeper.
          <br />
          <br />A little off-topic but, Liverpool are facing Inter Milan this
          week. <strong className="text-red-600">Up the Reds!</strong>
        </p>
      </Main>
    </>
  );
}

export default Ongoing;
