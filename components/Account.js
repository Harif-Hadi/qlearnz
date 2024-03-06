import Image from "next/image";
import classes from "./Account.module.css";

const Account = ({ imageSrc, alt, title }) => {
  return (
    <div className={classes.account}>
      <Image src={imageSrc} alt={alt} height={30} width={30} />
      <h3>{title}</h3>
    </div>
  );
};

export default Account;
// "/images/site/avatar.png"
