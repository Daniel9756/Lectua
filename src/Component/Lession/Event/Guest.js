import React, {  useState } from "react";
import { useQuery } from "react-query";
import { fetchOneEvent } from "../../../Async/lesson";
import { OTSession, OTStreams,   } from "opentok-react";
import Connection from "./Connection";
import Publisher from "./Publisher";
import Subscriber from "./Subscriber";
import { useParams } from "react-router-dom";


function Guest() {
    const params = useParams();
    console.log(params, "params");
    const { data, isLoading, isError } = useQuery(
        ["lecture", params.id],
        () => fetchOneEvent(params.id)
      );
      console.log(data)
    //   const { apiKey, session: sessionId, token } = data;



  const [connect, setConnect] = useState(false);
  const [error, setError] = useState("");

  const handleSessionOn = () => {
    setConnect(true);
  };

  const onError = (error) => {
      console.log(error)
    setError(error.message);
    setConnect(false);
  };
  if (isLoading) {
    return <div>Loading .....</div>;
  }
  if (isError) {
    return <div>Error: {isError.message}</div>;
  }

  if (data) {
    const { apiKey, session: sessionId, token } = data;

    // const sessionData = () => {
    //     return {
    //       apiKey,
    //       sessionId,
    //       token,
    //     };
    //   };

  return (
    <div>

      Current Session ID: {sessionId}
      {error ? <div>{error}</div> : null}
      <Connection connect={connect} />
      <OTSession
        apiKey={apiKey}
        sessionId={sessionId}
        token={token}
        onConnect={handleSessionOn}
        onError={onError}
      >
        <Publisher />
        <OTStreams>
          <Subscriber />
        </OTStreams>
      </OTSession>
    </div>
  );
}
}

export default Guest;
