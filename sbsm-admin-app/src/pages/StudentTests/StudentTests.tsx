import { StudentHeader } from "../../components";
import { GoBackButton } from "../../components/Buttons";
import styles from "./styles.module.css";
interface props {
  focusedStudent: UserObj | null;
  setLocation: (args0: string) => void;
}

export const StudentTests = ({ focusedStudent, setLocation }: props) => {
  if (focusedStudent === null) return null;
  return (
    <div className={styles.pageWrapper}>
      <StudentHeader location="student profile" focusedStudent={focusedStudent} />
      <div className={styles.headerWrapper}>
        <h2>Tests</h2>
        <h2>{focusedStudent["Cumulative Grade"] * 100 + "%"}</h2>
      </div>
        <p>TODO: make Tests table</p>
      <div>
        <GoBackButton location="student tests" previousLocation="student grades" setLocation={setLocation} />
      </div>
    </div>
  );
};