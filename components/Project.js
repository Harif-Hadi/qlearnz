import Image from "next/image";
import classes from "./Project.module.css";

const Project = () => {
  return (
    <div className={classes.project}>
      <p>16 July, 2023</p>
      <h2>Information security for employees</h2>
      <div className={classes.progress}>
        <p>40% Completed</p>
        <div className={classes.progress_bar}>
          <div
            className={`${classes.progress_sub_bar} ${classes.percentage_completed}`}
          ></div>
        </div>
        <button>
          <div className={classes.continue}>
            <p>Continue</p>
            <Image
              src="/images/site/right_arrow.svg"
              alt="Right Arrow"
              width={20}
              height={20}
            />
          </div>
        </button>
      </div>
    </div>
  );
};

export default Project;
