import React , {useEffect, useState    } from 'react'
import './../../assets/css/main.css'
import Test from '../Test' ; 

export default function Main() {

     
     const [value,setValue] = useState({
         name:"" , 
         title :"" ,
         attchment: [] ,
         video :[] ,
         testViews:false
        })

     const [err , setError] = useState({
          setName:"" , 
          setTitle : "" 
     })
      
     const showTest =()=>{
        setValue({testViews:!value.testViews})
       }

   useEffect(()=>{
        
       console.log("main component"); 
         
   } , [] )
   

    return (
        <React.Fragment>

                <div 
               //  style={{
               //      clipPath: "polygon(34% 29%, 75% 0%, 24% 66%, 67% 90%, 43% 82%, 14% 72%)" , 
               //      height:"100vh",
               //      backgroundColor:"#268785" , 
               //      "color" :"black"  
               //  }}
                
                 />
                 { /*    <div className="box stack-top text-center" > 
             Welcome Back  
                </div> */ }
                  
                {/* <input  type="button" value="show Test component" onClick={showTest} /> 
             {value.testViews===true?<Test /> :"No Test component "}            
                  </div> */}

                  <div className="fluid-container main_back">
                     
                      <div className="search_bar" >
                          search bar 
                      </div>
                  </div>

        </React.Fragment>
    )
}
