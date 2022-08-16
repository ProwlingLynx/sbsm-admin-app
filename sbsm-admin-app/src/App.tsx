import './App.css';
import { useState } from 'react';
import { Login } from './pages';
import { googleSignIn } from './components/utils/googleHelper';
function App() {
  const [location, setLocation] = useState('login');
  googleSignIn.setLocationChanger(setLocation);
  switch(location) {
    case 'login':
      return (<Login location={location} setLocation={setLocation}/>);
    default:
      return (<div>404</div>);
  }
};

export default App;
