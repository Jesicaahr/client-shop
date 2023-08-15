import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const FooterComponent = () => {
  return (
    <footer>
      <Container fluid>
        <Row className='mt-5'>
          <Col className='bg-dark text-white py-5 text-center'>
            Copy &copy; Best Online Shop
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default FooterComponent;
