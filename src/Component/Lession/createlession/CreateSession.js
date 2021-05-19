import React from "react";
import { useFormik } from "formik";
import { CustomInput, InputLabel } from "../../controls/Input";
import { CustomButton } from "../../controls/Button";
import { useMutation, useQueryClient } from "react-query";
import { addLecture } from "../../../Async/lesson";
import Notification from "../../../Component/utils/Notification";
import Notify from "../../../Component/utils/Notify";
import { useHistory } from "react-router-dom";
import SessionTable from "../SessionTable";

function CreateSession({ handleNext }) {
  const queryClient = useQueryClient();
  const history = useHistory();
  const {
    mutate,
    isLoading: isAddingUser,
    isSuccess,
    isError,
  } = useMutation(addLecture, {
    onSuccess: () => queryClient.invalidateQueries("lectures"),
    // onSuccess: (data) => console.log(data, "user created succesfully")
  });

  // if(isSuccess){
  //   history.push("/SessionTable")
  // }

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    onSubmit: (values) => {
      mutate({ values: values });
    },
  });

  return (
    <>
      {isSuccess && <Notify />}
      {isError && <div>Something went wrong, try again</div>}
      <form onSubmit={formik.handleSubmit}>
          <InputLabel>Teacher Email</InputLabel>
        <div style={{ marginTop: 8, display: "flex", justifyContent: "center", "alignItems": "center" }}>
          <CustomInput
            name="email"
            type="text"
            placeholder="Your Email Address"
            label="label"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          <CustomButton text="Submit" type="submit" width={200}>
            submit
          </CustomButton>
        </div>
        <div style={{ marginTop: 10 }}>
        </div>{" "}
      </form>
      <SessionTable />
    </>
  );
}

export default CreateSession;
