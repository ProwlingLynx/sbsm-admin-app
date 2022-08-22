import './App.css';
import { useEffect, useState } from 'react';
import { Login, StudentList, ErrorPage, StudentProfile, StudentGrades, StudentTests, StudentPracticalEvaluations, Facials, TimeClock, PracticalClock, Evaluation } from './pages';
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
    if (token === null) return setLocation('login');
    if (globalState[0]['Key Number'] === undefined) {
      getStudentData(token, setGlobalState)
      .then((data) => {
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
      case 'evaluation':
        return (<Evaluation
        focusedStudent={focusedStudent}
        setLocation={setLocation}
        />);
      case 'student tests':
        return (<StudentTests
        focusedStudent={focusedStudent}
        setLocation={setLocation}
        />);
      case 'student time clock':
        return (<TimeClock
        focusedStudent={focusedStudent}
        setLocation={setLocation}
        />);
      case 'student practical clock':
        return (<PracticalClock
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
