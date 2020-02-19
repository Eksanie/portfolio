import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from 'react-bootstrap/Nav'

function App() {
  return (
    <div id="home">
      <header>

        {/* <div class="vertical-menu" id="myVerticalMenu">
          <a href="">
            <span id="brand">eksanie</span>
            <span id="brand-job">Product Manager <br /> &emsp; &emsp;  &#38; <br /> Researcher</span>
          </a>
          <a href="" id="work">PROJECTS</a>
          <a href="">ABOUT</a>
          <a href="" target="_blank">RESUME</a> */}
        <Nav
          activeKey="/home"
          onSelect={selectedKey => alert(`selected ${selectedKey}`)}
        >
          <Nav.Item>
            <Nav.Link href="/home">About Me</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1">Projects</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2">Resume</Nav.Link>
          </Nav.Item>
        </Nav>


          <div class="icon" onclick="burger()">
            <div></div>
            <div></div>
          </div>

          <div id="minimize" onclick="burger()">
            <div id="dash-icon"></div>
          </div>

      </header>


      <p class="stmt"><span>Inclusive Design</span>
        <span id="stmt2"> <br /><span id="emp1" class="color"><br /></span><span id="emp2" class="color"></span>&amp; <span id="emp3" class="color"></span></span>
      </p>

      <button class="arrow" id="down">
        ↓
      </button>


      <div id="basement" className="basement">
        <img id="venn_d" src='' alt = ''/>
      </div>


      <div class="container">
        <a name="container"></a>

        <section class="">
          <ul>
              <li>
                <a href="">
                  <img src= "" alt="" />
                </a>
            </li>
                <li>
                  <a href="">
                    <img src="" alt="" />
                </a>
            </li>
                  <li><a href="">
                    <img src="" alt="" />
                </a>
            </li>
                    <li><a href="">
                      <img src="" alt="" />
                </a>
            </li>
                      <li>
                        <a class="update">
                          <p  class="img__description"></p>
                          <img src= "" alt="" />

                </a>
            </li>
                        <li>

                          <a class="update">
                            <p class="img__description"></p>
                            <img src="" alt="" />
                    
                </a>
            </li>

        </ul>
        
    </section>
</div>
</div>
  );
}

export default App;
