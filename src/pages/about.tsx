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
      , where I was hired as a web developer to work in the brazilian space
      research program. During my time there I did back-end development using
      PHP and MySQL and front-end with jQuery and Bootstrap.
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
          From 2010 until 2015 I founded and played in a flag football team in
          my hometown called{' '}
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
        I'm a Pokémon fanatic. This is, by far, my favorite game series and I
        enjoy playing it, both on 3DS and also Pokémon Go! I like the idea of
        exploring some new park or part of the city while playing the game. But,
        if I had to choose one game to be my number one it would be Pokémon Y.
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
          While working-out I listen to a lot of rap and hip-hop songs, they
          give me that extra motivation to go through the exercises.
        </p>
      </dd>
    </dl>
  </Layout>
);

export default AboutPage;
