
import { Container,  Box, } from "@material-ui/core";
import React, { useContext } from "react";
import { CustomButton } from "../../controls/Button";
import { CustomInput, LabelText} from "../../controls/Input";
import { GlobalContext } from "../../Context/Provider";
import { useFormik } from "formik";
import { loginPartner } from "../../Context/actions/auth/Login";
import MessageBox from "../../utils/Alert";

export const PartnerLogin = (props) => {
    const { orgId, userId } = props

    const {
        loginpartnerDispatch,
        loginpartnerState: {
            login: { isLoggin, logger: partner, isPemmitted },
        },
       
    } = useContext(GlobalContext);
        console.log(isLoggin, partner, isPemmitted)


    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        onSubmit: (values, action) => {
            const { email, password } = values
            const data = { email, password, orgId, userId }
            loginPartner(data)(loginpartnerDispatch)
            action.resetForm()
        },
    });
    return (

        <Box >

            <Container style={{ margin: 16 }}>
                {isPemmitted && (partner?.message !== "Login Successful") && (<MessageBox message={partner?.message} severity="error" />)}

                <form onSubmit={formik.handleSubmit}>
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
                            Sign In
                        </CustomButton>
                    </Box>
                </form>

            </Container>{" "}
        </Box>
    )
}
