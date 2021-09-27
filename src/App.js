import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'

//components
import Login from './pages/Login';

function App() {
  return (
    <div className="grid grid-cols-1
                    h-screen w-full
                    bg-gradient-to-r
                    from-orangeDark to-orangeLight">
      
      
      <Router>

        <Switch>
          <Route path='/' exat component={Login}/>

        </Switch>


      </Router>
    
    
    </div>
  );
}

export default App;
