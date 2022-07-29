import {
  Container,
  makeStyles,
  Box,
  CircularProgress,
} from "@material-ui/core";
import React, { useState, useContext, useEffect } from "react";
import Pricing from "../../membership/Pricing";
import { FaSchool } from "react-icons/fa";
import { useHistory } from "react-router-dom";
import { ImProfile } from "react-icons/im";
import { Title } from "../../../controls/Input";
import { addProfile } from "../../../Context/actions/profile/Profile";
import { GlobalContext } from "../../../Context/Provider";
import { MdCropFree, MdAccountBalance } from "react-icons/md";
import { GroupButton } from "../../../controls/Button";


const useStyles = makeStyles((theme) => ({
  container: {
    textAlign: "center",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
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
function Plan(props) {
  const classes = useStyles();
  const [plan, setPlan] = useState("Professional");
  const history = useHistory();
  const { handleNext, handleBack, biography, selectedFile, userId } = props;

  console.log(userId);
  const {
    profileDispatch,
    profileState: {
      profile: { isCreatingProfile, error, isProfiled, folder },
    },
  } = useContext(GlobalContext);

  console.log(isCreatingProfile, error, isProfiled, folder);

  useEffect(() => {
    if (
      isProfiled &&
      (folder?.message === "Your data was successfully submitted" ||
        folder?.message === "We already have your data")
    ) {
      handleNext();
    }
  }, [isProfiled, folder?.message, handleNext]);
  const handlePlan = (selected) => {
    setPlan(selected);
  };
  const submitBio = (e) => {
    e.preventDefault();
    const values = {
      plan,
      biography,
      selectedFile,
      userId,
    };
    addProfile(values)(profileDispatch);
  };
  const active = {
    background: "#376e6f",
    color: "white",
  };
  return (
    <Container
      style={{
        marginBottom: 150,
        paddingBottom: 10,
        paddingTop: 20,
        background: "#dcdde1",
      }}
    >
      <Box
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: 10,
        }}
      >
        <Title>Choose Plan</Title>
        <GroupButton
          onClick={() => history.push("/Membership")}
          style={{
            width: 120,
            background: "#6ab04c",
            height: 50,
            color: "#DA7B93",
            borderRadius: 10,
          }}
        >
          Explain This
        </GroupButton>
      </Box>
      <Box container className={classes.container}>
        {plans.map((item) => (
          <Pricing
            key={item.id}
            icon={item.icon}
            title={item.title}
            price={item.price}
            rootUser={item.rootUser}
            jointUser={item.jointUser}
            singleClass={item.singleClass}
            groupClass={item.groupClass}
            sms={item.sms}
            onClick={() => handlePlan(item.title)}
            plan={plan}
            active={active}
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
          type="submit"
          onClick={submitBio}
          style={{
            width: 70,
            background: "#376e6f",
            height: 40,
            color: "#DA7B93",
            borderRadius: 10,
          }}
        >
          {isCreatingProfile ? (
            <CircularProgress style={{ fontSize: 10, color: "#DA7B93" }} />
          ) : (
            "Submit"
          )}
        </GroupButton>
      </Box>
      {folder && folder?.message}
    </Container>
  );
}

export default Plan;
