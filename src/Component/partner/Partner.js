import React, { useState} from "react";
import {
  makeStyles,
  withStyles,
 
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

import { LabelText, Title } from "../../controls/Input";

import PopUp from "../../utils/PopUp";
import PartnerForm from "./PartnerForm";

const useStyles = makeStyles({
  root: {
    width: 252,
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
    height: "50px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
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

export const Partner = () => {
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
      height: "40px",
      border: "none",
    },
  }))(TableRow);
  const classes = useStyles();

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={classes.root}>
      <TableContainer component={Paper} style={{ marginTop: 15 }}>
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
                    Add Users
                  </Title>
                </StyledTableCell>
              </StyledTableRow>
            </TableHead>
            <TableBody className={classes.body}>
              <Box className={classes.subject}>
                <GoPrimitiveDot
                  style={{ marginLeft: 10, cursor: "pointer", fontSize: 20 }}
                />
                <LabelText>Co-operate Academy</LabelText>
              </Box>
              <GoDiffAdded
                onClick={() => setIsOpen(true)}
                style={{
                  fontSize: 40,
                  color: "#2f4454",
                  marginRight: "4px important!",
                  cursor: "pointer",
                }}
              />
            </TableBody>
          </Table>
        </div>
      </TableContainer>
      <PopUp
        openPopUp={isOpen}
        setOpenPopUp={setIsOpen}
        title="Add a Colleague"
      >
        <PartnerForm />
      </PopUp>
    </div>
  );
};
