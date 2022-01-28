import React , {useEffect, useState } from 'react'
import MyVerticallyCenteredModal from './../Logsignup'
import { Dropdown } from 'react-bootstrap';
import { Button } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import urls from './../../routes'
import axios from 'axios';
import swal from 'sweetalert'
import constant from '../../constant';
import routes from 'webpack-dev-server/lib/utils/routes';
export default function Header() {
   const history = useHistory()   
     
  const [modalShow, setModalShow] = React.useState(false);

  const [value,setValue] = useState({
  
     email:"" , 
    username:"" , 
    password :"" ,
    attchment: [] ,
    video :[],
    userDetails:"" 

   })


   
const [err , setError] = useState({
     setName:"" , 
     setTitle : "" 
})
 

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
       
    const model ={  
      username : value.username , 
      email: value.email ,
      password:value.password   
    }
                        
  if(value.email!="" && value.password!="" && value.username==="" ) {
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
                setModalShow(false)
                history.push(urls.dashboard) 
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
    }


    useEffect(()=>{
       
      axios.get('/dashboard').then(response=>{
          console.log("response>>>>>>>>" , response)
        if(response.data.status===constant.status.success){
        
          setValue({        
          userDetails:response.data
        })

       }  
       else{
        swal("", response.data.messsage , "error");
          history.push(urls.home) 
      } 
        })
         
        console.log(value.userDetails)   
    } ,[] )
     



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
        value.userDetails!=""?
       
         <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          
        <i className="fas fa-user-circle"></i> {value.userDetails.result.username}  
             
        </Dropdown.Toggle>
      
        <Dropdown.Menu>
        
          <Dropdown.Item ><Link to="" >Preferences </Link></Dropdown.Item>
          <Dropdown.Item ><Link to="" >Settings </Link> </Dropdown.Item>
          <Dropdown.Item ><Link to={urls.logout}  >Logout</Link> </Dropdown.Item>
          
        
         </Dropdown.Menu>

      </Dropdown>
        :
<Button variant="outline-success btn-sm" onClick={() => setModalShow(true)}>
            <i className="fas fa-user 2x"> </i> Login/SignUp
      </Button>
     }



        < MyVerticallyCenteredModal
        
        show={modalShow}
        onHide={() => setModalShow(false)}
        onchangehandler = {onChangeHandler}
        onSubmit = { ()=>submit(false) }
         
         />
            </form>
          </div>
        </div>
        </nav>
             
        </React.Fragment>
    )

    
}
