import React, { Component } from 'react';
import {
  Container,
  Header
} from 'semantic-ui-react';

import video from '../../resources/NEKS.mp4';
import crest from '../../resources/Crest.png';

import './Home.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.videoRef = React.createRef();
  }

  componentDidMount() {
    let video = this.videoRef.current;
    setTimeout(function(){ video.play(); }, 2000);
  }

  render() {
    return (
      <div>
        <div className="fullscreen-bg">
          <video ref={this.videoRef} loop muted src={video} preload="true" poster="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8Xw8AAoMBgDTD2qgAAAAASUVORK5CYII=" className="fullscreen-bg__video" />
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
