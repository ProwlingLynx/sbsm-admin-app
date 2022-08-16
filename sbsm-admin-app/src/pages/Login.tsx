import { ReactElement } from "react";
import { GoogleSignIn } from "../components";
interface Props {
  location: string;
  setLocation: (location: string) => void;
}
export const Login: (arg0:Props) => ReactElement = ({location, setLocation}) => {
  return (
    <div className="App">
      Hello World!
      <GoogleSignIn setLocation={setLocation}/>
    </div>
  )
}