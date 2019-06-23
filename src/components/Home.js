import React, { useState } from 'react';
import react from '../media/react.png'
import rails from '../media/rails.png'
import javascript from '../media/javascript.png'

const Home = () => {

  const [resumeClicked, showResume] = useState(false)

  const renderResume = () => {
    if (resumeClicked === true) {
      return (
        <div>
          <button className="contact_bar_image" onClick={() => showResume(!resumeClicked)}>
            Hide Resume
          </button>
          <br/>
          <br/>
          <div>
            <iframe src="https://docs.google.com/document/d/e/2PACX-1vQcO74u2RzZE1gKuygyq_3yM-Kk1AvyJwHgeEdjcLKchjt0Af2WGHgr7jGUXG86lksaw3ngrgnc3VTc/pub?embedded=true" width='800px' height='400px'></iframe>
          </div>
        </div>
      )
    } else {
      return (
        <button className="contact_bar_image" onClick={() => showResume(!resumeClicked)}>
          Show Resume
        </button>
      )
    }
  }

  return (
  <div className="body">
    <h1>Resume</h1>
    <br/>
    {renderResume()}
    <br/>
    <br/>
    <h1>Projects</h1>
    <br/>
    <div className="contactBody">
      <div className="wrapper">
        <header className="header">Cinematch</header>
        <article className="main">
          <p>Movie and TV recommendation website with a chat</p>
        </article>
        <aside className="aside aside-1">
          <div className="project_images">
            <img align="left" src={rails} alt="Rails" title="Rails" className="project_image" id="img3"/>
            <img align="left" src={javascript} alt="Javascript" title="Javascript" className="project_image" id="img2"/>
            <img align="left" src={react} alt="React" title="React" className="project_image" id="img1"/>
          </div>
        </aside>
        <aside className="aside aside-2">
          <a href="https://cinematch-jbharwood.herokuapp.com" target="_blank"> Hosted Site </a> <br/>
          <a href="https://github.com/jbharwood/cinematch-frontend" target="_blank"> Frontend </a> <br/>
          <a href="https://github.com/jbharwood/cinematch-backend" target="_blank"> Backend </a>
        </aside>
        <footer className="footer">
          <div
                className="video"
                style={{
                  position: "relative",
                  paddingBottom: "30%" /* 16:9 56.25%*/,
                  paddingTop: "15%",
                  height: 0
                }}
              >
                <iframe
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%"
                  }}
                  src={`https://www.youtube.com/embed/POtdwJp-Bwo`}
                  frameBorder="0"
                />
          </div>
        </footer>
      </div>
    </div>
    <br/>
    <div className="contactBody">
      <div className="wrapper">
        <header className="header">Quizalcoatl</header>
        <article className="main">
          <p>Snake trivia game incorporating a trivia element to the traditional snake game</p>
        </article>
        <aside className="aside aside-1">
          <div className="project_images">
            <img align="left" src={rails} alt="Rails" title="Rails" className="project_image" id="img3"/>
            <img align="left" src={javascript} alt="Javascript" title="Javascript" className="project_image" id="img2"/>
          </div>
        </aside>
        <aside className="aside aside-2">
          <a href="https://github.com/jbharwood/quizalcoatl-frontend" target="_blank"> Frontend </a> <br/>
          <a href="https://github.com/jbharwood/quizalcoatl-backend" target="_blank"> Backend </a>
        </aside>
        <footer className="footer">
          <div
                className="video"
                style={{
                  position: "relative",
                  paddingBottom: "30%" /* 16:9 56.25%*/,
                  paddingTop: "15%",
                  height: 0
                }}
              >
                <iframe
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%"
                  }}
                  src={`https://www.youtube.com/embed/2W2vGLwA6d0`}
                  frameBorder="0"
                />
          </div>
        </footer>
      </div>
    </div>
  </div>
  )
}

export default Home

// import React, { useState } from 'react';
// import react from '../media/react.png'
// import rails from '../media/rails.png'
// import javascript from '../media/javascript.png'
//
// const Home = () => {
//
//   const [resumeClicked, showResume] = useState(false)
//
//   const renderResume = () => {
//     if (resumeClicked === true) {
//       return (
//         <div>
//           <button className="contact_bar_image" onClick={() => showResume(!resumeClicked)}>
//             Hide Resume
//           </button>
//           <br/>
//           <br/>
//           <div>
//             <iframe src="https://docs.google.com/document/d/e/2PACX-1vQcO74u2RzZE1gKuygyq_3yM-Kk1AvyJwHgeEdjcLKchjt0Af2WGHgr7jGUXG86lksaw3ngrgnc3VTc/pub?embedded=true" width='800px' height='400px'></iframe>
//           </div>
//         </div>
//       )
//     } else {
//       return (
//         <button className="contact_bar_image" onClick={() => showResume(!resumeClicked)}>
//           Show Resume
//         </button>
//       )
//     }
//   }
//
//   return (
//   <div className="body">
//     <h1>Resume</h1>
//     <br/>
//     {renderResume()}
//     <br/>
//     <br/>
//     <h1>Projects</h1>
//     <br/>
//     <div className="bodyContainer">
//       <div className="wrapper">
//         <header className="header">Cinematch</header>
//         <article className="main">
//           <p>Movie and TV recommendation website with a chat</p>
//         </article>
//         <aside className="aside aside-1">
//           <div className="project_images">
//             <img align="left" src={rails} alt="Rails" title="Rails" className="project_image" id="img3"/>
//             <img align="left" src={javascript} alt="Javascript" title="Javascript" className="project_image" id="img2"/>
//             <img align="left" src={react} alt="React" title="React" className="project_image" id="img1"/>
//           </div>
//         </aside>
//         <aside className="aside aside-2">
//           <a href="https://cinematch-jbharwood.herokuapp.com" target="_blank"> Hosted Site </a> <br/>
//           <a href="https://github.com/jbharwood/cinematch-frontend" target="_blank"> Frontend </a> <br/>
//           <a href="https://github.com/jbharwood/cinematch-backend" target="_blank"> Backend </a>
//         </aside>
//         <footer className="footer">
//           <div
//                 className="video"
//                 style={{
//                   position: "relative",
//                   paddingBottom: "30%" /* 16:9 56.25%*/,
//                   paddingTop: "15%",
//                   height: 0
//                 }}
//               >
//                 <iframe
//                   style={{
//                     position: "absolute",
//                     top: 0,
//                     left: 0,
//                     width: "100%",
//                     height: "100%"
//                   }}
//                   src={`https://www.youtube.com/embed/POtdwJp-Bwo`}
//                   frameBorder="0"
//                 />
//           </div>
//         </footer>
//       </div>
//     </div>
//     <br/>
//     <div className="bodyContainer">
//       <div className="wrapper">
//         <header className="header">Quizalcoatl</header>
//         <article className="main">
//           <p>Snake trivia game incorporating a trivia element to the traditional snake game</p>
//         </article>
//         <aside className="aside aside-1">
//           <div className="project_images">
//             <img align="left" src={rails} alt="Rails" title="Rails" className="project_image" id="img3"/>
//             <img align="left" src={javascript} alt="Javascript" title="Javascript" className="project_image" id="img2"/>
//           </div>
//         </aside>
//         <aside className="aside aside-2">
//           <a href="https://github.com/jbharwood/quizalcoatl-frontend" target="_blank"> Frontend </a> <br/>
//           <a href="https://github.com/jbharwood/quizalcoatl-backend" target="_blank"> Backend </a>
//         </aside>
//         <footer className="footer">
//           <div
//                 className="video"
//                 style={{
//                   position: "relative",
//                   paddingBottom: "30%" /* 16:9 56.25%*/,
//                   paddingTop: "15%",
//                   height: 0
//                 }}
//               >
//                 <iframe
//                   style={{
//                     position: "absolute",
//                     top: 0,
//                     left: 0,
//                     width: "100%",
//                     height: "100%"
//                   }}
//                   src={`https://www.youtube.com/embed/2W2vGLwA6d0`}
//                   frameBorder="0"
//                 />
//           </div>
//         </footer>
//       </div>
//     </div>
//   </div>
//   )
// }
//
// export default Home
