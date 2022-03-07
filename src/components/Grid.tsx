import React from 'react';
import Card from './Card';
import Jeanne from '../assets/card_bg/jeanne.png';
import ExpressBlog from '../assets/card_bg/express-blog.png';
import Flipper from '../assets/card_bg/flipper.png';

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
    </section>
  );
}

export default Grid;
