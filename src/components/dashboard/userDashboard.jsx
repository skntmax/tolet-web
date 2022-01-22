import axios from 'axios';
import React, { Component } from 'react';
import Header from '../v1/common/Header';
export default class userDashboard extends Component {
   constructor(props){
       super(props)
        this.state = {
             intital:0,
             userDetails:null
        }
   }
    
   componentWillMount(){
   

        
   }


   
    componentDidMount(){ 

        axios.get('/dashboard').then(response=>{
             
          this.setState({        
               userDetails:response.data
           })
    
        console.log( " after compiled " ,  this.state.userDetails );
       
       }).catch(err=>{
       console.log(err);
    
    })
      
           
      }


     render() {
    return <React.Fragment>
    <Header />

      dashboard  

       {/* <h1>username: {console.log(" username " , this.state.userDetails.result.username)} </h1> */}
       
       {/* { this.state.userDetails.result.username , this.state.userDetails.result.name , this.state.userDetails.result.mobile}   */}


    </React.Fragment>;
  }
}
