interface props {
  user: UserObj;
  setFocusedStudent: (focusedStudent: null | UserObj) => void;
  setLocation: (location: string) => void;
}
export const Student = ({user, setFocusedStudent, setLocation}: props) => {
  if (user["Key Number"] === undefined) return null;
  let isClockedIn = user.status;
  if (process.env.NODE_ENV === "development" || process.env.NODE_ENV === "test") {
    isClockedIn = [true, false][Math.floor(Math.random() * 2)];
  };
  const fakeDate = new Date();
  return (
    <>
      <tr onClick={(e)=> {
        e.preventDefault();
        console.log("I clicked on ", user["Key Number"]);
        setFocusedStudent(user);
        setLocation("student profile");
      }}>
        <td>{user["Key Number"]}</td>
        <td>{user.Name}</td>
        <td>{user.status || isClockedIn}</td>
        <td>{user.lastClockIn || fakeDate.toLocaleDateString()}</td>
      </tr>
    </>
  );
};