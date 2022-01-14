import React, { useState } from "react";
import { OTPublisher } from "opentok-react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  pubisher: {
    position: "absolute",
    width: "65%",
    left: "10px",
    Zindex: 5,
    border: "10px solid #DA7B93",
    borderRadius: "0 0 5px 5px",
  },
}));
function Publisher(props) {
  const classes = useStyles();
  const { topic } = props;
  const [error, setError] = useState("");





  const onError = (err) => {
    setError(`Failed to publish: ${err.message}`);
  };
 
  const onPubish = (pubishedData) => {
    console.log({ pubishedData });
  };

  const onInit = (initData) => {
    console.log({ initData });
  };
  const onStreamCreated = (event) => {
    console.log(event);
    if (event.streamCreated) {
      console.log("Publisher stream created!");
    }
    if (event.streamDestroyed) {
      console.log("Publisher stream destroyed!");
    }
  };
  if (error) {
    return <div id="error">{error}</div>;
  }
  return (
    <div className={classes.pubisher}>
      <OTPublisher
        properties={{
          insertMode: "append",
          publishAudio: true,
          publishVideo: true,
          width: "100%",
          height: "580px",
          resolution: "640x480",
          name: topic,
          showControls: true,
          style: {
            audioLevelDisplayMode: "auto",
            buttonDisplayMode: "auto",
          },
        }}
        eventHandlers={onStreamCreated}
        onError={onError}
        onPublish={onPubish}
        onInit={onInit}
      
      />
    </div>
  );
}

export default Publisher;
