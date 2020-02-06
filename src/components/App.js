import React from 'react';
import Menu from './Menu';
import Home from './Home';
import Contact from './Contact';
import About from './About';

function App() {
  return (
    <div className="app">
      <Menu />
      <Home />
      <About />
      <Contact />
    </div>
  );
}

export default App;