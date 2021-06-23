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
    if (fileUploaded.size > 25600) {
      props.onFileSelectError({
        error: "File size cannot exceed more than 25MB",
      });
    } else {
      props.onFileSelectSuccess(fileUploaded);
    }
  };
  return (
    <div>
      <GroupButton
        onClick={handleClick}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 10,
          background: "#DA7B93",
          borderRadius: 12,
        }}
      >
        {" "}
        <MdFileUpload fontSize={41} />
        <Info>Upload</Info>
      </GroupButton>
      <input
        type="file"
        ref={hiddenFileInput}
        onChange={handleChange}
        style={{ display: "none" }}
      />
    </div>
  );
}
