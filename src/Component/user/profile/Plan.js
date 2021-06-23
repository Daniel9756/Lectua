import { Container, makeStyles, Box } from "@material-ui/core";
import React, { useState } from "react";
import Pricing from "../../membership/Pricing";
import { FaSchool } from "react-icons/fa";
import { FcBusiness } from "react-icons/fc";
import { useHistory } from "react-router-dom";
import { ImProfile } from "react-icons/im";
import { Title } from "../../../controls/Input";

import { MdCropFree } from "react-icons/md";
import { GroupButton } from "../../../controls/Button";

const useStyles = makeStyles((theme) => ({
  container: {
    textAlign: "center",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
}));

function Plan(props) {
  const classes = useStyles();
  const { handleNext, handleBack } = props;
  const plans = [
    {
      id: "1",
      icon: <MdCropFree />,
      title: "Basic",
      price: "Free",
      rootUser: "One root Account",
      singleClass: "One free Single Class",
      groupClass: "One free Group Class",
     
      sms: "No Free SMS messages",
    },
    {
      id: "2",
      icon: <ImProfile />,
      title: "Professional",
      price: "20",
      rootUser: "One root Account",
      singleClass: "Billed Single Classes",
      groupClass: "Billed group class",
    
      sms: "Free SMS messages",
    },
    {
      id: "3",
      icon: <FaSchool />,
      title: "Institutional",
      price: "50",
      rootUser: "One root Account",
      singleClass: "Unlimited Single Classes",
      groupClass: "Unlimited group class",
     
      sms: "Free SMS messages",
    },
  
  ];
  const [plan, setPlan] = useState("Professional");
  const history = useHistory();
  const handleSelected = (selected) => {
    setPlan(selected);
  };
  const handlePayment = () => {
    if (plan !== "Basic") {
      history.push("/PaymentType");
    } else {
      handleNext();
    }
  };
  console.log(plan, "Plan");
  return (
    <Container
      style={{
        marginBottom: 150,
        paddingBottom: 10,
        paddingTop: 20,
        background: "#dcdde1",
      }}
    >
        <Box  style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: 10,
        }}>
            <Title>Choose Plan</Title>
        </Box>
      <Box container className={classes.container}>
        {plans.map((item) => (
          <Pricing
            key={item.id}
            icon={item.icon}
            title={item.title}
            price={item.price}
            rootUser={item.rootUser}
            singleClass={item.singleClass}
            groupClass={item.groupClass}
         
            sms={item.sms}
            onClick={() => handleSelected(item.title)}
            plan={plan}
          />
        ))}
      </Box>
      <Box
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          margin: 10,
        }}
      >
        <GroupButton
          onClick={handleBack}
          style={{
            width: 70,
            background: "#376e6f",

            height: 40,
            color: "#DA7B93",

            borderRadius: 10,
          }}
        >
          Back
        </GroupButton>
        <GroupButton
          onClick={handlePayment}
          style={{
            width: 70,
            background: "#376e6f",

            height: 40,
            color: "#DA7B93",

            borderRadius: 10,
          }}
        >
          Next
        </GroupButton>
      </Box>
    </Container>
  );
}

export default Plan;
