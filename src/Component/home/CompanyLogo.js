import React from "react";
import { Box, Grid, makeStyles, Avatar } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "auto",
   margin: 20,
   padding:20,
  },
 
  logo3: {
    width: theme.spacing(25),
    height: theme.spacing(30),
    padding: theme.spacing(2),
  },
}));
function CompanyLogo() {
  const classes = useStyles();
  return (
    <Box>
      <Grid container className={classes.container}>
        <Grid item md="2" sm="6">
          <Avatar
            variant="rounded"
            src="/images/logos/logo3.png"
            alt="company logo"
            className={classes.logo3}
          ></Avatar>
        </Grid>
        <Grid item md="2" sm="6">
          <Avatar
            variant="rounded"
            src="/images/logos/logo.jpg"
            alt="company logo"
            className={classes.logo3}
          ></Avatar>
        </Grid>
        <Grid item md="2" sm="6">
          <Avatar
            variant="rounded"
            src="/images/logos/logo4.png"
            alt="company logo"
            className={classes.logo3}
          ></Avatar>
        </Grid>
         <Grid item md="2" sm="6">
          <Avatar
            variant="rounded"
            src="/images/logos/logo1.png"
            alt="company logo"
            className={classes.logo3}
          ></Avatar>
        </Grid>
         <Grid item md="2" sm="6">
          <Avatar
            variant="rounded"
            src="/images/logos/logo8.jpg"
            alt="company logo"
            className={classes.logo3}
          ></Avatar>
        </Grid> 
        <Grid item md="2" sm="6">
          <Avatar
            variant="rounded"
            src="/images/logos/logo5.png"
            alt="company logo"
            className={classes.logo3}
          ></Avatar>
        </Grid>
      </Grid>
    </Box>
  );
}

export default CompanyLogo;
