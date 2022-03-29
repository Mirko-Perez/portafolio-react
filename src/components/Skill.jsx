import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faJs } from '@fortawesome/free-brands-svg-icons'
import { faHtml5 } from '@fortawesome/free-brands-svg-icons'
import { faCss3 } from '@fortawesome/free-brands-svg-icons'
import { faSass } from '@fortawesome/free-brands-svg-icons'
import { faReact } from '@fortawesome/free-brands-svg-icons'
import { faPython } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faBootstrap } from '@fortawesome/free-brands-svg-icons'
import { faNpm } from '@fortawesome/free-brands-svg-icons'

import jest from '../helpers/icons/jest_logo.svg';
import postman from '../helpers/icons/postman_logo.svg';
import reduxIcon from '../helpers/icons/redux_icon.svg';
import firebaseIcon from '../helpers/icons/firebase_logo.svg';
import VSIcon from '../helpers/icons/visualstudio_icon.svg';


export const Skill = () => {
    return (
        <div className='skill-content'>
            <h1 className='skill__title mt-1 mb-1'>Tegnologias</h1>
            {/* <hr /> */}

            <div className='card'>
                <h3 className='title' >Lenguajes</h3>
                <div className='list'>
                    <FontAwesomeIcon className='icon ' icon={ faHtml5 } />
                    <div class="centrado">HTML5</div>

                </div>
                <div className='list'>
                    <FontAwesomeIcon className='icon ' icon={ faJs } />
                    <div class="centrado">JavaScript</div>

                </div>
                <div className='list'>
                    <FontAwesomeIcon className='icon ' icon={ faCss3 } />
                    <div class="centrado">CSS3</div>

                </div>
                <div className='list'>
                    <FontAwesomeIcon className='icon ' icon={ faPython } />
                    <div class="centrado">Python</div>
                </div>
            </div>
            <div className='card'>
                <h3 className='title' >framework / library / preprocessor</h3>
                <div className='list'>
                    <FontAwesomeIcon className='icon ' icon={ faSass } />
                    <div class="centrado">SASS</div>
                </div>
                <div className='list'>
                    <FontAwesomeIcon className='icon ' icon={ faReact } />
                    <div class="centrado">React</div>
                </div>
                <div className='list'>
                    <FontAwesomeIcon className='icon ' icon={ faBootstrap } />
                    <div class="centrado">Bootstrap</div>
                </div>
                <div className='list'>
                    <img  className='icon' src={jest} alt='Jest'    />
                    <div class="centrado">Jest</div>
                </div>
                <div className='list'>
                    <img  className='icon' src={firebaseIcon} alt='firebase'    />
                    <div class="centrado">Firebase</div>
                </div>
                <div className='list'>
                    <img  className='icon' src={reduxIcon} alt='redux'    />
                    <div class="centrado">Redux</div>
                </div>
            </div>
            <div className='card'>
                <h3 className='title' >Tools</h3>
                <div className='list'>
                    <FontAwesomeIcon className='icon ' icon={ faGithub } />
                    <div class="centrado">Github</div>

                </div>
                <div className='list'>
                    <FontAwesomeIcon className='icon ' icon={ faNpm } />
                    <div class="centrado">Npm</div>

                </div>
                <div className='list'>
                    <img  className='icon' src={postman} alt='Postman'    />
                    <div class="centrado">Postman</div>
                </div>
                <div className='list'>
                    <img  className='icon' src={VSIcon} alt='VSIcon'    />
                    <div class="centrado">Visual<br />Studio</div>
                </div>
                
            </div>
            
            

            
        </div>
    );
};
