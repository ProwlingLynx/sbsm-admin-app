import { ReactElement, useEffect } from "react"
import { googleSignIn } from "../utils/googleHelper";

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
    <div>
      <div id="buttonDiv"></div>
      To proceed forward, please sign in with Google. Otherwise, you need to refresh the page.
    </div>
  )
}