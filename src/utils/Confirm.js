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
import { GroupButton } from "../controls/Button";
import { MdConfirmationNumber } from "react-icons/md";

const useStyles = makeStyles((theme) => ({
  dialog: {
    position: "absolute",
    padding: theme.spacing(4),
    top: theme.spacing(6)
  },
  dialogTitle: {
    textAlign: "center",
  },
  dialogContent: {
    textAlign: "center",
  },
  dialogAction: {
    justifyContent: "center"
  },
  titleIcon: {
    backgroundColor: "#fee5eb",
    color: "#DA7B93",
    '&:hover': {
      backgroundColor: "#fee5eb",
      cursor: "default",
    },
    '& .MuiSvgIcon-root': {
      fontSize: "8rem"
    }
  },
}));

function Confirm(props) {
  const classes = useStyles();

  const { confirmDialog, setConfirmDialog } = props;

  return (
    <Dialog open={confirmDialog.isOpen} classes={{ paper: classes.dialog }}>
      <Typography variant="h5" style={{ fontFamily: "serif", color: "#2f4454", textAlign: "center" }}>{confirmDialog.subject ? confirmDialog.subject : ""}
      </Typography>
      <DialogTitle className={classes.dialogTitle}>
        <IconButton disableRipple className={classes.titleIcon}>
          <MdConfirmationNumber fontSize="150" />
        </IconButton>
      </DialogTitle>
      <DialogContent className={classes.dialogContent}>
        <Typography variant="h6" style={{ fontFamily: "serif" }} >
          {confirmDialog.title}
        </Typography> <Typography variant="subtitle2" style={{ color: "#DA7B93", fontFamily: "serif" }}>
          {confirmDialog.subtitle}
        </Typography>
      </DialogContent >
      <DialogActions className={classes.dialogAction}>
        <GroupButton
          text="Yes"
          style={{ backgroundColor: "#DA7B93", width: 121, padding: 12, borderRadius: 8 }}
          onClick={confirmDialog.onConfirm}
        >Yes</GroupButton>
        <GroupButton
          text="No"
          style={{ width: 121, padding: 12, borderRadius: 8 }}
          onClick={() => { setConfirmDialog({ ...confirmDialog, isOpen: false }) }}
        >No</GroupButton>
      </DialogActions>
    </Dialog>
  );
}
export default Confirm;
