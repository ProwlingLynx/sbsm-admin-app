import { useEffect } from "react"

export const GoogleSignIn = () => {

  useEffect(() => {
    async function handleCredentialResponse(response: any) {
      try {

        let url = window.location.origin + "/verify/user";
        if (process.env.NODE_ENV === "development" || process.env.NODE_ENV === "test") {
          url = "http://localhost:4001/verify/user";
          console.log("Encoded JWT ID token: " + response.credential);
        }
        const res = await fetch(url, {
          method: "POST",
          headers: {
            "authorization": "Bearer " + response.credential,
          },
        })
        console.log("Response: " + res);
      } catch (error) {
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


  return (
    <div>
      To proceed forward, please sign in with Google. Otherwise, you need to refresh the page.
    </div>
  )
}