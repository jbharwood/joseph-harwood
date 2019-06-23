import React from "react";
import me from '../media/LinkedIn.jpg'; // with import

class About extends React.Component {

  render() {
    return (
      <div className="body">
        <h1> About </h1>
        <div>
          <div className="description">
            <p> I am a full-stack web developer with a passion for creating unique user
            experiences using Ruby on Rails, JavaScript, and React and a background
            in database administration. A gaming enthusiast, bedroom guitarist, lover of
            music and film, chronic podcast listener, and Charleston native getting lost in Brooklyn.
            </p>
          </div>
          <br/>
          <img src={me} width="50%" height="50%" class="picMe"/>
        </div>
      </div>
    )
  }
}
export default About
