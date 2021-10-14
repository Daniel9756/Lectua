import React from 'react';
import Skeleton from '@material-ui/lab/Skeleton';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  rect: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: 42,
  },
  "@media (max-width: 960px)": {

  },
  "@media (max-width: 440px)": {
    rect: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      margin: 42,
      flexDirection: "column",
    },

  },
});

export function LinearLoading() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Skeleton animation="wave" style={{ margin: 10, height: 25 }} />
      <Skeleton animation="wave" style={{ margin: 10, height: 25 }} />
      <Skeleton animation="wave" style={{ margin: 10, height: 25 }} />
      <Skeleton animation="wave" style={{ margin: 10, height: 25 }} />
    </div>
  );
}

export function BlockLoading() {
  const classes = useStyles();
  return (
    <div className={classes.rect}>
      <Skeleton variant="rect" animation="wave" style={{ margin: 10, width: 222, height: 351 }} />
      <Skeleton variant="rect" animation="wave" style={{ margin: 10, width: 222, height: 351 }} />
      <Skeleton variant="rect" animation="wave" style={{ margin: 10, width: 222, height: 351 }} />
      <Skeleton variant="rect" animation="wave" style={{ margin: 10, width: 222, height: 351 }} />
    </div>
  );
}