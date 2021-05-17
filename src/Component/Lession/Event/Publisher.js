import React, { useState } from "react";
import { OTPublisher } from "opentok-react";

function Publisher() {
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
  if (error) {
    return <div id="error">{error}</div>;
  }
  return (
    <div className="publisher">
      <OTPublisher
        properties={{
          insertMode: "append",
          publishAudio: true,
          publishVideo: true,
          width: "80%",
          height: "600px",
        }}
        onError={onError}
        onPublish={onPubish}
        onInit={onInit}
      />
    </div>
  );
}

export default Publisher;
