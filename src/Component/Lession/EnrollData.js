import React from "react";

import {
    TableCell,
    TableRow,
} from "@material-ui/core";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { withStyles } from "@material-ui/core/styles";
import { MdCancel } from "react-icons/md";
function EnrollData(props) {

    const { item: { id, subject, subjectid, price, createdat, orgname }} = props

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

                <TableCell
                    align="left"
                    style={{ textTransform: "uppercase", border: "none" }}
                >
                    {subject}
                </TableCell>
                <TableCell align="left" style={{ border: "none" }}>
                    {subjectid}
                </TableCell>
                <TableCell align="right" style={{ border: "none" }}>
                    {price}
                </TableCell>
                <TableCell align="right" style={{ border: "none" }}>
                    {orgname}
                </TableCell>

                <TableCell align="right" style={{ border: "none" }}>
                    {createdat}
                </TableCell>

                <TableCell align="left" style={{ border: "none" }}>
                    <BiDotsVerticalRounded />
                    <MdCancel style={{ cursor: "pointer" }} />
                </TableCell>
            </CustomTableRow>
        </>
    );
}

export default EnrollData;
