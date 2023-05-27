import React, { useContext, useState, useEffect } from "react";
import { Box, makeStyles, Avatar } from "@material-ui/core";
import { GlobalContext } from "../../../Context/Provider";
import { ChatContext } from "../../../ChatContext";
import { Link } from "react-router-dom";
import { FiEdit2 } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";
import Confirm from "../../../utils/Confirm";
import { deleteChat } from "../../../Context/actions/messenger/chat";
// import ScrollToBottom, { useScrollToBottom } from "react-scroll-to-bottom";

// import ScrollToBottom, {
//   useScrollToBottom,
//   useSticky,
//   useObserveScrollPosition,
// } from "react-scroll-to-bottom";

const useStyles = makeStyles((theme) => ({
  li: {
    textDecoration: "none",
    marginTop: 2,
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
  textBox: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "end",
    paddingRight: 60,
  },
  iconBox: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  "@media (min-width: 960px)": {},
  "@media (max-width: 960px)": {
    root: {
      display: "flex",
      flexDirection: "column",
    },
    text: {
      maxWidth: "100%",
    },
  },
  "@media (max-width: 440px)": {},
}));

function TextList(props) {
  const classes = useStyles();
  // const scrollToBottom = useScrollToBottom();

  const { item, userId } = props;
  const {
    getFriendsState: {
      conversation: { member },
    },

    deleteChatDispatch,
    deleteChatState: {
      chatdelete: { deleted },
    },
  } = useContext(GlobalContext);

  console.log(deleted);
  const [confirmDialog, setConfirmDialog] = useState({
    isOpen: false,
    title: "",
    subtitle: "",
  });

  const { friend, socket, setDeletedMessage } = useContext(ChatContext);
  const teacher = member?.response.find((p) => p.userId === friend);
  const me = member?.response.find((p) => p.userId === userId);

  const onDelete = async (id) => {
    console.log("about to delete chat");
    deleteChat(id)(deleteChatDispatch);

    // const data = {
    //   sender,
    //   receiver,
    //   id,
    // };
    // await socket.emit("delete_message", data);
  };

  useEffect(() => {
    socket.on("deleted_message", (data) => {
      console.log(data);
      setDeletedMessage(data);
    });
  }, [socket, setDeletedMessage]);
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
        <Box className={classes.textBox}>
          <Box className={classes.text}>{item?.text}</Box>
          <Box className={classes.iconBox}>
            <Box
              style={{
                marginRight: 8,
                cursor: "pointer",
              }}
            >
              <AiOutlineDelete
                fontSize={20}
                color="#DA7B93"
                title="Delete"
                onClick={() => {
                  setConfirmDialog({
                    isOpen: true,
                    title: "Are you sure you want to delete this chat?",
                    subtitle: "This operation cannot be undone!",
                    onConfirm: () => {
                      onDelete(item.id);
                    },
                  });
                }}
              />
            </Box>
            <Box
              style={{
                marginRight: 12,
                cursor: "pointer",
              }}
            >
              <FiEdit2 fontSize={20} color="#DA7B93" title="Edit" />
            </Box>
          </Box>
        </Box>
      </Box>
      <Box>
        <Confirm
          confirmDialog={confirmDialog}
          setConfirmDialog={setConfirmDialog}
        />
      </Box>
    </>
  );
}

export default TextList;
