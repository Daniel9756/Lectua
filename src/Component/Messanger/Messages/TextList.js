import React, { useContext } from "react";
import { Box, makeStyles, Avatar } from "@material-ui/core";
import { GlobalContext } from "../../../Context/Provider";
import { ChatContext } from "../../../ChatContext";
import { Link } from "react-router-dom";
import { FiSettings } from "react-icons/fi";

// import ScrollToBottom, {
//   useScrollToBottom,
//   useSticky,
//   useObserveScrollPosition,
// } from "react-scroll-to-bottom";

const useStyles = makeStyles((theme) => ({
  li: {
    textDecoration: "none",
    marginTop: 16,
    padding: 4,
    // maxWidth: "90%",
    "&:hover": {
      background: "#EEE5E9",
    },
  },
  links: {
    margin: 0,
    fontSize: 22,
    color: "#376e6f",
    fontFamily: "serif",
    textDecoration: "none",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    fontWeight: "bold",
    "&:hover": {
      color: "#DA7B93",
      borderRadius: 8,
    },
  },
  text: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "baseline",
    margin: 0,
    marginLeft: 40,
    borderRadius: 4,
    padding: 8,
    maxWidth: "80%",
    fontSize: 20,
  },
  time: {
    marginLeft: 20,
    opacity: "0.6",
    fontWeight: "bold",
  },
  avater: {
    width: 35,
    height: 35,
    background: "#2f4454",
  },
  profile: {
    display: "flex",
    justifyContent: "left",
    alignItems: "center",
  },
  "@media (min-width: 960px)": {},
  "@media (max-width: 960px)": {
    root: {
      display: "flex",
      flexDirection: "column",
    },
  },
  "@media (max-width: 440px)": {},
}));

function TextList(props) {
  const classes = useStyles();

  const { item, userId } = props;
  const {
    getFriendsState: {
      conversation: { member },
    },
  } = useContext(GlobalContext);

  const { friend } = useContext(ChatContext);

  const teacher = member?.response.find((p) => p.userId === friend);
  const me = member?.response.find((p) => p.userId === userId);

  console.log(member, "item");

  return (
    <>
      <Box className={classes.li}>
        <Box style={{ marginRight: 20 }}>
          <Box className={classes.profile}>
            <Box
              style={{
                marginRight: 12,
              }}
            >
              <Avatar
                className={classes.avater}
                src={userId === item?.sender ? me?.picsUrl : teacher.picsUrl}
              ></Avatar>
            </Box>
            <Box>
              <Link
                to={
                  userId === item.sender
                    ? "#"
                    : `/institution/${teacher?.orgName}/${teacher?.userId}`
                }
                className={classes.links}
              >
                {userId === item?.sender
                  ? "You"
                  : teacher?.studentName || teacher?.orgName}
              </Link>
            </Box>
            <Box className={classes.time}>{item.time}</Box>
          </Box>
        </Box>
        <Box style={{display: 'flex', justifyContent: 'space-between', alignItems: 'start', paddingRight:60}}>
          <Box className={classes.text}>{item?.text}</Box>
          <FiSettings fontSize={22} />
        </Box>
      </Box>
    </>
  );
}

export default TextList;
