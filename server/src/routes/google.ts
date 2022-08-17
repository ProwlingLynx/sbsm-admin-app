const {OAuth2Client} = require('google-auth-library');
const client = new OAuth2Client(process.env.CLIENT_ID);


export const verify = async (token: string | undefined) : Promise<any>=> {
  try {
    if (typeof token !== 'string') throw new Error('Invalid arguments');
    const ticket = await client.verifyIdToken({
        idToken: token,
        audience: process.env.CLIENT_ID,  // Specify the CLIENT_ID of the app that accesses the backend
        // Or, if multiple clients access the backend:
        //[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3]

    });
    const payload = ticket.getPayload();
    const userid = {
      name: payload.name,
      email: payload.email,
    };
    // If request specified a G Suite domain:
    // const domain = payload['hd'];
    return userid;
  } catch (error) {
    console.log(error);
    throw error;
  }
};