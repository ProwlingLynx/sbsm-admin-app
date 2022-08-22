import { StudentHeader } from "../../components";
import { GoBackButton } from "../../components/Buttons";
import styles from "./styles.module.css";
interface props {
  focusedStudent: UserObj | null;
  setLocation: (args0: string) => void;
}

export const PracticalClock = ({ focusedStudent, setLocation }: props) => {
  if (focusedStudent === null) return null;
  return (
    <div className={styles.pageWrapper}>
      <StudentHeader location="practical clock" focusedStudent={focusedStudent} />
      <div className={styles.headerWrapper}>
        <h2>Practical Clock</h2>
      </div>
        <p>TODO: make PracticalClock table</p>
      <div>
        <GoBackButton location="student practical clock" previousLocation="student profile" setLocation={setLocation} />
      </div>
    </div>
  );
};