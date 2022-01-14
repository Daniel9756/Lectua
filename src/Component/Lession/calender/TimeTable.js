import React, { useState, useContext } from "react";

import {
    TableCell,
    TableRow,
    makeStyles, Box
} from "@material-ui/core";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { withStyles } from "@material-ui/core/styles";
import { MdCancel, MdLiveTv } from "react-icons/md";
import { LabelText, } from "../../../controls/Input";
import Confirm from "../../../utils/Confirm";
import { GlobalContext } from "../../../Context/Provider";
import { deleteATopic } from "../../../Context/actions/timeTable/teacher"
import { getTimetable } from "../../../Context/actions/timeTable/teacher"
import PopUp from "../../../utils/PopUp";
import Topic from "../../user/edit/Topic";

const useStyles = makeStyles({
    // tablehead: {
    //     textTransform: "uppercase", border: "none", fontWeight: "bold", opacity: 0.7
    // },
    "@media (max-width: 960px)": {

    },
    "@media (max-width: 440px)": {

    },
});
function TimeTable({ item }) {
    const CustomTableRow = withStyles((theme) => ({
        root: {
            backgroundColor: "#f1f2f6",
            borderTop: "5px solid white",
            borderRadius: "50px",
            paddingRight: 14,
            paddingLeft: 14,
        },
    }))(TableRow);
    const { courseId, topic, eventtype, startdate, starttime, enddate, endtime, id } = item
    const [isOpen, setIsOpen] = useState(false);
    const userId = localStorage.getItem("userId");

    const {
        deleteTopicDispatch,
        timetableDispatch,
        deleteTopicState: {
            deleteTopic: { isDeletingTopic, deletedTopic, isTopDeleted, error, isError },
        },
    } = useContext(GlobalContext);
    const [confirmDialog, setConfirmDialog] = useState({
        isOpen: false,
        subject: "",
        title: "",
        subtitle: "",
    });
    console.log(isDeletingTopic, deletedTopic, isTopDeleted, error, isError);


    const classes = useStyles();
    const onDelete = (id) => {
        deleteATopic(id)(deleteTopicDispatch)
        if (isTopDeleted) {
            setConfirmDialog({
                ...confirmDialog,
                isOpen: false,
            });
            getTimetable(userId)(timetableDispatch);
        }
    }
    return (
        <>
            <CustomTableRow
                key={courseId}
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                }}
            >
                <MdLiveTv style={{
                    fontWeight: "bold", fontSize: 40, paddingLeft: 8, cursor: "pointer"
                }} />
                <TableCell
                    align="left"
                    className={classes.tablehead}

                >
                    <LabelText>
                        {courseId}
                    </LabelText>

                </TableCell>
                <TableCell align="center" className={classes.tablehead}>
                    <LabelText>
                        {topic}
                    </LabelText>
                </TableCell>
                <TableCell align="left" className={classes.tablehead}>
                    <LabelText>
                        {eventtype}
                    </LabelText>
                </TableCell>
                <TableCell align="right" className={classes.tablehead}>
                    {startdate}
                    /{starttime}
                </TableCell>
                <TableCell align="right" className={classes.tablehead}>
                    <LabelText>
                        {enddate}/{endtime}
                    </LabelText>
                </TableCell>

                <TableCell align="right" className={classes.tablehead}>
                    <Box style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between", fontWeight: "bold", cursor: "pointer"
                    }}>
                        <BiDotsVerticalRounded style={{
                            fontWeight: "bold", fontSize: 35, marginRight: 8, cursor: "pointer",
                        }}
                            onClick={() => {
                                setIsOpen(true);

                            }}
                        />
                        <MdCancel style={{ fontWeight: "bold", fontSize: 35, cursor: "pointer", }}
                            onClick={() => {
                                setConfirmDialog({
                                    isOpen: true,
                                    subject: `${topic} (${courseId})`,
                                    title: "Are you sure you want to delete this topic?",
                                    subtitle: "This operation cannot be undone!",
                                    onConfirm: () => {
                                        onDelete(id);
                                    },
                                });
                            }}
                        />
                    </Box>
                </TableCell>
            </CustomTableRow>
            <Box>
                <Confirm
                    confirmDialog={confirmDialog}
                    setConfirmDialog={setConfirmDialog}
                />
            </Box>
            <Box>
                <PopUp
                    openPopUp={isOpen}
                    setOpenPopUp={setIsOpen}
                    title={`${topic}`}
                >
                    <Topic
                        item={item}
                        setOpenPopUp={setIsOpen}
                    />

                </PopUp>
            </Box>
        </>

    );
}

export default TimeTable;
