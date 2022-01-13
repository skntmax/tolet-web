import React , {useState} from 'react'
import MyVerticallyCenteredModal from './../Logsignup'
import { Button } from "react-bootstrap";
import axios from 'axios';
export default function Header() {

  const [modalShow, setModalShow] = React.useState(false);

  const [value,setValue] = useState({
    email:"" , 
    password :"" ,
    attchment: [] ,
    video :[]
})

const [err , setError] = useState({
     setName:"" , 
     setTitle : "" 
})
 
const submit = (e)=>{
   debugger
   console.log(value) 
    
   const model ={ 
         name : value.email , 
         title: value.password   
       }
                           
     if(value.email!="" && value.password!="" ){
                   axios.post('submitform/' , model ).then((res)=>{
                   console.log(" response " , res.data )
                   if(res.data.status==true){
                    const formdata = new FormData()
                       for(let i=0; i<value.attchment.length ; i++){
                           formdata.append('attchment' , value.attchment[i] )
                           axios.post('/addFile' , formdata, 
                                {
                            headers : { 
                                   "Content-Type": "multipart/form-data"
                                 }} )
                                  .then(res=>{
                                console.log(res.data.message)
                           })    
                        }
                       alert(`name  ${res.data.name} and title ${res.data.title} saved `)           
                       
                   }
                       else{
                       alert(` error `)
                       }
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


    return (
      
        <React.Fragment>
         
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Tolet <i className="fa-regular fa-house-chimney-crack"> </i></a>
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

              <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" 
                   role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
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
            <Button variant="outline-success btn-sm" onClick={() => setModalShow(true)}>
             Login/SignUp
      </Button>
            <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        onchangehandler = {onChangeHandler}
        onsubmit = {submit}
      
         />

            </form>
          </div>
        </div>
      </nav>    



        </React.Fragment>
    )
}
