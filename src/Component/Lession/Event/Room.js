import React from "react";
import Host from "./Host";
import { useParams } from "react-router-dom";
import { Container, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useQuery, useQueryClient } from "react-query";
import { fetchDetails, fetchOneDetail } from "../../../Async/lessonDetail";
import Linear from "../../utils/Progress/Linear";
import { makeStyles } from "@material-ui/core/styles";
import { CustomButton } from "../../controls/Button";
import { Title } from "../../controls/Input";
import { MdDetails } from "react-icons/md";
import { CustomInput, InputLabel } from "../../controls/Input";

const useStyles = makeStyles({
  imagediv: {
    height: "300px",
    backgroundImage: `url(/images/v8.jpg)`,
    backgroundRepeat: "no-repeat",
    margin: 0,
  },
  links: {
    textDecoration: "none",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  rightdiv: {
    background: "#dcdde1",
    width: "50%",
  },
  title: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    margin: 20,
    marginLeft: 20,

  },
  list: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginRight: 40,
    marginLeft: 40,
  },
  info: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginRight: 20,
    marginLeft: 20,
  },
  hr:{
    marginRight: 20, marginLeft: 20
  }
});

function Room() {
  const classes = useStyles();
  const params = useParams();

  const { data, isLoading, isError } = useQuery(
    ["details", params.id],
    () => fetchOneDetail(params.id),
    {
      onSuccess: () => console.log("This detail successfully fetched"),
    }
  );
  return (
    <Container>
      <div className="row" style={{ display: "flex" }}>
        {isLoading && <Linear valueBuffer={50} value={50} />}
        <div
          className="col-md-6 col-sm-12"
          style={{ backgroundColor: "#DA7B93", padding: 8 }}
        >
          <div className={classes.imagediv}></div>
          <div className={classes.info}>
          <InputLabel>Ticket Sold</InputLabel>
            <InputLabel>2, 500</InputLabel>
          </div>
          <hr  className={classes.hr} />
          <div className={classes.info}>
          <InputLabel>Expected Attendance</InputLabel>
            <InputLabel>2, 500</InputLabel>
          </div>
          <hr className={classes.hr} /> <div className={classes.info}>
          <InputLabel>Total Revenue</InputLabel>
            <InputLabel>2, 200, 500</InputLabel>
          </div>
          <hr className={classes.hr} />
          <CustomButton  style={{
             borderRadius: 10
             
            }}>  <InputLabel style={{color: "#DA7B93" }}>Buy Ticket</InputLabel></CustomButton>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            
            <Link
              to={`/host/${params.id}`}
              target="_blank"
              className={classes.links}
            >
              <Title>Host</Title>
              <CustomButton style={{ borderRadius: 8 }}>
                Start Session
              </CustomButton>
            </Link>
            <Link
              to={`/host/${params.id}`}
              target="_blank"
              className={classes.links}
            >
              {" "}
              <Title>Guest</Title>
              <CustomButton style={{ borderRadius: 8 }}>
                Join Session
              </CustomButton>
            </Link>
          </div>
        </div>
        <div className="col-md-6 col-sm-12" className={classes.rightdiv}>
          <div className={classes.title}>
            <Title>Information about the Event</Title>
            <CustomButton  style={{
             borderRadius: 10,
             background: "#DA7B93",
             width: 150
             
            }}>  Buy Ticket</CustomButton>
          </div>
          <div className={classes.list}>
            <InputLabel>Institution</InputLabel>
            <InputLabel>{data?.response.orgName}</InputLabel>
          </div>
          <hr  className={classes.hr} />
          <div className={classes.list}>
            <InputLabel>Event Type</InputLabel>
            <InputLabel style={{textTransform: "Capitalize"}}>{data?.response.eventType}</InputLabel>
          </div>
          <hr  className={classes.hr} />
          <div className={classes.list}>
            <InputLabel>Host</InputLabel>
            <InputLabel>{data?.response.username}</InputLabel>
          </div>
          <hr  className={classes.hr} />{" "}
          <div className={classes.list}>
            <InputLabel>Course</InputLabel>
            <InputLabel>{data?.response.courseCode}</InputLabel>
          </div>
          <hr  className={classes.hr}/>{" "}
          <div className={classes.list}>
            <InputLabel>Price</InputLabel>
            <InputLabel>{data?.response.price}</InputLabel>
          </div>
          <hr className={classes.hr} />
         
          <div className={classes.list}>
            <InputLabel>Start Date</InputLabel>
            <InputLabel>{data?.response.startDate}</InputLabel>
          </div>
          <hr  className={classes.hr} /> <div className={classes.list}>
            <InputLabel>Start Time</InputLabel>
            <InputLabel>{data?.response.startTime}</InputLabel>
          </div>
          <hr className={classes.hr} />
           <div className={classes.list}>
            <InputLabel>End Date</InputLabel>
            <InputLabel>{data?.response.endDate}</InputLabel>
          </div>
          <hr  className={classes.hr} />
          <div className={classes.list}>
            <InputLabel>End Time</InputLabel>
            <InputLabel>{data?.response.endTime}</InputLabel>
          </div>
          <hr  className={classes.hr} />
          
         
        </div>
      </div>
    </Container>
  );
}

export default Room;
