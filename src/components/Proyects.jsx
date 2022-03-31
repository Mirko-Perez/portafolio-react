import React from "react";
import Calculadora from "../helpers/img/proyects/Calculadora-Nominal.png";
import Search from "../helpers/img/proyects/search-image.png";
import Hero from "../helpers/img/proyects/hero.png";
import Contact from "../helpers/img/proyects/contact.png";
import PostiT from "../helpers/img/proyects/postit.png";
import Gif from "../helpers/img/proyects/gif.png";
import Todo from "../helpers/img/proyects/todo.png";
import Paint from "../helpers/img/proyects/paint.png";

export const Proyects = () => {
  return (
    <div className="row center">
      <div className="col s3 m3">
        <div className="card animate__animated animate__fadeInUp">
          <div className="card-image">
            <img src={Calculadora} />
            <span className="card-title ">Calculadora Nominal</span>
            <p>HTML-JS-SASS-React</p>
          </div>

          <div className="card-action">
            <a target="_blank" href="https://meek-gaufre-cd7025.netlify.app/">
              Demo
            </a>
            <a
              target="_blank"
              href="https://github.com/Mirko-Perez/Calculadora-Nominal-PWA"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
      <div className="col s3 m3">
        <div className="card animate__animated animate__fadeInUp">
          <div className="card-image">
            <img src={Search} />
            <span className="card-title ">Search Image</span>
            <p>HTML-JS-SASS-React</p>
          </div>

          <div className="card-action">
            <a
              target="_blank"
              href="https://mirko-perez.github.io/Search-Image/"
            >
              Demo
            </a>
            <a
              target="_blank"
              href="https://github.com/Mirko-Perez/Search-Image"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
      <div className="col s3 m3">
        <div className="card animate__animated animate__fadeInUp">
          <div className="card-image">
            <img src={Hero} />
            <span className="card-title ">Heroes App</span>
            <p>HTML-JS-SASS-React</p>
          </div>

          <div className="card-action">
            <a
              target="_blank"
              href="https://romantic-mclean-919093.netlify.app/"
            >
              Demo
            </a>
            <a target="_blank" href="https://github.com/Mirko-Perez/Heroes-App">
              GitHub
            </a>
          </div>
        </div>
      </div>
      <div className="col s3 m3">
        <div className="card animate__animated animate__fadeInUp">
          <div className="card-image">
            <img src={Contact} />
            <span className="card-title ">Contact-List</span>
            <p>HTML-JS-SASS-React</p>
          </div>

          <div className="card-action">
            <a
              target="_blank"
              href="https://mirko-perez.github.io/Contact-List-PWA/"
            >
              Demo
            </a>
            <a
              target="_blank"
              href="https://github.com/Mirko-Perez/Contact-List-PWA"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
      <div className="col s3 m3">
        <div className="card animate__animated animate__fadeInUp">
          <div className="card-image">
            <img src={PostiT} />
            <span className="card-title ">PostIT</span>
            <p>HTML-JS-CSS-Python-Django</p>
          </div>

          <div className="card-action">
            <a target="_blank" href="http://mirkoangel1.pythonanywhere.com/">
              Demo
            </a>
            <a target="_blank" href="https://github.com/Mirko-Perez/PostIT">
              GitHub
            </a>
          </div>
        </div>
      </div>
      <div className="col s3 m3">
        <div className="card animate__animated animate__fadeInUp">
          <div className="card-image">
            <img src={Gif} />
            <span className="card-title ">React Gifs Expert</span>
            <p>HTML-JS-CSS-Bootstrap-React</p>
          </div>

          <div className="card-action">
            <a
              target="_blank"
              href="https://mirko-perez.github.io/React-Gifs-Expert-App/"
            >
              Demo
            </a>
            <a
              target="_blank"
              href="https://github.com/Mirko-Perez/React-Gifs-Expert-App"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
      <div className="col s3 m3">
        <div className="card animate__animated animate__fadeInUp">
          <div className="card-image">
            <img src={Todo} />
            <span className="card-title ">To Do Lists</span>
            <p>HTML-JS-CSS-React</p>
          </div>

          <div className="card-action">
            <a
              target="_blank"
              href="https://mirko-perez.github.io/project-to-do-lists/"
            >
              Demo
            </a>
            <a
              target="_blank"
              href="https://github.com/Mirko-Perez/project-to-do-lists"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
      <div className="col s3 m3">
        <div className="card animate__animated animate__fadeInUp">
          <div className="card-image">
            <img src={Paint} />
            <span className="card-title ">Paint</span>
            <p>HTML-JS-CSS</p>
          </div>

          <div className="card-action">
            <a
              target="_blank"
              href="https://roaring-sorbet-92f5df.netlify.app/"
            >
              Demo
            </a>
            <a target="_blank" href="https://github.com/Mirko-Perez/Paint">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
