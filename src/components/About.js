import React from "react";
import me from '../media/LinkedIn.jpg'; // with import

class About extends React.Component {

  render() {
    return (
      <div className="body">
        <h1> About </h1>
        <div>
          <div className="description">
            <p> Full-stack web developer with a passion for creating unique user
            experiences using Ruby on Rails, JavaScript, and React and a background
            in database administration. A gaming enthusiast, I bring strong skills
            in cross-functional projects that meet customer demands and deadlines in
            small environments as well as giants such as Blue Cross Blue Shield of
            South Carolina serving millions of people.</p>
          </div>
          <br/>
          <img src={me} width="50%" height="50%" class="picMe"/>
        </div>
      </div>
    )
  }
}
export default About
