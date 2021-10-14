
import { Container, Box,  } from "@material-ui/core";
import React, { useContext } from "react";
import { CustomButton } from "../../controls/Button";
import { CustomInput, LabelText, } from "../../controls/Input";
import { GlobalContext } from "../../Context/Provider";
import { useFormik } from "formik";
import { Link, useHistory } from "react-router-dom";
import MessageBox from "../../utils/Alert";
import { addPartner } from "../../Context/actions/auth/Register";

export default function PartnerForm() {
    const history = useHistory();


    const {
        partnerDispatch,   
        partnerState: {
            partner: {isLoading, data, isError, isSuccess, error },
        },  
        loginState: {
            login: {  logger, },
          },  
       
      } = useContext(GlobalContext);
      const orgId = logger?.userID
      
      console.log(isLoading, data, isError, isSuccess, error, orgId)


    const formik = useFormik({
        initialValues: {
            fullName: "",
            email: "",
            password: "",
        },       
        onSubmit: (values, action) => {
            console.log(values)
            const {fullName,email,password, } = values
            const data = { fullName,email,password,  orgId }
            addPartner(data)(partnerDispatch);
            action.resetForm()
        },
    });
    return (

        <Box >
      {data && (data.message === "We have errors in your request") && (<MessageBox message={data?.message} severity="error" />)}
      {data && (data.message === "You added a member") && (<MessageBox message={data?.message} severity="success" />)}
            <Container style={{ margin: 16 }}>
                <form onSubmit={formik.handleSubmit}>
                    <Box>
                    <LabelText>Full Name</LabelText>

                        <CustomInput
                            name="fullName"
                            type="text"
                            placeholder='Full Name'
                            label="label"
                            onChange={formik.handleChange}
                            value={formik.values.fullName}
                        />
                    </Box>
                    <Box>
                    <LabelText>Email  </LabelText>

                        <CustomInput
                            name="email"
                            type="text"
                            placeholder="Patner's email"
                            label="label"
                            onChange={formik.handleChange}
                            value={formik.values.email}
                        />
                    </Box>
                    <Box>
                    <LabelText>Password  </LabelText>

                        <CustomInput
                            name="password"
                            type="text"
                            placeholder="Password"
                            label="label"
                            onChange={formik.handleChange}
                            value={formik.values.password}

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
    )
}
