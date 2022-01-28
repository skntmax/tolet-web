import React, { useEffect  } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import axios from 'axios' 
import constant from './../constant'
import urls from './../routes'
export default function Logout() {
     const history = useHistory()

   useEffect(()=>{
      
       debugger
         axios.get('/logout').then(response=>{ 
           console.log("response>>>>>>> " , response )
           history.push(urls.home)
           })

   }  , [])

 return ( <React.Fragment>
   Logout  

  </React.Fragment>)
}
