import React from "react";
import github from "./../git.PNG";
import linkedin from "./../link.PNG";
import gmail from "./../gmail2.png";

class Footer extends React.Component {
  render() {
    return (

      <div className="footeritem">
         <p className="pItem">2020 © Copyright ERB. All Rights Reserved</p>
        <div className="footerIcone">
       
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
    );
  }
}

export default Footer;
