import Image from "next/image";
import Link from "next/link";
import Dashboard from "./Dashboard";
import LearningIcon from "./LearningIcon";
import Account from "./Account";

import classes from "./Sidebar.module.css";

const Sidebar = () => {
  return (
    <div className={classes.sidebar}>
      <div className={classes.sidebar_icon}>
        <Link href="/" className={classes.sidebar_icon_first}>
          <Image
            src="/images/site/qlearnz.png"
            alt="Qlearnz image"
            height={75}
            width={95}
          />
        </Link>
        <Link href="/" className={classes.small_sidebar_icon}>
          <Image
            src="/images/site/sidebar_icon.svg"
            alt="sidebar icon"
            height={30}
            width={30}
          />
        </Link>
      </div>
      <Dashboard />
      <LearningIcon />
      <div className={classes.user}>
        <Account
          imageSrc="/images/site/avatar.png"
          alt="User Avatar"
          title="Account"
        />

        <Account
          imageSrc="/images/site/logout.svg"
          alt="Logout"
          title="Logout"
        />
      </div>
    </div>
  );
};

export default Sidebar;
