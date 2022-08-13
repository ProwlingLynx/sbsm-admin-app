import { useEffect } from "react"

export const GoogleSignIn = () => {
  console.log("GoogleSignIn: ", process.env.REACT_APP_CLIENT_ID);
  useEffect(() => {
  async function handleCredentialResponse(response : any) {
    try{

      console.log("Encoded JWT ID token: " + response.credential);
      fetch(window.location.origin+"/verify/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(response.credential),
      })
    } catch(error) {
      console.log(error);
    };
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
      To proceed forward, please sign in with Google. Otherwise, you need to refresh the page.
    </div>
  )
}