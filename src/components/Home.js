import React from "react";
import me from '../media/LinkedIn.jpg'; // with import

class Home extends React.Component {

  render() {
    return (
      <div>
        <h1> Joseph Harwood </h1>
        <img src={me} width="50%" height="50%"/>
      </div>
    )
  }
}
export default Home
