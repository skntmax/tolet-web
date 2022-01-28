import logo from './logo.svg';
import './App.css';
import React from 'react';
import Main from './components/v1/Main';
import { Route , Switch }  from 'react-router-dom';
import Header from './components/v1/common/Header';
import UserDashboard from './components/dashboard/UserDashboard';
import urls from './components/routes'
import Home from './components/v1/Home';
import Logout from './components/dashboard/Logout';
function App() {
  return (
     
    <React.Fragment>
        
    {/* <Header  /> */}
         { /*  <Main />   */}
  
      <Switch >
     
         <Route exact path='/' component={Home} /> 
           <Route  path={urls.dashboard} exact  component= {UserDashboard} /> 
           <Route  path={urls.logout} exact component= {Logout} /> 
      
     </Switch>
     </React.Fragment>
  );
}

export default App;
