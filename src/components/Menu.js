import React, { useState } from 'react';
import $ from 'jquery';

function Menu() {
  const [open, setOpen] = useState(false);

  const handleClick = (e, hash) => {
    e.preventDefault();
    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top
      }, 
      800
    );
    setOpen(false);
  }
  
  return (
    <div className="menu-wrap">
      <input type="checkbox" checked={open} onChange={() => setOpen(!open)} className="toggler" />
      <div className="hamburger"><div></div></div>
      <div className="menu">
        <div>
          <div>
            <ul>
              <li><a href="#home" onClick={(e) => handleClick(e, '#home')}>Home</a></li>
              <li><a href="#about" onClick={(e) => handleClick(e, '#about')}>About</a></li>
              <li><a href="#contact" onClick={(e) => handleClick(e, '#contact')}>Contact</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Menu;