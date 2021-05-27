import React from "react";

import {
  TableCell,
  TableRow,
  Paper,
  Checkbox,
  Typography,
} from "@material-ui/core";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { CustomButton } from "../controls/Button";
import { GoTrashcan } from "react-icons/go";
import { MdCancel } from "react-icons/md";
import { useMutation, useQueryClient, useQuery } from "react-query";
import { removeLecture, fetchOne } from "../../Async/lesson";
import { GiJoint } from "react-icons/gi";
import { Link } from "react-router-dom";
import { removeDetail } from "../../Async/lessonDetail";

function DataTable({ id, item }) {
  const CustomTableRow = withStyles((theme) => ({
    root: {
      backgroundColor: "#f1f2f6",
      borderTop: "5px solid white",
      borderRadius: "50px",
      paddingRight: 14,
      paddingLeft: 14,
    },
  }))(TableRow);
  const queryClient = useQueryClient();
  const { mutate } = useMutation(removeDetail, {
    onSuccess: () => queryClient.invalidateQueries("details"),
  });

  const remove = () => {
    mutate(id);
  };
  // const fetchById = () => {
  //   fetchOne(id);
  // };

  return (
    <>
      <CustomTableRow
        key={item.id}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <TableCell align="left" style={{ border: "none" }}>
          <Link style={{ textDecoration: "none" }} to={`/room/detail/${id}`}>
           More
          </Link>
        </TableCell>

        <TableCell
          align="left"
          style={{ textTransform: "uppercase", border: "none" }}
        >
          {item.courseCode}
        </TableCell>
        <TableCell align="right" style={{ border: "none" }}>
          {item.username}
        </TableCell>
        <TableCell align="right" style={{ border: "none" }}>
          {item.price}
        </TableCell>
        <TableCell align="right" style={{ border: "none" }}>
          {item.orgName}
        </TableCell>

        <TableCell align="right" style={{ border: "none" }}>
          {item.eventType}
        </TableCell>
        <TableCell align="center" style={{ border: "none" }}>
          {item.startDate}|{item.startTime}
        </TableCell>
        <TableCell align="right" style={{ border: "none" }}>
          {item.endDate}|{item.endTime}
        </TableCell>
        <TableCell align="right" style={{ border: "none" }}>
          <BiDotsVerticalRounded />
          <MdCancel onClick={remove} id={id} style={{ cursor: "pointer" }} />
        </TableCell>
      </CustomTableRow>
    </>
  );
}

export default DataTable;
