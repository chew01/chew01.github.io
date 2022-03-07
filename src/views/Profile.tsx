import React from 'react';
import Header from '../components/Header';
import Main from '../components/Main';
import Sidebar from '../components/Sidebar';

function Profile() {
  return (
    <>
      <Header />
      <Sidebar />
      <Main>
        <section className="">
          <h2 className="font-psn font-bold text-5xl uppercase break-normal text-gray-600 max-w-5xl mb-8">
            Hey! I&apos;m Daniel. I&apos;m a Computer Science student at the
            National University of Singapore.
          </h2>
          <p className="text-gray-700 mb-4">
            <strong>Well, not quite yet I suppose.</strong> The first semester
            starts in August 2022, so I have some time on my hands for now.
          </p>
          <p className="text-gray-700">
            <strong>I am:</strong>
          </p>
          <ul className="text-gray-700 list-disc ml-8 mb-4">
            <li>
              someone who spends most of his time typing gibberish into a dark
              text editor at his desk <em>(yes, I write software)</em>
            </li>
            <li>
              learning the acoustic guitar, inspired by{' '}
              <a
                href="https://www.youtube.com/channel/UCZIE_4vM_VsYwIw1LyvosOg"
                className="text-cyan-800 font-medium hover:underline"
              >
                Seiji Igusa
              </a>
            </li>
            <li>
              a huge fan of football/soccer{' '}
              <a
                href="https://en.wikipedia.org/wiki/Liverpool_F.C."
                className="text-cyan-800 font-medium hover:underline"
              >
                <em>(You&apos;ll neeeeever walk alone...)</em>
              </a>
            </li>
            <li>
              extremely particular about UX and design{' '}
              <strong>
                <em>aestheticc</em>
              </strong>
              , although I don&apos;t consider myself any good at it
            </li>
            <li>
              a glutton for knowledge; I read textbooks that I may (or may not)
              understand...
            </li>
          </ul>
          <p className="text-gray-700 mb-4">
            I&apos;m usually doing or learning something interesting, or at
            least I hope I am. You can find my occasional sitreps (rants?) in my{' '}
            <a
              href="/ongoing"
              className="text-cyan-800 font-medium hover:underline"
            >
              ongoing
            </a>{' '}
            corner.
          </p>

          <h3 className="text-gray-700 font-bold ">
            Somewhat important events...
          </h3>
          <ul className="text-gray-700 m-2 leading-snug flex flex-col gap-3">
            <li>
              <strong>2021:</strong> Completed 2 years of mandatory military
              service in the <strong>Singapore Armed Forces</strong>, serving as
              a Logistics Specialist
            </li>
            <li>
              <strong>2019:</strong> Graduated from{' '}
              <strong>Raffles Institution</strong> with straight As in{' '}
              <strong>GCE &apos;A&apos; Levels</strong> and good experiences in
              the Students&apos; Council and 01 Scout Troop
            </li>
          </ul>
        </section>
      </Main>
    </>
  );
}

export default Profile;
