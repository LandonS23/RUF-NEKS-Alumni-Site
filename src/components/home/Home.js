import React, { Component } from 'react';
import {
  Container,
  Header
} from 'semantic-ui-react';

import video from '../../resources/NEKS.mp4';

import './Home.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.videoRef = React.createRef();
  }

  componentDidMount() {
    if(window.innerWidth > 767) {
      let video = this.videoRef.current;
      setTimeout(function(){ video.play(); }, 2000);
    }
  }

  render() {
    return (
      <div>
        <div className="mobile-bg" />
        <div className="fullscreen-bg">
          <video ref={this.videoRef} loop muted src={video} preload="true" poster="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8Xw8AAoMBgDTD2qgAAAAASUVORK5CYII=" className="fullscreen-bg__video" />
        </div>

        <Container text className="body-container">
          <h3>America's Oldest Male Spirit Organization</h3>
          <Header as='h1' className="white">OKLAHOMA RUF/NEKS</Header>
          <p className="mission">Our mission is to provide for the University of Oklahoma RUF/NEKS organization. We do so by providing scholarships to current members, and sponsoring events for our alumni.</p>
          <div className="info">
            <span>$3,686.11 </span> 
            raised for the Mike James RUF/NEKS Memorial Scholarship!
          </div>
        </Container>
      </div>
    );
  }
}

export default Home;
