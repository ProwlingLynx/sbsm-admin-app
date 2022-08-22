import { useState } from "react";
import styles from "./styles.module.css";

export const HeaderSearch = ({focusedStudent} : {focusedStudent: UserObj | null}) => {
  const [search, setSearch] = useState("");

  return (
    <div className={styles.wrapper}>
      <input
      className={styles.search}
      type="text"
      placeholder="Search Key Number"
      value={search}
      onChange={(e)=>setSearch(e.target.value)}
      onSubmit={(e) => {
      e.preventDefault();
      console.log("I submitted: " + search);
      }}/>
    </div>
  )
};