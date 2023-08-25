import React from 'react';
import { useState } from 'react';
import { Alert } from 'react-bootstrap';

const AddedToCartMessageComponent = () => {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <Alert
        show={show}
        variant='danger'
        onClose={() => setShow(false)}
        dismissible
      >
        <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
        <p>
          Change this and that and try again. Duis mollis, est non commodo
          luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
          Cras mattis consectetur purus sit amet fermentum.
        </p>
      </Alert>
    );
  }
  //   return <Button onClick={() => setShow(true)}>Show Alert</Button>;
};

export default AddedToCartMessageComponent;
