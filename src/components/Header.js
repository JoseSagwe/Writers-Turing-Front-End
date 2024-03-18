import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <video src="./video.mp4" loop autoPlay muted></video>
      <p>Welcome To</p>
      <h1>Writers Turing</h1>
      <p>Online Platform Where Writers Are connected to Employers.</p>
      <div className="row">
      <Link to="/register" className="btn">Get Started</Link>
      </div>
      <div className="headerbg"></div>
    </header>
  );
}
export default Header;