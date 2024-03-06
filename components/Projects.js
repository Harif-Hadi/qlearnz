import Project from "./Project";
import classes from "./Projects.module.css";

const Projects = () => {
  return (
    <div className={classes.projects_container}>
      <h1>Recents Projects</h1>
      <div className={classes.projects}>
        <Project />
      </div>
    </div>
  );
};

export default Projects;
