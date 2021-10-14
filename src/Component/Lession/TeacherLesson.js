import React, { useContext } from "react";
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

  TableFooter,
} from "@material-ui/core";
import { BiDotsVerticalRounded } from "react-icons/bi";
// import LinearLoading from "../"
import Avatar from "@material-ui/core/Avatar";
import { Title, LabelText } from "../../controls/Input";
import { TeacherEnrollData } from "./TeacherEnrollData";
import { CustomButton } from "../../controls/Button";
import { LinearLoading } from "../../utils/Progress/Linear";
import MessageBox from "../../utils/Alert";
import { GlobalContext } from "../../Context/Provider";

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
  headtxt: {
    color: "#2f4454", width: "auto", fontFamily: "serif", fontWeight: "bold", padding: 2, borderRadius: 4
  }

});

export default function TeacherLesson() {
  const classes = useStyles();
  const StyledTableCell = withStyles((theme) => ({
    head: {
      color: theme.palette.common.white,
      fontSize: 15,
      textTransform: "capitalize",
      boxShadow: 0,
      border: "none",
      textTransform: "uppercase",
      color: "#DA7B93",
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
      myenrollecture: { isEnrolling, myenrolled, error, isError, isFetched },
    },
    loginState: {
      login: { logger, },
    },
  } = useContext(GlobalContext);
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
            <LabelText>UPCOMING EVENT </LabelText>
          </div>

          <hr />
          <div>
            <Title>{myenrolled?.data?.length}{' '}active courses</Title>
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
                  backgroundColor: "#2f4454",
                  textTransform: "uppercase",
                  color: "#DA7B93",
                }}
              >
                <StyledTableCell align="left" className={classes.headtxt}>
                  {" "}
                  Subjectid
                </StyledTableCell>
                <StyledTableCell align="left" className={classes.headtxt}>Subject</StyledTableCell>
                <StyledTableCell align="center" className={classes.headtxt}>NAme</StyledTableCell>
                <StyledTableCell align="right" className={classes.headtxt}>Price</StyledTableCell>
                <StyledTableCell align="right" className={classes.headtxt}>Enrolled</StyledTableCell>
             
              </StyledTableRow>
            </TableHead>
            <TableBody className={classes.body}>


              {isEnrolling && (<LinearLoading />)}
              {isError && (<MessageBox message="Error fetching data" severity="error" />)}

              {isFetched && (
                <div>
                  {myenrolled?.data.map((item) => (
                    <TeacherEnrollData key={item.id} item={item} />
                  ))}
                </div>
              )}
            </TableBody>
            {/* <TableFooter>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  margin: 24,
                }}
              >
                <CustomButton width="120px" background="#fff">
                  Back
                </CustomButton>
                <CustomButton width="120px" background="#fff">
                  Next
                </CustomButton>
              </div>
            </TableFooter> */}
          </Table>
        </div>
      </TableContainer>
    </div>
  );
}
