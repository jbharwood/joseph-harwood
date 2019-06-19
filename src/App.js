import React from 'react';
import './App.css';
import About from './components/About';
import Home from './components/Home';
import Contact from './components/Contact';
import { NavLink, Switch, Route, Redirect } from 'react-router-dom';
import linkedin from './media/linkedincolor.png'
import github from './media/github.png'
import medium from './media/medium.png'

function App() {
  return (
    <div className="App">

      <nav>
        <ul>
          <li><NavLink exact activeClassName="current" to='/home'>Home</NavLink></li>
          <li><NavLink exact activeClassName="current" to='/about'>About</NavLink></li>
          <li><NavLink exact activeClassName="current" to='/contact'>Contact</NavLink></li>
          <div className="navBarRight">
            <li><a href="https://www.linkedin.com/in/josephblakeharwood/" target="_blank"> <img src={linkedin} className="contact_bar_image"/></a></li>
            <li><a href="https://github.com/jbharwood" target="_blank"><img src={github}  className="contact_bar_image"/></a></li>
            <li><a href="https://medium.com/@josephharwood_62087" target="_blank"><img src={medium} className="contact_bar_image"/></a></li>
          </div>
        </ul>
      </nav>
      <Switch>
        <Route path='/home' component={Home}></Route>
        <Route exact path='/about' component={About}></Route>
        <Route exact path='/contact' component={Contact}></Route>
        <Route exact path='/contact' component={Contact}></Route>
        <Redirect from="/" to= "/home" />
      </Switch>
    </div>
  );
}

export default App;
