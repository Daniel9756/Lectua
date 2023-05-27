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
import axios from "axios";
import { MdCancel } from "react-icons/md";

import MessageBox from "../../utils/Alert";

const useStyles = makeStyles({
 
  root: {
   overflowY: "scroll"
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
    // minHeight: "100px",
    display: 'flex',
    justifyContent: 'space-between'
  },
  
  "@media (max-width: 960px)": {},
  "@media (max-width: 440px)": {},
});

function InviteStudentList({ item }) {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <TableContainer>
        <div>
          <Table
            className={classes.table}
            aria-label="sticky table"
            size="medium"
            padding="checkbox"
          >
            <TableBody className={classes.body}>
              <div>{item.studentName}</div>
          <MdCancel  style={{ cursor: "pointer",color: "#DA7B93", }} />

            
            </TableBody>
          </Table>
        </div>
      </TableContainer>
      <hr style={{
        margin: 1
      }}/>
    </Box>
  );
}

export default InviteStudentList;
