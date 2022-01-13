import React , {useState} from "react";
import { Button } from "react-bootstrap";
import { Modal , Form , Row ,Col } from "react-bootstrap";
import axios from 'axios'


export default function MyVerticallyCenteredModal(props) {
  return (
     <React.Fragment>
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Login/SignUp
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
         
  
<Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword" >
    <Form.Label column sm="4"     >
      Email
    </Form.Label>

    <Col sm="8">
      <Form.Control type="text"  name="email" onChange={props.onchangehandler}  placeholder="Email"  />
    </Col>

  </Form.Group>

  <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
    <Form.Label column sm="4">
      Password
    </Form.Label>
    <Col sm="8">
      <Form.Control type="password"  placeholder="Password" name="password"  onChange={props.onchangehandler}    />
    </Col>

  </Form.Group>

  <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword" >
  <div className="d-grid gap-2">
  <Button variant="outline-success" size="sm" type="submit"
         onClick= {props.submit} >
         Login
       </Button>

  </div>

  </Form.Group>




      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
    </React.Fragment>

  );
}