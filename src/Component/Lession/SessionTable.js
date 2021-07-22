import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
 
} from "@material-ui/core";
import { GoDiffAdded } from "react-icons/go";
import { MdCancel } from "react-icons/md";
import { Link } from "react-router-dom";

import { useQuery, useQueryClient, useMutation } from "react-query";
import { fetchData, removeLecture } from "../../Async/lesson";
import {  LabelText, Title } from "../../controls/Input";

const useStyles = makeStyles({
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
    paddingLeft:15,
    paddingBottom: 4,
    fontWeight: "bolder",
    letterSpacing: 2,
   
  },
  body: {
    overflowY: "scroll",
    minHeight: "100px",
  },
  email: {
    display: "flex", justifyContent: "center", alignItems: "center", marginRight: 4
  }
});

export default function SessionTable({handleNext}) {
 
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
  const classes = useStyles();
  const queryClient = useQueryClient();
  const { mutate } = useMutation(removeLecture, {
    onSuccess: () => queryClient.invalidateQueries("lectures"),
  });
  const { data, status } = useQuery("lectures", fetchData, {
    onSuccess: () => console.log("lecture successfully fetched"),
  });
  console.log(data, status);
 

  return (
    <div
      style={{
        borderTop: "1px solid #2f4454"

      }}
    >
      <TableContainer component={Paper} style={{ marginTop: 15}}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            margin: 8,
            paddingRight:26,
          }}
        >
          <div className={classes.title}>
            <LabelText style={{display: "inline-block"}}>ADD EVENT DETAILS</LabelText>
          </div>

          <hr />
          <div>
            {status === "loading" && <div>Loading ...</div>}
            {status === "error" && <div>Error fetching data</div>}
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
              <StyledTableRow
               
              >
                <StyledTableCell align="center">
                  <Title style={{ color: "#DA7B93", fontFamily: "serif" }}>
                    Your classroom subjects
                  </Title>
                </StyledTableCell>
              </StyledTableRow>
            </TableHead>
            <TableBody className={classes.body}>
              {status === "success" && (
                <div>
                  {data.lectures.map((item) => (
                    <div key={item.id} item={item}  className={classes.email}>
                        <MdCancel onClick={()=>mutate(item.id)}  style={{ marginLeft:10, cursor: "pointer", fontSize: 20,  }}/>
                      <LabelText  style={{ margin: 10,}}>
                        {" "}
                        {item.email}
                      </LabelText>
                      <Link style={{textDecoration: "none"}} to={`/LessonDetail/${item.id}`}>
                      <GoDiffAdded  style={{cursor: "pointer", fontSize: 40, color: "#2f4454", marginRight: "4px important!"}} onClick={handleNext} />
                      </Link>
                    </div>
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
