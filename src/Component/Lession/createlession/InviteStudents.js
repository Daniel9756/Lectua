import React from "react";
import { useFormik } from "formik";
import { CustomInput, InputLabel, Title, Info } from "../../controls/Input";
import { CustomButton } from "../../controls/Button";


function InviteStudent({handleNext, handleBack}) {
  const formik = useFormik({
    initialValues: {
      phone: "",
    },
    onSubmit: (values, event) => {
      event.preventDefault()
      //   mutate({values: values})
    //   handleNext()
    },
  });
  // console.log(handleNext)
  return (
    <>
      {" "}
      <form onSubmit={formik.handleSubmit}>
        <div style={{ marginTop: 8 }}>
          <InputLabel>Student Mobile</InputLabel>
          <CustomInput
            name="phone"
            type="text"
            placeholder="Phone Number of invite"
            label="label"
            onChange={formik.handleChange}
            value={formik.values.phone}
          />
        </div>
      </form>
      <CustomButton text="Submit" type="submit" onClick={handleNext}>
        Next
      </CustomButton>
      <div style={{ marginTop: 10 }}>
      <CustomButton style={{ marginTop: 20 }} onClick={handleBack}>
        Back
      </CustomButton>
      </div>
    </>
  );
}

export default InviteStudent;
