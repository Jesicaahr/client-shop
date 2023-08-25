import React, { useEffect } from 'react';
import {
  Col,
  Container,
  Image,
  ListGroup,
  Row,
  Form,
  Button,
  Alert,
} from 'react-bootstrap';
import AddedToCartMessageComponent from '../components/AddedToCartMessageComponent';
import { Rating } from 'react-simple-star-rating';
import ImageZoom from 'js-image-zoom';

const ProductDetailsPage = () => {
  var options = {
    scale: 2,
    offset: {
      vertical: 0,
      horizontal: 0,
    },
  };
  useEffect(() => {
    new ImageZoom(document.getElementById('first'), options);
    new ImageZoom(document.getElementById('second'), options);
    new ImageZoom(document.getElementById('third'), options);
    new ImageZoom(document.getElementById('fourth'), options);
  });
  return (
    <Container>
      <AddedToCartMessageComponent />
      <Row className='mt-5'>
        <Col style={{ zIndex: 1 }} md={4}>
          <div id='first'>
            <Image
              crossOrigin='anonymous'
              fluid
              src='/images/games-category.png'
            />
          </div>
          <br />
          <div id='second'>
            <Image fluid src='/images/monitors-category.png' />
          </div>
          <br />
          <div id='third'>
            <Image fluid src='/images/tablets-category.png' />
          </div>
          <br />
          <div id='fourth'>
            <Image fluid src='/images/games-category.png' />
          </div>
          <br />
        </Col>
        <Col md={8}>
          <Row>
            <Col md={8}>
              <ListGroup variant='flush'>
                <ListGroup.Item>
                  <h1>Product Name</h1>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Rating readonly size={20} initialValue={4} /> (1)
                </ListGroup.Item>
                <ListGroup.Item>
                  Price <span className='fw-bold'>$345</span>
                </ListGroup.Item>
                <ListGroup.Item>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col md={4}>
              <ListGroup>
                <ListGroup.Item>Status: In stock</ListGroup.Item>
                <ListGroup.Item>
                  {' '}
                  Price <span className='fw-bold'>$345</span>{' '}
                </ListGroup.Item>
                <ListGroup.Item>
                  Quantity
                  <Form.Select size='lg' aria-label='Default select example'>
                    <option>1</option>
                    <option value='1'>2</option>
                    <option value='2'>3</option>
                    <option value='3'>4</option>
                  </Form.Select>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Button variant='danger'>Add to cart</Button>
                </ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
          <Row>
            <Col className='mt-5'>
              <h5>REVIEWS</h5>
              <ListGroup variant='flush'>
                {Array.from({ length: 10 }).map((item, idx) => (
                  <ListGroup.Item key={idx}>
                    John Doe <br />
                    <Rating readonly size={20} initialValue={4} /> <br />
                    20-01-2022 <br />
                    Quisque non diam et neque gravida aliquam. Vestibulum nec
                    eros ex. Nam pharetra lectus eros, bibendum interdum tellus
                    rhoncus at. Fusce ultrices erat non ornare maximus. Sed quis
                    mi in lectus dapibus vestibulum. Quisque sit amet volutpat
                    purus.
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Col>
          </Row>
          <hr />
          Send Review Form
          <Alert variant='danger'>Login first to write a review</Alert>
          <Form>
            <Form.Group
              className='mb-3'
              controlId='exampleForm.ControlTextarea1'
            >
              <Form.Label>Write a review</Form.Label>
              <Form.Control as='textarea' rows={3} />
            </Form.Group>
            <Form.Select aria-label='Default select example'>
              <option>Your rating</option>
              <option value='5'>5 (very good)</option>
              <option value='4'>4 (good)</option>
              <option value='3'>3 (average)</option>
              <option value='2'>2 (bad)</option>
              <option value='1'>1 (awful)</option>
            </Form.Select>
            <Button className='mb-3 mt-3' variant='primary'>
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetailsPage;
