import { StudentHeader } from "../../components";
import { GoBackButton } from "../../components/Buttons";
import styles from "./styles.module.css";
interface props {
  focusedStudent: UserObj | null;
  setLocation: (args0: string) => void;
}

export const Facials = ({ focusedStudent, setLocation }: props) => {
  if (focusedStudent === null) return null;
  return (
    <div className={styles.pageWrapper}>
      <StudentHeader location="student profile" focusedStudent={focusedStudent} />
      <div className={styles.headerWrapper}>
        <h2>Grades</h2>
        <h2>{focusedStudent["Cumulative Grade"] * 100 + "%"}</h2>
      </div>
      {/* TODO: make facials button */}
        <div className={styles.headerWrapper}>
          <h3>Evaluation 1</h3><p>40/40</p><p>100%</p>
        </div>
        <div className={styles.headerWrapper}>
          <h3>Evaluation 2</h3><p>40/40</p><p>100%</p>
        </div>
      <div>
        <GoBackButton location="student grades" previousLocation="student profile" setLocation={setLocation} />
      </div>
    </div>
  );
};