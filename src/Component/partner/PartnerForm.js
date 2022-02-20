import { Container, Box } from "@material-ui/core";
import React, { useContext } from "react";
import { CustomButton } from "../../controls/Button";
import { CustomInput, LabelText } from "../../controls/Input";
import { GlobalContext } from "../../Context/Provider";
import { useFormik } from "formik";
import MessageBox from "../../utils/Alert";
import { addPartner } from "../../Context/actions/auth/Register";

export default function PartnerForm() {
  const {
    partnerDispatch,
    partnerState: {
      partner: { data },
    },   
  } = useContext(GlobalContext);
  const orgId = localStorage.getItem("userId");

  const formik = useFormik({
    initialValues: {
      partnerName: "",
      partnerEmail: "",
      partnerPass: "",
    },
    onSubmit: (values, action) => {
      const { partnerName, partnerEmail, partnerPass } = values;
      const value = { partnerName, partnerEmail, partnerPass, orgId };
      addPartner(value)(partnerDispatch);
      action.resetForm();
    },
  });
  return (
    <Box>
      {data && data.message === "We have errors in your request" && (
        <MessageBox message={data?.message} severity="error" />
      )}
      {data && data.message === "You added a member" && (
        <MessageBox message={data?.message} severity="success" />
      )}
      <Container style={{ margin: 16 }}>
        <form onSubmit={formik.handleSubmit}>
          <Box>
            <LabelText>Full Name</LabelText>

            <CustomInput
              name="partnerName"
              type="text"
              placeholder="Full Name"
              label="label"
              onChange={formik.handleChange}
              value={formik.values.partnerName}
            />
          </Box>
          <Box>
            <LabelText>Email </LabelText>

            <CustomInput
              name="partnerEmail"
              type="text"
              placeholder="Patner's email"
              label="label"
              onChange={formik.handleChange}
              value={formik.values.partnerEmail}
            />
          </Box>
          <Box>
            <LabelText>Password </LabelText>

            <CustomInput
              name="partnerPass"
              type="text"
              placeholder="Password"
              label="label"
              onChange={formik.handleChange}
              value={formik.values.partnerPass}
            />
          </Box>{" "}
          <Box>
            <CustomButton
              type="Submit"
              style={{
                color: "#DA7B93",
                background: "#2f4454",
                borderRadius: 12,
                marginTop: 20,
              }}
            >
              Add User
            </CustomButton>
          </Box>
        </form>
      </Container>{" "}
    </Box>
  );
}
