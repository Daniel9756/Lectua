import {
  Container, makeStyles, Box,  Typography
} from "@material-ui/core";
import React, { useState,} from "react";
import Member from "./Member";
import { FaSchool } from "react-icons/fa";
import { ImProfile } from "react-icons/im";
import { Title, Protitle } from "../../controls/Input";
import { MdCropFree, MdAccountBalance } from "react-icons/md";

const useStyles = makeStyles(() => ({
  container: {
    textAlign: "center",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
    gap: "15px",
  },
  typo: {
    marginLeft: 10, fontFamily: "serif"
  },
  "@media (max-width: 960px)": {
    pics: {
      display: "none",
      top: 4,
    },
    container: {
      textAlign: "center",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      alignItems: "center",
    },


  },
  "@media (max-width: 640px)": {
    container: {
      textAlign: "center",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      alignItems: "center",
    },


  },
}));

function Membership() {
  const classes = useStyles();
  const [plan] = useState("Professional");
  const plans = [
    {
      id: "1",
      icon: <MdCropFree />,
      title: "Basic",
      price: "Free",
      rootUser: "One root Account",
      jointUser: "No joint Account",
      singleClass: "One free Single Class",
      groupClass: "One free Group Class",
      sms: "No Free SMS messages",
    },
    {
      id: "2",
      icon: <ImProfile />,
      title: "Professional",
      price: 10,
      rootUser: "One root Account",
      jointUser: "No joint Account",
      singleClass: "Billed Single Classes",
      groupClass: "Billed group class",
      sms: "Free SMS messages",
    },
    {
      id: "3",
      icon: <MdAccountBalance />,
      title: "Co-operate",
      price: 70,
      rootUser: "One root Account",
      jointUser: "Up to 5 joint Accounts",
      singleClass: "Billed Single Classes",
      groupClass: "Billed group class",
      sms: "Free SMS messages",
    },
    {
      id: "4",
      icon: <FaSchool />,
      title: "Institutional",
      price: 400,
      rootUser: "One root Account",
      jointUser: "Unlimited joint Account",
      singleClass: "Unlimited Single Classes",
      groupClass: "Unlimited group class",
      sms: "Free SMS messages",
    },

  ];



  // console.log(formik.values)
  return (
    <>
      <Container
        style={{
          marginBottom: 20,
          paddingBottom: 10,
          paddingTop: 20,
          background: "#130f40",
        }}
      >
        <Box
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: 10,
            color: "#6ab04c",
          }}
        >
          <Title>Subscription  Details</Title>
        </Box>

        <Box container className={classes.container}>
          {plans.map((item) => (
            <Member
              key={item.id}
              icon={item.icon}
              title={item.title}
              price={item.price}
              rootUser={item.rootUser}
              jointUser={item.jointUser}
              singleClass={item.singleClass}
              groupClass={item.groupClass}
              sms={item.sms}
              plan={plan}
            />
          ))}
        </Box>

      </Container>
      <Container>
        <Box
          style={{
            margin: 10,
          }}
        >
          <Protitle style={{color: "#6ab04c"}}>Basic</Protitle>
          <Typography variant="body1" className={classes.typo}>
            An authenticated user can only have one account
          </Typography>
          <Typography variant="body1" className={classes.typo}>
            Will not be able to create additional user account
          </Typography>
          <Typography variant="body1" className={classes.typo}>
            Classes created for a single student can only happen once in every 24 hours
          </Typography>
          <Typography variant="body1" className={classes.typo}>
            Classes created for more than one student/class can only happen once in every 24 hours
          </Typography>
          <Typography variant="body1" className={classes.typo}>
            No free SMS alerts for students
          </Typography>

        </Box>
        <Box
          style={{
            margin: 10,
          }}
        >
          <Protitle style={{color: "#6ab04c"}}>Professional</Protitle>
          <Typography variant="body1" className={classes.typo}>
            An authenticated user can only have one account
          </Typography>
          <Typography variant="body1" className={classes.typo}>
            Will not be able to create additional user account
          </Typography>
          <Typography variant="body1" className={classes.typo}>
            Classes order than one, created for a single student within 24 hours is billed subsequentially
          </Typography>
          <Typography variant="body1" className={classes.typo}>
            Classes order than one, created for more than one student/class  within 24 hours is billed subsequentially
          </Typography>
          <Typography variant="body1" className={classes.typo}>
            Free SMS alerts for registered students
          </Typography>

        </Box>

        <Box
          style={{
            margin: 10,
          }}
        >
          <Protitle style={{color: "#6ab04c"}}>Co-Operate</Protitle>
          <Typography variant="body1" className={classes.typo}>
            An authenticated user can only have one account
          </Typography>
          <Typography variant="body1" className={classes.typo}>
            An authenticated user can be able to create upto 5 co-operate users account
          </Typography>
          <Typography variant="body1" className={classes.typo}>
            Classes order than one, created per user, for a single student within 24 hours is billed subsequentially
          </Typography>
          <Typography variant="body1" className={classes.typo}>
            Classes order than one,  created per user, for more than one student/class  within 24 hours is billed subsequentially
          </Typography>
          <Typography variant="body1" className={classes.typo}>
            Free SMS alerts for registered students
          </Typography>

        </Box>
        <Box
          style={{
            margin: 10,
          }}
        >
          <Protitle style={{color: "#6ab04c"}}>Institutional</Protitle>
          <Typography variant="body1" className={classes.typo}>
            An authenticated user can only have one account
          </Typography>
          <Typography variant="body1" className={classes.typo}>
            An authenticated user can be able to create multiple  users account
          </Typography>
          <Typography variant="body1" className={classes.typo}>
            Users can  create multiple single classes
          </Typography>
          <Typography variant="body1" className={classes.typo}>
            Users can  create multiple group classes
          </Typography>
          <Typography variant="body1" className={classes.typo}>
            Free SMS alerts for registered students
          </Typography>

        </Box>
      </Container>
     
    </>
  );
}

export default Membership;
