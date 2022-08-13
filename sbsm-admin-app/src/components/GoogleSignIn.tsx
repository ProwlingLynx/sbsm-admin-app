import { useEffect, useState } from "react"

export const GoogleSignIn = () => {
  console.log("GoogleSignIn: ", process.env.REACT_APP_CLIENT_ID);
  // return (
  //   <div className="googleButton">
  //   {/* <script src="https://accounts.google.com/gsi/client" ></script> */}
  //     <div id="g_id_onload"
  //        data-client_id={process.env.REACT_APP_CLIENT_ID}
  //        data-login_uri={process.env.REACT_APP_REDIRECT_URI}
  //        data-auto_prompt="false">
  //     </div>
  //     <div className="g_id_signin"
  //        data-type="standard"
  //        data-size="large"
  //        data-theme="outline"
  //        data-text="sign_in_with"
  //        data-shape="rectangular"
  //        data-logo_alignment="left">
  //     </div>
  //   </div>
  // )
  useEffect(() => {
  function handleCredentialResponse(response : any) {
    console.log("Encoded JWT ID token: " + response.credential);
  }
  google.accounts.id.initialize({
    client_id: process.env.REACT_APP_CLIENT_ID,
    callback: handleCredentialResponse
  });
  google.accounts.id.renderButton(
    document.getElementById("buttonDiv"),
    { theme: "outline", size: "large" }  // customization attributes
  );
  google.accounts.id.prompt(); // also display the One Tap dialog
  }, []);
  return(
    <div>
      I rendered the button.
    </div>
  )
}