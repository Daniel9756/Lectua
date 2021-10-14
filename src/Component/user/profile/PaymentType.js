import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Container, Grid, makeStyles, Box } from "@material-ui/core";
import { CustomeFileInput } from "../../../controls/FileInput";
import { CustomButton } from "../../../controls/Button";
import { LabelText, Title, Info } from "../../../controls/Input";

const useStyles = makeStyles((theme) => ({
  register: {
    marginTop: 10,
    marginBottom: 10,
    background: "#fff",

    width: "100%",
    height: "auto",
    padding: 20,
    paddingBottom: 40,
    borderRadius: 12,
  },
  Istgrid: {
    marginTop: 10,
    marginBottom: 40,
    background: "#fff",

    width: "100%",
    height: "200px",
    padding: 10,
    paddingBottom: 40,
    borderRadius: 12,
  },
  bankbx: {
    marginTop: 10,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  }
}));

function PaymentType() {
  const classes = useStyles();
  const history = useHistory();

  const [selectedFile, setSelectedFile] = useState(null);
  const handleFile = (avater) => {
    console.log(avater);
    setSelectedFile(avater);
  };

  const getPaystack = () => {
    history.push("/PaymentType/paystack")
  }
  const goBack = () => {
    history.goBack()
  }
  return (
    <>
      <Box style={{ background: "#dcdde1" }}>
        <CustomButton
          onClick={goBack}
          style={{
            marginLeft: 90,
            width: 150,
            background: "#376e6f",
            height: 40,
            color: "#DA7B93",
            marginTop: 20,
            borderRadius: 10,
          }}
        >
          go Back
        </CustomButton>
        <Container style={{ display: "flex", padding: 50, paddingTop: 10, }}>

          <Grid
            container
            style={{ display: "flex", paddingTop: 40, justifyContent: "space-between" }}
          >
            <Grid item md="5" className={classes.Istgrid}>
              <Box className={classes.bankbx}>

                <Title

                >
                  Online Payment
                </Title>
                <Box style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>

                  <em style={{
                    color: "#DA7B93",
                  }}>with</em> <LabelText>paystack</LabelText>
                </Box>
                <CustomButton
                  onClick={getPaystack}
                  style={{

                    width: 150,
                    background: "#376e6f",
                    height: 40,
                    color: "#DA7B93",
                    marginTop: 40,
                    borderRadius: 10,
                  }}
                >
                  Pay Now
                </CustomButton>


              </Box>

            </Grid>

            <Grid item md="5" className={classes.register}>

              <Box style={{ margin: 30 }}>

                <Title
                  className={classes.bankbx}
                >
                  Bank Payment and Transfer

                </Title>
                <hr />

                <Box className={classes.bankbx}>

                  <LabelText>Account Name</LabelText>
                  <Info>Eze Cornelius O</Info>
                </Box>


                <Box className={classes.bankbx}>

                  <LabelText>Account Number</LabelText>
                  <Info>0020375265</Info>
                </Box>
                <Box className={classes.bankbx}>

                  <LabelText>Bank</LabelText>
                  <Info>Access Bank</Info>
                </Box>

              </Box>
              <Box className={classes.bankbx}>



                <LabelText for="file">
                  Upload evidence of payment
                  <small
                    style={{
                      color: "#DA7B93",
                    }}
                  >
                    {" "}
                    {selectedFile ? selectedFile.name : ""}
                  </small>
                </LabelText>
                <CustomeFileInput
                  name="avater"
                  onFileSelectSuccess={handleFile}
                  onFileSelectError={({ error }) => alert(error)}
                />
              </Box>
              <hr />
              <Box className={classes.bankbx}>

                <Info>Note</Info>
                <LabelText><em style={{
                  color: "#DA7B93",
                }}>*</em> For bank payments and transfer, your account information will be updated within 48 hours</LabelText>
                <LabelText><em style={{
                  color: "#DA7B93",
                }}>*</em> You'll need to Upload an evidence of payment by clicking the button above</LabelText>

              </Box>

            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}

export default PaymentType;
