import React from "react";
import { TableCell, TableRow } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const CustomTableRow = withStyles((theme) => ({
    root: {
      backgroundColor: "#f1f2f6",
      borderTop: "5px solid white",
      borderRadius: "50px",
      paddingRight: 14,
      paddingLeft: 14,
    },
  }))(TableRow);

function StudentTimeData(props) {
    const {
        item: { id,courseId, course, topic, eventtype, startdate, starttime, enddate, endtime },
      } = props;

    // console.log(subjects)

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
            {course}
          </TableCell>
        </p>
        <p>
          <TableCell align="center" style={{ border: "none" }}>
            {topic}
          </TableCell>
        </p>
        <p>
          <TableCell align="center" style={{ border: "none" }}>
            {eventtype}
          </TableCell>
        </p>
        <p>
          <TableCell
            align="center"
            style={{ border: "none", textTransform: "capitalize" }}
          >
            {startdate} /{starttime}
          </TableCell>
        </p>
        <p>
          <TableCell align="center" style={{ border: "none" }}>
            {courseId}
          </TableCell>
        </p>
       
        <p>
          <TableCell
            align="center"
            style={{ border: "none", textTransform: "capitalize" }}
          >
            {enddate} /{endtime}
          </TableCell>
        </p>
      
      </CustomTableRow>
          
        </>
    )
}

export default StudentTimeData
