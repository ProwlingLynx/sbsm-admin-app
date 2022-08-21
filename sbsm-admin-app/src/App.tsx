import './App.css';
import { useEffect, useState } from 'react';
import { Login, StudentList, ErrorPage, StudentProfile, StudentGrades, StudentTests, StudentPracticalEvaluations, Facials } from './pages';
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
    console.log("What is location? ", location);
    if (token === null) return setLocation('login');
    console.log("Our globals ", globalState)
    if (globalState[0]['Key Number'] === undefined) {
      console.log("We are getting the data");
      getStudentData(token, setGlobalState)
      .then((data) => {
        console.log("Data is ", data);
        setGlobalState(data);
      })
      .catch((err) => {
        console.log("Error is ", err);
        setLocation('error');
      })
      return;
    }
    if (location === 'student list') {
      setFocusedStudent(null);
    }
  }, [globalState, location, focusedStudent]);

  try {
    switch(location) {
      case 'login':
        console.log("We are in the login page", location);
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
        setLocation={setLocation}
        />);
      case 'student grades':
        return (<StudentGrades
        focusedStudent={focusedStudent}
        setLocation={setLocation}
        />);
      case 'student practical evaluations':
        return (<StudentPracticalEvaluations
        focusedStudent={focusedStudent}
        setLocation={setLocation}
        />);
      case 'facials':
        return (<Facials
        focusedStudent={focusedStudent}
        setLocation={setLocation}
        />);
      case 'student tests':
        return (<StudentTests
        focusedStudent={focusedStudent}
        setLocation={setLocation}
        />);
      default:
        throw new Error(`Unknown location: ${location}`);
    }

  } catch (error) {
    console.log(error);
    return (<ErrorPage message={JSON.stringify(error)}/>)
  }
};

export default App;
