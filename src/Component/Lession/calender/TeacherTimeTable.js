
import React, { useContext, useEffect } from 'react';
import { BiDotsVerticalRounded } from "react-icons/bi";
// import LinearLoading from "../"
import Avatar from "@material-ui/core/Avatar";
import { Title, LabelText } from "../../../controls/Input";
import { LinearLoading } from "../../../utils/Progress/Linear";
import MessageBox from "../../../utils/Alert"
import {
    makeStyles,
    withStyles,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    TableFooter,
   
} from "@material-ui/core";
import { GlobalContext } from "../../../Context/Provider";
import { getTimetable } from "../../../Context/actions/timeTable/teacher"
import TimeTable from './TimeTable';
const useStyles = makeStyles({
    roote: {
        height: "100%",
        background: "#dcdde1",
        overflow: "scroll",
        marginTop: 61,
    },
    table: {
        minHeigth: 860,
        margin: 12,
        width: "98%",
    },
    thd: {
        fontFamily: "serif",
        fontWeight: "bold",

        position: "sticky",
    },
    title: {
        padding: 20,
        paddingBottom: 8,
        fontWeight: "bolder",
        letterSpacing: 2,
    },
    body: {
        overflowY: "scroll",
    },
    headtxt: {
        color: "#DA7B93", width: "auto", fontFamily: "serif", fontWeight: "bold", padding: 2, borderRadius: 4
    },
    "@media (max-width: 580px)": {
        roote: {
            display: "none"
        }
    },

});

export default function TeacherTimeTable() {
    const classes = useStyles();
    const userId = localStorage.getItem("userId");

    const StyledTableCell = withStyles((theme) => ({
        head: {
            color: "#DA7B93",
            fontSize: 15,
            textTransform: "uppercase",
            boxShadow: 0,
            border: "none",
        },
    }))(TableCell);

    const StyledTableRow = withStyles((theme) => ({
        root: {
            backgroundColor: "#376e6f",
            height: "100px",
            border: "none",
            paddingRight: 14,
            paddingLeft: 14,
            color: "#DA7B93"
        },

    }))(TableRow);

    const {

        topicState: {
            topic: { isScheduled },
        },
        timetableDispatch,
        timetableState: {
            table: {
                isAddingSchedule, lists, isError, isListed },
        },
        deleteTopicState: {
            deleteTopic: { deletedTopic, isTopDeleted,  },
        },
        editedTopicState: {
            edittopic: {
                editedTopic, isEditedTopic },
        },


    } = useContext(GlobalContext);
    console.log(lists, "timetane")
    useEffect(() => {
        getTimetable(userId)(timetableDispatch);
    }, [isScheduled, isTopDeleted, timetableDispatch, userId]);

    return (
        <div
            className={classes.roote}>
            <TableContainer
                component={Paper}
                style={{ margin: 10, width: "98%", zIndex: -1 }}
            >
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",

                        paddingRight: 16,
                    }}
                >
                    <div className={classes.title}>
                        <LabelText style={{
                            textTransform: "uppercase"
                        }}>Lecture Time Table</LabelText>
                    </div>
                   
                    <hr />
                    <div>
                        <Title>{lists?.response?.length} Topics Created</Title>
                        <hr />
                        {isTopDeleted && (<MessageBox message={deletedTopic?.message} severity="success" />)}
                        {isEditedTopic && (<MessageBox message={editedTopic?.message} severity="success" />)}
                    </div>
                    <Avatar alt="person" src="/images/person.jpg" />
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
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    borderRadius: "30px",
                                }}
                            >
                                <StyledTableCell align="left">
                                    {" "}

                                    <LabelText>
                                        Go Live
                                    </LabelText>
                                </StyledTableCell>
                                <StyledTableCell align="left" className={classes.headtxt}>
                                    {" "}
                                    CODE
                                </StyledTableCell>
                                <StyledTableCell align="left" className={classes.headtxt}>
                                    {" "}
                                    Course
                                </StyledTableCell>
                                <StyledTableCell align="left" className={classes.headtxt}>Topic</StyledTableCell>
                                <StyledTableCell align="center" className={classes.headtxt}>Event Type</StyledTableCell>
                                <StyledTableCell align="right" className={classes.headtxt}>Start Date</StyledTableCell>
                                <StyledTableCell align="right" className={classes.headtxt}>End Date</StyledTableCell>
                                <StyledTableCell align="right">
                                    <BiDotsVerticalRounded />
                                    <BiDotsVerticalRounded />
                                </StyledTableCell>
                            </StyledTableRow>
                        </TableHead>
                        <TableBody className={classes.body}>
                            {isAddingSchedule && (<LinearLoading />)}
                            {isError && (<MessageBox message="Your user is not available at the moment " severity="error" />)}
                            {isListed && (
                                <div>
                                    {lists?.response.map((item) => (
                                        <TimeTable item={item} id={item.id} />
                                    ))}
                                </div>
                            )}
                        </TableBody>
                        <TableFooter>
                        </TableFooter>
                    </Table>
                </div>
            </TableContainer>
        </div>
    );
}
