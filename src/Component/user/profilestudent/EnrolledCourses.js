import React, { useContext, useEffect } from "react";
import StudentTimeData from "../../Lession/StudentTimeData";
import { GlobalContext } from "../../../Context/Provider";
import { LinearLoading } from "../../../utils/Progress/Linear";
import MessageBox from "../../../utils/Alert";
import { getAStudentTimeTable } from "../../../Context/actions/timeTable/student";
import { BiDotsVerticalRounded } from "react-icons/bi";

import {
  makeStyles,
  withStyles,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  TableFooter,
} from "@material-ui/core";
import StudentLesson from "../../Lession/StudentLesson";
import { LabelText, Title } from "../../../controls/Input";
const useStyles = makeStyles({
  roote: {
    height: "100%",
    background: "#dcdde1",
    overflow: "scroll",
    marginTop: 61,
  },
  table: {
    minHeigth: 860,
    margin: 12,
    width: "98%",
  },
  thd: {
    fontFamily: "serif",
    fontWeight: "bold",

    position: "sticky",
  },
  title: {
    padding: 20,
    paddingBottom: 8,
    fontWeight: "bolder",
    letterSpacing: 2,
  },
  body: {
    overflowY: "scroll",
  },
  headtxt: {
    color: "#DA7B93",
    width: "auto",
    fontFamily: "serif",
    fontWeight: "bold",
    padding: 2,
    borderRadius: 4,
  },
  "@media (max-width: 580px)": {
    roote: {
      display: "none",
    },
  },
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
    backgroundColor: "#DA7B93",
    height: "100px",
    border: "none",
    paddingRight: 14,
    paddingLeft: 14,
  },
}))(TableRow);

function EnrolledCourses(props) {
  const classes = useStyles();

  const userId = localStorage.getItem("userId");
  const {
    getStudentTableDispatch,
    getStudentTableState: {
      mytimetable: { data, isEnrolling, isFetched, isError },
    },
  } = useContext(GlobalContext);
  console.log(data, "data");

  useEffect(() => {
    getAStudentTimeTable(userId)(getStudentTableDispatch);
  }, [getStudentTableDispatch]);

  return (
    <>
    <Box
     style={{
      height: "100%",
      background: "#7f8fa6",
      overflow: "scroll",
      marginTop: 61,
    }}
    >


   
     <TableContainer
        component={Paper}
        style={{ margin: 10, width: "98%", zIndex: -1 }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",

            paddingRight: 16,
          }}
        >
          <div className={classes.title}>
            <LabelText>TOPIC LIST</LabelText>
          </div>

          <hr />
          <div>
            <Title>YOUR TIMETABLE</Title>
            <hr />

          </div>
       
        </div>{" "}
      
      <Box>
        <Table
          className={classes.table}
          aria-label="sticky table"
          size="medium"
          padding="checkbox"
        >
          <TableHead>
            <StyledTableRow
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                borderRadius: "30px",
              }}
            >
              <StyledTableCell align="left"> Course</StyledTableCell>
              <StyledTableCell align="left" className={classes.headtxt}>
                {" "}
                Topic
              </StyledTableCell>
             
              <StyledTableCell align="center" className={classes.headtxt}>
                Event
              </StyledTableCell>
              <StyledTableCell align="right" className={classes.headtxt}>
                Start
              </StyledTableCell>
              <StyledTableCell align="right" className={classes.headtxt}>
                CourseId
              </StyledTableCell>
              <StyledTableCell align="right" className={classes.headtxt}>
                End
              </StyledTableCell>
             
            </StyledTableRow>
          </TableHead>
          <TableBody className={classes.body}>
            {isEnrolling && <LinearLoading />}
            {isError && (
              <MessageBox message="Error fetching data" severity="error" />
            )}

            {isFetched && (
              <div>
                {data.response.map((item) => (
                  <StudentTimeData key={item.id} item={item} id={item.id} />
                ))}
              </div>
            )}
          </TableBody>
          <TableFooter></TableFooter>
        </Table>
      </Box>
      </TableContainer>
      </Box> 
      <Box>
        <StudentLesson />
      </Box>
    </>
  );
}

export default EnrolledCourses;
