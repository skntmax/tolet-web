import React, { Component } from 'react'
export default class Test extends Component {
    
    constructor(props){
         super(props)
         this.state = {
             count:0 ,
         }
            console.log( ' constructor ' , this.state.count );
        }

     setCounter =(e)=>{
        this.setState( {count:this.state.count+1} )
    }
     
    componentDidMount(){
         console.log('componentDidMount ' , this.state.count);
    }

    shouldComponentUpdate(props){
         console.log(props);
        console.log('shouldComponentUpdate');
        if(this.state.count=="5"){ 
                return true
        }
    return true  
    }


    componentWillUnmount(){
    
        console.log(" load hone se pehle  ");
    }

   componentWillUnmount(){
        console.log("component will unmount of Test component ");        
     }


    render() {
        return (
            <React.Fragment>
                  
                 {console.log(this.state.count)}
                   
                {this.state.count=="6"? 
               <h4>state value is {this.state.count}</h4> : <h4>state value is less than {this.state.count}</h4> 
             }
                 <input type="button" value="click me" onClick={this.setCounter} />
                  {this.state.count}

            </React.Fragment>
        )
    }
}
