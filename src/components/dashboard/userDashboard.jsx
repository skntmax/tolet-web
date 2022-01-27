import axios from 'axios';
import React, { Component } from 'react';
import Header from '../v1/common/Header';

export default class userDashboard extends Component {
   
    constructor(props){
       super(props)
        this.state = {
             intital:0,
             userDetails:false
        }
   }
    
componentDidMount(){
    axios.get('/dashboard').then(response=>{

       this.setState({        
             userDetails:response.data
         })

  console.log( " after compiled " , this.state.userDetails.result );
 
 }).catch(err=>{
 console.log(err);

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
