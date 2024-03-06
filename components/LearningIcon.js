import Image from "next/image";
import classes from "./LearningIcon.module.css";

const LearningIcon = () => {
  return (
    <div className={classes.learning_icon}>
      <Image
        src="/images/site/sidebar_icon.svg"
        alt="sidebar icon"
        height={30}
        width={30}
      />
    </div>
  );
};

export default LearningIcon;
