import { StudentHeader } from "../../components";
import { GoBackButton } from "../../components/Buttons";
import styles from "./styles.module.css";
interface props {
  focusedStudent: UserObj | null;
  setLocation: (args0: string) => void;
}

export const TimeClock = ({ focusedStudent, setLocation }: props) => {
  if (focusedStudent === null) return null;
  return (
    <div className={styles.pageWrapper}>
      <StudentHeader location="student profile" focusedStudent={focusedStudent} />
      <div className={styles.headerWrapper}>
        <h2>Time Clock</h2>
      </div>
        <p>TODO: make TimeClock table</p>
      <div>
        <GoBackButton location="student time clock" previousLocation="student profile" setLocation={setLocation} />
      </div>
    </div>
  );
};