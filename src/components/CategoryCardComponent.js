import React from 'react';
import { Button, Card } from 'react-bootstrap';

const CategoryCardComponent = ({ category, idx }) => {
  const images = [
    '/images/tablets-category.png',
    '/images/monitors-category.png',
    '/images/games-category.png',
    'https://asset.kompas.com/crops/pVMUY7LLi7J6ldUprf977ikGNUs=/0x82:2500x1748/750x500/data/photo/2020/12/10/5fd1bd82c3910.jpg',
    '/images/tablets-category.png',
    '/images/monitors-category.png',
    '/images/games-category.png',
    'https://asset.kompas.com/crops/pVMUY7LLi7J6ldUprf977ikGNUs=/0x82:2500x1748/750x500/data/photo/2020/12/10/5fd1bd82c3910.jpg',
  ];
  return (
    <Card>
      <Card.Img
        crossOrigin='anonymous'
        variant='top'
        src={images[idx]}
        style={{ height: '20rem', objectFir: 'cover' }}
      />
      <Card.Body>
        <Card.Title>{category}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant='primary'>Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};

export default CategoryCardComponent;
