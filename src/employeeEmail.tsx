import react, { useState } from "react";
import { Form, Button, InputGroup, Col } from "react-bootstrap";

const EmployeeEmail = () => {
  const [email, setEmail] = useState();
  const handleChange = (e) => setEmail(e.target.value.split(" ").join("."));

  return (
    <Col md={6}>
      <InputGroup className='mb-3' style={{ display: "inline-flex" }}>
        <Form.Control
          placeholder='Enter your email'
          onChange={handleChange}
          name='Enter your email'
          data-testid='input'
        />
        <Button variant='primary' id='button-addon1'>
          @reactscripts.com
        </Button>
      </InputGroup>

      {email ? (
        <span data-testid='output'>{`${email}@reactscripts.com`}</span>
      ) : null}
    </Col>
  );
};
export default EmployeeEmail;
