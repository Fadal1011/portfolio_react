import {useRef , useState , useEffect } from 'react'
import AOS from 'aos' ;
import VanillaTilt from 'vanilla-tilt';
import 'aos/dist/aos.css' ;
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Carousel } from "@material-tailwind/react";
import linkDin from '../src/assets/linkedin.png'
import github from '../src/assets/github.png'
import gmail from '../src/assets/gmail.png'
import profil from '../src/assets/profil.jpg'
import profilA from '../src/assets/profil1A.jpg'
import profil2 from '../src/assets/profil2.jpg'
import Typed from 'typed.js';
import html from '../src/assets/html.png'
import css from '../src/assets/css-3.png'
import bootstrap from '../src/assets/bootstrap.png'
import angular from '../src/assets/angular.png'
import ionic from "../src/assets/ionic.png"
import js from "../src/assets/js.png"
import laravel from "../src/assets/laravel.png"
import mysql from "../src/assets/mysql.png"
import php from "../src/assets/php.png"
import Tailwind from "../src/assets/Tailwind CSS.png"
import typescript from "../src/assets/typescript.png"
import uml from "../src/assets/uml.png"
import uvs from "../src/assets/uvs.png"
import sonatel from "../src/assets/sonatel.png"
import bellaOrange from "../src/assets/bellaOrange.png"
import emoji from "../src/assets/emoji.png"
import gestionBoutique from "../src/assets/gestionBoutique.png"
import gestionCouture from "../src/assets/gestionCouture.png"
import mariage from "../src/assets/mariage.png"
import planning from "../src/assets/planning.png"
// import PriseRendezVous from "../src/assets/PriseRendezVous.png"
import transaction from "../src/assets/transaction.png"
import venteVetement from "../src/assets/venteVetement.png"
import telephone from "../src/assets/telephone.png"
import mail from "../src/assets/e-mail.png"
import sun from "../src/assets/soleil.png"
import moon from "../src/assets/lune.png"
import './App.css'
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

// import ParticleBg from './component/particleBack';

library.add(faBars);

function Aos(){
  useEffect(()=>{
    AOS.init({duration:1500})
  },[])
}





function App() {
  Aos()
  return <>
    <Home/>
    <About></About>
    <Skilss></Skilss>
    <Education></Education>
    <Project></Project>
    <Contact></Contact>
    </>
}

function Home(){
  return <div id="Home">
    <ParticleBg/>
    <Navbar/>
    <Presenation></Presenation>
  </div>

}

function Navbar(){
  const [showNavbar, setShowNav] = useState(false)
  const [darkMode, setDarkMode] = useState(false)

  let etat = moon

  useEffect(() => {
    document.body.className = darkMode ? 'dark-mode' : 'light-mode';
  }, [darkMode]);
  
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };


  const handleShowNavbar = () => {
    setShowNav(!showNavbar)
  }

  return <div className="navbar">
    <div className="logo">
      <h1>Fadal Ndiaye</h1>
    </div>
    <div id="nav" className={`nav-elements  ${showNavbar && 'active'}`}>
      <li><a href="#home">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#Skills">Skills</a></li>
      <li><a href="#experience">Education</a></li>
      <li><a href="#project">Projects</a></li>
      <li><a href="#contact">Contact</a></li>
      <div className="btn-theme">
        <button onClick={toggleDarkMode}>
            <img src={darkMode ? etat =moon : etat = sun} alt="" />
        </button>
      </div>
    </div>

      <FontAwesomeIcon icon="bars" id='OpenMenu' onClick={handleShowNavbar}/>
  </div>
}

  function Presenation(){

  return <div className='presention'>
    <div className="content" data-aos="fade-right">
        <h2>Hi There</h2>
        <h1>I am <TypedText/></h1>
        <div className="rs">
          <ul>
            <li><a href="https://www.linkedin.com/in/fadal-ndiaye-47a47419b/"><img src={linkDin} alt="" /></a></li>
            <li><a href="https://github.com/Fadal1011"><img src={github} alt="" /></a></li>
            <li><a href="mailto:fndiaye1011@gmail.com"><img src={gmail} alt="" /></a></li>
          </ul>
        </div>
        <a href="#contact">
        <button className="contactButton"> Contact Me
            <div className="iconButton">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path fill="currentColor" d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"></path></svg>
            </div>
      </button>
        </a>
    </div>
    <div className="profil" data-aos="flip-left">
      <div class="image flip-card">
    <div class="flip-card-inner">
        <div class="flip-card-front">
          <img src={profil} alt="" />
        </div>
        <div class="flip-card-back">
          <img src={profilA} alt="" />
        </div>
    </div>
</div>
    </div>
  </div>
}

function About(){
  const tiltRef = useRef(null);

  useEffect(() => {
    // Initialise Tilt.js sur l'élément référencé
    VanillaTilt.init(document.querySelectorAll(".tilt"), {
      max: 25,
      speed:200
    });
  }, []);
  return <div id="about">
    <div className="tilt image" data-aos="fade-right">
      <div class="card">
          <img src={profil2} alt="" />
      </div>
    </div>
    <div className="content" data-aos="fade-left">
      <h3>Who am i</h3>
      <h1>I'm Mouhamadou Fadal Ndiaye</h1>
      <p>
        Fullstack development student, passionate about both front-end and back-end programming. Proficient in languages such as HTML, CSS, JavaScript, and TypeScript, along with expertise in frameworks like Angular, Bootstrap, and Tailwind. Knowledgeable in back-end language PHP and the Laravel framework. I am self-reliant and capable of solving complex problems.
      </p>
      <ul className="flex">
        <div>
          <li><span>Age:</span>25 years</li>
          <li><span>Gender:</span>Male</li>
        </div>
        <div>
          <li><span>Phone:</span>+221 77 224 61 27</li>
          <li><span>Adress:</span>Dakar,Senegal</li>
        </div>
      </ul>
      
        <a href='../src/assets/Mouhamadou Fadal (2).pdf' download="Mouhamadou Fadal (2).pdf" class="buttonDownload">Download</a>
    </div>
  </div>
}


function Skilss(){
  return <div id="Skills">
    <h1 className='titleContainer'>My Skills</h1>
    <div className="typeLangage">
      <h2 className='title'>FrontEnd</h2>
      <div className="imageSkills">
      <div class="cardLangage">
          <img src={html} alt="" data-aos="zoom-in-up" />
          <div class="card__content">
            <p class="card__title">HTML
            </p><p class="card__description">HTML, or HyperText Markup Language, is a standard markup language used in web development to create and design web pages.</p>
          </div>
      </div>

      <div class="cardLangage">
          <img src={css} alt="" data-aos="zoom-in-down"/>
          <div class="card__content">
            <p class="card__title">CSS
            </p><p class="card__description">CSS, or Cascading Style Sheets, is a style sheet language used for describing the presentation of a document written in HTML or XML. </p>
          </div>
      </div>

      <div class="cardLangage">
          <img src={js} alt="" data-aos="zoom-in-up"/>
          <div class="card__content">
            <p class="card__title">Javascript
            </p><p class="card__description">JavaScript is a versatile and widely used programming language that is primarily known for adding interactivity to web pages</p>
          </div>
      </div>

      <div class="cardLangage">
        <img src={typescript} alt="" data-aos="zoom-in-down"/>
          <div class="card__content">
            <p class="card__title">TypeScript
            </p><p class="card__description">TypeScript is a superset of JavaScript that adds static typing to the language. </p>
          </div>
      </div>

      <div class="cardLangage">
        <img src={angular} alt="" data-aos="zoom-in-up"/>
          <div class="card__content">
            <p class="card__title">Angular
            </p><p class="card__description">Angular is a popular open-source web application framework developed by Google. </p>
          </div>
      </div>
      
      <div class="cardLangage">
        <img src={Tailwind} alt="" data-aos="zoom-in-down"/>
          <div class="card__content">
            <p class="card__title">TailWind
            </p><p class="card__description">Tailwind CSS is a utility-first CSS framework that provides a set of low-level utility classes to build designs directly in your markup.</p>
          </div>
      </div>

      <div class="cardLangage">
        <img src={bootstrap} alt="" data-aos="zoom-in-up"/>
          <div class="card__content">
            <p class="card__title">Bootstrap
            </p><p class="card__description">Bootstrap is a popular open-source front-end framework developed by Twitter.</p>
          </div>
      </div>
      </div>
      
    </div>

    <div className="typeLangage">
      <h2 className='title'>BackEnd-SGBD-visual modeling-Mobile</h2>
      <div className="imageSkills">
          <div class="cardLangage">
            <img src={uml} alt="" data-aos="zoom-in-left"/>
              <div class="card__content">
                <p class="card__title">Uml
                </p><p class="card__description">UML, or Unified Modeling Language, is a standardized modeling language used in software engineering for visualizing.</p>
              </div>
          </div>

          <div class="cardLangage">
          <img src={mysql} alt="" data-aos="zoom-in-left"/>
              <div class="card__content">
                <p class="card__title">Mysql
                </p><p class="card__description">MySQL is an open-source relational database management system (RDBMS) that is widely used for building and managing databases.</p>
              </div>
          </div>

          <div class="cardLangage">
          <img src={laravel} alt="" data-aos="zoom-in-left"/>
              <div class="card__content">
                <p class="card__title">laravel
                </p><p class="card__description">Laravel is a free, open-source PHP web framework designed for building modern, robust web applications.</p>
              </div>
          </div>

          <div class="cardLangage">
          <img src={php} alt="" data-aos="zoom-in-left"/>
              <div class="card__content">
                <p class="card__title">PHP
                </p><p class="card__description">PHP (Hypertext Preprocessor) is a widely-used open-source server-side scripting language that is especially suited for web development.</p>
              </div>
          </div>

          <div class="cardLangage">
          <img src={ionic} alt="" data-aos="zoom-in-left"/>
              <div class="card__content">
                <p class="card__title">IONIC
                </p><p class="card__description">Ionic is an open-source framework for building cross-platform mobile applications using web technologies such as HTML, CSS, and JavaScript/TypeScript.</p>
              </div>
          </div>
          
          
      </div>
    </div>
  </div>
}

function Education(){
  return <div id="experience">
  <h1 className='titleContainer'>Education</h1>
  <div className="box-container">
      <div className="box" data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000">
            <div className="content" >
              <div className="school">
                  <img src={uvs} alt=""/>
                  <p>2019-2023</p>
              </div>
              <h3>Developpement Web</h3>
              <p>           
                After obtaining my baccalaureate, I joined the Virtual University of Senegal from 2019 to 2023, where I earned my degree in web and mobile development. This experience strengthened my passion for programming.
              </p>
          </div>
      </div>

      <div className="box" data-aos="flip-right"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000">
          <div className="content">
              <div className="school">
                  <img src={sonatel} alt=""/>
                  <p>janvier-2023 - octobre-2023</p>
              </div>
              <h3>Developpement Web</h3>
              <p>
              Following the completion of my degree, I took part in a competition at Sonatel Academy, where I was selected for an intensive 10-month training program from January to October 2023. This experience was crucial in enhancing my skills, delving into new programming languages, and acquiring best practices in web development. It significantly contributed to my expertise, particularly in areas such as Angular, Laravel, etc.
              </p>
          </div>
      </div>
  </div>
</div>
}

function Project(){

  return <div id='project' className="">
       <h1 className='titleContainer'>Projects</h1>
       <div className="portfolio">
          <CarouselProjet></CarouselProjet>
       </div>
  </div>
}

function Contact(){
  return <div id="contact">
    <h1 className='titleContainer'>Contact me</h1>
    <div className="info" data-aos="fade-down-right">
        <p><span><img src={telephone} alt="" /></span>+221 77 224 61 27</p>
        <p><span><img src={mail} alt="" /></span>fndiaye1011@gmail.com</p>
    </div>
  </div>
}




function TypedText() {
  const typedTextRef = useRef();

  useEffect(() => {
    const options = {
      strings: ['Developper FrontEnd.', 'Developper BackEnd.','Developper FullStack.'],
      typeSpeed: 50,  // Vitesse de frappe du texte
      backSpeed: 30,  // Vitesse de suppression du texte
      loop: true,     // Répéter l'animation en boucle
    };

    const typed = new Typed(typedTextRef.current, options);

    // Nettoyer les ressources lors du démontage du composant
    return () => {
      typed.destroy();
    };
  }, []);

  return <span ref={typedTextRef}></span>;
}

 
export function CarouselProjet() {
  return (
    <Carousel
      className="rounded-xl pb-9" data-aos="fade-right"
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
    >
  
  <div className='projectPresentation' data-aos="fade-left">
          <div className="image">
              <img
                src={bellaOrange}
                alt="image 1"
                className="projetImage object-cover"
              />
          </div>

          <div className="content">
              <h1 className='Title'>Bella Orange</h1>
              <p>This is a school project we had at Sonatel Academy, involving the application of HTML and CSS basics, as well as the implementation of website responsiveness.</p>
              <div className='technologieImg'>
                <img src={html} alt="" />
                <img src={css} alt="" />
              </div>
          </div>
      </div>
    
   
       <div className='projectPresentation'>
          <div className="image">
              <img
                src={emoji}
                alt="image 1"
                className="projetImage object-cover"
              />
          </div>

          <div className="content">
              <h1 className='Title'>Picman And Emoji</h1>
              <p>This is a small HTML CSS project designed for practicing transitions. We drew inspiration from the Pac-Man game and also recreated some emojis.</p>
              <div className='technologieImg'>
                <img src={html} alt="" />
                <img src={css} alt="" />
              </div>
          </div>
       </div>
  

       <div className='projectPresentation'>
          <div className="image">
              <img
                src={transaction}
                alt="image 1"
                className="projetImage object-cover"
              />
          </div>

          <div className="content">
              <h1 className='Title'>Transaction Management</h1>
              <p>This is an application for managing user transactions across different operators. This project was developed using HTML, CSS, and JavaScript.</p>
              <div className='technologieImg'>
                <img src={html} alt="" />
                <img src={css} alt="" />
                <img src={js} alt="" />
              </div>
          </div>
       </div>


       <div className='projectPresentation'>
          <div className="image">
              <img
                src={planning}
                alt="image 1"
                className="projetImage object-cover"
              />
          </div>

          <div className="content">
              <h1 className='Title'>Teacher Schedule Management</h1>
              <p>This is a project aimed at managing the schedules of teachers in a school. The project was developed using HTML, CSS, and JavaScript. The application allows for efficient planning and management of teachers' schedules.</p>
              <div className='technologieImg'>
                <img src={html} alt="" />
                <img src={css} alt="" />
                <img src={js} alt="" />
              </div>
          </div>
       </div>

       <div className='projectPresentation'>
          <div className="image">
              <img
                src={mariage}
                alt="image 1"
                className="projetImage object-cover"
              />
          </div>

          <div className="content">
              <h1 className='Title'>Wedding Decoration Service</h1>
              <p>This is a project that provides the opportunity to visit a website for wedding decoration services. The project was developed using HTML, CSS, JavaScript, PHP, and MySQL.</p>
              <div className='technologieImg'>
                <img src={html} alt="" />
                <img src={css} alt="" />
                <img src={js} alt="" />
                <img src={php} alt="" />
                <img src={mysql} alt="" />
              </div>
          </div>
       </div>

       <div className='projectPresentation'>
          <div className="image">
              <img
                src={venteVetement}
                alt="image 1"
                className="projetImage object-cover"
              />
          </div>

          <div className="content">
              <h1 className='Title'>E-commerce Clothing Sales</h1>
              <p>This is an e-commerce project that allows for online sales. The project was developed using HTML, CSS, JavaScript, PHP, and MySQL. The application enables users to browse a selection of products, add them to their shopping cart, and place an online order.</p>
              <div className='technologieImg'>
                <img src={html} alt="" />
                <img src={css} alt="" />
                <img src={js} alt="" />
                <img src={php} alt="" />
                <img src={mysql} alt="" />
              </div>
          </div>
       </div>

       {/* <div className='projectPresentation'>
          <div className="image">
              <img
                src={PriseRendezVous}
                alt="image 1"
                className="projetImage object-cover"
              />
          </div>

          <div className="content">
              <h1 className='Title'>Dentist Appointment Scheduling</h1>
              <p>This is a web application for scheduling appointments with the dentist. It was developed using HTML, CSS, JavaScript, PHP, and MySQL.</p>
              <div className='technologieImg'>
              <img src={html} alt="" />
                <img src={css} alt="" />
                <img src={js} alt="" />
                <img src={php} alt="" />
                <img src={mysql} alt="" />
              </div>
          </div>
       </div> */}

       <div className='projectPresentation'>
          <div className="image">
              <img
                src={gestionBoutique}
                alt="image 1"
                className="projetImage object-cover"
              />
          </div>

          <div className="content">
              <h1 className='Title'>Store Management</h1>
              <p>
This is a web application that allows merchants to record customer orders and manage their product inventory. The application was developed using Angular, Laravel, and Tailwind</p>
              <div className='technologieImg'>
                <img src={angular} alt="" />
                <img src={Tailwind} alt="" />
                <img src={laravel} alt="" />
              </div>
          </div>
       </div>

       <div className='projectPresentation'>
          <div className="image">
              <img
                src={gestionCouture}
                alt="image 1"
                className="projetImage object-cover"
              />
          </div>

          <div className="content">
              <h1 className='Title'>Tailoring Management</h1>
              <p>This is a web application that enables tailors to manage all aspects of their business, including the number of items for sale and items currently being crafted. It was developed using Angular, Bootstrap, and Laravel..</p>
              <div className='technologieImg'>
                <img src={angular} alt="" />
                <img src={bootstrap} alt="" />
                <img src={laravel} alt="" />
              </div>
          </div>
       </div>
    </Carousel>
  );


}

function ParticleBg(){
  async function loadParticles(main){
     await loadFull(main)
   }

   return(
       <Particles
           id="tsparticles"
           init={loadParticles}

           options={
            {
              "autoPlay": true,
              "background": {
                "color": {
                  "value": ""
                },
                "image": "",
                "position": "",
                "repeat": "",
                "size": "",
                "opacity": 1
              },
              "backgroundMask": {
                "composite": "destination-out",
                "cover": {
                  "color": {
                    "value": "#fff"
                  },
                  "opacity": 1
                },
                "enable": false
              },
              "defaultThemes": {},
              "delay": 0,
              "fullScreen": {
                "enable": true,
                "zIndex": -1
              },
              "detectRetina": true,
              "duration": 0,
              "fpsLimit": 120,
              "interactivity": {
                "detectsOn": "window",
                "events": {
                  "onClick": {
                    "enable": false,
                    "mode": []
                  },
                  "onDiv": {
                    "selectors": [],
                    "enable": false,
                    "mode": [],
                    "type": "circle"
                  },
                  "onHover": {
                    "enable": true,
                    "mode": "trail",
                    "parallax": {
                      "enable": false,
                      "force": 2,
                      "smooth": 10
                    }
                  },
                  "resize": {
                    "delay": 0.5,
                    "enable": true
                  }
                },
                "modes": {
                  "trail": {
                    "delay": 0.005,
                    "pauseOnStop": true,
                    "quantity": 5,
                    "particles": {
                      "color": {
                        "value": "#ff0000",
                        "animation": {
                          "enable": true,
                          "speed": 400,
                          "sync": true
                        }
                      },
                      "collisions": {
                        "enable": false
                      },
                      "links": {
                        "enable": false
                      },
                      "move": {
                        "outModes": {
                          "default": "destroy"
                        },
                        "speed": 2
                      },
                      "size": {
                        "value": 5,
                        "animation": {
                          "enable": true,
                          "speed": 5,
                          "minimumValue": 1,
                          "sync": true,
                          "startValue": "min",
                          "destroy": "max"
                        }
                      }
                    }
                  },
                  "attract": {
                    "distance": 200,
                    "duration": 0.4,
                    "easing": "ease-out-quad",
                    "factor": 1,
                    "maxSpeed": 50,
                    "speed": 1
                  },
                  "bounce": {
                    "distance": 200
                  },
                  "bubble": {
                    "distance": 200,
                    "duration": 0.4,
                    "mix": false,
                    "divs": {
                      "distance": 200,
                      "duration": 0.4,
                      "mix": false,
                      "selectors": []
                    }
                  },
                  "connect": {
                    "distance": 80,
                    "links": {
                      "opacity": 0.5
                    },
                    "radius": 60
                  },
                  "grab": {
                    "distance": 100,
                    "links": {
                      "blink": false,
                      "consent": false,
                      "opacity": 1
                    }
                  },
                  "push": {
                    "default": true,
                    "groups": [],
                    "quantity": 4
                  },
                  "remove": {
                    "quantity": 2
                  },
                  "repulse": {
                    "distance": 200,
                    "duration": 0.4,
                    "factor": 100,
                    "speed": 1,
                    "maxSpeed": 50,
                    "easing": "ease-out-quad",
                    "divs": {
                      "distance": 200,
                      "duration": 0.4,
                      "factor": 100,
                      "speed": 1,
                      "maxSpeed": 50,
                      "easing": "ease-out-quad",
                      "selectors": []
                    }
                  },
                  "slow": {
                    "factor": 3,
                    "radius": 200
                  },
                  "light": {
                    "area": {
                      "gradient": {
                        "start": {
                          "value": "#ffffff"
                        },
                        "stop": {
                          "value": "#000000"
                        }
                      },
                      "radius": 1000
                    },
                    "shadow": {
                      "color": {
                        "value": "#000000"
                      },
                      "length": 2000
                    }
                  }
                }
              },
              "manualParticles": [],
              "particles": {
                "bounce": {
                  "horizontal": {
                    "random": {
                      "enable": false,
                      "minimumValue": 0.1
                    },
                    "value": 1
                  },
                  "vertical": {
                    "random": {
                      "enable": false,
                      "minimumValue": 0.1
                    },
                    "value": 1
                  }
                },
                "collisions": {
                  "absorb": {
                    "speed": 2
                  },
                  "bounce": {
                    "horizontal": {
                      "random": {
                        "enable": false,
                        "minimumValue": 0.1
                      },
                      "value": 1
                    },
                    "vertical": {
                      "random": {
                        "enable": false,
                        "minimumValue": 0.1
                      },
                      "value": 1
                    }
                  },
                  "enable": false,
                  "maxSpeed": 50,
                  "mode": "bounce",
                  "overlap": {
                    "enable": true,
                    "retries": 0
                  }
                },
                "color": {
                  "value": "#ff0000",
                  "animation": {
                    "h": {
                      "count": 0,
                      "enable": true,
                      "offset": 0,
                      "speed": 50,
                      "delay": 0,
                      "decay": 0,
                      "sync": false
                    },
                    "s": {
                      "count": 0,
                      "enable": false,
                      "offset": 0,
                      "speed": 1,
                      "delay": 0,
                      "decay": 0,
                      "sync": true
                    },
                    "l": {
                      "count": 0,
                      "enable": false,
                      "offset": 0,
                      "speed": 1,
                      "delay": 0,
                      "decay": 0,
                      "sync": true
                    }
                  }
                },
                "groups": {},
                "move": {
                  "angle": {
                    "offset": 0,
                    "value": 90
                  },
                  "attract": {
                    "distance": 200,
                    "enable": false,
                    "rotate": {
                      "x": 3000,
                      "y": 3000
                    }
                  },
                  "center": {
                    "x": 50,
                    "y": 50,
                    "mode": "percent",
                    "radius": 0
                  },
                  "decay": 0,
                  "distance": {},
                  "direction": "none",
                  "drift": 0,
                  "enable": true,
                  "gravity": {
                    "acceleration": 9.81,
                    "enable": false,
                    "inverse": false,
                    "maxSpeed": 50
                  },
                  "path": {
                    "clamp": true,
                    "delay": {
                      "random": {
                        "enable": false,
                        "minimumValue": 0
                      },
                      "value": 0
                    },
                    "enable": false,
                    "options": {}
                  },
                  "outModes": {
                    "default": "out",
                    "bottom": "out",
                    "left": "out",
                    "right": "out",
                    "top": "out"
                  },
                  "random": false,
                  "size": false,
                  "speed": 2,
                  "spin": {
                    "acceleration": 0,
                    "enable": false
                  },
                  "straight": false,
                  "trail": {
                    "enable": false,
                    "length": 10,
                    "fill": {}
                  },
                  "vibrate": false,
                  "warp": false
                },
                "number": {
                  "density": {
                    "enable": true,
                    "width": 1920,
                    "height": 1080
                  },
                  "limit": 0,
                  "value": 100
                },
                "opacity": {
                  "random": {
                    "enable": true,
                    "minimumValue": 0.3
                  },
                  "value": {
                    "min": 0.3,
                    "max": 0.8
                  },
                  "animation": {
                    "count": 0,
                    "enable": true,
                    "speed": 0.5,
                    "decay": 0,
                    "delay": 0,
                    "sync": false,
                    "mode": "auto",
                    "startValue": "random",
                    "destroy": "none",
                    "minimumValue": 0.3
                  }
                },
                "reduceDuplicates": false,
                "shadow": {
                  "blur": 0,
                  "color": {
                    "value": "#000"
                  },
                  "enable": false,
                  "offset": {
                    "x": 0,
                    "y": 0
                  }
                },
                "shape": {
                  "close": true,
                  "fill": true,
                  "options": {},
                  "type": "circle"
                },
                "size": {
                  "random": {
                    "enable": true,
                    "minimumValue": 1
                  },
                  "value": {
                    "min": 1,
                    "max": 3
                  },
                  "animation": {
                    "count": 0,
                    "enable": true,
                    "speed": 3,
                    "decay": 0,
                    "delay": 0,
                    "sync": false,
                    "mode": "auto",
                    "startValue": "random",
                    "destroy": "none",
                    "minimumValue": 1
                  }
                },
                "stroke": {
                  "width": 0
                },
                "zIndex": {
                  "random": {
                    "enable": false,
                    "minimumValue": 0
                  },
                  "value": 0,
                  "opacityRate": 1,
                  "sizeRate": 1,
                  "velocityRate": 1
                },
                "destroy": {
                  "bounds": {},
                  "mode": "none",
                  "split": {
                    "count": 1,
                    "factor": {
                      "random": {
                        "enable": false,
                        "minimumValue": 0
                      },
                      "value": 3
                    },
                    "rate": {
                      "random": {
                        "enable": false,
                        "minimumValue": 0
                      },
                      "value": {
                        "min": 4,
                        "max": 9
                      }
                    },
                    "sizeOffset": true,
                    "particles": {}
                  }
                },
                "roll": {
                  "darken": {
                    "enable": false,
                    "value": 0
                  },
                  "enable": false,
                  "enlighten": {
                    "enable": false,
                    "value": 0
                  },
                  "mode": "vertical",
                  "speed": 25
                },
                "tilt": {
                  "random": {
                    "enable": false,
                    "minimumValue": 0
                  },
                  "value": 0,
                  "animation": {
                    "enable": false,
                    "speed": 0,
                    "decay": 0,
                    "sync": false
                  },
                  "direction": "clockwise",
                  "enable": false
                },
                "twinkle": {
                  "lines": {
                    "enable": false,
                    "frequency": 0.05,
                    "opacity": 1
                  },
                  "particles": {
                    "enable": false,
                    "frequency": 0.05,
                    "opacity": 1
                  }
                },
                "wobble": {
                  "distance": 5,
                  "enable": false,
                  "speed": {
                    "angle": 50,
                    "move": 10
                  }
                },
                "life": {
                  "count": 0,
                  "delay": {
                    "random": {
                      "enable": false,
                      "minimumValue": 0
                    },
                    "value": 0,
                    "sync": false
                  },
                  "duration": {
                    "random": {
                      "enable": false,
                      "minimumValue": 0.0001
                    },
                    "value": 0,
                    "sync": false
                  }
                },
                "rotate": {
                  "random": {
                    "enable": false,
                    "minimumValue": 0
                  },
                  "value": 0,
                  "animation": {
                    "enable": false,
                    "speed": 0,
                    "decay": 0,
                    "sync": false
                  },
                  "direction": "clockwise",
                  "path": false
                },
                "orbit": {
                  "animation": {
                    "count": 0,
                    "enable": false,
                    "speed": 1,
                    "decay": 0,
                    "delay": 0,
                    "sync": false
                  },
                  "enable": false,
                  "opacity": 1,
                  "rotation": {
                    "random": {
                      "enable": false,
                      "minimumValue": 0
                    },
                    "value": 45
                  },
                  "width": 1
                },
                "links": {
                  "blink": false,
                  "color": {
                    "value": "random"
                  },
                  "consent": false,
                  "distance": 100,
                  "enable": true,
                  "frequency": 1,
                  "opacity": 1,
                  "shadow": {
                    "blur": 5,
                    "color": {
                      "value": "#000"
                    },
                    "enable": false
                  },
                  "triangles": {
                    "enable": false,
                    "frequency": 1
                  },
                  "width": 1,
                  "warp": false
                },
                "repulse": {
                  "random": {
                    "enable": false,
                    "minimumValue": 0
                  },
                  "value": 0,
                  "enabled": false,
                  "distance": 1,
                  "duration": 1,
                  "factor": 1,
                  "speed": 1
                }
              },
              "pauseOnBlur": true,
              "pauseOnOutsideViewport": true,
              "responsive": [],
              "smooth": false,
              "style": {},
              "themes": [],
              "zLayers": 100,
              "emitters": [],
              "motion": {
                "disable": false,
                "reduce": {
                  "factor": 4,
                  "value": true
                }
              }
            }
           }
       />
   )
}

export default App
