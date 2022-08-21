import { StudentHeader } from "../../components";
import { ClearButton, GoBackButton } from "../../components/Buttons";
import styles from "./styles.module.css";
interface props {
  focusedStudent: UserObj | null;
  setLocation: (args0: string) => void;
}

export const StudentGrades = ({ focusedStudent, setLocation }: props) => {
  if (focusedStudent === null) return null;
  return (
    <div className={styles.pageWrapper}>
      <StudentHeader location="student profile" focusedStudent={focusedStudent} />
      <div>
        <div className={styles.buttonWrapper}>
          <ClearButton
            innerText="Tests"
            location="student grades"
            nextLocation="student tests"
            setLocation={setLocation}
          />
          {/* TODO: add route for data... */}
          <h3>{"50/50 100%"}</h3>
        </div>
        <div className={styles.buttonWrapper}>
          <ClearButton
            innerText="Practical Evaluations"
            location="student grades"
            nextLocation="student practical evaluations"
            setLocation={setLocation}
          />
          {/* TODO: add route for data... */}
          <h3>{"50/50 100%"}</h3>
        </div>
      </div>
      <div>
        <GoBackButton location="student grades" previousLocation="student profile" setLocation={setLocation} />
      </div>
    </div>
  );
};