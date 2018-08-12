import React, { Component } from 'react';
import logo from './Paddles.png';
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

        <Container text className="body-container">
          <Header as='h1'>Oklahoma RUF/NEKS Alumni Association</Header>
          <p>America's Oldest Male Spirit Organization</p>
          <p>
            Our mission is to provide for the RUF/NEKS organization, its current members and alumni, and to provide a foundation for scholarships to current members and to sponsor events for our alumni.
          </p>

          {/* <Image src='/images/wireframe/media-paragraph.png' style={{ marginTop: '2em' }} /> */}
        </Container>
      </div>
    );
  }
}

export default App;
