import { useEffect } from "react"
import { initializeOptions } from "./helpers";

export const GoogleSignIn = () => {

  useEffect(() => {
    if (google === undefined) throw new Error("Google is not defined");
    google.accounts.id.initialize(initializeOptions);

    google.accounts.id.renderButton(
      document.getElementById("buttonDiv"),
      { theme: "outline", size: "large" }  // customization attributes
    );

    // google.accounts.id.prompt(); // also display the One Tap dialog
  }, []);


  return (
    <div>
      <div id="buttonDiv"></div>
      To proceed forward, please sign in with Google. Otherwise, you need to refresh the page.
    </div>
  )
}