import React from "react";
import { GroupButton } from "./Button";
import { MdFileUpload } from "react-icons/md";
import { Info } from "./Input";

export function CustomeFileInput(props) {
  const hiddenFileInput = React.useRef(null);
  const handleClick = () => {
    hiddenFileInput.current.click();
  };
  const handleChange = (event) => {
    const fileUploaded = event.target.files[0];
    if (fileUploaded.size > 55600) {
      props.onFileSelectError({
        error: "File size cannot exceed more than 56MB",
      });
    } else {
      props.onFileSelectSuccess(fileUploaded);
    }
  };
  return (
    <div>
      <div
        onClick={handleClick}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 10,
          background: "#DA7B93",
          borderRadius: 12,
          cursor: "pointer"
        }}
      >
        {" "}
        <MdFileUpload fontSize={41} />
        <Info>Upload</Info>
      </div>
      <input
        type="file"
        ref={hiddenFileInput}
        onChange={handleChange}
        style={{ display: "none" }}
        
      />
    </div>
  );
}


export function MultiFileInput(props) {
  const hiddenFileInput = React.useRef(null);
  const handleClick = () => {
    hiddenFileInput.current.click();
  };
  const handleChange = (event) => {
    const fileUploaded = event.target.files;
    props.onFileSelectSuccess(fileUploaded);

  };
  return (
    <div>
      <div
        onClick={handleClick}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 10,
          background: "#DA7B93",
          borderRadius: 12,
          cursor: "pointer"
        }}
      >
        {" "}
        <MdFileUpload fontSize={41} />
        <Info>Upload</Info>
      </div>
      <input
        type="file"
        ref={hiddenFileInput}
        onChange={handleChange}
        style={{ display: "none" }}
        multiple
      />
    </div>
  );
}
