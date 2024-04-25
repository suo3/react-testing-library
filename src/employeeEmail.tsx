import react, { useState } from 'react';
import { Container, Form, InputGroup, Row } from 'react-bootstrap';


const EmployeeEmail = () => {
    const [email, setEmail] = useState();
    const handleChange = (e) => setEmail(e.target.value.split(' ').join('.'));

    return (
        <Container>
            <Row>
                <InputGroup className="mb-3">
                    <Form.Control placeholder="Enter your email"  onChange={handleChange}/>
                </InputGroup>
                <InputGroup.Text className='input-group-append' id="basic-addon2">@react-scripts.com</InputGroup.Text>

                {email ? <span>{`${email}@reactscripts.com`}</span>:null}
            </Row>
        </Container>
    )
}
export default EmployeeEmail