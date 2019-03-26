import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LoadingImage from './images/yu.png';

class ImageLoader extends Component {
  state = {
    imageSrc: '',
  };

  componentDidMount() {
    this.confirmImageExists();
  }

  componentDidUpdate(prevProps) {
    const { src } = this.props;
    if (src !== prevProps.src) {
      this.confirmImageExists();
    }
  }

  confirmImageExists() {
    const { src, defaultImageSrc } = this.props;
    this.setState({ imageSrc: defaultImageSrc });

    const image = new Image();
    image.src = src;

    image.onload = () => {
      this.setState({
        imageSrc: image.src,
      });
    };

    image.onerror = () => {
      const { defaultImageSrc } = this.props;
      this.setState({
        imageSrc: defaultImageSrc,
      });
    };
  }

  render() {
    const { imageSrc } = this.state;
    const { alt, className } = this.props;

    return <img src={imageSrc} alt={alt} className={className} />;
  }
}

ImageLoader.propTypes = {
  src: PropTypes.string.isRequired,
  loadingSrc: PropTypes.string,
  defaultImageSrc: PropTypes.string,
  alt: PropTypes.string,
};

ImageLoader.defaultProps = {
  loadingSrc: LoadingImage,
  defaultImageSrc: '/image-loader.svg',
  alt: '',
};

export default ImageLoader;
