import { HeaderBar } from "../../components";
import { MakeStudentList } from "../../components/MakeStudentList";
import styles from "./StudentList.module.css";
interface props {
  location: string;
  setLocation: (location: string) => void;
  setGlobalState: (args0: UserObj[]) => void;
  globalState: UserObj[];
  focusedStudent: null | UserObj;
}
export const StudentList = ({location, setLocation, globalState, setGlobalState}: props)  => {

  return (
    <div className={styles.studentList}>
      <HeaderBar location={location}/>
      <div className={styles.spacer}></div>
        <MakeStudentList globalState={globalState}/>
    </div>
  )
};