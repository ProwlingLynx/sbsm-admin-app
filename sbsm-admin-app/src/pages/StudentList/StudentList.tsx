import { HeaderBar } from "../../components";
interface props {
  location: string;
  setLocation: (location: string) => void;
}
export const StudentList = ({location, setLocation}: props)  => {
  return (
    <div className="student-list">
      <HeaderBar location={location}/>
      <div className="student-list-content">
        <h1>TODO: make student list components</h1>
      </div>
    </div>
  )
};