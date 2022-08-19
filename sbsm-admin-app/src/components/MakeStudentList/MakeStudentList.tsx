import { Student } from "./Student";


interface props {
  globalState: UserObj[];
}

export const MakeStudentList = ({ globalState }: props) => {
  console.log(globalState);
  if (!Array.isArray(globalState)) {
    return <div>No data</div>;
  }
  const tabledUsers = globalState.map((user) => {
    return (<Student user={user} key={user["Key Number"] + " Student"} />);
  });
  return (
    <table>
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