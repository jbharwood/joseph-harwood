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
