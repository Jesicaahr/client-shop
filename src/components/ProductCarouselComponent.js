import React from 'react';
import { Carousel } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const ProductCarouselComponent = () => {
  const cursorP = {
    cursor: 'pointer',
  };
  return (
    <Carousel>
      <Carousel.Item>
        <img
          crossOrigin='anonymous'
          style={{ height: '300px', objectFit: 'cover' }}
          className='d-block w-100'
          src='/images/carousel/carousel-1.png'
          alt='first slide'
        />
        <Carousel.Caption>
          <LinkContainer style={cursorP} to='/product-details'>
            <h3>Best Seller in Laptop Category</h3>
          </LinkContainer>
          <p>Dell Inspiration 15 3000 Laptop, 15.6 inch HD</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{ height: '300px', objectFit: 'cover' }}
          className='d-block w-100'
          src='/images/carousel/carousel-2.png'
          alt='second slide'
        />
        <Carousel.Caption>
          <LinkContainer style={cursorP} to='/product-details'>
            <h3>Best Seller in Book Category</h3>
          </LinkContainer>
          <p>World of Eric Carle, Hear Bear Roar 30-Button Animal Sound Book</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{ height: '300px', objectFit: 'cover' }}
          className='d-block w-100'
          src='/images/carousel/carousel-3.png'
          alt='third slide'
        />
        <Carousel.Caption>
          <LinkContainer style={cursorP} to='/product-details'>
            <h3>Best Seller in Camera Category</h3>
          </LinkContainer>
          <p>
            4K Camcorder Video Camera 60FPS 48MP Vlogging Camera for Youtube
            Wifi 16X Digital Camera
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default ProductCarouselComponent;
