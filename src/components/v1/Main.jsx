import React , {useState    } from 'react'
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
    // const submit = (e)=>{
    //     debugger
    //     console.log(value) 
     
    //     const model ={ 
    //           name : value.name , 
    //           title: value.title   
    //         }
                                    
    //       if(value.name!="" && value.title!="" ){
    //                     axios.post('submitform/' , model ).then((res)=>{
    //                     console.log(" response " , res.data )
    //                     if(res.data.status==true){
    //                      const formdata = new FormData()

    //                         for(let i=0; i<value.attchment.length ; i++){
    //                             formdata.append('attchment' , value.attchment[i] )
    //                             axios.post('/addFile' , formdata, 
    //                                  {
    //                              headers : { 
    //                                     "Content-Type": "multipart/form-data"
    //                                   }} )
    //                                    .then(res=>{
    //                                  console.log(res.data.message)
    //                              })    
    //                          }

                         
    //                         alert(`name  ${res.data.name} and title ${res.data.title} saved `)           
                            
    //                     }
    //                         else{
    //                         alert(` error `)
    //                         }
    //                 }).catch(err=>{
    //                     console.log("Error : "  , err)
    //                 })
    // }
    // else{
         
    //     if(value.name==""){
    //          setError({setName:" please enter name "})
    //     }
    //     if(value.title==""){
    //          setError({setTitle:"please Enter title  "})
    //         }

    //  if( value.name=="" && value.title=="" ){
         
    //     setError({setName:"please enter name "})
    //     setError({setTitle:" please Enter title " }) 

    //         }
     
    //     }     
      
     
    // }
    
    // const onChangeHandler = (e)=>{
    //     debugger



    //     if(e.target.name=="attchment") {
    //         //  for(let i=0; i<=e.target.files.length-1 ; i++){
    //           setValue( {  ...value ,[e.target.name]:e.target.files  }  )
    //         // }
    //        return  
    //         }
    //      if(e.target.name=="video"){
    //         setValue( {  ...value ,[e.target.name]: e.target.files }  )
              
    //      }   

    //     setValue({ ...value ,  [e.target.name] : e.target.value } );
    //      console.log(value)
        
    //      }

    return (
        <React.Fragment>



                 { /* <input  type="text" value={value.name} onChange={onChangeHandler} name="name"   /> <br /> 
                     {
                    err.setName!="" ? <span className="text-danger"> {err.setName }</span>  :""   
                   }
                <br />
                 <input  type="text" value={value.title} onChange={onChangeHandler}     name="title"  /> <br /> 
                 {
                    err.setTitle!="" ? <span className="text-danger"> {err.setTitle}  </span>  :""   
                 } 
                <br />
                 
                select File <input type="file"  name="attchment"  multiple  onChange={onChangeHandler} /> 

                <br />  <br />
                select Video <input type="file"  name="video"   onChange={onChangeHandler} />   
                 <input type="submit" onClick={submit}   value="submit" />

                */ }

                <div 
                // style={{
                //     clipPath: "polygon(34% 29%, 75% 0%, 24% 66%, 67% 90%, 43% 82%, 14% 72%)" , 
                //     height:"100vh",
                //     backgroundColor:"#268785" , 
                //     "color" :"black"  
                // }}
                
                >
                 { /*    <div className="box stack-top text-center" > 
             Welcome Back  
                </div> */ } 
                <input  type="button" value="show Test component" onClick={showTest} /> 
             {value.testViews===true?<Test /> :"No Test component "} 
                                  
                  </div>


        </React.Fragment>
    )
}
