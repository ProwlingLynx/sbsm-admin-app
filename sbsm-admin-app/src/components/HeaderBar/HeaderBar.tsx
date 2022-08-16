import { ReactElement } from "react";

export const HeaderBar = ({location} : {location: string;}) => {
  let content : null | ReactElement = null;
  if (location === "StudentList") {
    content = (<input type="text" placeholder="Search Key Number" />);
  } else {
    content = (<h1>Rick Roller the first</h1>)
  }

  return (
    <div className="header-bar">
      {content}
    </div>
  )
}