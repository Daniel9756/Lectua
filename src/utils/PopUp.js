import {
  Dialog,
  DialogContent,
  DialogTitle,
  makeStyles,
} from "@material-ui/core";
import React from "react";
import { GroupButton } from "../controls/Button";
import { Subtitle } from "../controls/Input"
const useStyles = makeStyles((theme) => ({
  root: {
    borderRadius: theme.spacing(2),
    position: "absolute",
    padding: theme.spacing(5),

  },

}));

function PopUp(props) {
  const classes = useStyles();
  const { title, children, openPopUp, setOpenPopUp } = props;
  return (
    <Dialog open={openPopUp} classes={{ paper: classes.root }} maxWidth="md">
      <DialogTitle>
        <div style={{ display: "flex" }}>
          <Subtitle components="div" style={{ flexGrow: 1 }}>
            {title}
          </Subtitle>
          <GroupButton
            style={{ color: "#DA7B93", }}
            onClick={() => setOpenPopUp(false)}
          >
            Close
          </GroupButton>
        </div>
      </DialogTitle>
      <DialogContent dividers>{children}</DialogContent >
    </Dialog>
  );
}
export default PopUp;
