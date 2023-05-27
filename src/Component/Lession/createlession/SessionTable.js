import React, { useEffect, useContext, useState } from "react";
import {
  makeStyles,
  withStyles,
  CircularProgress,
  Box,
} from "@material-ui/core";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@material-ui/core";
import { GoDiffAdded, GoPrimitiveDot } from "react-icons/go";
import { Link } from "react-router-dom";
import MessageBox from "../../../utils/Alert";
import { LabelText, Title } from "../../../controls/Input";
import { GlobalContext } from "../../../Context/Provider";
import { getLecturesByATeacher } from "../../../Context/actions/lesson/lesson";
import SessionDataTable from "../SessionDataTable";
import { AiFillDingtalkSquare } from "react-icons/ai";

const useStyles = makeStyles({
  root: {
    borderTop: "1px solid #2f4454",
  },
  table: {
    height: "100px",
    // width: "90%",
  },
  thd: {
    fontFamily: "serif",
    fontWeight: "bold",
  },
  title: {
    padding: 5,
    paddingLeft: 15,
    paddingBottom: 4,
    fontWeight: "bolder",
    letterSpacing: 2,
  },
  body: {
    overflowY: "scroll",
    minHeight: "100px",
  },

  
  "@media (max-width: 960px)": {},
  "@media (max-width: 440px)": {},
});
const StyledTableCell = withStyles((theme) => ({
  head: {
    color: theme.palette.common.white,
    fontSize: 15,
    textTransform: "capitalize",
    boxShadow: 0,
    border: "none",
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    backgroundColor: "#2f4454",
    height: "100px",
    border: "none",
  },
}))(TableRow);

function SessionTable({ handleNext }) {
  const classes = useStyles();
  const [subject, setSubject] = useState([]);
  console.log(subject);
  const [loading, setLoading] = useState(AiFillDingtalkSquare);
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    setLoading(true);
    fetch(`http://localhost:5500/lectures/${userId}`)
      .then((response) => response.json())
      .then((data) => setSubject(data));
    setLoading(false);
  }, []);
  return (
    <Box className={classes.root}>
      <TableContainer component={Paper} style={{ marginTop: 15 }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            margin: 8,
            paddingRight: 26,
          }}
        >
          <div className={classes.title}>
            <LabelText style={{ display: "inline-block" }}>
              ADD EVENT DETAILS
            </LabelText>
          </div>

          <hr />
          <div>
            {loading && <CircularProgress />}
            {!loading && subject?.response?.length === 0 && (
              <MessageBox message="No data fetched" severity="error" />
            )}
            {!loading && subject?.response?.length > 0 && (
              <MessageBox
                message={subject?.message}
                severity="success"
              />
            )}
          </div>
        </div>{" "}
        <div>
          <Table
            className={classes.table}
            aria-label="sticky table"
            size="medium"
            padding="checkbox"
          >
            <TableHead>
              <StyledTableRow>
                <StyledTableCell align="center">
                  <Title style={{ color: "#DA7B93", fontFamily: "serif" }}>
                    Edit classroom Timetable
                  </Title>
                </StyledTableCell>
              </StyledTableRow>
            </TableHead>
            <TableBody className={classes.body}>
              <div>
                {!loading &&
                  subject?.response?.map((item) => (
                    <SessionDataTable item={item} handleNext={handleNext} />
                  ))}
              </div>
            </TableBody>
          </Table>
        </div>
      </TableContainer>
    </Box>
  );
}

export default SessionTable;
