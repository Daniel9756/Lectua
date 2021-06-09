import React from "react";
import {
  makeStyles,
  Grid,
  Typography,
  Container,
  CardContent,
  Card,
} from "@material-ui/core";
import MemberList from "../../controls/MemberList";
import { FaHouseDamage, FaTachometerAlt } from "react-icons/fa";
import {
  GiHouse,
  GiHomeGarage,
  GiCheckMark,
  GiCrossedBones,
} from "react-icons/gi";
import { CustomButton } from "../../controls/Button";
import Service from "../service/Service";

const useStyles = makeStyles((theme) => ({
  why: {
    textAlign: "flex-start",
    fontWeight: "bold",
    fontFamily: "serif",
    textTransform: "capitalize",
    marginTop: theme.spacing(1),
    opacity: "0.5",
  },

  grid: {
    marginTop: theme.spacing(4),
  },

  memberlist: {
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    marginBottom: theme.spacing(2),
  },
  status: {
    fontFamily: "Helvetica Neue",
    color: "#130f40",
    fontWeight: "bold",
  },
  membermark: {
    textAlign: "center",
    fontSize: 12,
    color: "#6ab04c",
    marginRight: 8,
    fontWeight: "bold",
  },
  membermarkx: {
    textAlign: "center",
    fontSize: 12,
    color: "#e74c3c",
    marginRight: 8,
    fontWeight: "bold",
  },
  paragraph: {
    fontFamily: "Helvetica Neue",
    textTransform: "capitalize",
    fontSize: "1rem",
    opacity: "0.8",
  },
  icon: {
    fontSize: 120,
    color: "#130f40",
    marginTop: "16px",
    borderRadius: "50%",
    opacity: "0.8",
  },
  card: {
    height: "550px",
    margin: theme.spacing(1),
    elevation: "0",
  },

  "@media (max-width: 960px)": {
    card: {
      width: "320px",
    },
  },
}));

function Membership(props) {
  const classes = useStyles();
  return (
    <>
      <Service />
      <Container
        style={{ paddingBottom: 20, paddingTop: 20, background: "#dcdde1", marginBottom: 40 }}
      >
        <Grid container>
          <Grid item md="3">
            <Card className={classes.card}>
              <div style={{ textAlign: "center" }}>
                <GiHouse className={classes.icon} />
              </div>
              <CardContent style={{ textAlign: "center" }}>
                <div className={classes.title}>
                  <Typography
                    variant="h5"
                    className={classes.why}
                    component="div"
                    color="secondary"
                  >
                    Basic
                  </Typography>
                  <Typography variant="h4" className={classes.status}>
                    Free
                  </Typography>
                </div>
                <MemberList
                  icon={<GiCheckMark className={classes.membermark} />}
                  text="One root Account"
                />
                <MemberList
                  icon={<GiCheckMark className={classes.membermark} />}
                  text="One free Class"
                />
                <MemberList
                  icon={<GiCheckMark className={classes.membermark} />}
                  text="One group class"
                />
                <MemberList
                  icon={<GiCrossedBones className={classes.membermarkx} />}
                  text="No User Account"
                />
                <MemberList
                  icon={<GiCheckMark className={classes.membermark} />}
                  text="Free online messages"
                />
                <MemberList
                  icon={<GiCrossedBones className={classes.membermarkx} />}
                  text="Free SMS messages"
                />

                <CustomButton
                  style={{ marginTop: 20, opacity: "0.8", color: "#DA7B93" }}
                >
                  Choose Plan
                </CustomButton>
              </CardContent>
            </Card>
          </Grid>
          <Grid item md="3">
            <Card className={classes.card}>
              <div style={{ textAlign: "center" }}>
                <FaHouseDamage className={classes.icon} elevation="0" />
              </div>
              <CardContent style={{ textAlign: "center" }}>
                <div className={classes.title}>
                  <Typography
                    variant="h5"
                    className={classes.why}
                    component="div"
                    color="secondary"
                  >
                    Professional
                  </Typography>
                  <Typography variant="h4" className={classes.status}>
                    <em style={{ fontWeight: "bold" }}> # </em> 5000
                  </Typography>
                </div>
                <MemberList
                  icon={<GiCheckMark className={classes.membermark} />}
                  text="One root Account"
                />
                <MemberList
                  icon={<GiCheckMark className={classes.membermark} />}
                  text="Unlimited free Class"
                />
                <MemberList
                  icon={<GiCheckMark className={classes.membermark} />}
                  text="Unlimited group class"
                />
                <MemberList
                  icon={<GiCrossedBones className={classes.membermarkx} />}
                  text="No User Account"
                />
                <MemberList
                  icon={<GiCheckMark className={classes.membermark} />}
                  text="Free online messages"
                />
                <MemberList
                  icon={<GiCheckMark className={classes.membermark} />}
                  text="Free SMS messages"
                />
                <CustomButton
                  style={{ marginTop: 20, opacity: "0.8", color: "#DA7B93" }}
                >
                  Choose Plan
                </CustomButton>
              </CardContent>
            </Card>
          </Grid>{" "}
          <Grid item md="3">
            <Card className={classes.card}>
              <div style={{ textAlign: "center" }}>
                <GiHomeGarage className={classes.icon} />
              </div>
              <CardContent style={{ textAlign: "center" }}>
                <div className={classes.title}>
                  <Typography
                    variant="h5"
                    className={classes.why}
                    component="div"
                    color="secondary"
                  >
                    Institutional
                  </Typography>
                  <Typography variant="h4" className={classes.status}>
                    <em style={{ fontWeight: "bold" }}> # </em> 5000
                  </Typography>
                </div>
                <MemberList
                  icon={<GiCheckMark className={classes.membermark} />}
                  text="One root Account"
                />
                <MemberList
                  icon={<GiCheckMark className={classes.membermark} />}
                  text="Unlimited free Class"
                />
                <MemberList
                  icon={<GiCheckMark className={classes.membermark} />}
                  text="Unlimited group class"
                />
                <MemberList
                  icon={<GiCheckMark className={classes.membermark} />}
                  text="Billed User Account"
                />
                <MemberList
                  icon={<GiCheckMark className={classes.membermark} />}
                  text="Free online messages"
                />
                <MemberList
                  icon={<GiCheckMark className={classes.membermark} />}
                  text="Free SMS messages"
                />

                <CustomButton
                  style={{ marginTop: 20, opacity: "0.8", color: "#DA7B93" }}
                >
                  Choose Plan
                </CustomButton>
              </CardContent>
            </Card>
          </Grid>{" "}
          <Grid item md="3">
            <Card className={classes.card}>
              <div style={{ textAlign: "center" }}>
                <FaTachometerAlt className={classes.icon} />
              </div>
              <CardContent style={{ textAlign: "center" }}>
                <div className={classes.title}>
                  <Typography
                    variant="h5"
                    className={classes.why}
                    component="div"
                    color="secondary"
                  >
                    Business
                  </Typography>
                  <Typography variant="h4" className={classes.status}>
                    <em style={{ fontWeight: "bold" }}> # </em> 20000
                  </Typography>
                </div>
                <MemberList
                  icon={<GiCheckMark className={classes.membermark} />}
                  text="One root Account"
                />
                <MemberList
                  icon={<GiCheckMark className={classes.membermark} />}
                  text="Unlimited free Class"
                />
                <MemberList
                  icon={<GiCheckMark className={classes.membermark} />}
                  text="Unlimited group class"
                />
                <MemberList
                  icon={<GiCheckMark className={classes.membermark} />}
                  text="Unlimited User Account"
                />
                <MemberList
                  icon={<GiCheckMark className={classes.membermark} />}
                  text="Free online messages"
                />
                <MemberList
                  icon={<GiCheckMark className={classes.membermark} />}
                  text="Free SMS messages"
                />

                <CustomButton
                  style={{ marginTop: 20, opacity: "0.8", color: "#DA7B93" }}
                >
                  Choose Plan
                </CustomButton>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
     
      {/* <Footer /> */}
    </>
  );
}

export default Membership;
