import * as React from 'react';
import { RouterProps } from '@reach/router';

import Layout from '../components/Layout';
import MyPhoto from '../components/MyPhoto';
import PageTitle from '../components/PageTitle';

const AboutPage: React.FunctionComponent<RouterProps> = ({ location }) => (
  <Layout location={location}>
    <PageTitle>About Me</PageTitle>
    <MyPhoto />
    <p>
      I'm Cassio Cardoso, a software engineer specialized in front-end
      development with 8+ years of experience. I'm a brazilian guy from a small
      city in São Paulo state called Taubaté.
    </p>
    <p>
      Currently I'm living in Berlin and working at{' '}
      <a href="https://omio.com" target="_blank" rel="noopener noreferrer">
        Omio
      </a>{' '}
      where I'm helping to make travel easy for milions of people.
    </p>
    <p>
      Throughout my career I've had the opportunity to do web development in
      general, as well as design, business and management and I'm really happy
      to be able to enjoy all of these areas. Each of them needed a specific
      skill-set and it provided me with a lot of opportunities to grow and
      learn.
    </p>
    <h2>Previous experiences</h2>
    <p>
      My first experience with web development came at{' '}
      <a href="http://www.inpe.br/" target="_blank" rel="noopener noreferrer">
        INPE
      </a>
      , the brazilian institute for space research, where I was hired as a web
      developer in 2009 to work in the brazilian space research program. During
      my time there I did back-end development using PHP and MySQL and front-end
      with jQuery and Bootstrap.
    </p>
    <p>
      In 2014 I moved to São Paulo city to work at a fast-fashion start-up
      called{' '}
      <a href="https://amaro.com" target="_blank" rel="noopener noreferrer">
        AMARO
      </a>{' '}
      where I had the opportunity to do some interesting projects, both
      technically and also in a management role.
    </p>
    <p>
      During my time there I had the opportunity to develop the front-end
      application for the first in-house e-commerce solution for the company all
      by myself. It was a great experience, where I learned a lot.
    </p>
    <p>
      As the company grew, we started hiring for the development department and
      I spent around 18 months as the front-end team lead. During this period we
      developed a new front-end application for the e-commerce platform.
    </p>
    <p>
      This new application was based on React, Redux and RxJS. It took around 6
      months to be completed and it still powers the website of the company.
    </p>
    <p>
      In november of 2017 I joined{' '}
      <a
        href="https://quintoandar.com.br"
        target="_blank"
        rel="noopener noreferrer"
      >
        QuintoAndar
      </a>{' '}
      where I helped making rental easy and cool for thousands of brazilians.
    </p>
    <p>
      I decided that I needed a change to work on different projects, with
      different challenges and skills. I was looking for technical growth and as
      I joined QuintoAndar I was sure that I made the right decision.
    </p>
    <p>
      Most of my work there was with front-end development, but I also had the
      opportunity to do some back-end adn devOps tasks which allowed me to
      acquire a set of skills that I didn't have before.
    </p>
    <h2>Q&A</h2>
    <dl>
      <dt>Favorite hobby?</dt>
      <dd>
        <p>
          I'm a sports guy. I've played soccer my entire youth and I always
          enjoyed the feeling of being part of a team and the adrenaline during
          the games.
        </p>
        <p>
          From 2010 until 2015 I founded, played, coached and was a manager in a
          flag football team in my hometown called{' '}
          <a
            href="https://facebook.com/bigdonkeys/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Taubaté Big Donkeys
          </a>{' '}
          this was a great experience where I was able to make a lot of friends
          and collect some awesome memories.
        </p>
      </dd>
      <dt>Favorite game?</dt>
      <dd>
        <p>
          I'm a Pokémon fanatic. This is, by far, my favorite game series.
          Recently I bought a Nintendo Switch to play Pokémon Let's Go (chose
          the Pikachu version). I intend to buy some Nintendo classics that are
          being released to Switch in the near future, like Zelda, Mario and
          others (game indications are welcome).
        </p>
        <p>
          I also play some casual games on my phone, mostly while I'm commuting
          to work.
        </p>
      </dd>
      <dt>Favorite musical style?</dt>
      <dd>
        <p>
          I like rock 'n' roll 🤘 a lot, so I'm usually listening bands from the
          70s, 80s and 90s like AC/DC, Queen, Metallica. I also enjoy pop,
          pop-rock, and similar styles. My favorite bands nowadays are Muse and
          Imagine Dragons.
        </p>
        <p>
          I also enjoy some brazilian music like: Charlie Brown Jr., Marcelo D2,
          CPM 22, Capital Inicial, Elza Soares (her last CD is a masterpiece).
        </p>
        <p>
          While working-out I listen to a lot of rap and hip-hop songs, they
          give me that extra motivation to go through the exercises.
        </p>
      </dd>
    </dl>
  </Layout>
);

export default AboutPage;
