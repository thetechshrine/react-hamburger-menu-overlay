import React, { useEffect, useRef } from 'react';
import TypeWriter from '../helpers/typeWriter';

function Home() {
  const text = useRef(null);

  useEffect(() => {
    if (text.current) {
      new TypeWriter(text.current, ['Designers', 'Mobile Developers', 'Web Developers'], 2000);
    }
  }, [])

  return (
    <section id="home">
      <div className="container home-container">
        <h1>
          The Tech Shrine,&nbsp;
          <span className="text" ref={text}></span>
        </h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores voluptas suscipit, magnam architecto aut veritatis!</p>
        <a href="#about" className="btn">More</a>
      </div>
    </section>
  )
}

export default Home;