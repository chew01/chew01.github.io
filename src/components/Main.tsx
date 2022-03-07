import React from 'react';
import Card from './Card';
import Jeanne from '../assets/card_bg/jeanne.png';
import ExpressBlog from '../assets/card_bg/express-blog.png';

function Main() {
  return (
    <main className="sm:ml-20 p-4 grid grid-flow-row grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
      <Card
        name="Jeanne"
        type="Discord Bot"
        image_src={Jeanne}
        link="https://github.com/chew01/jeanne-bot"
        link_descriptor="View on Github"
      />
      <Card
        name="Express Blog"
        type="Website"
        image_src={ExpressBlog}
        link="https://github.com/chew01/express-blog"
        link_descriptor="View on Github"
      />
      <Card
        name="Jeanne"
        type="Discord Bot"
        image_src={Jeanne}
        link="https://github.com/chew01/jeanne-bot"
        link_descriptor="View on Github"
      />
      <Card
        name="Express Blog"
        type="Website"
        image_src={ExpressBlog}
        link="https://github.com/chew01/express-blog"
        link_descriptor="View on Github"
      />
      <Card
        name="Jeanne"
        type="Discord Bot"
        image_src={Jeanne}
        link="https://github.com/chew01/jeanne-bot"
        link_descriptor="View on Github"
      />
      <Card
        name="Express Blog"
        type="Website"
        image_src={ExpressBlog}
        link="https://github.com/chew01/express-blog"
        link_descriptor="View on Github"
      />
      <Card
        name="Express Blog"
        type="Website"
        image_src={ExpressBlog}
        link="https://github.com/chew01/express-blog"
        link_descriptor="View on Github"
      />
      <Card
        name="Jeanne"
        type="Discord Bot"
        image_src={Jeanne}
        link="https://github.com/chew01/jeanne-bot"
        link_descriptor="View on Github"
      />
      <Card
        name="Express Blog"
        type="Website"
        image_src={ExpressBlog}
        link="https://github.com/chew01/express-blog"
        link_descriptor="View on Github"
      />
    </main>
  );
}

export default Main;
