import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
import { MdConfirmationNumber } from "react-icons/md";
const useStyles = makeStyles((theme) => ({
  dialog: {
    position: "absolute",
    padding: theme.spacing(4),
    top: theme.spacing(6),
  },
  dialogTitle: {
    textAlign: "center",
  },
  dialogContent: {
    textAlign: "center",
  },
  dialogAction: {
    justifyContent: "center",
  },
  titleIcon: {
    backgroundColor: "#fee5eb",
    color: "#c23616",
    "&:hover": {
      backgroundColor: "#fee5eb",
      cursor: "default",
    },
    "& .MuiSvgIcon-root": {
      fontSize: "8rem",
    },
  },
}));

function Notification() {
  const classes = useStyles();


  return (
    <Dialog classes={{ paper: classes.dialog }}>
      <DialogTitle className={classes.dialogTitle}>
        <IconButton disableRipple className={classes.titleIcon}>
          <MdConfirmationNumber fontSize={40}/>
        </IconButton>
      </DialogTitle>
      <DialogContent className={classes.dialogContent}>
        <Typography variant="h6">Here is the title</Typography>{" "}
        <Typography variant="subtitle2">Here is subtitle</Typography>
      </DialogContent>
      <DialogActions className={classes.dialogAction}>
        {/* <Controls.Button text="Yes" style={{ backgroundColor: "#c23616" }} />
        <Controls.Button text="No" color="default" /> */}
      </DialogActions>
    </Dialog>
  );
}
export default Notification;
