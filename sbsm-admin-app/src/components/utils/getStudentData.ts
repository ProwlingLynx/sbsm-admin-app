
type setGlobalStateHook = (callback: (args0 : UserObj[]) => void) => Promise<any>;

export const getStudentData : setGlobalStateHook = async (callback) => {
  try {
    let url = window.location.origin + "/get/students";
    if (process.env.NODE_ENV === "development" || process.env.NODE_ENV === "test") {
      url = "http://localhost:4001/get/students";
    }
    const res = await fetch(url, {
      method: "get",
      headers: {
        "authorization": "Bearer Nonsense Future Token",
      },
    });
    if (res.status >= 400) throw new Error("Not Authorized");
    const data = res.json() as unknown as UserObj[];
    console.log(data);
    callback(data);
  } catch (error) {
    console.log(error);
    throw error;
  }
};