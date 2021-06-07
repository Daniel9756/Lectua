import React from "react";
import { makeStyles, Typography, Box } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  anchor: {
    textDecoration: "none",
    padding: "10px",
    color: "#DA7B93",
  },
}));
function Academics(props) {
  const classes = useStyles();
  const { onMouseEnter, onMouseLeave } = props;
  return (
    <Box onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <Typography component="div">
        <Link to="/dashboard" className={classes.anchor}>
          Academics
        </Link>
      </Typography>
      <hr />
      <Typography component="div">
        <Link to="/Property" className={classes.anchor}>
          Find courses
        </Link>
      </Typography>
      <hr />
      <Typography component="div">
        <Link to="/Property" className={classes.anchor}>
          create lession
        </Link>
      </Typography>{" "}
      <hr />
      <Typography component="div">
        <Link to="/Property" className={classes.anchor}>
         Join Class
        </Link>
      </Typography>{" "}
      <hr />
      <Typography component="div">
        <Link to="/Property" className={classes.anchor}>
          Professionals
        </Link>
      </Typography>{" "}
      <hr />{" "}
      <Typography component="div">
        <Link to="/Property" className={classes.anchor}>
          institutions{" "}
        </Link>
      </Typography>{" "}
      <hr />
      <Typography component="div">
        <Link to="/Property" className={classes.anchor}>
          blog
        </Link>
      </Typography>{" "}
      <hr />
    </Box>
  );
}

export default Academics;
