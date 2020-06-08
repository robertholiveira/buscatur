import React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import ImageGalleryWrapper from './ImageGallery.style';


const generateArrayImages = (images) => {
  return images.map( image => {
    return {
      original: image.url,
      thumbnail: image.url
    }
  })
}

const PostImageGallery = ({ images }) => {
  return (
    <ImageGalleryWrapper>
      <ImageGallery
        items={generateArrayImages(images)}
        showPlayButton={false}
        showFullscreenButton={false}
        lazyLoad={true}
        slideDuration={550}
        showThumbnails={false}
        showBullets={true}
      />
    </ImageGalleryWrapper>
  );
};

export default PostImageGallery;
