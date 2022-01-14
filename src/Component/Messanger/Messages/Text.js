import { makeStyles, Box } from '@material-ui/core'
import React from 'react'
import { CustomButton } from '../../../controls/Button';
import { CustomTextarea } from '../../../controls/Input';
import { useFormik } from "formik";
import * as Yup from "yup";
import ErrorMessage from '../../../utils/Error/ErrorMessage';
import { useMutation } from "react-query";
import { sendMessage } from '../../../Async/message';

const useStyles = makeStyles((theme) => ({

    txtarea: {
        display: "flex",
        alignItems: "center",
        bottom: 4,
        position: "absolute",
        justifyContent: "flex-start",
        backgroundColor: "#fff2f1",
        width: "100%",
        paddingTop: 12
    },
    Textarea: {
        width: 286, minHeight: "82px", fontFamily: "roboto"
    },
    "@media (max-width: 960px)": {

    },
    "@media (max-width: 440px)": {
        txtarea: {
            display: "flex",
            alignItems: "start",
            flexDirection: "column",
            bottom: 4,
            position: "absolute",
            justifyContent: "flex-start",
            backgroundColor: "#fff2f1",
            width: "100%",
            paddingTop: 12
        },
    },
}));
function Text({ friend }) {
    const classes = useStyles();
    const {
        data,
        error,
        isError,
        isLoading,
        isSuccess,
        mutate,
    } = useMutation(sendMessage)
    const { id, senderid, receiverid } = friend
    // console.log(data?.response)



    const formik = useFormik({
        initialValues: {
            message: ""
        },
        validationSchema: Yup.object({
            message: Yup.string()
                .required("Cannot send empty message"),
        }),

        onSubmit: (values, action) => {
            const { message } = values
            const info = {
                message, receiverid, senderid, id
            }
            mutate(info)
            action.resetForm()
        },
    });
    return (

        <form onSubmit={formik.handleSubmit}>
            <Box className={classes.txtarea}>
                <Box>

                    <CustomTextarea
                        name="message"
                        type="text"
                        label="firstName"
                        value={formik.values.message}
                        onChange={formik.handleChange}
                        placeholder="Your Message"
                        className={classes.Textarea}
                    ></CustomTextarea>
                    <p style={{ marginLeft: 4 }}>
                        {formik.touched && formik.errors && (
                            <ErrorMessage errorValue={formik.errors.message} />
                        )}
                    </p>
                </Box>
                <CustomButton
                    type="Submit"
                    style={{
                        marginLeft: "8px",
                        marginBottom: "18px",
                        width: 92,
                        color: "#376e6f",
                        background: "#DA7B93",
                        borderRadius: 8,
                    }}
                >
                    send
                </CustomButton>
            </Box>
        </form>


    )
}

export default Text
