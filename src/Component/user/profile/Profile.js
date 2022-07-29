import React, { useState, useContext, useEffect } from "react";
import {
  Box,
  Container,
  Grid,
  makeStyles,
  Avatar,
  Typography,
} from "@material-ui/core";
import UserProfile from "./UserProfile";
import Appointments from "./Appointments";
import MyDashboard from "./MyDashboard";
import Sidebar from "./Sidebar";
import CreateLesson from "../../Lession/createlession/CreateLesson";
import { Title } from "../../../controls/Input";
import { GroupButton } from "../../../controls/Button";
import { Link } from "react-router-dom";
import GetPartners from "../../partner/GetPartners";
import { GlobalContext } from "../../../Context/Provider";
import { getPartners } from "../../../Context/actions/auth/Register";
import MessageBox from "../../../utils/Alert";

const useStyles = makeStyles({
  service: {
    width: "100%",
    height: "400px",
    borderRadius: 12,
    color: "#fff",
  },
  title: {
    padding: 8,
  },

  logo: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    marginBottom: 11,
    marginTop: 20,
    backgroundColor: "#376e6f",
    color: "#1C3334",
    padding: 5,
    height: 151,
    borderRadius: 10,
  },
  btn: {
    width: 240,
    height: 60,
    borderRadius: 10,
  },
  sidebar2: {
    backgroundColor: "#fff",
    padding: 15,
  },
  "@media (max-width: 960px)": {
    sidebar: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    grid: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    header: {
      width: "100%",
    },
  },
  "@media (max-width: 440px)": {
    sidebar: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "flex-start",
    },
  },
});

function Profile(props) {
  const classes = useStyles();
  function getContent(page) {
    switch (page) {
      case "MyTable":
        return <CreateLesson />;
      case "MyDashboard":
        return <MyDashboard />;
      case "General":
        return <UserProfile getPics={getPics} />;
      case "Calendary":
        return <Appointments />;
      default:
        return "UNKNOWN STEP";
    }
  }
  const [pics, setPics] = useState("");
  const getPics = (photo) => {
    setPics(photo);
  };
  const [content, setContent] = useState("MyTable");
  const firstName = localStorage.getItem("firstName");

  const [confirmDialog, setConfirmDialog] = useState({
    isOpen: false,
    subject: "",
    title: "",
    subtitle: "",
  });
  const {
    getpartnerDispatch,
    getpartnerState: {
      partner: {  data, isSuccess },
    },
    loginState: {
      login: {  logger },
    },
    deletepartnerState: {
      partner: { data: deleted, isSuccess: isDeleted },
    },
  } = useContext(GlobalContext);
  const userId = logger?.user?.id;
  // useEffect(() => {
  //   setConfirmDialog({
  //     ...confirmDialog,
  //     isOpen: false,
  //   });
  // }, [confirmDialog]);

  // useEffect(() => {
  //   getPartners(userId)(getpartnerDispatch);
  // }, [getpartnerDispatch]);

  return (
    <Box style={{ marginBottom: 11, marginTop: 8, backgroundColor: "#f1f2f6" }}>
      <Container style={{ paddingRight: 10, paddingLeft: 10 }}>
        <Grid container className={classes.grid}>
          <Grid md="3" sm="12" className={classes.sidebar}>
            <Box className={classes.title}>
              <Title>Lectua</Title>
            </Box>
            <Sidebar setContent={setContent} />

            {/* <Box style={{ marginTop: 121, color: "#2f4454" }}>
              <Title
                style={{
                  color: "#DA7B93",
                  backgroundColor: "#2f4454",
                  fontFamily: "serif",
                  padding: 6,
                  marginRight: 68,
                }}
              >
                Partners
              </Title>
              {isDeleted && (
                <MessageBox message={deleted?.message} severity="success" />
              )}

              {isSuccess && (
                <div>
                  {data?.response.map((item) => (
                    <GetPartners key={item?.id} item={item} />
                  ))}
                </div>
              )}
            </Box> */}
          </Grid>
          <Grid md="9" className={classes.sidebar2}>
            <Box className={classes.header}>
              <div className={classes.logo}>
                <Avatar
                  style={{ width: 80, height: 80, background: "#2f4454" }}
                  src={pics}
                ></Avatar>
                <Box
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                  }}
                >
                  <Typography
                    variant="subtitle1"
                    style={{
                      color: "#DA7B93",
                      fontFamily: "serif",
                      marginLeft: 10,
                    }}
                  >
                    {" "}
                    Welcome,
                  </Typography>

                  <Typography
                    variant="h5"
                    style={{
                      color: "#DA7B93",
                      fontFamily: "serif",
                      marginLeft: 10,
                    }}
                  >
                    {" "}
                    {firstName}
                  </Typography>
                </Box>
              </div>
              <Link
                to="/MyProfile/MyLectures"
                className={classes.links}
                onClick={() => setContent("MyTable")}
              >
                <GroupButton className={classes.btn}>
                  create a new course
                </GroupButton>
              </Link>
            </Box>
            <Box>{getContent(content)}</Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Profile;
