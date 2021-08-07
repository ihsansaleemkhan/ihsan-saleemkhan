import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import InputLabel from "@material-ui/core/InputLabel";

import Send from "@material-ui/icons/Send";
import CloudDownloadIcon from "@material-ui/icons/CloudDownload";
import { jsPDF } from "jspdf";
import img1 from "../images/ihsan-saleemkhan1.jpeg";
import img2 from "../images/ihsan-saleemkhan2.jpeg";
import img3 from "../images/ihsan-saleemkhan3.jpeg";

import emailjs from "emailjs-com";
import swal from "sweetalert";

const useStyles = makeStyles((theme) => ({
  contactContainer: {
    background: "#233",
    height: "100vh",
  },
  heading: {
    color: "tomato",
    textAlign: "center",
    textTransform: "uppercase",
    marginBottom: "1rem",
  },
  form: {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    position: "absolute",
  },
  input: {
    color: "#fff",
  },
  button: {
    marginTop: "1rem",
    color: "tomato",
    borderColor: "tan",
  },
  field: {
    margin: "1rem 0rem",
  },
  btndownload: {
    marginTop: "1rem",
    color: "tomato",
    borderColor: "tan",
    marginBottom: "2rem",
  },
  successMsg: {
    margin: "1rem",
    fontSize: "1.5rem",
    color: "#057905",
    background: "#000",
    padding: "0.6rem",
    borderRadius: "0.5rem",
    display: "none",
  },
}));

const InputField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "tomato",
    },
    "& label": {
      color: "tan",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "tan",
      },
      "&:hover fieldset": {
        borderColor: "tan",
      },
      "&.Mui-focused fieldset": {
        color: "#fff",
        borderColor: "tan",
      },
    },
  },
})(TextField);

const Contact = () => {
  const classes = useStyles();

  const pdfGenerate = () => {
    var doc = new jsPDF("landscape", "px", "a4", "false");
    doc.addImage(img1, "jpeg", 65, 20, 500, 400);
    doc.addPage();
    doc.addImage(img2, "jpeg", 65, 20, 500, 400);
    doc.addPage();
    doc.addImage(img3, "jpeg", 65, 20, 500, 400);
    doc.save("ihsan-saleemkhan.pdf");
  };

  function sendMail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_9bb67z5",
        "template_h53o803",
        e.target,
        "user_GSwWwGOZbTFNLQzCPQt6l"
      )
      .then((res) => {
        swal("Successfully E-mail Sent!");
        console.log("Success", res);
      })
      .catch((err) => console.log(err));
  }

  return (
    <Box component="div" className={classes.contactContainer}>
      <Grid container justify="center">
        <Box component="form" className={classes.form} onSubmit={sendMail}>
          <Button
            variant="outlined"
            fullWidth={true}
            onClick={pdfGenerate}
            endIcon={<CloudDownloadIcon />}
            className={classes.btndownload}
          >
            Download My Resume
          </Button>

          <Typography variant="h5" className={classes.heading}>
            Hire or Contact me...
          </Typography>
          <InputField
            fullWidth={true}
            label="Name"
            name="name"
            variant="outlined"
            inputProps={{ className: classes.input }}
            required
          />
          <InputField
            fullWidth={true}
            label="Email"
            name="email"
            variant="outlined"
            inputProps={{ className: classes.input }}
            className={classes.field}
            required
          />
          <InputField
            fullWidth={true}
            label="Message"
            name="message"
            variant="outlined"
            multiline
            rows={4}
            inputProps={{ className: classes.input }}
            required
          />
          <Button
            variant="outlined"
            fullWidth={true}
            endIcon={<Send />}
            type="submit"
            className={classes.button}
          >
            Contact Me
          </Button>
        </Box>
        <InputLabel className={classes.successMsg}>
          E-mail sent Successfully ;)
        </InputLabel>
      </Grid>
    </Box>
  );
};

export default Contact;
