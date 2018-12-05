import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {
  Button,
  Container,
  Dropdown,
  Image,
  Sidebar,
  Segment,
  Icon,
  Menu
} from 'semantic-ui-react';

import './App.css';

import Home from './components/home/Home';
import Calendar from './components/calendar/Calendar';
import Members from './components/member-logs/Members';
import Photos from './components/photo-archives/Photos';
import logo from './resources/paddles.png';

class App extends Component {
  state = { visible: false }

  handleButtonClick = () => this.setState({ visible: !this.state.visible })

  handleSidebarHide = () => this.setState({ visible: false })


  render() {
    const { visible } = this.state

    return (
      <Router>
        <div>
          {/* Menu desktop */}
          <div className="menu-desktop">
            <Menu fixed='top' inverted>
              <Container>
                <Link to="/" className="home-link">
                  <Menu.Item className="link" header>
                      <Image size='mini' src={logo} className="logo" />
                      RUF/NEKS Alumni Association
                  </Menu.Item>
                </Link>

                <Menu.Item className="link" header>
                    <a href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=8FUPQJCH6RHUN&source=url&fbclid=IwAR2Bd04nBE1uQsHIGmz-drp8BWdVNjoqHOgZASyvRLS258ikLmtbgzOYAaQ">Pay Dues</a>
                </Menu.Item>
                
                <Menu.Item className="link" header>
                    <a href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=8FUPQJCH6RHUN&source=url&fbclid=IwAR2Bd04nBE1uQsHIGmz-drp8BWdVNjoqHOgZASyvRLS258ikLmtbgzOYAaQ">Donate</a>
                </Menu.Item>

                <Link to="/calendar"><Menu.Item className="link">Event Calendar</Menu.Item></Link>
                <Link to="/members"><Menu.Item className="link">Membership Logs</Menu.Item></Link>
                <Link to="/photo-archives"><Menu.Item className="link">Photo Archives</Menu.Item></Link>

                <Menu.Item position='right' className="right-menu">
                  <a href="mailto:rufneksalumni@gmail.com"><Button inverted>Contact Us</Button></a>
                </Menu.Item>
              </Container>
            </Menu>

            {/* Router */}
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/calendar" component={Calendar} />
              <Route path="/members" component={Members} />
              <Route path="/photo-archives" component={Photos} />
              <Route component={Home} />
            </Switch>
          </div>

          {/* Menu mobile */}
          <div className="menu-mobile">
            <div className="menu-bar">
              <Icon name='sidebar' onClick={this.handleButtonClick} />
              <Link to="/" className="home-link">
                <Image size='mini' src={logo} className="logo" />
                <span>RUF/NEKS Alumni Association</span>
              </Link>
              <span className="fill"/>
            </div>

            <Sidebar.Pushable as={Segment}>
              <Sidebar
                as={Menu}
                animation='overlay'
                icon='labeled'
                inverted
                onHide={this.handleSidebarHide}
                vertical
                visible={visible}
                width='thin'
              >

                <Link to="/" onClick={this.handleSidebarHide}><Menu.Item className="link"><Icon name='home'/>Home</Menu.Item></Link>
                <Link to="/calendar" onClick={this.handleSidebarHide}><Menu.Item className="link"><Icon name='calendar alternate outline'/>Calendar</Menu.Item></Link>
                <a href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=8FUPQJCH6RHUN&source=url&fbclid=IwAR2Bd04nBE1uQsHIGmz-drp8BWdVNjoqHOgZASyvRLS258ikLmtbgzOYAaQ"><Menu.Item className="link"><Icon name='money bill alternate outline'/>Pay Dues</Menu.Item></a>
                <a href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=8FUPQJCH6RHUN&source=url&fbclid=IwAR2Bd04nBE1uQsHIGmz-drp8BWdVNjoqHOgZASyvRLS258ikLmtbgzOYAaQ"><Menu.Item className="link"><Icon name='dollar sign'/>Donate</Menu.Item></a>
                <Link to="/members" onClick={this.handleSidebarHide}><Menu.Item className="link"><Icon name='address book outline'/>Members</Menu.Item></Link>
                <Link to="/photo-archives" onClick={this.handleSidebarHide}><Menu.Item className="link"><Icon name='photo'/>Photos</Menu.Item></Link>
                <a href="mailto:rufneksalumni@gmail.com"><Menu.Item className="link"><Icon name='envelope outline'/>Contact</Menu.Item></a>
              </Sidebar>

              <Sidebar.Pusher dimmed={visible}>
                <Segment basic>
                  {/* Router */}
                  <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/calendar" component={Calendar} />
                    <Route path="/members" component={Members} />
                    <Route path="/photo-archives" component={Photos} />
                    <Route component={Home} />
                  </Switch>
                </Segment>
              </Sidebar.Pusher>
            </Sidebar.Pushable>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
