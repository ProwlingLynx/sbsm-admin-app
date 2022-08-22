import { Student } from "./Student";
import style from "./Student.module.css";

interface props {
  globalState: UserObj[];
  setLocation: (location: string) => void;
  setFocusedStudent: (focusedStudent: null | UserObj) => void;
}

export const MakeStudentList = ({ globalState, setLocation, setFocusedStudent}: props) => {
  if (!Array.isArray(globalState)) {
    return <div>No data</div>;
  }
  const tabledUsers = globalState.map((user) => {
    return (<Student
      user={user}
      key={user["Key Number"] + " Student"}
      setFocusedStudent={setFocusedStudent}
      setLocation={setLocation}
      />);
  });
  return (
    <table className={style.table}>
      <colgroup span={4}></colgroup>
      <thead>
        <tr>
          <th>Key#</th>
          <th>Student</th>
          <th>Status</th>
          <th>Time</th>
        </tr>
      </thead>
      <tbody>
        {tabledUsers}
      </tbody>
    </table>
  );
};