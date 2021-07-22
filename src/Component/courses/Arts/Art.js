import {
  Box,
  makeStyles,
  Typography,
  CardContent,
  Card,
  Avatar,
} from "@material-ui/core";
import React from "react";
import { CustomButton } from "../../../controls/Button";
const useStyles = makeStyles((theme) => ({
  card: {
    width: "25%",
    height: "350px",
    margin: theme.spacing(1),
    elevation: "0",
   
  },
  icon: {
    width: "100%",
    height: "200px",
    borderRadius: 8,

    textAlign: "center",
  },
  why: {
    textAlign: "flex-start",
    fontWeight: "bold",
    fontFamily: "serif",
    textTransform: "capitalize",
    marginTop: theme.spacing(1),
    opacity: "0.5",
  },
  title: {
    marginBottom: theme.spacing(2),
  },
  status: {
    fontFamily: "Helvetica Neue",
    color: "#130f40",
    fontWeight: "bold",
  },
}));
function Arts(props) {
  const classes = useStyles();

  console.log(props);
  const { id, banner, subject, institution, price, teacher } = props;
  return (
      <>
    <Card className={classes.card}>
      <Box className={classes.icon}>
        <Avatar alt="person" src={banner} square className={classes.icon} />
      </Box>
      <CardContent>
      <div className={classes.title}>
            <Typography
              variant="h5"
              className={classes.why}
              component="div"
              color="secondary"
            >
              {subject}
            </Typography>
            <Typography variant="h4" className={classes.status}>
              <strong style={{ color: "#DA7B93" }}>$</strong> {price}
            </Typography>
          </div>
        <CustomButton
          style={{ marginTop: 20, opacity: "0.8", color: "#DA7B93" }}
        >
          detail
        </CustomButton>
      </CardContent>
    </Card>
    </>
  );
}

export default Arts;
