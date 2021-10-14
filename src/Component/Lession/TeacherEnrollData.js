import React from "react";

import {
  TableCell,
  TableRow,
  
} from "@material-ui/core";
import {  withStyles } from "@material-ui/core/styles";

export const TeacherEnrollData = (props) => {
    const CustomTableRow = withStyles((theme) => ({
        root: {
          backgroundColor: "#f1f2f6",
          borderTop: "5px solid white",
          borderRadius: "5px",
          paddingRight: 14,
        //   paddingLeft: 14,
        },
      }))(TableRow);
const { item  } = props

const { id, studentname, studentemail, price, subjectid, owner, subject, orgname, createdat  } = item

    return (
        <>
      <CustomTableRow
        key={id}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          paddingRight: 34,

        }}
      >    
              <TableCell
          align="left"
          style={{ textTransform: "uppercase", border: "none" }}
        >
          {subjectid}
        </TableCell>
        <TableCell align="left" style={{ border: "none" }}>
          {subject}
        </TableCell>
        <TableCell align="left" style={{ border: "none" }}>
          {studentname ? studentname : studentemail}
        </TableCell>
        <TableCell align="right" style={{ border: "none" }}>
          {price}
        </TableCell>
        <TableCell align="right" style={{ border: "none" }}>
          {createdat}
        </TableCell>
            </CustomTableRow>
    </>
    )
}
