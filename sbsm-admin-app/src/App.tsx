import './App.css';
import { useState } from 'react';
import { Login, StudentList, ErrorPage } from './pages';
import { googleSignIn } from './components';
import type { Users } from './types';
function App() {
  const [location, setLocation] = useState('login');
  /*
  currently using:
  - "student list"
  */
  const [focusedStudent, setFocusedStudent] = useState(null);
  const [globalState, setGlobalState] = useState<Users>({} as Users);
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
