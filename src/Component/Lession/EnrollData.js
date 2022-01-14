import React from "react";

import { TableCell, TableRow } from "@material-ui/core";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { withStyles } from "@material-ui/core/styles";
import { MdCancel } from "react-icons/md";
function EnrollData(props) {
  const {
    item: { id, subject, courseId, price, createdAt, orgName },
  } = props;

  const CustomTableRow = withStyles((theme) => ({
    root: {
      backgroundColor: "#f1f2f6",
      borderTop: "5px solid white",
      borderRadius: "50px",
      paddingRight: 14,
      paddingLeft: 14,
    },
  }))(TableRow);

  return (
    <>
      <CustomTableRow
        key={id}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <p>
          <TableCell
            align="center"
            style={{ textTransform: "capitalize", border: "none" }}
          >
            {subject}
          </TableCell>
        </p>
        <p>
          <TableCell align="center" style={{ border: "none" }}>
            {courseId}
          </TableCell>
        </p>
        <p>
          <TableCell align="center" style={{ border: "none" }}>
            {price ? price : "Free"}
          </TableCell>
        </p>
        <p>
          <TableCell
            align="center"
            style={{ border: "none", textTransform: "capitalize" }}
          >
            {orgName}
          </TableCell>
        </p>
        <p>
          <TableCell align="center" style={{ border: "none" }}>
            {createdAt}
          </TableCell>
        </p>
        <p>
          <TableCell align="center" style={{ border: "none" }}>
            <BiDotsVerticalRounded />
            <MdCancel style={{ cursor: "pointer" }} />
          </TableCell>
        </p>
      </CustomTableRow>
    </>
  );
}

export default EnrollData;
