import { ReactElement, useState } from "react";
import styles from "./styles.module.css";

export const HeaderBar = ({location} : {location: string;}) => {
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
    content = (<h1>Rick Roller the first</h1>)
  }

  return (
    <div className={styles.wrapper}>
      {content}
    </div>
  )
}