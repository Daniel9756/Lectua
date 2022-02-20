import React from "react";
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
import { useQuery } from "react-query";
// import { fetchDetails } from "../../Async/lessonDetail";
import { Title, LabelText } from "../../controls/Input";
import DataTable from "./DataTable";
import { CustomButton } from "../../controls/Button";
import LinearLoading from "../../utils/Progress/Linear";
import MessageBox from "../../utils/Alert"
import { fetchDetails } from "../../Async/timeTable";

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
  headtxt:{
    color: "#2f4454", width: "auto", fontFamily:"serif", fontWeight:"bold", padding: 2, borderRadius: 4 
  }

});

export default function LessonTable() {
  const classes = useStyles();
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


  const { data, status } = useQuery("details", fetchDetails, {
    onSuccess: () => console.log("All details successfully fetched"),
  });
  
  console.log(data, status);
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
            <Title>{data?.details.length} classes in your waiting room</Title>
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
                <StyledTableCell align="left"  className={classes.headtxt}>
                  {" "}
                 S/N
                </StyledTableCell>

                <StyledTableCell align="left" className={classes.headtxt}>Subject</StyledTableCell>
                <StyledTableCell align="right"  className={classes.headtxt}>Topic</StyledTableCell>
                <StyledTableCell align="right"  className={classes.headtxt}>Price(#)</StyledTableCell>
                <StyledTableCell align="center"  className={classes.headtxt}>Start</StyledTableCell>
                <StyledTableCell align="right"  className={classes.headtxt}>End</StyledTableCell>
                <StyledTableCell align="right">
                  <BiDotsVerticalRounded />
                </StyledTableCell>
              </StyledTableRow>
            </TableHead>
            <TableBody className={classes.body}>
            {status === "loading" && (<LinearLoading />)}
            {status === "error" && (<MessageBox message="Error fetching data" severity="error" />)}
              {status === "success" && (
                <div>
                  {data.details.map((item) => (
                    <DataTable key={item.id} item={item} id={item.id} />
                  ))}
                </div>
              )}
            </TableBody>
            <TableFooter>
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
            </TableFooter>
          </Table>
        </div>
      </TableContainer>
    </div>
  );
}
