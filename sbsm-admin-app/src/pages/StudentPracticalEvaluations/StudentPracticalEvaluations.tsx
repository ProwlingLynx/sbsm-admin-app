import { StudentHeader } from "../../components";
import { ClearButton, GoBackButton } from "../../components/Buttons";
import styles from "./styles.module.css";
interface props {
  focusedStudent: UserObj | null;
  setLocation: (args0: string) => void;
}

export const StudentPracticalEvaluations = ({ focusedStudent, setLocation }: props) => {
  if (focusedStudent === null) return null;
  return (
    <div className={styles.pageWrapper}>
      <StudentHeader location="student profile" focusedStudent={focusedStudent} />
      <div className={styles.headerWrapper}>
        <h2>Practical Evaluations</h2>
        <h2>100%</h2>
      </div>
      <div>
        <div className={styles.buttonWrapper}>
          <ClearButton
            innerText="Facials"
            location="student practical evaluations"
            nextLocation="facials"
            setLocation={setLocation}
          />
          {/* TODO: add route for data... */}
          <h3>{"100%"}</h3>
        </div>
      </div>
      <div>
        <GoBackButton location="student practical evaluations" previousLocation="student grades" setLocation={setLocation} />
      </div>
    </div>
  );
};