class GoogleSignIn {
  readonly client_id: string | undefined;
  readonly signin: string;
  readonly login_uri: string | undefined;
  readonly url: string;
  changeLocations: (arg0:string) => void;
  constructor() {
    this.client_id = process.env.REACT_APP_CLIENT_ID;
    this.signin = "Sign in with Google";
    // TODO: change this to production URL
    this.login_uri = process.env.NODE_ENV === "development" ? undefined : "https://localhost:4001/verify";
    this.url = window.location.origin + "/verify/user";
    this.changeLocations = (param)=>{console.log("Did not change location", param)};
    if (process.env.NODE_ENV === "development" || process.env.NODE_ENV === "test") {
      this.url = "http://localhost:4001/verify/user";
    }
  }

  intializeGoogle () {
    google.accounts.id.initialize({
      client_id : this.client_id,
      signin : this.signin,
      login_uri : this.login_uri,
      callback : this.sendCredentialsToServer.bind(this),
    });
  }
  renderButton () {
    google.accounts.id.renderButton(
      document.getElementById("buttonDiv"),
      { theme: "outline", size: "large" }  // customization attributes
    );
  }
  async sendCredentialsToServer (response: any) {
    try {
      console.log("Encoded JWT ID token: " + response.credential);
      const res = await fetch(this.url, {
        method: "POST",
        headers: {
          "authorization": "Bearer " + response.credential,
        },
      })
      this.changeLocations("student list");
    } catch (error) {
      console.log(error);
    };
  }
  setLocationChanger (setLocation:(arg0:string)=>void) {
    this.changeLocations = setLocation;
  }
  }

export const googleSignIn = new GoogleSignIn();