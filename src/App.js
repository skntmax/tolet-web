import logo from './logo.svg';
import './App.css';
import React from 'react';
import Main from './components/v1/Main';
import { Route , Switch }  from 'react-router-dom';
import Header from './components/v1/common/Header';
import urls from './components/routes'
function App() {
  return (
     
    <Switch >
     
      <Header  />
       <Main />
     
        {/* <route exact path={'/'} component={} />   */}
    
     </Switch>
  );
}

export default App;
