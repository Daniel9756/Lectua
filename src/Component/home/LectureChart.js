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
  Checkbox,
  TableFooter,
} from "@material-ui/core";
import { BiDotsVerticalRounded } from "react-icons/bi";
// import LinearLoading from "../"
import Avatar from "@material-ui/core/Avatar";
import { useQuery } from "react-query";
import { fetchDetails } from "../../Async/lessonDetail";
import { Title, LabelText } from "../../controls/Input";
import Chart from "./Chart";
import LinearLoading from "../../utils/Progress/Linear";
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

export default function LectureChart() {
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
    <div>
      <TableContainer
        component={Paper}
        style={{ margin: 10, width: "100%", zIndex: -1, height: "100vh" }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            margin: 8,
          }}
        >
          <div className={classes.title}>
            <LabelText>UPCOMING EVENT </LabelText>
          </div>

          <hr />
          <div>
            <Title>{data?.details.length} Attendees in waiting room</Title>
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
                <StyledTableCell align="left" style={{ border: "none" }}>
                  {" "}
                  <Checkbox style={{ color: "white" }} />
                </StyledTableCell>

                <StyledTableCell align="left">Course</StyledTableCell>
                <StyledTableCell align="right">Host</StyledTableCell>
                <StyledTableCell align="right">Price(#)</StyledTableCell>
                <StyledTableCell align="right">Institution</StyledTableCell>
                <StyledTableCell align="right">Type</StyledTableCell>
                <StyledTableCell align="center">Start</StyledTableCell>
                <StyledTableCell align="right">End</StyledTableCell>
                <StyledTableCell align="right">
                  <BiDotsVerticalRounded />
                </StyledTableCell>
              </StyledTableRow>
            </TableHead>
            <TableBody className={classes.body}>
              {status === "loading" && <LinearLoading />}
              {status === "error" && <div>Error fetching data</div>}
              {status === "success" && (
                <div>
                  {data.details.map((item) => (
                    <Chart key={item.id} item={item} id={item.id} />
                  ))}
                </div>
              )}
            </TableBody>
            <TableFooter></TableFooter>
          </Table>
        </div>
      </TableContainer>
    </div>
  );
}
