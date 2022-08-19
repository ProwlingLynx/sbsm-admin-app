
type setGlobalStateHook = (token: string, callback: (args1 : UserObj[]) => void) => Promise<any>;

export const getStudentData : setGlobalStateHook = async (token, callback) => {
  try {
    let url = window.location.origin + "/get/students";
    if (process.env.NODE_ENV === "development" || process.env.NODE_ENV === "test") {
      url = "http://localhost:4001/get/students";
    }
    const res = await fetch(url, {
      method: "get",
      headers: {
        "authorization": `Bearer ${token}`,
      },
    });
    if (res.status >= 400) throw new Error("Not Authorized");
    // console.log(res.json());
    console.log(res);
    const data = res.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};