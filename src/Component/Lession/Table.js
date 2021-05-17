import React, { useState } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Checkbox,
  Typography,
  TableFooter,
} from "@material-ui/core";
import { BiDotsVerticalRounded } from "react-icons/bi";

import Avatar from "@material-ui/core/Avatar";
import { useQuery, useQueryClient } from "react-query";
import { fetchData } from "../../Async/lesson";
import { Title, InputLabel } from "../controls/Input";
import DataTable from "./DataTable";
import { CustomButton } from "../controls/Button";
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

export default function LessonTable() {
  const classes = useStyles();
  const StyledTableCell = withStyles((theme) => ({
    head: {
      color: theme.palette.common.white,
      fontSize: 15,
      textTransform: "capitalize",
      boxShadow: 0,
      border: "none"
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

 
  const queryClient = useQueryClient();
  const [page, setPage] = React.useState(0);

  const { data, status } = useQuery("lectures", fetchData, {
    onSuccess: () => console.log("lecture successfully fetched"),
  });
  console.log(data, status);
  return (
    <div
      style={{
        height: "100vh",
        background: "#dcdde1",

        overflow: "scroll",
      }}
    >
      <TableContainer
        component={Paper}
        style={{ margin: 10, width: "97%", zIndex: -1 }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            margin: 8,
            paddingRight: 16,
          }}
        >
          <div className={classes.title}>
            <InputLabel>UPCOMING EVENT </InputLabel>
          </div>

          <hr />
          <div>
            <Title>{data?.lectures.length} Attendees in waiting room</Title>
            <hr />
            {status === "loading" && <div>Loading ...</div>}
            {status === "error" && <div>Error fetching data</div>}
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
                <StyledTableCell align="left"  style={{ border: "none" }}>
                  {" "}
                  <Checkbox style={{ color: "white" }} />
                </StyledTableCell>

                <StyledTableCell align="left">Course</StyledTableCell>
                <StyledTableCell align="right">Host</StyledTableCell>
                <StyledTableCell align="right">Price(#)</StyledTableCell>
                <StyledTableCell align="right">Company</StyledTableCell>
                <StyledTableCell align="right">Type</StyledTableCell>
                <StyledTableCell align="center">Start</StyledTableCell>
                <StyledTableCell align="right">End</StyledTableCell>
                <StyledTableCell align="right">
                  <BiDotsVerticalRounded />
                </StyledTableCell>
              </StyledTableRow>
            </TableHead>
            <TableBody className={classes.body}>
              {status === "success" && (
                <div>
                  {data.lectures.map((item) => (
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
