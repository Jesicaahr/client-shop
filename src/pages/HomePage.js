import React from 'react';
import ProductCarouselComponent from '../components/ProductCarouselComponent';
import CategoryCardComponent from '../components/CategoryCardComponent';
import { Row, Container } from 'react-bootstrap';

const HomePage = () => {
  const categories = [
    'Tablets',
    'Monitors',
    'Games',
    'Printers',
    'Softwares',
    'Cameras',
    'Books',
    'Videos',
  ];
  return (
    <>
      <ProductCarouselComponent />
      <Container>
        <Row xs={1} md={2} className='g-4 mt-5'>
          {categories.map((category, idx) => (
            <CategoryCardComponent category={category} idx={idx} key={idx} />
          ))}
        </Row>
      </Container>
    </>
  );
};

export default HomePage;
