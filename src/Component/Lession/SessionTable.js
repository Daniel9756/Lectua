
import React, { useEffect, useContext } from "react";
import { makeStyles, withStyles, CircularProgress, Box } from "@material-ui/core";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,

} from "@material-ui/core";
import { GoDiffAdded, GoPrimitiveDot } from "react-icons/go";
import { Link } from "react-router-dom";
import MessageBox from "../../utils/Alert"
import { LabelText, Title } from "../../controls/Input";
import { GlobalContext } from "../../Context/Provider";
import { getLecturesByATeacher } from "../../Context/actions/lesson/lesson";


const useStyles = makeStyles({
  root: {
    borderTop: "1px solid #2f4454"
  },
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
    paddingLeft: 15,
    paddingBottom: 4,
    fontWeight: "bolder",
    letterSpacing: 2,
  },
  body: {
    overflowY: "scroll",
    minHeight: "100px",
  },
  email: {
    display: "flex", justifyContent: "space-between", alignItems: "center", marginRight: 4
  },
  subject: {
    display: "flex", justifyContent: "flex-start", alignItems: "center", marginRight: 4
  },
  "@media (max-width: 960px)": {

  },
  "@media (max-width: 440px)": {

  },
});

export default function SessionTable({ handleNext }) {

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
  const userID = localStorage.getItem("userID");
  const {
    teacherLectureDispatch,
    teacherLectureState: {
      teacherlectures: { isFetchingLectures, FetchedLectures, isFetched,  isError },
    },
    deleteSubjectState: {
      subject: { isDeleted},
  },    
  } = useContext(GlobalContext);

  console.log(FetchedLectures) 
  
  const handleForward = () => {
    handleNext()
  }

  useEffect(() => {
    getLecturesByATeacher(userID)(teacherLectureDispatch);
  }, [isDeleted]);

  return (
    <div
      className={classes.root}

    >
      <TableContainer component={Paper} style={{ marginTop: 15 }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            margin: 8,
            paddingRight: 26,
          }}
        >
          <div className={classes.title}>
            <LabelText style={{ display: "inline-block" }}>ADD EVENT DETAILS</LabelText>
          </div>

          <hr />
          <div>

            {isFetchingLectures && (<CircularProgress />)}
            {isError && (<MessageBox message="Error fetching data" severity="error" />)}
            {isFetched && (<MessageBox message={FetchedLectures?.message} severity="success" />)}

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
                    Edit classroom Timetable
                  </Title>
                </StyledTableCell>
              </StyledTableRow>
            </TableHead>
            <TableBody className={classes.body}>
              {isFetched && (
                <div>
                  {FetchedLectures.data.map((item) => (
                    <div key={item.id} item={item} className={classes.email}>
                      <Box className={classes.subject}>

                        <GoPrimitiveDot style={{ marginLeft: 10, cursor: "pointer", fontSize: 20, }} />
                        <LabelText>
                          {item.subject}
                        </LabelText>
                      </Box>
                      <Link  onClick={handleForward} style={{
                        display: "flex", justifyContent: "space-between",
                        textDecoration: "none",
                        alignItems: "center", cursor: "pointer", marginRight: "4px important!"
                      }} to={`/MyProfile/MyLectures/${item.id}`}>

                        <LabelText>
                          {item.id}
                        </LabelText>
                        <GoDiffAdded style={{ fontSize: 40, color: "#2f4454", marginRight: "4px important!" }} />
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
