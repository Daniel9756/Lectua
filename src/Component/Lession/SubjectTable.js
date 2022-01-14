import React, { useContext } from 'react';
import { BiDotsVerticalRounded } from "react-icons/bi";
import Avatar from "@material-ui/core/Avatar";
import { Title, LabelText } from "../../controls/Input";
import { LinearLoading } from "../../utils/Progress/Linear";
import MessageBox from "../../utils/Alert"
import SubjectDataTable from "./SubjectDataTable"
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
import { GlobalContext } from "../../Context/Provider";

const useStyles = makeStyles({
    root: {
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
        root: {
            display: "none"
        }
    },

});

export default function SubjectTable() {
    const classes = useStyles();
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
            // backgroundColor: "#DA7B93",
            backgroundColor: "#376e6f",
            height: "100px",
            border: "none",
            paddingRight: 14,
            paddingLeft: 14,
            color: "#DA7B93"
        },
    }))(TableRow);

    const {
      
        teacherLectureState: {
            teacherlectures: { isFetchingLectures, FetchedLectures, isFetched, isError },
        },
        deleteSubjectState: {
            subject: { deleted, isDeleted },
        },
        editSubjectState: {
            editsubject: { isEdited, edited },
        },
    } = useContext(GlobalContext);

    return (
        <div
            className={classes.root}>
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
                        }}>Subject Table</LabelText>
                    </div>

                    <hr />
                    <div>
                        <Title>{FetchedLectures?.response.length} Subjects Created</Title>
                        <hr />
                        {isDeleted && (<MessageBox message={deleted?.message} severity="success" />)}
                        {isEdited && (<MessageBox message={edited?.message} severity="success" />)}

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
                                <StyledTableCell align="left" className={classes.headtxt}>
                                    {" "}
                                    ID
                                </StyledTableCell>
                                <StyledTableCell align="right" className={classes.headtxt}>Subject</StyledTableCell>
                                <StyledTableCell align="center" className={classes.headtxt}>Creator</StyledTableCell>
                                <StyledTableCell align="right" className={classes.headtxt}>Price($)</StyledTableCell>
                                <StyledTableCell align="right" className={classes.headtxt}>Duration</StyledTableCell>
                                <StyledTableCell align="right" className={classes.headtxt}>Class</StyledTableCell>
                                <StyledTableCell align="right" className={classes.headtxt}>Created</StyledTableCell>
                                <StyledTableCell align="right">
                                    <BiDotsVerticalRounded />
                                    <BiDotsVerticalRounded />
                                </StyledTableCell>
                            </StyledTableRow>
                        </TableHead>
                        <TableBody className={classes.body}>
                            {isFetchingLectures && (<LinearLoading />)}
                            {isError && (<MessageBox message="Your subjects is not available at the moment " severity="error" />)}
                            {isFetched && (
                                <div>
                                    {FetchedLectures?.response.map((item) => (
                                        <SubjectDataTable item={item} id={item.id} />

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
