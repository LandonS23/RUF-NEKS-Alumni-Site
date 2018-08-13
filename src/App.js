import React, { Component } from 'react';
import logo from './paddles.png';
// import crest from './Crest.png';
import video from './NEKS.mp4';

import {
  Button,
  Container,
  Dropdown,
  Header,
  Image,
  Menu
} from 'semantic-ui-react'
import './App.css';

class App extends Component {

  render() {
    return (
      <div>
        <Menu fixed='top' inverted>
          <Container>
            <Menu.Item as='a' header>
              <Image size='mini' src={logo} className="logo" />
              RUF/NEKS Alumni Association
            </Menu.Item>

            <Menu.Item as='a'>Pay Dues</Menu.Item>

            <Dropdown item simple text='Donate'>
              <Dropdown.Menu>
                <Dropdown.Item>Donate to Scholarship</Dropdown.Item>
                <Dropdown.Item>Donate to Tailgates</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Menu.Item as='a'>Event Calendar</Menu.Item>
            <Menu.Item as='a'>Membership Logs</Menu.Item>
            <Menu.Item as='a'>Photo Archives</Menu.Item>

            <Menu.Item position='right' className="right-menu">
              <Button as='a' inverted>Log in</Button>
              <Button as='a' inverted className="sign-up-button">Sign Up</Button>
            </Menu.Item>
          </Container>
        </Menu>

        <div className="fullscreen-bg">
          <video loop muted autoPlay src={video} className="fullscreen-bg__video" />
        </div>

        <Container text className="body-container">
          <Header as='h1' className="white">Oklahoma RUF/NEKS Alumni Association</Header>
          <p>America's Oldest Male Spirit Organization</p>

          {/* <Image src='/images/wireframe/media-paragraph.png' style={{ marginTop: '2em' }} /> */}
        </Container>
      </div>
    );
  }
}

export default App;
