import React from "react";
import Host from "./Host";
import { useParams } from "react-router-dom";
import { Container, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useQuery, useQueryClient } from "react-query";
import { fetchDetails, fetchOneDetail } from "../../../Async/lessonDetail";
import Linear from "../../../utils/Progress/Linear";
import { makeStyles } from "@material-ui/core/styles";
import { CustomButton } from "../../../controls/Button";
import { Title } from "../../../controls/Input";
import { MdDetails } from "react-icons/md";
import { CustomInput, LabelText } from "../../../controls/Input";

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
          <LabelText>Ticket Sold</LabelText>
            <LabelText>2, 500</LabelText>
          </div>
          <hr  className={classes.hr} />
          <div className={classes.info}>
          <LabelText>Expected Attendance</LabelText>
            <LabelText>2, 500</LabelText>
          </div>
          <hr className={classes.hr} /> <div className={classes.info}>
          <LabelText>Total Revenue</LabelText>
            <LabelText>2, 200, 500</LabelText>
          </div>
          <hr className={classes.hr} />
          <CustomButton  style={{
             borderRadius: 10
             
            }}>  <LabelText style={{color: "#DA7B93" }}>Buy Ticket</LabelText></CustomButton>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            
            <Link
              to={`/joinAuth/${params.id}`}
              target="_blank"
              className={classes.links}
            >
              <Title>Host</Title>
              <CustomButton style={{ borderRadius: 8 }}>
                Start Session
              </CustomButton>
            </Link>
            <Link
              to={`/joinAuth/${params.id}`}
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
            <LabelText>Institution</LabelText>
            <LabelText>{data?.response.orgName}</LabelText>
          </div>
          <hr  className={classes.hr} />
          <div className={classes.list}>
            <LabelText>Event Type</LabelText>
            <LabelText style={{textTransform: "Capitalize"}}>{data?.response.eventType}</LabelText>
          </div>
          <hr  className={classes.hr} />
          <div className={classes.list}>
            <LabelText>Host</LabelText>
            <LabelText>{data?.response.username}</LabelText>
          </div>
          <hr  className={classes.hr} />{" "}
          <div className={classes.list}>
            <LabelText>Course</LabelText>
            <LabelText>{data?.response.courseCode}</LabelText>
          </div>
          <hr  className={classes.hr}/>{" "}
          <div className={classes.list}>
            <LabelText>Price</LabelText>
            <LabelText>{data?.response.price}</LabelText>
          </div>
          <hr className={classes.hr} />
         
          <div className={classes.list}>
            <LabelText>Start Date</LabelText>
            <LabelText>{data?.response.startDate}</LabelText>
          </div>
          <hr  className={classes.hr} /> <div className={classes.list}>
            <LabelText>Start Time</LabelText>
            <LabelText>{data?.response.startTime}</LabelText>
          </div>
          <hr className={classes.hr} />
           <div className={classes.list}>
            <LabelText>End Date</LabelText>
            <LabelText>{data?.response.endDate}</LabelText>
          </div>
          <hr  className={classes.hr} />
          <div className={classes.list}>
            <LabelText>End Time</LabelText>
            <LabelText>{data?.response.endTime}</LabelText>
          </div>
          <hr  className={classes.hr} />
          
         
        </div>
      </div>
    </Container>
  );
}

export default Room;
