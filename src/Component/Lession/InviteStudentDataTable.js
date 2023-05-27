import React, { useState, useEffect } from "react";

import { makeStyles, Box } from "@material-ui/core";
import { GoDiffAdded, GoPrimitiveDot } from "react-icons/go";
import { LabelText } from "../../controls/Input";
import { CustomCheckbox } from "../../controls/Checkbox";
import PopUp from "../../utils/PopUp";
import InviteStudentList from "./InviteStudentList";
import axios from "axios";
import { CircularProgress } from "@material-ui/core";
import MessageBox from "../../utils/Alert";
const useStyles = makeStyles({
  tablehead: {
    textTransform: "uppercase",
    border: "none",
    fontWeight: "bold",
    opacity: 0.7,
    color: "#DA7B93",
  },
  email: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginRight: 4,
    marginTop: "4px",
  },
  subject: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    marginRight: 4,
    fontSize: 12,
  },
  btn: {
    color: "#DA7B93",
    fontSize: 14,
    borderRadius: 6,
    borderColor: "#DA7B93",
    marginRight: 8,
  },
  "@media (max-width: 960px)": {},
  "@media (max-width: 440px)": {},
});
function InviteStudentDataTable({ item, handleNext }) {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);

  const [isOpen, setIsOpen] = useState(false);
  const [isCheckedOpen, setIsCheckedOpen] = useState(false);
  const token = localStorage.getItem("token");
  
  const [loading, setLoading] = useState(false);
  const [course, setCourse] = useState([]);
  console.log("course", course);
  const handleForward = () => {
    handleNext();
  };
  const handelboxcheck = (id) => {
    setChecked(!checked);
  };
  const fetchStudent = (id) => {
    setLoading(true);
    setIsOpen(true);

    axios
      .get(`http://localhost:5500/enrolls/course/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      })
      .then((data) => setCourse(data?.data))
      .then(() => setLoading(false))
      .then(() => setIsOpen(true))

      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    if (checked) {
      setIsCheckedOpen(true);
    }
  }, [setIsCheckedOpen, checked]);
  

  return (
    <>
      <div key={item?.id} item={item} className={classes.email}>
        <Box className={classes.subject}>
          <button
            className={classes.btn}
            onClick={() => fetchStudent(item?.id)}
          >
            View
          </button>

          <LabelText>{item?.subject}</LabelText>
        </Box>

        <CustomCheckbox
          type="checkbox"
          onChange={() => handelboxcheck(item?.id)}
          checked={checked}
          style={{
            display: "flex",
            justifyContent: "space-between",
            textDecoration: "none",
            alignItems: "center",
            cursor: "pointer",
            marginRight: "4px important!",
            color: "#DA7B93",
            backgroundColor: "#DA7B93",
          }}
        ></CustomCheckbox>
      </div>
      <hr
        style={{
          margin: 4,
        }}
      />

      <PopUp
        openPopUp={isOpen}
        setOpenPopUp={setIsOpen}
        title={`${course?.response?.length} ${item.subject} Students`}
      >
        <div>
          <div>{loading && <CircularProgress />}</div>
          <div>
            {!loading && item?.response?.length === 0 && (
              <MessageBox message="No data fetched" severity="error" />
            )}
          </div>
          <div>
            {!loading &&
              course?.response?.map((item) => (
                <div>
                  <InviteStudentList item={item} loading={loading} />
                </div>
              ))}
          </div>
        </div>
      </PopUp>
      <PopUp
        openPopUp={isCheckedOpen}
        setOpenPopUp={setIsCheckedOpen}
        title={`${course?.response?.length} ${item.subject} Students`}
      >
        <div>
          <div>Do you want to invite this class for lecture ?</div>
        </div>
      </PopUp>
    </>
  );
}

export default InviteStudentDataTable;
