import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from 'react-bootstrap/Nav'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import Home from './pages/Home.js'
import AboutMe from './pages/AboutMe'

function App() {
  return (
    <BrowserRouter>
    <div id="app">
      <header>

        {/* <div class="vertical-menu" id="myVerticalMenu">
          <a href="">
            <span id="brand">eksanie</span>
            <span id="brand-job">Product Manager <br /> &emsp; &emsp;  &#38; <br /> Researcher</span>
          </a>
          <a href="" id="work">PROJECTS</a>
          <a href="">ABOUT</a>
          <a href="" target="_blank">RESUME</a> */}
        <Link className="homeLink" exact to="/">Eksanie</Link>
        <Link className="aboutLink" to="/AboutMe">About Me</Link>
      </header>

      <Route path="/" exact component={Home} />
      <Route path="/AboutMe" component={AboutMe} />

</div>
</BrowserRouter>
  );
}

export default App;
