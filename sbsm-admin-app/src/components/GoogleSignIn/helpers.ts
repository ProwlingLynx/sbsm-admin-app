
const handleCredentialResponse = async (response: any) => {
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

export const initializeOptions = {
client_id: process.env.REACT_APP_CLIENT_ID,
signin: "Sign in with Google",
login_uri: process.env.NODE_ENV === "development" ? undefined : "https://localhost:4001/verify", // TODO: change this to production URL
callback: process.env.NODE_ENV === "development" ? handleCredentialResponse : undefined,
}

Object.freeze(initializeOptions);