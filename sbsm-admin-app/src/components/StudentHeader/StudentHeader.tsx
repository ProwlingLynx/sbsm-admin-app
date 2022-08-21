import styles from "./styles.module.css";

export const StudentHeader = ({location, focusedStudent} : {location: string; focusedStudent: UserObj | null}) => {
      return (
      <div className={styles.profile}>
        <div className={styles.placeHolder}></div>
        <h1 className={styles.studentName}>{focusedStudent?.Name}</h1>
        {/* <h2 className={styles.keyNum}>{focusedStudent === null ? null : `#${focusedStudent["Key Number"]}`}</h2> */}
        <h1 className={styles.keyNum}>{focusedStudent === null ? null : `#${focusedStudent["Key Number"]}`}</h1>
      </div>
      );
  };