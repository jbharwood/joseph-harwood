import React from "react";
import linkedin from '../media/linkedincolor.png'
import github from '../media/github.png'
import medium from '../media/medium.png'

class Contact extends React.Component {

  render() {
    return (
      <div class="body">
        <h1> Contact </h1>
        <div className="bodyContainer" align="left">
          <p>Feel free to send me an email or contact me on any of these sites:</p>
          <img align="left" src={linkedin} alt="LinkedIn" title="LinkedIn" className="site_image"/>
          <a href="https://www.linkedin.com/in/josephblakeharwood/" target="_blank"> LinkedIn </a>
          <br/>
          <img align="left" src={github} alt="Github" title="Github" className="site_image"/>
          <a href="https://github.com/jbharwood" target="_blank"> Github </a>
          <br/>
          <img align="left" src={medium} alt="Blog" title="Blog" className="site_image"/>
          <a href="https://medium.com/@josephharwood_62087" target="_blank"> Blog </a>
          <br/>
          <br/>
          <p> josephblakeharwood@gmail.com </p>
        </div>
      </div>
    )
  }

}
export default Contact
