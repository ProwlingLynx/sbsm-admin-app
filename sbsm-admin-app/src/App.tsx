import './App.css';
import { useEffect, useState } from 'react';
import { Login, StudentList, ErrorPage, StudentProfile } from './pages';
import { getStudentData, googleSignIn } from './components';
function App() {
  const [location, setLocation] = useState('login');
  /*
  currently using:
  - "student list"
  */
  const [focusedStudent, setFocusedStudent] = useState<null | UserObj>(null);
  const [globalState, setGlobalState] = useState<UserObj[]>([{}] as UserObj[]);
  googleSignIn.setLocationChanger(setLocation);

  useEffect(() => {
    const token = googleSignIn.getToken();

    if (focusedStudent !== null) {
      setLocation('student profile');
    } else if (location === 'student list') {
      setFocusedStudent(null);
    }

    if (token === null) return;
    console.log("Our globals ", globalState)
    if (globalState[0]['Key Number'] === undefined) {
      console.log("We are getting the data");
      getStudentData(token, setGlobalState).then((data) => {
        console.log("Data is ", data);
        setGlobalState(data);
      })
      .catch((err) => {
        console.log("Error is ", err);
        setLocation('error');
      })
    }
  }, [globalState, location, focusedStudent]);

  try {
    switch(location) {
      case 'login':
        return (<Login location={location} setLocation={setLocation} setGlobalState={setGlobalState}/>);
      case 'student list':
        return (<StudentList
          location={location}
          setLocation={setLocation}
          globalState={globalState}
          focusedStudent={focusedStudent}
          setFocusedStudent={setFocusedStudent}
          setGlobalState={setGlobalState}/>);
      case 'student profile':
        return (<StudentProfile
        focusedStudent={focusedStudent}
        />)
      default:
        throw new Error(`Unknown location: ${location}`);
    }

  } catch (error) {
    console.log(error);
    return (<ErrorPage message={JSON.stringify(error)}/>)
  }
};

export default App;
