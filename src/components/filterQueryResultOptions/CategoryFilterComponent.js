import React from 'react';
import { Form } from 'react-bootstrap';

const CategoryFilterComponent = () => {
  return (
    <>
      <span className='fw-bold'>Category</span>
      <Form>
        {Array.from({ length: 5 }).map((_, idx) => (
          <div key={idx} className='mb-3'>
            <Form.Check type='checkbox' id={`default-${idx}`}>
              <Form.Check.Input type='checkbox' isValid />
              <Form.Check.Label style={{ cursor: 'pointer' }}>
                Category-{idx + 1}
              </Form.Check.Label>
            </Form.Check>
          </div>
        ))}
      </Form>
    </>
  );
};

export default CategoryFilterComponent;
