import React, { useContext, useState, useEffect } from 'react'
import { useHistory } from "react-router-dom";
import { GlobalContext } from "../../../Context/Provider";
import {  makeStyles } from '@material-ui/core';
// import { GroupButton } from '../../../controls/Button';
import { enrolLecture } from '../../../Context/actions/enroll/lecture';
import { PaystackButton } from 'react-paystack';
import MessageBox from '../../../utils/Alert';
import { CustomButton } from '../../../controls/Button';
import PopUp from '../../../utils/PopUp';



const useStyles = makeStyles((theme) => ({

    btn: {
        width: "100%",
        fontWeight: "bold",
        height: 40,
        color: "#6ab04c",
        marginTop: 20,
        borderRadius: 10,
    }
}));
function PaymentDetail(props) {
    const classes = useStyles();
    const [isOpen, setIsOpen] = useState(false);
    const history = useHistory()

    const { item: { firstName, email, id: userId, phone }, subject, courseId, price: amount } = props
    const publicKey = process.env.REACT_APP_PAYSTACK_API
    const {
        enrollAlectureDispatch,
        enrollAlectureState: {
            enrollecture: {
                isEnrolling, enrolled, isEnroll, isError, error },
        },
    } = useContext(GlobalContext);

    const componentProps = {
        email,
        amount: amount * 100,
        metadata: {
            firstName,
            phone
        },
        publicKey,
        text: "Pay Now",
        onSuccess: (response) => {
            const { reference, trans } = response
            const values = {
                email, userId, courseId, subject, reference, trans, amount
            }
            if (response.status === "success") {
                enrolLecture(values)(enrollAlectureDispatch)

            } else {
                <MessageBox message="Payment was not successfull" severity="error" />
            }
        },
        onClose: () => alert("Are you sure you want to quit this process"),
    }
    console.log(isEnrolling, enrolled, isEnroll, isError, error)

    useEffect(() => {
        setIsOpen(true)
    }, [isEnroll]);


    return (<div>
        <div>

            <PaystackButton {...componentProps}
                className={classes.btn}
            />
        </div>
        <PopUp
            openPopUp={isOpen}
            setOpenPopUp={setIsOpen}
            title={`${enrolled?.message}`}
          
        >
            <CustomButton
                style={{ marginTop: 18, borderRadius: 8, color: "#DA7B93", width: 250 }}
                onClick={() => history.goBack()}
            >
                OK
            </CustomButton>
        </PopUp>
    </div>
    )
}

export default PaymentDetail
