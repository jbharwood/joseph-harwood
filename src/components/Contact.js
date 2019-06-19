// import React, { Component } from 'react';
//
// import github from '../media/github.png'
// import linkedin from '../media/linkedin.png'
// import medium from '../media/medium.png'
//
// class Contact extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {  }
//     }
//     render() {
//         return (
//             <div className="contact_bar">
//                 <div>
//                     <a href="https://www.linkedin.com/in/josephblakeharwood/" target="_blank"><img src={linkedin} className="contact_bar_image"/></a>
//                 </div>
//                 <div>
//                     <a href="https://github.com/jbharwood" target="_blank"><img src={github}  className="contact_bar_image"/></a>
//                 </div>
//                 <div>
//                     <a href="https://medium.com/@josephharwood_62087" target="_blank"><img src={medium} className="contact_bar_image"/></a>
//                 </div>
//             </div>
//          );
//     }
// }
//
// export default Contact;

import React from "react";

class Contact extends React.Component {

  render() {
    return (
      <div class="body">
        <h1> Contact </h1>
        <div className="bodyContainer">
          <h3> Email</h3>
          <p> josephblakeharwood@gmail.com </p>
          <div class="contactLinks">
            <a href="https://www.linkedin.com/in/josephblakeharwood/" target="_blank"> LinkedIn </a>
          </div>
          <div class="contactLinks">
            <a href="https://github.com/jbharwood" target="_blank"> Github </a>
          </div>
          <div class="contactLinks">
            <a href="https://medium.com/@josephharwood_62087" target="_blank"> Blog </a>
          </div>
        </div>
      </div>
    )
  }

}
export default Contact
