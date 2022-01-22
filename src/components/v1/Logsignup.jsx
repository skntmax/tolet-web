import React , {useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Modal , Form , Row ,Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import './../../assets/css/formcontrol.css'
import swal from 'sweetalert'
import urls from './../routes'
import constant from './../constant'
import axios from 'axios'


export default function MyVerticallyCenteredModal(props) {
   const history = useHistory()
  const [currentState , setCurrentSa ] = useState({
     signup:false ,
     login:true
  })

  const [userVal , setUserVal] = useState({
      name:"" , email:"" , password:"" , mobile:"" 
  })

   
   
   const onchangehandler =(e) =>{
    setUserVal({
        ...userVal ,[e.target.name]:e.target.value  
    })       
   }

   const signUp = (e)=>{

    console.log(constant.status.success);
   
     if((userVal.email &&userVal.name &&userVal.mobile && userVal.password)!="" ){
        const model = {
          email:userVal.email,
           name:userVal.name,
            mobile:userVal.mobile, 
             password: userVal.password
        }
       axios.post('/signup' , model ).then(response=>{
         debugger
        if(response.data.status===constant.status.success){
          swal("succesfully created ", response.data.data.username , "success");
         
           props.onHide()
            
           axios.post('/login' , 
           {username:"" , email:response.data.data.email ,
            password:model.password}).then(res=>{
              if(response.data.status===constant.status.success)
                         history.push(urls.dashboard)
              swal("Erro", response.data.messsage , "error");
              return 
                      }).catch(error=>{
            swal("Erro", response.data.messsage , "error");
              
           })
        
         }

        if(response.data.status===constant.status.failed)
              swal("Erro", response.data.data.messsage , "error");

      }).catch(err=>{
          alert("err",err)
       })


     }
     else{
        
     }
     
   }

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
           " text-success text-decoration-underline " : ""
          }  ><i className="fas fa-user 2x"> </i> Login</p>
           
             <p  onClick ={(e)=>setCurrentSa({
                 signup:true ,
                 login:false
             })} className={currentState.signup===true ?"text-success text-decoration-underline " :" "} > 
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
     
      <Form.Control type="text"  name="name"
       onChange={onchangehandler} title="Enter Full name "  placeholder="Name"  />
    
     </Col>

  </Form.Group>




  <Form.Group as={Row} className="mb-3" controlId="formEmail" >
    
    <Col sm="12">
     
      <Form.Control type="text"  name="email"
       onChange={onchangehandler}  title="Enter email " 
         placeholder="Email"  />
    
     </Col>

  </Form.Group>


  <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
  
    <Col sm="12">
      <Form.Control type="password"
        placeholder="Password" title="Enter password "
         name="password"  onChange={onchangehandler}    />
    </Col>

  </Form.Group>




  <Form.Group as={Row} className="mb-3" controlId="formMobile">
  
    <Col sm="12">
      <Form.Control type="number"  
      placeholder="Mobile" title="Enter Mobile"
       name="mobile"  onChange={onchangehandler}    />
    </Col>

  </Form.Group>



  <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword" >
  <div className="d-grid gap-2">
  <Button variant="outline-success" size="sm" type="submit"
         onClick = {signUp} >
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