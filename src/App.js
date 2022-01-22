import logo from './logo.svg';
import './App.css';
import React from 'react';
import Main from './components/v1/Main';
import { Route , Switch }  from 'react-router-dom';
import Header from './components/v1/common/Header';
import urls from './components/routes'
import Home from './components/v1/Home';
import userDashboard from './components/dashboard/userDashboard';
function App() {
  return (
     
    <React.Fragment>
        
    {/* <Header  /> */}
         { /*  <Main />   */}
  
      <Switch >
     
         <Route exact path='/' component={Home} /> 
           <Route  path={urls.dashboard} component={userDashboard} /> 
      
     </Switch>
     </React.Fragment>
  );
}

export default App;
