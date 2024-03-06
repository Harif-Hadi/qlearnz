import classes from "./Dashboard.module.css";
import DashboardOptions from "./DashboardOptions";

const Dashboard = () => {
  return (
    <div className={classes.dashboard}>
      <DashboardOptions
        imageSrc="/images/site/dashboard.svg"
        alt="Dashboard icon"
        title="Dashboard"
      />
      <DashboardOptions
        imageSrc="/images/site/dashboard.svg"
        alt="Dashboard icon"
        title="Projects"
      />
    </div>
  );
};

export default Dashboard;
