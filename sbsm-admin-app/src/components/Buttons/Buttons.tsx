import styles from "./styles.module.css";

interface props {
  location: string;
  setLocation: (args0: string) => void;
};

interface GoBackProps extends props {
  previousLocation: string;
};
export const GoBackButton = ({location, setLocation, previousLocation}: GoBackProps) => {
  if (previousLocation === location) throw new Error('previousLocation must not be the same as location');
  return (
    <>
      <button className={styles.goBack} onClick={()=> setLocation(previousLocation)}>Go Back</button>
    </>
  );
};

interface ClearButtonProps extends props {
  innerText: string;
  nextLocation: string;
};
export const ClearButton = ({innerText, location, setLocation, nextLocation}: ClearButtonProps) => {
  if (nextLocation === location) throw new Error('nextLocation must not be the same as location');
  return (
    <>
      <button className={styles.clear} onClick={()=> setLocation(nextLocation)}>{innerText}</button>
    </>
  );
};