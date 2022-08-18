import { ReactElement, useEffect } from "react"
import { googleSignIn } from "../utils";
import styles from "./GoogleSignIn.module.css"
interface Props {
  setLocation: Function;
}
export const GoogleSignIn: (args0:Props) => ReactElement = ({setLocation}) => {

  useEffect(() => {
    if (google === undefined) throw new Error("Google is not defined");
    googleSignIn.intializeGoogle();
    googleSignIn.renderButton();
  }, []);


  return (
    <div className={styles.googleContainer}>
      <h1>Welcome!</h1>
      <p>
      This is SBMS Admin App. Please sign in with your Google account.
      </p>
      <div id="buttonDiv"></div>
    </div>
  )
}