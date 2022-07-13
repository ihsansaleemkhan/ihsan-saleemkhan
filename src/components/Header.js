import React from "react";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typed from "react-typed";
import { makeStyles } from "@material-ui/core/styles";
import avatar from "../avatar.jpg";

import Button from "@material-ui/core/Button";
import TouchAppIcon from "@material-ui/icons/TouchApp";

import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    margin: theme.spacing(1),
  },
  title: {
    color: "tomato",
  },
  subtitle: {
    color: "tan",
    textTransform: "uppercase",
  },
  typedContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    width: "100vw",
    textAlign: "center",
    zIndex: 1,
  },
  button: {
    marginTop: "1rem",
    color: "#ff6347",
    borderColor: "#ff6347",
    width: "auto",
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <Box className={classes.typedContainer}>
      <Grid container justify="center">
        <Avatar
          className={classes.avatar}
          src={avatar}
          alt="Ihsan Saleemkhan"
        />
      </Grid>
      <Typography className={classes.title} variant="h4">
        <Typed strings={["Ihsan Saleemkhan"]} typeSpeed={40} />
      </Typography>

      <Typography className={classes.subtitle} variant="h5">
        <Typed
          strings={[
            "Frontend Developer",
            "Backend Developer",
            "Native App Developer",
          ]}
          typeSpeed={100}
          backSpeed={40}
          loop
        />

        <p>A Fullstack developer based in the Qatar. </p>
        <p>
          working remotely with Individuals and Organization. Currently,
          Developer at Holoteq Group.
        </p>
      </Typography>
      <Button
        component={Link}
        to="/portfolio"
        variant="outlined"
        fullWidth={true}
        endIcon={<TouchAppIcon />}
        type="submit"
        className={classes.button}
      >
        Check my work
      </Button>
    </Box>
  );
};

export default Header;
