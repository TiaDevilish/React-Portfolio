
import React from "react";
import { Parallax, Background } from "react-parallax";
import imgbg from "./../portimg.jpg";
import profil from "./../profpic.PNG";
import github from "./../git.PNG";
import linkedin from "./../link.PNG";
import gmail from "./../gmail2.png";
import vibe from "./../BookToRead.PNG";
import daypalanner from "./../Workdayscheduler.PNG";
import burger from "./../eatdaburger.PNG";
import employee from "./../employeedirectory.PNG"

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [
        {
          id: 2,
          name: "Workday-Scheduler",
          img: daypalanner,
          githublink: "https://github.com/TiaDevilish/Work-Day-Scheduler",
          link: "https://github.com/TiaDevilish/Work-Day-Scheduler",
          browserlink: "https://github.com/TiaDevilish/Work-Day-Scheduler",
          description: `Javascript - Momentjs - jQuery -  HTML -  CSS,
          Bootstrap.`,
        },
        {
          id: 3,
          name: "Eat-Da-Burger",
          img:burger,
          githublink: "https://github.com/TiaDevilish/Eat-Da_Burger",
          link: "https://github.com/TiaDevilish/Eat-Da_Burger",
          browserlink: "https://github.com/TiaDevilish/Eat-Da_Burger",
          description: `Bootstrap - Express.js - Node.js - Sequelize - Handlebars.js - MySql - Heroku.`,
        },
        {
          id: 4,
          name: "Employee-Directory",
          img: employee,
          githublink: "https://github.com/TiaDevilish/Employee-Directory",
          link: "https://github.com/TiaDevilish/Employee-Directory",
          browserlink: "https://sheltered-oasis-98760.herokuapp.com/",
          description: `React.js - JavaScript - CSS - HTML - Bootstrap - Moment.js - Heroku.`,
        },
        {
          id: 4,
          name: " BookToShare(Group Project)",
          img: vibe,
          githublink: "https://github.com/TiaDevilish/Group-Project-2",
          link: "https://github.com/TiaDevilish/Group-Project-2",
          browserlink: "https://young-fortress-18609.herokuapp.com/",
          description: `Javascript - HTML - CSS -
          Boostrap - MySQL -  API integration - Handlebars.`,
        },
        {
          id: 4,
          name: " BookToShare(Group Project)",
          img: vibe,
          githublink: "https://github.com/TiaDevilish/Group-Project-2",
          link: "https://github.com/TiaDevilish/Group-Project-2",
          browserlink: "https://young-fortress-18609.herokuapp.com/",
          description: `Javascript - HTML - CSS -
          Boostrap - MySQL -  API integration - Handlebars.`,
        },
        {
          id: 4,
          name: " BookToShare(Group Project)",
          img: vibe,
          githublink: "https://github.com/TiaDevilish/Group-Project-2",
          link: "https://github.com/TiaDevilish/Group-Project-2",
          browserlink: "https://young-fortress-18609.herokuapp.com/",
          description: `Javascript - HTML - CSS -
          Boostrap - MySQL -  API integration - Handlebars.`,
        },
        //
      ],
    };
  }
  render() {
    return (
      <div className="sectionAbout" id="aboutme">
        
        <h1 className="aboutTitle">About</h1>

        <div className="about container">
          <h1 className="aboutTItle"></h1>
          <div className="row">
            <div className="col-lg-3">
              <img className="img-fluid" src={profil} />
            </div>
            <div className="col-lg-9">
              <p>
              I have always enjoyed programming. I have a bachelors degree in
                Computer Science and working towards a Full-Stack certificate through Rutgers University bootcamp. 
              </p>

              <p>
              This bootcamp program has shown me that Web
                Development is the right path for me. I find the challenge of an
                ever changing field and lifelong learning exciting.
              </p>
              <p>I now have experience with: React, MongoDB, MySql, Node.js, Express.js, JavaScript, HTML, CSS,
                  Bootstrap and Git.</p>
            </div>
            

            <div className="col-lg-8">
              <a href="#">
                <img className=" img-fluid github" src={github} />
              </a>

              <a href="#">
                <img className="img-fluid linkedin" src={linkedin} />
              </a>
              <a href="#">
                <img className="img-fluid gmail" src={gmail} />
              </a>
            </div>
            
          </div>
        </div>


        <Parallax id="project"
         className="portfolio"
            blur={{ min: -100, max: 100 }}
            bgImage={imgbg}
            bgImageAlt="the dog"
            strength={500}
        >

        
          <div className="container" id="project">
          <div className="row ">
            <div className="col-lg-12">
              <h1 className="portfoliotTitle">PORTFOLIO</h1>
              <h5 className="portfoliotTitle2">These are some projects I have worked on</h5>
            </div>
            {this.state.projects.map((project) => {
              return (
                <div className="col-lg-4">
                  <div className="projectCard">
                    <a href={project.link}>
                      <img
                        className="img-fluid projectImage"
                        src={project.img}
                      />
                    </a>
                    <h2 className="projectTitle">
                      <a href={project.link}>{project.name}</a>
                    </h2>
                    <div className="projectDescription">
                      {project.description.slice(0,60)}
                    </div>
                    <div className="linkIcone">
                    <a href={project.githublink} className="btn btn-primary mr-2" target="_blank"><i
                className="fab fa-github"></i></a>
            <a href={project.browserlink} className="btn btn-primary" target="_blank"><i className="fab fa-chrome"></i></a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          </div>
         
       

        </Parallax>

        <div className="contact container" id="contactme">
          <div className="row justify-content-md-center">
            <div className="col-lg-12">
              <h1>CONTACT</h1>
            </div>
            <div className="col-lg-8 ">
              <form>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Name"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="E-mail"
                  />
                </div>
                <div className="form-group">
                  <textarea
                    className="form-control"
                    placeholder="Message"
                    rows="8"
                  ></textarea>
                  <div className="row text-md-left text-sm-center">
                    <div className="col-12 col-sm-12">
                      <button
                        type="submit"
                        className="btn btn-success mb-2 hidden"
                      >
                        Send Message
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Container;
