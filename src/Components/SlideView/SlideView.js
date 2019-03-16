import React from 'react';
import Slider from 'react-slick';
import padelimage from '../../Images/Padel-image.jpg';
import bowlingimage from '../../Images/Bowling-image.jpg';
import teamimage from '../../Images/team-spirit.jpg';

import {
  SlideWrapper,
  SliderImage
} from './StyledSlideView';

const SlideView = () => {
  return (
    <SlideWrapper>
      <Slider 
        speed={1500}
        slidesToShow={1}
        slidesToScroll={1}
        arrows={false}
        infinite={true}
        dots={true}
        autoplay={true}
        autoplaySpeed={7000}
      >
      <SliderImage src={padelimage} alt="Padel-logo" />
      <SliderImage  src={bowlingimage} alt="Bowling-logo" />
      <SliderImage  src={teamimage} alt="Bowling-logo" />

      </Slider>
    </SlideWrapper>
  )
}

export default SlideView;
