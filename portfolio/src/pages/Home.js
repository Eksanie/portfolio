import React from 'react';
import '../App.css';


function Home() {
    return (
        <div id= "Home">
            <button class="arrow" id="down">
                ↓
            </button>


            <div id="basement" className="basement">
            {/* <p class="stmt"><span>Inclusive Design</span>
                <span id="stmt2"> <br /><span id="emp1" class="color"><br /></span><span id="emp2" class="color"></span>&amp; <span id="emp3" class="color"></span></span>
            </p> */}
                <img id="venn_d" src='' alt='' />
            </div>


            <div class="container">
                <a name="container"></a>

                <section class="">
                    <ul>
                        <li>
                            <a href="">
                            <img className="Dance" src="../images/Dance.JPG" alt="Dance" />
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
                                <p class="img__description"></p>
                                <img src="" alt="" />

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

export default Home;