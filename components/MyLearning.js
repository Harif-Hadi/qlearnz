import Image from "next/image";

import classes from "./MyLearning.module.css";
import Sidebar from "./Sidebar";
import Projects from "./Projects";

const MyLearning = () => {
  return (
    <div className={classes.my_learning}>
      <Sidebar />
      <div className={classes.right_side_dashboard}>
        <div className={classes.right_side_content}>
          <div className={classes.right_side_text}>
            <h1>Welcome To Qlearnz</h1>
            <p>
              Unlock the future of e-learning. Get more from SCORM with our
              simple, all-in-one solutions.
            </p>
            <button>Create Projects</button>
          </div>
          <div className={classes.create_image}>
            <Image
              src="/images/site/welcome_image.png"
              alt="Welcome Image"
              width={180}
              height={150}
            />
          </div>
        </div>
        <Projects />
      </div>
    </div>
  );
};

export default MyLearning;
