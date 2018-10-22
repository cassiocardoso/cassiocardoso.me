import React, { Fragment, PureComponent } from 'react';
import get from 'lodash/get';
import Helmet from 'react-helmet';

import Link from '../components/Link';
import MyPhoto from '../components/MyPhoto';
import PageTitle from '../components/PageTitle';

class About extends PureComponent {
  render() {
    const { location } = this.props;
    const siteTitle = get(this, 'props.data.site.siteMetadata.title');
    const siteDescription = get(
      this,
      'props.data.site.siteMetadata.description',
    );

    return (
      <Fragment>
        <MyPhoto />
        <PageTitle>About me</PageTitle>
        <p>
          I'm Cassio Cardoso, a software engineer specialized in front-end
          development with 8+ years of experience. I'm from a small city in São
          Paulo state called Taubaté.
        </p>
        <p>
          Currently I'm living in São Paulo city and working at{' '}
          <Link href="https://quintoandar.com.br">QuintoAndar</Link> where I'm
          helping to make rental easy and cool for thousands of brazilians.
        </p>
        <p>
          Throughout my career I've had the opportunity to do web development in
          general, as well as design, business and management and I'm really
          happy to be able to enjoy all of these areas. Each of them need a
          specific skill-set and this provides me with a lot of opportunities to
          grow and learn.
        </p>
        <h3>Previous experiences</h3>
        <p>
          My first experience with web development came at{' '}
          <Link href="#">INPE</Link>, where I was hired as a web developer to
          work in the brazilian space research program. During my time there I
          did back-end development using PHP and MySQL and front-end with jQuery
          and Bootstrap.
        </p>
        <p>
          In 2014 I moved to São Paulo city to work at a fast-fashion start-up
          called <Link href="https://amaro.com">AMARO</Link> where I had the
          opportunity to do some interesting projects, both technically and also
          in a management role.
        </p>
        <h3>Q&A</h3>
        <dl>
          <dt>Favorite hobby?</dt>
          <dd>
            <p>
              I'm a sports guy. I've played soccer my entire youth and I always
              enjoyed the feeling of being part of a team and the adrenaline
              during the games.
            </p>
            <p>
              From 2010 until 2015 I founded and played in a flag football team
              in my hometown called{' '}
              <Link href="https://facebook.com/bigdonkeys/">
                Taubaté Big Donkeys
              </Link>{' '}
              this was a great experience where I was able to make a lot of
              friends and collect some awesome memories.
            </p>
          </dd>
          <dt>Favorite game?</dt>
          <dd>
            I'm a Pokémon fanatic. This is, by far, my favorite game series and
            I enjoy playing it, both on 3DS and also Pokémon Go! I like the idea
            of exploring some new park or part of the city while playing the
            game. But, if I had to choose one game to be my number one it would
            be Pokémon Y.
          </dd>
          <dt>Favorite musical style?</dt>
          <dd>
            <p>
              I like rock 'n' roll 🤘 a lot, so I'm usually listening bands from
              the 70s, 80s and 90s like AC/DC, Queen, Metallica. I also enjoy
              pop, pop-rock, and similar styles. My favorite bands nowadays are
              Muse and Imagine Dragons.
            </p>
            <p>
              While working-out I listen to a lot of rap and hip-hop songs, they
              give me that extra motivation to go through the exercises.
            </p>
          </dd>
        </dl>
      </Fragment>
    );
  }
}

export default About;
