import React, { Component } from 'react';
import {
  Container,
  Header
} from 'semantic-ui-react';

import video from '../../resources/NEKS.mp4';

import './Home.css';

class Home extends Component {

  render() {
    return (
      <div>
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

export default Home;
