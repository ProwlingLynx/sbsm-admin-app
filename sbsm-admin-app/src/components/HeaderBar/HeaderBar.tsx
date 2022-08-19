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
    content = (
      <>
        <h1>{focusedStudent?.Name}</h1>
        <span>{focusedStudent === null ? null : focusedStudent["Key Number"]}</span>
      </>
    )
  }

  return (
    <div className={styles.wrapper}>
      {content}
    </div>
  )
}