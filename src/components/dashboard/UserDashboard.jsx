import axios from 'axios';
import React, { Component } from 'react';
import Header from '../v1/common/Header';
import constant from './../constant' 
import swal from 'sweetalert'
import urls from './../routes'

export default class UserDashboard extends Component {
   
    constructor(props){
       super(props)
        this.state = {
             intital:0,
             userDetails:false
        }
   }
    
componentDidMount(){
   
    axios.get('/dashboard').then(response=>{
      if(response.data.status===constant.status.success){
        this.setState({        
            userDetails:response.data
         })
      }
         
      else if(response.data.status===constant.status.failed){
       swal("", response.data.messsage , "error");
           window.location =urls.home; 
     } 
      
  console.log( " after compiled " , this.state.userDetails.result );
 
 }).catch(err=>{
     
           window.location =urls.home;
           swal("", "invalid User", "error");

})
}

   
     render() {
       const data= this.state.userDetails
        
     return !data?<></>: <React.Fragment>
   
      <Header  userData= {this.state.userDetails} />

      dashboard  

     <h1> username : </h1>
       {  
       
        this.state.userDetails.result.username 
        
        }  

      </React.Fragment>;
   }

}
