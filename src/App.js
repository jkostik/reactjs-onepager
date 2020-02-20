<<<<<<< HEAD
import React from 'react';
import { Switch, Route, Link, BrowserRouter, Redirect } from "react-router-dom";
import logo from './logo.svg';
import Main from "./Main";
import Aside from "./Aside";
import Footer from "./Footer";
import './App.css';

// import Nav from "./Nav";

class App extends React.Component {
  constructor(props){
    super(props);
    
    this.state = {
      currentlayout: 0
    }
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <nav>
            <div className="nav-logo">
              <img src={logo} className="App-logo" alt="logo" />
            </div>
            <ul className="nav-main">
              <li>
                  <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route path="/home" >
                <Main layout="home-page" />
                <Aside />
                <Footer />
            </Route>
            <Route path="/about">
              <Main layout="sub-page"/>
              <Footer />
            </Route>
            <Redirect from="/" to="/home" />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

=======
import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from "./Nav";
import Main from "./Main";
import Aside from './Aside';
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
        <Nav logo={logo}/>
        <Main />
        <Aside />
      <Footer />
    </div>
  );
}

>>>>>>> c3c822ddc762cbd33d12449789c57df8bf661c7f
export default App;