import React from 'react';
import Card from './Card';
import Jeanne from '../assets/card_bg/jeanne.png';
import ExpressBlog from '../assets/card_bg/express-blog.png';
import Flipper from '../assets/card_bg/flipper.png';
import GitPushBored from '../assets/card_bg/gitpushbored.png';
import Pepe from '../assets/transparent_pepe.png';

function Grid() {
  return (
    <section className="grid grid-flow-row grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
      <Card
        name="Jeanne"
        type="Discord Bot"
        image_src={Jeanne}
        link="https://github.com/chew01/jeanne-bot"
        link_descriptor="View on Github"
      />
      <Card
        name="Git Push Bored"
        type="Portfolio Site"
        image_src={GitPushBored}
        link="https://github.com/chew01/chew01.github.io/tree/master"
        link_descriptor="View on Github"
      />
      <Card
        name="Express Blog"
        type="Website + API"
        image_src={ExpressBlog}
        link="https://github.com/chew01/express-blog"
        link_descriptor="View on Github"
      />
      <Card
        name="Flipper (yuck)"
        type="Bootleg Twitter"
        image_src={Flipper}
        link="https://github.com/chew01/fake-bird-test"
        link_descriptor="View on Github"
      />
      <div className="absolute hidden 2xl:block right-5 bottom-5 text-gray-600">
        <img
          src={Pepe}
          alt=""
          className="max-w-[300px] -scale-x-100 hover:scale-x-100 transition duration-500"
        />
        It&apos;s pretty empty here, I know. We&apos;ll get there one day.
      </div>
    </section>
  );
}

export default Grid;
