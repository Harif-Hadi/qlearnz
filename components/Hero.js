import Header from "./Header";

import classes from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={classes.hero}>
      <Header />
      <div className={classes.content}>
        <h1>
          Streamline your LMS with our budget-friendly SCORM packaging solution
        </h1>
        <div className={classes.btn_actions}>
          <button>Request a demo</button>
          <button>Watch a product overview</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
