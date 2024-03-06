import Image from "next/image";

import classes from "./Header.module.css";
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

const Header = () => {
  const [toggleSidebar, setToggleSidebar] = useState();

  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Image
          src="/images/site/logo.svg"
          alt="qlearnz logo"
          width={40}
          height={40}
        />
        <h2>qlearnz</h2>
      </div>
      <nav className={classes.nav_link}>
        <ul className={classes.nav_list}>
          <li className={classes.features}>
            <Link href="#">Features</Link>
          </li>
          <li className={classes.learning}>
            <Link href="/my-learning">My Learning</Link>
          </li>
          <li className={classes.pricing}>
            <Link href="#">PRICING</Link>
          </li>
        </ul>
      </nav>
      <div className={classes.register}>
        <Link href="/auth">
          <button className={classes.register_btn}>Register</button>
        </Link>
      </div>

      <div className={classes.small_sidebar}>
        <div
          className={classes.small_screen_sidebar_icon}
          onClick={() => setToggleSidebar(!toggleSidebar)}
        >
          <MenuIcon />
        </div>
        {toggleSidebar && (
          <div className={classes.small_sidebar_content}>
            <div className={classes.small_screen_register}>
              <Link href="/auth">
                <h1>Register</h1>
              </Link>
            </div>
            <div className={classes.small_pricing}>
              <Link href="/#">
                <h1>Pricing</h1>
              </Link>
            </div>
            <div className={classes.small_learning}>
              <Link href="/my-learning">
                <h1>My Learning</h1>
              </Link>
            </div>
            <div className={classes.small_features}>
              <Link href="/*">
                <h1>Features</h1>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
