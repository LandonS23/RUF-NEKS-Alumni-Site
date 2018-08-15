import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {
  Button,
  Container,
  Dropdown,
  Image,
  Menu
} from 'semantic-ui-react';

import './App.css';

import Home from './components/home/Home';
import Calendar from './components/calendar/Calendar';
import Members from './components/member-logs/Members';
import logo from './resources/paddles.png';
// import crest from './Crest.png';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Menu fixed='top' inverted>
            <Container>
              <Link to="/" className="home-link">
                <Menu.Item className="link" header>
                    <Image size='mini' src={logo} className="logo" />
                    RUF/NEKS Alumni Association
                </Menu.Item>
              </Link>

              <Link to="/dues"><Menu.Item className="link">Pay Dues</Menu.Item></Link>

              <Dropdown item simple text='Donate'>
                <Dropdown.Menu>
                  <Link to="/donate-scholarship"><Dropdown.Item className="dropdown-link">Donate to Scholarship</Dropdown.Item></Link>
                  <Link to="/donate-tailgates"><Dropdown.Item className="dropdown-link">Donate to Tailgates</Dropdown.Item></Link>
                </Dropdown.Menu>
              </Dropdown>

              <Link to="/calendar"><Menu.Item className="link">Event Calendar</Menu.Item></Link>
              <Link to="/members"><Menu.Item className="link">Membership Logs</Menu.Item></Link>
              <Link to="/photo-archives"><Menu.Item className="link">Photo Archives</Menu.Item></Link>

              <Menu.Item position='right' className="right-menu">
                <Link to="/login"><Button inverted>Log in</Button></Link>
                <Link to="/sign-up"><Button inverted className="sign-up-button">Sign Up</Button></Link>
              </Menu.Item>
            </Container>
          </Menu>

          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/calendar" component={Calendar} />
            <Route path="/members" component={Members} />

            <Route component={Home} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
