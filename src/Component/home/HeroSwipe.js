import React from "react";
import {
  makeStyles,
  Grid,
  Typography,
  Container,
  InputLabel,
} from "@material-ui/core";
// import Controls from "../../controls/Controls";
import { CustomInput, Title } from "../../controls/Input";
import { CustomButton } from "../../controls/Button";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { GiKeyLock, GiLifeInTheBalance } from "react-icons/gi";

const useStyles = makeStyles((theme) => ({
  service: {
    backgroundImage: `url(/images/v5.jpg)`,
    backgroundRepeat: "no-repeat",
    objectFit: "cover",
    width: "100%",
    height: "550px",
    paddingTop: theme.spacing(2),
    color: "#fff",
  },
  grid: {
    justifyContent: "space-between",
    alignItems: "center",
    padding: 40,
    borderRight: "1px solid",
  },
  gridIcon: {
    fontSize: 40,
    color: "#DA7B93",
    marginRight: 20,
  },
  gridSub: {
    fontSize: 25,
    fontFamily: "serif",
    fontWeight: "bold",
    color: "#376e6f",
  },
  divTit: {
    display: "flex",
    margin: 16,
    justifyContent: "center",
    alignItems: "center",
  },
}));
function HeroSwipe() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.service}>
        <Container>
          <Grid container>
            <Grid item md="6">
              <Title style={{ margin: 40 }}>never stop learning</Title>
              <Typography
                variant="h6"
                style={{ fontWeight: "bold", margin: 40, color: "#DA7B93" }}
              >
                A best and cheapest way of getting knowledge is learning: to
                make a better tomorrow.
              </Typography>
              <div
                style={{
                  margin: 39,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <CustomInput
                  name="topic"
                  type="text"
                  placeholder="Topic of the day"
                  label="label"
                />

                <CustomButton
                  text="Submit"
                  type="submit"
                  width={200}
                  style={{ cursor: "pointer", borderRadius: 8 }}
                >
                  Search{" "}
                </CustomButton>
              </div>
            </Grid>
            <Grid item md="6"></Grid>
          </Grid>
        </Container>
      </div>
      <Container style={{ marginTop: -100 }}>
        <Grid
          container
          style={{
            background: "#fff",
            borderRadius: 8,
            boxShadow: "8px solid",
          }}
        >
          <Grid item md="4" className={classes.grid}>
            <div className={classes.divTit}>
              <HiOutlineDesktopComputer className={classes.gridIcon} />{" "}
              <InputLabel className={classes.gridSub}>
                Over 10, 000 courses
              </InputLabel>
            </div>
            <div style={{ margin: 20 }}>
              <InputLabel style={{ fontFamily: "serif", lineHeight: 2 }}>
                Choose from hundreds of online courses from top professionals
                and specialist institutions.
              </InputLabel>
            </div>
          </Grid>
          <Grid item md="4" className={classes.grid}>
            <div className={classes.divTit}>
              <GiLifeInTheBalance className={classes.gridIcon} />{" "}
              <InputLabel className={classes.gridSub}>
                Lifetime entrance
              </InputLabel>
            </div>
            <div style={{ margin: 20 }}>
              <InputLabel style={{ fontFamily: "serif", lineHeight: 2 }}>
                Choose from hundreds of online courses from top professionals
                and specialist institutions.
              </InputLabel>
            </div>
          </Grid>
          <Grid item md="4" className={classes.grid} style={{ borderRight: 0 }}>
            <div className={classes.divTit}>
              <GiKeyLock className={classes.gridIcon} />{" "}
              <InputLabel className={classes.gridSub}>Live Learning</InputLabel>
            </div>
            <div style={{ margin: 20 }}>
              <InputLabel style={{ fontFamily: "serif", lineHeight: 2 }}>
                Choose from hundreds of online courses from top professionals
                and specialist institutions.
              </InputLabel>
            </div>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default HeroSwipe;
