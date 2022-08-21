import { StudentHeader } from "../../components";

interface props {
  focusedStudent: UserObj | null;
}

export const StudentProfile = ({focusedStudent}: props) => {
  if (focusedStudent === null) return null;
  return (
    <div>
      <StudentHeader location="student profile" focusedStudent={focusedStudent}/>
    </div>
  );
};