import React, { useState } from 'react'
import { useHistory } from "react-router-dom";
import { Grid, makeStyles } from "@material-ui/core";
import { CustomButton } from "../../../controls/Button";
import { CustomInput, LabelText, Title, Info } from "../../../controls/Input";
import { Link } from "react-router-dom";
// import { GlobalContext } from "../../../Context/Provider";
import { PaystackButton } from 'react-paystack';


const useStyles = makeStyles((theme) => ({
    register: {
        marginTop: 10,
        marginBottom: 40,
        background: "#fff",
        // color: "#fff",
        width: "100%",
        height: "auto",
        padding: 20,
        paddingBottom: 40,
        borderRadius: 12,
    },
    Istgrid: {
        width: "100vh",
        height: "100%",
        borderRadius: 12,
    },
    btn: {
        width: "100%",
        fontWeight: "bold",
        height: 40,
        color: "#DA7B93",
        marginTop: 20,
        borderRadius: 10,
    }
}));
function Paystack() {

    const history = useHistory();
    const classes = useStyles();
    const publicKey = process.env.REACT_APP_PAYSTACK_API
    const amount = 1000000 // Remember, set in kobo!
    const [email, setEmail] = useState("")
    const [fulNname, setFulNname] = useState("")
    const [phone, setPhone] = useState("")

    const componentProps = {
        email,
        amount,
        metadata: {
            fulNname,
            phone,
        },
        publicKey,
        text: "Pay Now",
        onSuccess: (response) => {
            console.log(response);
            if (response.status === "success") {
                history.push("/login")
            } 
        },
        onClose: () => alert("Are you sure you want to quit this process"),
    }
    const getBack = () => {
        history.goBack()
    }
    console.log(email, "email")
    return (
        <>
            <Grid container>
                <Grid item md="4"></Grid>
                <Grid item md="4" className={classes.register}>
                    <Title
                        style={{
                            marginTop: 20,
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        Paystack
                    </Title>

                    <Info
                        style={{
                            fontSize: 20,
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            color: "#2f4454",
                            textTransform: "uppercase",
                        }}
                    >
                        Cornelius
                    </Info>

                    <div
                        style={{
                            marginBottom: 10,
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            fontSize: 20,
                            color: "#DA7B93",
                            fontWeight: "bold",
                            fontFamily: "serif",
                        }}
                    >
                        <LabelText>Your are on Professional plan</LabelText>
                        <Link to="/PlanList" style={{ marginLeft: 10 }}>
                            See Plans
                        </Link>{" "}
                    </div>
                    <form>
                        <div>
                            <LabelText>Full Name</LabelText>
                            <CustomInput
                                type="text"
                                name="fulNname"
                                value={fulNname}
                                onChange={(e) => setFulNname(e.target.value)}
                            />
                        </div>{" "}
                        <div>
                            <LabelText>Email</LabelText>
                            <CustomInput
                                type="text"
                                name="email"
                                value={email}

                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div>
                            <LabelText>Phone</LabelText>
                            <CustomInput
                                type="text"
                                name="phone"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                            />
                        </div>{" "}
                    </form>
                    <div>
                        <PaystackButton {...componentProps}
                            className={classes.btn}
                        />
                    </div>
                    <CustomButton
                        onClick={getBack}
                        style={{
                            width: "100%",
                            background: "#376e6f",
                            height: 40,
                            color: "#DA7B93",
                            marginTop: 25,
                            borderRadius: 10,
                        }}
                    >
                        Go Back
                    </CustomButton>
                </Grid>
                <Grid item md="4"></Grid>

            </Grid>


        </>

    )
}

export default Paystack
