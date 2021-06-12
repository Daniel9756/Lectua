import React from "react";
import { makeStyles, Typography, Box } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  box: {
    width: "100%",
    padding: 20,
    background:"#2f4454",
    borderRadius: 8,
  },
  list: {
    display: "flex", justifyContent: "center", alignItems:"center"
  },
  anchor: {
    width: "auto",
    borderRadius: 8,
    textDecoration: "none",
    padding: "10px",
    color: "#DA7B93",
    textTransform: "capitalize",
    "&:hover": {
      color: "#DA7B93",
      fontFamily: "serif",
      textDecoration: "none",
      padding: "10px",
      background: "#376e6f",
    },
  },
}));
function Academics(props) {
  const classes = useStyles();
  const { onMouseEnter, onMouseLeave } = props;
  return (
    <Box
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={classes.box}
    >
      <Box  className={classes.list}>
      <Typography component="div">
        <Link to="/dashboard" className={classes.anchor}>
          Academics
        </Link>
      </Typography>
    
      <Typography component="div">
        <Link to="/Property" className={classes.anchor}>
          Find courses
        </Link>
      </Typography>
    
      <Typography component="div">
        <Link to="/Property" className={classes.anchor}>
          create lession
        </Link>
      </Typography>{" "}
      </Box>
      <hr />
      <Box  className={classes.list}>
      <Typography component="div">
        <Link to="/Property" className={classes.anchor}>
          Join Class
        </Link>
      </Typography>{" "}
     
      <Typography component="div">
        <Link to="/Property" className={classes.anchor}>
          Professionals
        </Link>
      </Typography>{" "}
     
      <Typography component="div">
        <Link to="/Property" className={classes.anchor}>
          institutions{" "}
        </Link>
      </Typography>{" "}
      </Box>
      <hr />{" "}
     <Box  className={classes.list}>
     <Typography component="div">
        <Link to="/Property" className={classes.anchor}>
          blog
        </Link>
      </Typography>{" "}
   
      <Typography component="div">
        <Link to="/Property" className={classes.anchor}>
          About us
        </Link>
      </Typography>{" "}
     </Box>
     
    </Box>
  );
}

export default Academics;
