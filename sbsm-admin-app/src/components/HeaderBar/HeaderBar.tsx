import { ReactElement, useState } from "react";
import styles from "./styles.module.css";

export const HeaderBar = ({location, focusedStudent} : {location: string; focusedStudent: UserObj | null}) => {
  const [search, setSearch] = useState("");
  let content : null | ReactElement = null;

  if (location === "student list") {
    content = (<input
      className={styles.search}
      type="text"
      placeholder="Search Key Number"
      value={search}
      onChange={(e)=>setSearch(e.target.value)}
      onSubmit={(e) => {
      e.preventDefault();
      console.log("I submitted: " + search)
    }}/>);
  } else {
      return (
      <div className={styles.profile}>
        <div className={styles.placeHolder}></div>
        <h1 className={styles.studentName}>{focusedStudent?.Name}</h1>
        {/* <h2 className={styles.keyNum}>{focusedStudent === null ? null : `#${focusedStudent["Key Number"]}`}</h2> */}
        <h1 className={styles.keyNum}>{focusedStudent === null ? null : `#${focusedStudent["Key Number"]}`}</h1>
      </div>
      );
  }

  return (
    <div className={styles.wrapper}>
      {content}
    </div>
  )
}