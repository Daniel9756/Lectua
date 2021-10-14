import React, { useEffect, useContext } from "react";
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

} from "@material-ui/core";
import { BiDotsVerticalRounded } from "react-icons/bi";
// import LinearLoading from "../"
import Avatar from "@material-ui/core/Avatar";
import { Title, LabelText } from "../../controls/Input";
import EnrollData from "./EnrollData";
import { LinearLoading } from "../../utils/Progress/Linear";
import MessageBox from "../../utils/Alert";
import { GlobalContext } from "../../Context/Provider";
import { getMyEnrolled } from "../../Context/actions/enroll/lecture";
const useStyles = makeStyles({
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


});

export default function StudentLesson(props) {
  const classes = useStyles();
  const userID = localStorage.getItem("userID");
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


  const {
    myEnrolledlecturesDispatch,
    myEnrolledlecturesState: {
      myenrollecture: { isEnrolling, myenrolled, isFetched,  isError },
    },

} = useContext(GlobalContext);

  // const { data: subjects, isSuccess, isError, isLoading } = useQuery(["myenrolled", userID], () => fetchMySubjects(userID), {
  //   onSuccess: () => handleSubject(subjects, id),
  // });

  useEffect(() => {
    getMyEnrolled(userID)(myEnrolledlecturesDispatch)
  
}, [myEnrolledlecturesDispatch,userID]);


  return (
    <div
      style={{
        height: "100%",
        background: "#dcdde1",
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
            <LabelText>COURSE LIST</LabelText>
          </div>

          <hr />
          <div>
            <Title>YOUR ENROLLED COURSES</Title>
            <hr />

          </div>
          <Avatar alt="person" src="/images/person.jpg" />
        </div>{" "}
        <div>
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

                <StyledTableCell align="left"> <LabelText>Subject</LabelText></StyledTableCell>
                <StyledTableCell align="left"><LabelText>SubjectId</LabelText></StyledTableCell>
                <StyledTableCell align="right"><LabelText>Price</LabelText></StyledTableCell>
                <StyledTableCell align="center"><LabelText>Organisation</LabelText></StyledTableCell>
                <StyledTableCell align="left"><LabelText>Registeration Date</LabelText></StyledTableCell>
                <StyledTableCell align="left">
                  <BiDotsVerticalRounded />
                </StyledTableCell>
              </StyledTableRow>
            </TableHead>
            <TableBody className={classes.body}>
              {isEnrolling && (<LinearLoading />)}
              {isError && (<MessageBox message="Error fetching data" severity="error" />)}
              {isFetched && (
                <div>
                  {myenrolled.data.map((item) => (
                    <EnrollData key={item.id} item={item} id={item.id}  />
                  ))}
                </div>
              )}
            </TableBody>

          </Table>
        </div>
      </TableContainer>
    </div>
  );
}
