import React, { Component } from 'react';
import Slider from 'react-slick';

// import './slideshow.scss';

class AppSlider extends Component {
  render() {
    const { settings, children, ref, ...others } = this.props;
    
    return (
      <Slider {...settings} ref={ref} {...others}>
        {children}
      </Slider>
    );
  }
}

export default AppSlider;
