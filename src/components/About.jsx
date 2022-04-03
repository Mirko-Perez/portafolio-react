import React from "react";
import Typewriter from "typewriter-effect";
import second from "../helpers/img/fondo.jfif";

export const About = () => {
  return (
    <>
      <div className="col s12 m7">
        <h2 className="header">Sobre Mi</h2>
        <div className="card horizontal">
          <div className="card-image">
            <img alt="Fondo" className=" img-fondo mt-5" src={second} />
          </div>
          <div className="card-stacked">
            <div className="card-content">
              <p>
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .typeString(
                        "Soy un estudiante de Ingenieria en Sistemas de Información en la UTN , con un enfoque en el desarrollo Front-End con React aprendido de manera autodidacta y estoy en Busqueda de mi primer trabajo IT en un lugar donde pueda adquirir nuevos conocimientos, con muchas ganas de aprender y crecer profesionalmente."
                      )

                      .pauseFor(1000)

                      // .deleteAll()

                      .start();
                  }}
                />
              </p>
            </div>
            <div className="about-footer">
              <p className="animate__animated animate__fadeIn">
                Idiomas: Español, Inglés
              </p>
              <p className="animate__animated animate__fadeIn">
                Localización:Resistencia, Chaco, Argentina
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
