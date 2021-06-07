import React from "react";
import { makeStyles, Snackbar } from "@material-ui/core";
import { Alert,  } from "@material-ui/lab";

const useStyles = makeStyles((theme) => ({
  root: {
    top: theme.spacing(10),
  },
}));

function Notification(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
const {message, severity} = props
  const handleNotifyClose = (e, reason) => {
    if (reason === "clickaway") {
      return;
    }
   setOpen(false)
  };
  console.log(message, severity)

  return (
    <Snackbar
      open={open}
      autoHideDuration={20000}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      className={classes.root}
      onClose={handleNotifyClose}
    >
      <Alert severity={severity} onClose={handleNotifyClose}>
        {message}
      </Alert>
    </Snackbar>
  );
}
export default Notification;
