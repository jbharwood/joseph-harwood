import React, { useState } from 'react';

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
    <header class="header">Header</header>
    <article class="main">
      <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
    </article>
    <aside class="aside aside-1">Aside 1</aside>
    <aside class="aside aside-2">Aside 2</aside>
    <footer class="footer">Footer</footer>
    <div className="bodyContainer">
      <h3>Cinematch</h3>
      <br/>
      <p>Movie and TV recommendation website with a chat</p>
      <p>Built using Ruby on Rails, Javacript, and React</p>
      <a href="https://cinematch-jbharwood.herokuapp.com" target="_blank"> Hosted Site </a> <br/>
      <a href="https://github.com/jbharwood/cinematch-frontend" target="_blank"> Frontend </a> <br/>
      <a href="https://github.com/jbharwood/cinematch-backend" target="_blank"> Backend </a>
      <br/>
      <br/>
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
    </div>
    <br/>
    <div className="bodyContainer">
      <h3>Quizalcoatl</h3>
      <br/>
      <p>Snake trivia game incorporating a trivia element to the traditional snake game</p>
      <p>Built using Ruby on Rails and Javacript</p>
      <a href="https://github.com/jbharwood/quizalcoatl-frontend" target="_blank"> Frontend </a> <br/>
      <a href="https://github.com/jbharwood/quizalcoatl-backend" target="_blank"> Backend </a>
      <br/>
      <br/>
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
    </div>
  </div>
  )
}

export default Home
// import React, { useState } from 'react';
//
// const Home = () => {
//
//   const [resumeClicked, showResume] = useState(false)
//
//   const renderResume = () => {
//     if (resumeClicked === true) {
//       return (
//         <div>
//             <button className="contact_bar_image" onClick={() => showResume(!resumeClicked)}>
//               Hide Resume
//             </button>
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
//       <h3>Cinematch</h3>
//       <br/>
//       <p>Movie and TV recommendation website with a chat</p>
//       <p>Built using Ruby on Rails, Javacript, and React</p>
//       <a href="https://cinematch-jbharwood.herokuapp.com" target="_blank"> Hosted Site </a> <br/>
//       <a href="https://github.com/jbharwood/cinematch-frontend" target="_blank"> Frontend </a> <br/>
//       <a href="https://github.com/jbharwood/cinematch-backend" target="_blank"> Backend </a>
//       <br/>
//       <br/>
//       <div
//             className="video"
//             style={{
//               position: "relative",
//               paddingBottom: "30%" /* 16:9 56.25%*/,
//               paddingTop: "15%",
//               height: 0
//             }}
//           >
//             <iframe
//               style={{
//                 position: "absolute",
//                 top: 0,
//                 left: 0,
//                 width: "100%",
//                 height: "100%"
//               }}
//               src={`https://www.youtube.com/embed/POtdwJp-Bwo`}
//               frameBorder="0"
//             />
//       </div>
//     </div>
//     <br/>
//     <div className="bodyContainer">
//       <h3>Quizalcoatl</h3>
//       <br/>
//       <p>Snake trivia game incorporating a trivia element to the traditional snake game</p>
//       <p>Built using Ruby on Rails and Javacript</p>
//       <a href="https://github.com/jbharwood/quizalcoatl-frontend" target="_blank"> Frontend </a> <br/>
//       <a href="https://github.com/jbharwood/quizalcoatl-backend" target="_blank"> Backend </a>
//       <br/>
//       <br/>
//       <div
//             className="video"
//             style={{
//               position: "relative",
//               paddingBottom: "30%" /* 16:9 56.25%*/,
//               paddingTop: "15%",
//               height: 0
//             }}
//           >
//             <iframe
//               style={{
//                 position: "absolute",
//                 top: 0,
//                 left: 0,
//                 width: "100%",
//                 height: "100%"
//               }}
//               src={`https://www.youtube.com/embed/2W2vGLwA6d0`}
//               frameBorder="0"
//             />
//       </div>
//     </div>
//   </div>
//   )
// }
//
// export default Home
