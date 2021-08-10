import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import Twitter from "@material-ui/icons/Twitter";
import Instagram from "@material-ui/icons/Instagram";

const useStyles = makeStyles({
  bottomNavContainer: {
    background: "#222",
  },
  root: {
    "& .MuiSvgIcon-root": {
      fill: "tan",
      "&:hover": {
        fill: "tomato",
        fontSize: "1.8rem",
      },
    },
  },
});

const Footer = () => {
  const classes = useStyles();

  return (
    <BottomNavigation className={classes.bottomNavContainer}>
      <BottomNavigationAction
        icon={<LinkedInIcon />}
        className={classes.root}
        href="https://www.linkedin.com/in/ihsan-saleemkhan-958684172/"
      />
      <BottomNavigationAction
        icon={<Twitter />}
        className={classes.root}
        href="https://twitter.com/ihsan416"
      />
      <BottomNavigationAction
        icon={<Instagram />}
        className={classes.root}
        href="https://www.instagram.com/ihsan_don/"
      />
    </BottomNavigation>
  );
};
export default Footer;
