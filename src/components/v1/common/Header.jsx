import React , {useEffect, useState} from 'react'
import MyVerticallyCenteredModal from './../Logsignup'
import { Dropdown } from 'react-bootstrap';
import { Button } from "react-bootstrap";
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import urls from './../../routes'
import axios from 'axios';
import swal from 'sweetalert'
export default function Header(props) {
   const history =useHistory() 
  const [modalShow, setModalShow] = React.useState(false);

   


  const [value,setValue] = useState({
    email:"" , 
    username:"" , 
    password :"" ,
    attchment: [] ,
    video :[]
})

const [err , setError] = useState({
     setName:"" , 
     setTitle : "" 
})
 
// useEffect(()=>{
//   axios.get('/dashboard').then(response=>{
//     console.log(response) 
// }).catch(err=>{
// console.log(err);
// } , [])

// })


const submit = (e)=> {
  //  debugger
  
 const emailorusername = value.email ; 
  const  isemail = String( emailorusername )
  .toLowerCase()
  .match(
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
   )
    
   if(isemail) {
      
     setValue({ 
       email:emailorusername ,
       username:"",
       password:value.password  
      })
       
    console.log("email" ,value )
  
    const model ={  
      username : value.username , 
      email: value.email ,
      password:value.password   
    }
                        
  if(value.email!="" && value.password!="" && value.username=== "" ) {
                axios.post('login/' , model ).then((res)=> {
                if(res.data.status===true){ 
                swal(`${res.data.result[0].username}`, " succesfully logged in ", "success");
                setModalShow(false)
                 history.push(urls.dashboard)
                return    
                }
                else{
                  swal(`${res.data.message}`,"", "warning");
                    }
            }).catch(err=>{
                console.log("Error : "  , err)
            })
     }
     
  else {
  
  if(value.name==""){
     setError({setName:" please enter name "})
  }
  if(value.title==""){
     setError({setTitle:"please Enter title  "})
    }
  
  if( value.name=="" && value.title=="" ){
  
  setError({setName:"please enter name "})
  setError({setTitle:" please Enter title " }) 
      }
  }
    
   }  else{

     setValue({ 
      email:"" ,
      username: emailorusername ,
      password:value.password 
     })
     
    
  const model ={ 
    username : value.username , 
    email: value.email ,
    password:value.password   
    }

    console.log("model" , model)
     
if(value.email=="" && value.password!="" && value.username!="" ){
              axios.post('/login' , model ).then((res)=> {
              console.log(" response " , res.data )
              if(res.data.status==true){
                swal(`${res.data.result[0].username}`, " succesfully logged in ", "success");
                return  
              }
              swal(`${res.data.message}` , "", "warning");
          }).catch(err=>{
              console.log("Error : "  , err)
          })
   }
   
else{

if(value.name==""){
   setError({setName:" please enter name "})
}
if(value.title==""){
   setError({setTitle:"please Enter title  "})
  }

if( value.name=="" && value.title=="" ){

setError({setName:"please enter name "})
setError({setTitle:" please Enter title " }) 
    }
}




 

}







}

const onChangeHandler = (e)=>{
   if(e.target.name=="attchment") {
       //  for(let i=0; i<=e.target.files.length-1 ; i++){
         setValue( {  ...value ,[e.target.name]:e.target.files  }  )
       // }
      return  
       }
    if(e.target.name=="video"){
       setValue( {  ...value ,[e.target.name]: e.target.files }  )
         
    }   

   setValue({ ...value ,  [e.target.name] : e.target.value } );
    console.log(value)
  
    }

   const {userData } = props
    return (
      
        <React.Fragment>
            
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
        <div className="container-fluid">
          <a className="navbar-brand" href="#"> Tolet <i className="fas fa-home"></i> </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">India </a>
              </li>

              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Singapur </a>
              </li>

              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Dubai </a>
              </li>

              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#"> U.S </a>
              </li>

              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" 
                   role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  click
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>

            </ul>
            <form className="d-flex"> 
            {
        userData!=false? 
        <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          
        <i className="fas fa-user-circle"></i> {userData.result.username}
             
        </Dropdown.Toggle>
      
        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Preferences</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Settings</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Logout</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
        
        
        
        :
<Button variant="outline-success btn-sm" onClick={() => setModalShow(true)}>
            <i className="fas fa-user 2x"> </i> Login/SignUp
      </Button>
            } 
             

        <MyVerticallyCenteredModal
        
        show={modalShow}
        onHide={() => setModalShow(false)}
        onchangehandler = {onChangeHandler}
        onSubmit = {()=>submit(false) }
        activeUser={userData}
        
         />
            </form>
          </div>
        </div>
        </nav>
             
        </React.Fragment>
    )
}
