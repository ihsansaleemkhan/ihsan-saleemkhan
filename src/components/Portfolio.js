import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

import admin from "../images/admin.png";
import dts from "../images/DTS.png";
import asset from "../images/asset-management.png";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#233",
    height: "100%",
  },
  cardContainer: {
    maxWidth: 345,
    margin: "3rem auto",
  },
}));

const projects = [
  {
    name: "Driving Training System Admin",
    description: `The DTS admin is provided with a full database for each car used in the training for the Traffic Directorate can monitor its license permit,
     insurance and validity to use in training. The system is also equipped with all details of trainers and it will be able to monitor the rate of failure of
      any specific trainer, which means he may need more qualification and training as a driving instructor`,
    image: admin,
  },
  {
    name: "Driving Training System",
    description: `The number of schools for Driving in Qatar, which is 9 schools, is very suffient to cover the needs of the population, and there is no need to 
    inscrease this number, especially that the existing schools are distributed geographically well to meet the needs of different regions in Qatar`,
    image: dts,
  },
  {
    name: "Asset Management",
    description: `This porject is developed for our own organization to keep track of the equipment and inventrory vital to day-to-day operation of the businesses`,
    image: asset,
  },
];

const Portfolio = () => {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.mainContainer}>
      <Grid container justify="center">
        {/* Projects */}
        {projects.map((project, i) => (
          <Grid item xs={12} sm={8} md={4} key={i}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Project 1"
                  height="140"
                  image={project.image}
                />
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    {project.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {project.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Portfolio;
