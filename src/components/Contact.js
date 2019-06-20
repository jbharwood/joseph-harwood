import React from "react";
import linkedin from '../media/linkedincolor.png'
import github from '../media/github.png'
import medium from '../media/medium.png'

class Contact extends React.Component {

  render() {
    return (
      <div class="body">
        <h1> Contact </h1>
        <div className="contactContainer">
          <div className="col1">
            <div class="contactLinks">
              <img align="left" src={linkedin} alt="LinkedIn" title="LinkedIn" className="site_image"/>
              <a href="https://www.linkedin.com/in/josephblakeharwood/" target="_blank"> LinkedIn </a>
            </div>
            <div class="contactLinks">
              <img align="left" src={github} alt="Github" title="Github" className="site_image"/>
              <a href="https://github.com/jbharwood" target="_blank"> Github </a>
            </div>
            <div class="contactLinks">
              <img align="left" src={medium} alt="Blog" title="Blog" className="site_image"/>
              <a href="https://medium.com/@josephharwood_62087" target="_blank"> Blog </a>
            </div>
          </div>
          <div className="col2">
            <p> josephblakeharwood@gmail.com </p>
          </div>
        </div>
      </div>
    )
  }

}
export default Contact
