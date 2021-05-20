import React from "react";
import { LinearProgress } from "@material-ui/core";
function Linear(props) {
  console.log(props);
  const { valueBuffer: buffer, value: progress } = props;
  return (
    <div>
      <LinearProgress
        variant="query"
        value={progress}
        valueBuffer={buffer}
        style={{ color: "#1c3249", marginTop: 16 }}
      />
      <LinearProgress
        variant="query"
        value={progress}
        valueBuffer={buffer}
        style={{ color: "#1c3249", marginTop: 16  }}
      />
      <LinearProgress
        variant="query"
        value={progress}
        valueBuffer={buffer}
        style={{ color: "#1c3249", marginTop: 16  }}
      />
      <LinearProgress
        variant="query"
        value={progress}
        valueBuffer={buffer}
        style={{ color: "#1c3249", marginTop: 16  }}
      />
      <LinearProgress
        variant="query"
        value={progress}
        valueBuffer={buffer}
        style={{ color: "#1c3249", marginTop: 16  }}
      />
      <LinearProgress
        variant="buffer"
        value={progress}
        valueBuffer={buffer}
        style={{ color: "#1c3249", marginTop: 16  }}
      />
      <LinearProgress
        variant="buffer"
        value={progress}
        valueBuffer={buffer}
        style={{ color: "#1c3249", marginTop: 16  }}
      />
      <LinearProgress
        variant="buffer"
        value={progress}
        valueBuffer={buffer}
        style={{ color: "#1c3249", marginTop: 16  }}
      />
      <LinearProgress
        variant="buffer"
        value={progress}
        valueBuffer={buffer}
        style={{ color: "#1c3249", marginTop: 16  }}
      />
      
    </div>
  );
}

export default Linear;
