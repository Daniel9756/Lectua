import React from "react";

import { TableCell, TableRow } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

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
  const { item } = props;

  const {
    id,
    studentName,
    studentEmail,
    price,
    courseId,
    owner,
    subject,
    orgName,
    createdAt,
  } = item;

  return (
    <>
      <CustomTableRow
        key={id}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: 8,
        }}
      >
        <TableCell
          align="left"
          style={{ textTransform: "uppercase", border: "none" }}
        >
          {courseId}
        </TableCell>
        <TableCell align="left" style={{ border: "none" }}>
          {subject}
        </TableCell>
        <TableCell align="left" style={{ border: "none" }}>
          {studentName ? studentName : studentEmail}
        </TableCell>
        <TableCell align="left" style={{ border: "none" }}>
          {price ? price : "Free"}
        </TableCell>
        <TableCell align="left" style={{ border: "none" }}>
          {createdAt}
        </TableCell>
      </CustomTableRow>
    </>
  );
};
