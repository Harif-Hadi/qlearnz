import Image from "next/image";
import classes from "./DashboardOptions.module.css";

const DashboardOptions = ({ imageSrc, alt, title }) => {
  return (
    <div className={classes.dashboard_options}>
      <Image src={imageSrc} alt={alt} height={20} width={20} />
      <h3>{title}</h3>
    </div>
  );
};

export default DashboardOptions;
// "/images/site/dashboard.svg";
