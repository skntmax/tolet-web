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

              
                 { /*    <div className="box stack-top text-center" > 
             Welcome Back  
                </div> */ }
                  
                { /* <input  type="button" value="show Test component" onClick={showTest} /> 
             {value.testViews===true?<Test /> :"No Test component "}            
                  </div> */ }
             <div className="main_body">
              <div className="search_bar ">
                   <div className="main_search_bar"> 
                       
                         <div> 
                         <input type="text"  name="gender" placeholder="Gender" />
                         </div>
                        
                         <div> 
                         <input  type="number"  name="person"  placeholder="person" />
                         </div>


                         <div> 
                         <input type="text" name="type"   placeholder="type" />
                         </div>



                         <div> 
                         <input type="text" name="location" placeholder="location" />
                         </div>

                         
                         <div> 
                         <input type="button" name="" className="btn btn-sm btn-outline-dark" value="search" />
                         </div>


                   </div>
                   
                   
              </div>
             
             
              </div>
 

        </React.Fragment>
    )
}
