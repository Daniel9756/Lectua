import {
  Container,
  Grid,
  makeStyles,
  Box,
  Typography,
} from "@material-ui/core";
import React, { useContext } from "react";
import { CustomButton } from "../../../controls/Button";
import { Subtitle } from "../../../controls/Input";
import { useHistory, useParams } from "react-router-dom";
import { MdCancel } from "react-icons/md";
import { GlobalContext } from "../../../Context/Provider";
import { addConversations } from "../../../Context/actions/messenger/conversation";
import MessageBox from "../../../utils/Alert";

const useStyles = makeStyles((theme) => ({
  register: {
    marginBottom: 40,
    background: "#fff",
    width: "100%",
    height: "auto",
    padding: 11,

    borderRadius: 12,
    zIndex: 5,
    marginTop: 30,
  },
  Istgrid: {
    width: "100vh",
    height: "100%",
    borderRadius: 12,
  },

  "@media (max-width: 960px)": {
    pics: {
      display: "none",
    },
    register: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      padding: 5,
      paddingBottom: 15,
    },
  },
  "@media (max-width: 440px)": {
    register: {
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  },
}));
function InitChat(props) {
  const classes = useStyles();
  const history = useHistory();
  const { id, name } = useParams();
  const userId = localStorage.getItem("userId");

  const {
    addfriendDispatch,
    addfriendState: {
      conversation: {isAFriend, member, isError },
    },
  } = useContext(GlobalContext);
  const errMassage = "Connection was not created!!!";
  console.log(member, "member");
  if (isAFriend || member?.message === "You are already friends") {
    history.push("/Messanger");
  }

  const startConversation = () => {
    const ids = {
      userId,
      id,
    };
    addConversations(ids)(addfriendDispatch);
  };
  const back = () => {
    history.goBack();
  };
  return (
    <Box style={{ background: "#EEE5E9" }}>
      <Container>
        {isAFriend && (
          <MessageBox message={member?.message} severity="success" />
        )}
        {isError && <MessageBox message={errMassage} severity="error" />}
        <Grid
          container
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            paddingTop: 20,
          }}
        >
          <Grid item md="4" className={classes.pics}></Grid>
          <Grid item md="4" sm="8" className={classes.register}>
            <Box>
              <MdCancel
                style={{ cursor: "pointer", fontSize: 18 }}
                onClick={() => back()}
              />
              <Subtitle
                style={{
                  textAlign: "center",
                }}
              >
                Hey, Do you want to get connected with
              </Subtitle>
              <Typography
                variant="h5"
                style={{
                  color: "#DA7B93",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                <em> {name}</em>
              </Typography>
            </Box>{" "}
            <Box>
              <CustomButton
                onClick={startConversation}
                type="Submit"
                style={{
                  color: "#DA7B93",
                  background: "#2f4454",
                  borderRadius: 12,
                  marginTop: 20,
                }}
              >
                Start A Conversation
              </CustomButton>
            </Box>
          </Grid>
          <Grid item md="4" className={classes.pics}></Grid>
        </Grid>
      </Container>{" "}
    </Box>
  );
}

export default InitChat;
