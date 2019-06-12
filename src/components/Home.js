import React, { useState } from 'react';

const Home = () => {

  const [resumeClicked, showResume] = useState(false)

  const renderResume = () => {
    if (resumeClicked === true) {
      return (
        <div>
          <br/>
          <iframe src="https://docs.google.com/document/d/e/2PACX-1vQcO74u2RzZE1gKuygyq_3yM-Kk1AvyJwHgeEdjcLKchjt0Af2WGHgr7jGUXG86lksaw3ngrgnc3VTc/pub?embedded=true" width='600px' height='400px'></iframe>
        </div>
      )
    } else {
      return null
    }
  }

  return (
  <div className="">
    <button onClick={() => showResume(!resumeClicked)}>
      Show Resume
    </button>
    <br/>
    {renderResume()}
    <br/>
    <h2>Projects</h2>
    <br/>
    <h3>Cinematch</h3>
    <p>Movie and TV recommendation website with a chat</p>
    <p>Built using Ruby on Rails, Javacript, and React</p>
    <a href="https://cinematch-jbharwood.herokuapp.com" target="_blank"> Hosted Site </a>
  </div>
  )
}

export default Home

// import React from "react";
//
// class Home extends React.Component {
//
//   state = {
//     resumeClicked: false
//   }
//
//   showResume = () => {
//     this.setState({resumeClicked: !this.state.resumeClicked})
//   }
//
//   renderResume = () => {
//     if (this.state.resumeClicked === true) {
//       return (
//         <div>
//           <iframe src="https://docs.google.com/document/d/e/2PACX-1vQcO74u2RzZE1gKuygyq_3yM-Kk1AvyJwHgeEdjcLKchjt0Af2WGHgr7jGUXG86lksaw3ngrgnc3VTc/pub?embedded=true" width='500px' height='623px'></iframe>
//         </div>
//       )
//     } else {
//       return null
//     }
//   }
//
//   render() {
//     return (
//       <div>
//         <button onClick={this.showResume}>
//           Show Resume
//         </button>
//         {this.renderResume()}
//       </div>
//     )
//   }
// }
// export default Home
