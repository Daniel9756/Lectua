import React from "react";
import { useFormik } from "formik";
import { CustomInput, InputLabel, Title, Info } from "../../controls/Input";
import { CustomButton } from "../../controls/Button";
function CreateSession({handleNext}) {
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    onSubmit: (values) => {
      //   mutate({values: values})
    },
  });
  console.log(handleNext)
  return (
    <form onSubmit={formik.handleSubmit}>
      <div style={{ marginTop: 8 }}>
        <InputLabel>Teacher Email</InputLabel>
        <CustomInput
          name="email"
          type="text"
          placeholder="Your Email Address"
          label="label"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
      </div>
      <div style={{ marginTop: 10 }}>
                  <CustomButton
                    text="Submit"
                    type="submit"
                    onClick={handleNext}
                  >
                    submit
                  </CustomButton>
                </div>{" "}
    </form>
  );
}

export default CreateSession;
