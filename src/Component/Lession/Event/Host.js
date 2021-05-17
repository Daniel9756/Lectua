import React, { useEffect, useState } from "react";
import useOpenTok from "react-use-opentok";
import { useQuery, useQueryClient } from "react-query";
import { fetchOneEvent } from "../../../Async/lesson";
import { OTSession, OTPublisher, OTStreams, OTSubscriber } from "opentok-react";
import Connection from "./Connection";
import Publisher from "./Publisher";
import Subscriber from "./Subscriber";

import { TableCell, TableRow, Container } from "@material-ui/core";
// const apiKey="47217034"

const Host = ({ match }) => {
  // STEP 1: get utilities from useOpenTok;
  console.log(match);

  const [connect, setConnect] = useState(false);
  const { data, isLoading, isError } = useQuery(
    ["lecture", match.params.id],
    () => fetchOneEvent(match.params.id)
  );

  if (isLoading) {
    return <div>Loading .....</div>;
  }
  if (isError) {
    return <div>Error: {isError.message}</div>;
  }

  const handleSessionOn = () => {
    setConnect(true);
  };
  if (data) {
    const { apiKey, session: sessionId, token } = data;

    const sessionData = () => {
        return {
          apiKey,
          sessionId,
          token,
        };
      };
    return (
      <Container>
        <div style={{ marginRight: 40 }}>This session ID: {sessionId}</div>
        <a href={`/host/${encodeURIComponent(sessionId)}`} target="_blank">
          Join here
        </a>
        <Connection connect={connect} sessionId={sessionId} />
        <OTSession
          sessionId={sessionId}
          token={token}
          apiKey={apiKey}
          onConnect={handleSessionOn}
        >
          <Publisher />
          <OTStreams>
            <Subscriber />
          </OTStreams>
        </OTSession>
      </Container>
    );
  }
};

export default Host;


