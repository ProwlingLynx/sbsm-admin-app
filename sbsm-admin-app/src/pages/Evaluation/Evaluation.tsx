import { StudentHeader } from "../../components";
import { GoBackButton } from "../../components/Buttons";
import styles from "./styles.module.css";
interface props {
  focusedStudent: UserObj | null;
  setLocation: (args0: string) => void;
}

export const Evaluation = ({ focusedStudent, setLocation }: props) => {
  if (focusedStudent === null) return null;
  return (
    <div className={styles.pageWrapper}>
      <StudentHeader location="evaluation" focusedStudent={focusedStudent} />
      <div className={styles.headerWrapper}>
        <h2>Evaluation</h2>
      </div>
      {/* TODO: make Evaluation functions */}
        <div className={styles.headerWrapper}>
          <h3>Evaluation 1</h3>
          <p>40/40</p>
        </div>
        <div>
          <button>TODO: Edit Button</button>
        </div>
      <div>
        <GoBackButton location="evaluation" previousLocation="student practical evaluations" setLocation={setLocation} />
      </div>
    </div>
  );
};