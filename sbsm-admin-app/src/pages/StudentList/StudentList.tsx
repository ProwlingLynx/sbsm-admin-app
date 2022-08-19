import { HeaderBar } from "../../components";
import { MakeStudentList } from "../../components/MakeStudentList";
interface props {
  location: string;
  setLocation: (location: string) => void;
  setGlobalState: (args0: UserObj[]) => void;
  globalState: UserObj[];
  focusedStudent: null | UserObj;
}
export const StudentList = ({location, setLocation, globalState, setGlobalState}: props)  => {

  return (
    <div className="student-list">
      <HeaderBar location={location}/>
      <div className="student-list-content">
        <MakeStudentList globalState={globalState}/>
      </div>
    </div>
  )
};