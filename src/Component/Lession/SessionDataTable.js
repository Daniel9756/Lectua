import React from "react";

import { makeStyles, Box } from "@material-ui/core";
import { GoDiffAdded, GoPrimitiveDot } from "react-icons/go";
import { Link } from "react-router-dom";
import { LabelText } from "../../controls/Input";

const useStyles = makeStyles({
  tablehead: {
    textTransform: "uppercase",
    border: "none",
    fontWeight: "bold",
    opacity: 0.7,
    color: "#376e6f",
  },
  email: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginRight: 4,
  },
  subject: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    marginRight: 4,
  },
  "@media (max-width: 960px)": {},
  "@media (max-width: 440px)": {},
});
function SessionDataTable({ item, handleNext }) {
  const classes = useStyles();
  const handleForward = () => {
    handleNext();
  };
  return (
    <>
      <div key={item?.id} item={item} className={classes.email}>
        <Box className={classes.subject}>
          <GoPrimitiveDot
            style={{ marginLeft: 10, cursor: "pointer", fontSize: 20 }}
          />
          <LabelText>{item.subject}</LabelText>
        </Box>
        <Link
          style={{
            display: "flex",
            justifyContent: "space-between",
            textDecoration: "none",
            alignItems: "center",
            cursor: "pointer",
            marginRight: "4px important!",
          }}
          to={`/MyProfile/MyLectures/${item?.id}`}
          onClick={handleForward}
        >
          <LabelText>{item?.id}</LabelText>
          <GoDiffAdded
            style={{
              fontSize: 40,
              color: "#2f4454",
              marginRight: "4px important!",
            }}
          />
        </Link>
      </div>
    </>
  );
}

export default SessionDataTable;
