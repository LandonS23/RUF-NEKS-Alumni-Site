import React, { Component } from 'react';
import Slider from "react-slick";
import {Image} from 'semantic-ui-react';

import './Photos.css';

import image1 from '../../resources/OldNeks.jpg';
import image2 from '../../resources/NEKS61.jpg';
import image3 from '../../resources/NEKS39.jpg';
import image4 from '../../resources/NEKS28.jpg';
import image5 from '../../resources/80s.jpeg';
import image6 from '../../resources/guns.jpg';
import image7 from '../../resources/hang.jpg';

class Photos extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            arrows: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            arrows: false,
            infinite: false
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            infinite: false
          }
        }
      ]
    };

    return (
      <div className="photos-view">
        <Slider {...settings}>
          <div>
            <Image src={image1} className="carousel-image" />
          </div>
          <div>
            <Image src={image2} className="carousel-image" />
          </div>
          <div>
            <Image src={image3} className="carousel-image" />
          </div>
          <div>
            <Image src={image4} className="carousel-image" />
          </div>
          <div>
            <Image src={image5} className="carousel-image" />
          </div>
          <div>
            <Image src={image6} className="carousel-image" />
          </div>
          <div>
            <Image src={image7} className="carousel-image" />
          </div>
        </Slider>
      </div>
    );
  }
}

export default Photos;
