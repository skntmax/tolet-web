import React , {useState} from "react";
import { Button } from "react-bootstrap";
import { Modal , Form , Row ,Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import urls from './../routes'
import axios from 'axios'


export default function MyVerticallyCenteredModal(props) {
   
  const [currentState , setCurrentSa ] = useState({
     signup:false ,
     login:true
  })

  return (
     <React.Fragment>
       { console.log(urls) }
     <Modal
      {...props}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      >
         
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter" >
           
          
           <span style={{display:"inlineBlock"}}> <Link  className={currentState.login===true?
           "text-success" : ""
          }> Login</Link>/<Link to={urls.signup} className={currentState.signup===true ?"text-success" :" "} > Signup</Link>
      </span>
        

        
         </Modal.Title>
      </Modal.Header>
      <Modal.Body>


        {
    currentState.login===true ? 
    <React.Fragment> 
 <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword" >
    {/* <Form.Label column sm="4"     >
      Email
    </Form.Label> */}

    <Col sm="12">
     
      <Form.Control type="text"  name="email" onChange={props.onchangehandler}  placeholder="Email or Username"  />
    
     </Col>

  </Form.Group>

  <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
    {/* <Form.Label column sm="4">
      Password
    </Form.Label> */}
    <Col sm="12">
      <Form.Control type="password"  placeholder="Password" name="password"  onChange={props.onchangehandler}    />
    </Col>

  </Form.Group>

  <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword" >
  <div className="d-grid gap-2">
  <Button variant="outline-success" size="sm" type="submit"
         onClick = {props.onSubmit} >
         Login
       </Button>

  </div>
 
     </Form.Group> </React.Fragment>  : "signup" 
     
        }

      </Modal.Body>
       
    </Modal>
    </React.Fragment>

  );
}