import { ReactElement } from "react";
import { GoogleSignIn } from "../../components";
import styles from "./Login.module.css";

interface Props {
  location: string;
  setLocation: (location: string) => void;
  setGlobalState: (globalState: UserObj[]) => void;
}
export const Login: (arg0:Props) => ReactElement = ({location, setLocation}) => {
  return (
    <div className={styles.loginMain}>
      <h1>Welcome!</h1>
      <p>
      This is SBMS Admin App. Please sign in with your Google account.
      </p>
      <GoogleSignIn setLocation={setLocation}/>
    </div>
  )
}