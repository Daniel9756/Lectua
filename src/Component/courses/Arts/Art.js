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
import { useQuery } from "react-query";
import { fetchOneCategory } from "../../../Async/lesson";

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
  const { content } = props
  console.log(content)

  const { data } = useQuery(["category", content], () => fetchOneCategory(content), {
    onSuccess: (category) => console.log(category),
  });
  return (
      <>
    <Card className={classes.card}>
      <Box className={classes.icon}>
        <Avatar alt="person" square className={classes.icon} />
      </Box>
      <CardContent>
      <div className={classes.title}>
            <Typography
              variant="h5"
              className={classes.why}
           
            
            >
          
            </Typography>
            <Typography variant="h4" className={classes.status}>
              <strong style={{ color: "#DA7B93" }}>$</strong>
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
