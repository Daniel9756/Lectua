import React, { useEffect, useState } from "react";
import { useQuery, useQueryClient } from "react-query";
import { fetchOneEvent } from "../../../Async/lesson";
import { OTSession, OTPublisher, OTStreams } from "opentok-react";
import Connection from "./Connection";
import Publisher from "./Publisher";
import Subscriber from "./Subscriber";
import { Title } from "../../../controls/Input";
import { CustomInput, LabelText } from "../../../controls/Input";

// const apiKey="47217034"

import { makeStyles, Container } from "@material-ui/core";
import Message from "./Message";
import { useParams } from "react-router";
const useStyles = makeStyles({});

const Host = (props) => {
  // STEP 1: get utilities from useOpenTok;
  // console.log(match);
  console.log(props)
const params = useParams()
  const [connect, setConnect] = useState(false);
  const [content, setContent] = useState([]);

  const name = params.name
  const { data, isLoading, isError } = useQuery(
    ["lecture", params.id],
    () => fetchOneEvent(params.id)
  );

  console.log(data);
  if (isLoading) {
    return <div>Loading .....</div>;
  }
  if (isError) {
    return <div>Error: {isError.message}</div>;
  }

  const handleSessionOn = () => {
    setConnect(true);
  };
  
  const chatContent = (values) => {
    setContent([...content, values])
  }

  if (data) {
    const { apiKey, session: sessionId, token, topic, JWTtoken, id } = data;
    localStorage.setItem("token", JWTtoken);
    const sessionData = () => {
      return {
        apiKey,
        sessionId,
        token,
      };
    };
   
    return (
      <div className="row">
        <div className="col-md-8 col-sm-12">
          <div style={{ margin: `0 20 0 20`, color: "#DA7B93" }}>
            <div
              style={{
                display: "flex",
                marginLeft: 10,
                alignItems: "center",
                background: "#DA7B93",
              }}
            >
              <Title>{topic}</Title>
              <Connection connect={connect} session={sessionId} stream={id} />
              <a
                href={`/joinAuth/${params.id}`}
                target="_blank"
                style={{ marginLeft: 80, textTransform: "uppercase" }}
              >
                <LabelText>Join here</LabelText>
              </a>
            </div>
            <OTSession
              sessionId={sessionId}
              token={token}
              apiKey={apiKey}
              onConnect={handleSessionOn}
            >
              <Publisher topic={topic} sessionId={sessionId} />
              <OTStreams>
                <Subscriber topic={topic} sessionId={sessionId} stream={id} />
              </OTStreams>
            </OTSession>
          </div>{" "}
        </div>
        <div className="col-md-4 col-sm-12">
        
          <Message
            topic={topic}
            sessionId={sessionId}
            token={token}
            apiKey={apiKey}
            id={id}
            chatContent={chatContent}
            name="name"
          />
            <div>{content}</div>
        </div>
      </div>
    );
  }
};

export default Host;
