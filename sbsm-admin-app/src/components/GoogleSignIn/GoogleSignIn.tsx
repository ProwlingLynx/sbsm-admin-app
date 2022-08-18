import { ReactElement, useEffect } from "react"
import { googleSignIn } from "../utils";
import styles from "./GoogleSignIn.module.css"
interface Props {
  setLocation: Function;
}
export const GoogleSignIn: (args0:Props) => ReactElement = ({setLocation}) => {

  useEffect(() => {
    try {
      if (google === undefined) throw new Error("Google is not defined");
      googleSignIn.intializeGoogle();
      googleSignIn.renderButton();
    } catch (error) {
      console.log(error);
      throw error;
    }
  }, []);


  return (
    <>
      <div id="buttonDiv"></div>
    </>
  )
}