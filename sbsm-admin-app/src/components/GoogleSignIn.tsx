import { useEffect } from "react"

export const GoogleSignIn = () => {
  // console.log("GoogleSignIn: ", process.env.REACT_APP_CLIENT_ID);

  useEffect(() => {

    async function handleCredentialResponse(response : any) {
    try{

      console.log("Encoded JWT ID token: " + response.credential);
      // fetch(window.location.origin+"/verify/user", {
      fetch("http://localhost:4001/verify/user", {
        method: "POST",
        headers: {
          "authorization": "Bearer " + response.credential,
        },
      })
    } catch(error) {
      console.log(error);
    };
  }
  google.accounts.id.initialize({
    client_id: process.env.REACT_APP_CLIENT_ID,
    callback: handleCredentialResponse
  });

  //If you prefer the button then uncomment the function below and comment out the pormpt method instead.

  // google.accounts.id.renderButton(
  //   document.getElementById("buttonDiv"),
  //   { theme: "outline", size: "large" }  // customization attributes
  // );

  google.accounts.id.prompt(); // also display the One Tap dialog
  }, []);


  return(
    <div>
      To proceed forward, please sign in with Google. Otherwise, you need to refresh the page.
    </div>
  )
}