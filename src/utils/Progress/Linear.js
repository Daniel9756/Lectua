import React from 'react';
import Skeleton from '@material-ui/lab/Skeleton';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
});

export default function LinearLoading() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
     <Skeleton animation="wave" style={{margin:10, height: 25}} />
     <Skeleton animation="wave" style={{margin:10,  height: 25}} />
     <Skeleton animation="wave" style={{margin:10,  height: 25}} />
     <Skeleton animation="wave" style={{margin:10,  height: 25}} />
    </div>
  );
}