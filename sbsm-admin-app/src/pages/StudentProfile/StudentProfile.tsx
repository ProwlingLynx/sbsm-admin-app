import { StudentHeader } from "../../components";
import { ClearButton, GoBackButton } from "../../components/Buttons";
import styles from "./styles.module.css";
interface props {
  focusedStudent: UserObj | null;
  setLocation: (args0: string) => void;
}

export const StudentProfile = ({ focusedStudent, setLocation }: props) => {
  if (focusedStudent === null) return null;
  return (
    <div className={styles.pageWrapper}>
      <StudentHeader location="student profile" focusedStudent={focusedStudent} />
      <div>
        <div className={styles.buttonWrapper}>
          <ClearButton
            innerText="Grades"
            location="student profile"
            nextLocation="student grades"
            setLocation={setLocation}
          />
          <h3>{focusedStudent["Theory Grade"]}</h3>
        </div>
        <div className={styles.buttonWrapper}>
          <ClearButton
            innerText="Grades"
            location="student profile"
            nextLocation="student grades"
            setLocation={setLocation}
          />
          <h3>{focusedStudent["Theory Grade"]}</h3>
        </div>
        <div className={styles.buttonWrapper}>
          <ClearButton
            innerText="Grades"
            location="student profile"
            nextLocation="student grades"
            setLocation={setLocation}
          />
          <h3>{focusedStudent["Theory Grade"]}</h3>
        </div>
      </div>
      <div>
        <GoBackButton location="student profile" previousLocation="student list" setLocation={setLocation} />
      </div>
    </div>
  );
};