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
      <GoogleSignIn setLocation={setLocation}/>
    </div>
  )
}