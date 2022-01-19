import React , {useEffect, useState} from "react";
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
           
          
           <span style={{display:"flex" , float:"left" , cursor:"pointer"}}> <p onClick={e=>setCurrentSa({
            signup:false ,
            login:true
           }) 
          } className={currentState.login===true?
           "text-success" : ""
          }><i className="fas fa-user 2x"> </i> Login</p>
           
             <p  onClick ={(e)=>setCurrentSa({
                 signup:true ,
                 login:false

             })} className={currentState.signup===true ?"text-success" :" "} > 
             Signup
              </p>
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

     </Form.Group> </React.Fragment> : 


<React.Fragment> 
 <Form.Group as={Row} className="mb-3" controlId="formName" >
    
    <Col sm="12">
     
      <Form.Control type="text"  name="name" onChange={props.onchangehandler}  placeholder="Name"  />
    
     </Col>

  </Form.Group>




  <Form.Group as={Row} className="mb-3" controlId="formEmail" >
    
    <Col sm="12">
     
      <Form.Control type="text"  name="email" onChange={props.onchangehandler}  placeholder="Email"  />
    
     </Col>

  </Form.Group>


  <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
  
    <Col sm="12">
      <Form.Control type="password"  placeholder="Password" name="password"  onChange={props.onchangehandler}    />
    </Col>

  </Form.Group>




  <Form.Group as={Row} className="mb-3" controlId="formMobile">
  
    <Col sm="12">
      <Form.Control type="number"  placeholder="Mobile" name="mobile"  onChange={props.onchangehandler}    />
    </Col>

  </Form.Group>



  <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword" >
  <div className="d-grid gap-2">
  <Button variant="outline-success" size="sm" type="submit"
         onClick = {props.onSubmit} >
         Signup
       </Button>

  </div>
 
     </Form.Group> </React.Fragment>




     
        }

      </Modal.Body>
       
    </Modal>
    </React.Fragment>

  );
}