import React from "react";
import {
  makeStyles,
  Typography,
  CardContent,
  Card,
  Box,
} from "@material-ui/core";
import MemberList from "../../controls/MemberList";
import { GiCheckMark } from "react-icons/gi";
import { CustomButton } from "../../controls/Button";

const useStyles = makeStyles((theme) => ({
  why: {
    textAlign: "flex-start",
    fontWeight: "bold",
    fontFamily: "serif",
    textTransform: "capitalize",
    marginTop: theme.spacing(1),
    opacity: "0.5",
  },
  container: {
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  memberlist: {
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    marginBottom: theme.spacing(0.5),
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

  paragraph: {
    fontFamily: "Helvetica Neue",
    textTransform: "capitalize",
    fontSize: "1rem",
    opacity: "0.8",
  },
  icon: {
    fontSize: 120,
    color: "#130f40",
    borderRadius: "50%",
    opacity: "0.8",
    textAlign: "center",
  },
  card: {
    width: "360px",
    height: "550px",
    margin: theme.spacing(0.5),
    elevation: "0",
  },

  "@media (max-width: 1020px)": {
    card: {
      width: "360px",
      height: "650px",
    },
  },
}));

function Membership(props) {
  const classes = useStyles();
  const {
    title,
    price,
    rootUser,
    singleClass,
    groupClass,
    jointUser,
    sms,
    onClick,
    plan,
    icon,
  } = props;
  const active = {
    background: "#376e6f",
    color: "white",
  };
  return (
    <>
   
      <Card className={classes.card} style={plan === title ? active : {}}>
        <Box className={classes.icon}>{icon}</Box>
        <CardContent>
          <div className={classes.title}>
            <Typography
              variant="h5"
              className={classes.why}
              component="div"
              color="secondary"
            >
              {title}
            </Typography>
            <Typography variant="h4" className={classes.status}>
              <strong style={{ color: "#DA7B93" }}>$</strong> {price}
            </Typography>
          </div>
          <MemberList
            icon={<GiCheckMark className={classes.membermark} />}
            text={rootUser}
          />
          <MemberList
            icon={<GiCheckMark className={classes.membermark} />}
            text={jointUser}
          />
          <MemberList
            icon={<GiCheckMark className={classes.membermark} />}
            text={singleClass}
          />
          <MemberList
            icon={<GiCheckMark className={classes.membermark} />}
            text={groupClass}
          />      

          <MemberList
            icon={<GiCheckMark className={classes.membermark} />}
            text={sms}
          />

          <CustomButton
            onClick={onClick}
            style={{ marginTop: 10, opacity: "0.8", color: "#DA7B93" }}
          >
            Choose Plan
          </CustomButton>
        </CardContent>
      </Card>
    </>
  );
}

export default Membership;
