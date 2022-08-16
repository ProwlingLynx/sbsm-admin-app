import './App.css';
import { useState } from 'react';
import { Login, StudentList, ErrorPage } from './pages';
import { googleSignIn } from './components';
function App() {
  const [location, setLocation] = useState('login');
  /*
  currently using:
  - "student list"
  */
  googleSignIn.setLocationChanger(setLocation);
  try {
    switch(location) {
      case 'login':
        return (<Login location={location} setLocation={setLocation}/>);
      case 'student list':
        return (<StudentList location={location} setLocation={setLocation}/>);
      default:
        throw new Error(`Unknown location: ${location}`);
    }

  } catch (error) {
    console.log(error);
    return (<ErrorPage message={JSON.stringify(error)}/>)
  }
};

export default App;
