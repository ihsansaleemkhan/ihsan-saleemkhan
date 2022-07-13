import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
// import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  heading: {
    color: "tomato",
    padding: "3rem 0",
    textTransform: "uppercase",
  },
  cardContainer: {
    maxWidth: 345,
    margin: "3rem auto",
  },
  title: {
    textAlign: "center",
  },

  skillsTitle: {
    fontSize: "5em",
    textAlign: "center",
    color: "steelblue",
  },

  skills: {
    padding: " 0 2em",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

  skills__container: {
    backgroundColor: "#eee",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    height: "200px",
    width: "195px",
    border: "5px solid black",
    borderRadius: "0 20px",
    margin: "1rem",
    boxShadow: "5px 5px 10px 5px #999",
  },

  skills__containerimg: {
    height: "90px",
    width: "auto",
    marginLeft: "45px",
  },

  progressbar: {
    width: "85%",
    backgroundColor: "#ccc",
    height: "5px",
  },

  bar: {
    textAlign: "center",
    backgroundColor: "cyan",
    borderRadius: "0 5px 5px 0",
    height: "100%",
  },
}));

const skills = [
  {
    title: "HTML5",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/120px-HTML5_logo_and_wordmark.svg.png",
    level: "90%",
  },
  {
    title: "CSS",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/CSS.3.svg/1000px-CSS.3.svg.png",
    level: "85%",
  },
  {
    title: "JavaScript",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/250px-Unofficial_JavaScript_logo_2.svg.png",
    level: "80%",
  },
  {
    title: "ReactJs",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/768px-React.svg.png",
    level: "80%",
  },
  {
    title: "AngularJs",
    logo: "https://miro.medium.com/max/1200/1*_IHDTTv-8szUfWhAJ5cC1A.png",
    level: "80%",
  },
  {
    title: "NodeJs",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/885px-Node.js_logo.svg.png",
    level: "80%",
  },
  {
    title: "Java",
    logo: "https://library.kissclipart.com/20181218/xcw/kissclipart-java-development-kit-png-clipart-java-development-8f99aa57c7ee9283.png",
    level: "80%",
  },
  {
    title: "MySql",
    logo: "https://funnydev.edu.vn/uploads/thumbnails/course_thumbnails/course_thumbnail_default_33.jpg",
    level: "80%",
  },
  {
    title: "MongoDB",
    logo: "https://www.tutorialsteacher.com/Content/images/home/mongodb.svg",
    level: "80%",
  },
];

const Skills = () => {
  const classes = useStyles();
  return (
    <Box component="div">
      <Typography variant="h4" align="center" className={classes.heading}>
        My Skills
      </Typography>
      <Grid container justify="center">
        {skills.map((skill, i) => (
          <Grid item key={i}>
            <Card className={classes.skills__container}>
              <CardActionArea>
                <Typography variant="h5" gutterBottom className={classes.title}>
                  {skill.title}
                </Typography>
                <CardMedia
                  component="img"
                  className={classes.skills__containerimg}
                  image={skill.logo}
                />
                {/* <CardContent component="div" className={classes.progressbar}>
                  <div className={classes.bar} width={skill.level}></div>
                </CardContent> */}
              </CardActionArea>
            </Card>

            {/* <div id="app">
                <h1 class="skills-title">Skills</h1>
                <section class="skills">
                <skill v-for="(skill, index) in skills"
                        :title="skill.title"
                        :logo="skill.logo"
                        :level="skill.level"
                        :key="index"
                        >
                    
                </skill>
                </section>
            </div>
            <template id="skills_template">
                <div class="skills__container animated pulse">
                <h3 v-text="title"></h3>
                <img :src="logo" :alt="title">
                <div class="progress-bar">
                    <div :style="{width: level + '%'}"class="bar"></div>
                </div>
                </div>
            </template> */}
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Skills;
