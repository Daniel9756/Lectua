import React, { useEffect, useContext, useState, useMemo } from 'react'
import { makeStyles, Badge, Box } from "@material-ui/core";
import { Link, } from "react-router-dom";
import { GlobalContext } from '../../Context/Provider';
import PopUp from '../../utils/PopUp';
import { PartnerLogin } from './PartnerLogin';
import { loginPartner } from '../../Context/actions/auth/Login';
import { MdCancel } from "react-icons/md";
import Confirm from '../../utils/Confirm';
import { deletePartner } from '../../Context/actions/auth/Register';

const useStyles = makeStyles({

    links: {
        fontSize: 18,
        color: "#376e6f",
        fontFamily: "serif",
        textDecoration: "none",
        "&:hover": {
            color: "#DA7B93",
            borderRadius: 8,
        },
    },
    link2: {
        marginLeft: 8, textDecoration: "none", color: "#2f4454", padding: 4, borderRadius: 2, fontWeight: "bolder",
        "&:hover": {
            color: "#376e6f",
            borderRadius: 8,
        },
    },
    "@media (max-width: 960px)": {

    },
    "@media (max-width: 440px)": {

    },
});
export default function GetPartners({ item }) {
    const classes = useStyles();
    const { partnername, partnerid, orgname, orgid } = item
    const [isOpen, setIsOpen] = useState(false);
    const [confirmDialog, setConfirmDialog] = useState({
        isOpen: false,
        subject: "",
        title: "",
        subtitle: "",
    });
    const {
        loginState: {
            login: { logger, },
        },
        loginpartnerState: {
            login: { isLoggin, logger: partner, isPemmitted },
        },
        deletepartnerDispatch,
        deletepartnerState: {
            partner: { isLoading, data: deleted, isError, isSuccess: isDeleted, error },
        },
    } = useContext(GlobalContext);
    console.log(isLoading, deleted, isError, isDeleted)

    const onDelete = (id) => {
        deletePartner(id)(deletepartnerDispatch)

    }



    useEffect(() => {
        if (isPemmitted && (partner?.message === "Login Successful")) {
            setIsOpen(false)
        }
    }, [isPemmitted, partner]);
    const userID = logger?.userID

    return (<>
        <ul style={{ marginTop: 16, paddingLeft: 6, paddingRight: 6, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            {partnerid === userID ?
                <Link
                    to={`/institution/${orgname}/${orgid}`}
                    className={classes.links}
                >
                    {orgname}
                </Link>
                :

                <Link
                    to={`/institution/${partnername}/${partnerid}`}
                    className={classes.links}
                >
                    {partnername}
                </Link>
            }

            <Link className={classes.link2}>{partnerid === userID ? <em>
                {
                    (isPemmitted && (partner?.response?.orgid === orgid)) ?
                        <Badge variant="dot" color="primary">
                            <em>On</em>
                        </Badge>
                        : <em onClick={() => setIsOpen(true)}>Login</em>
                }</em> : ""}</Link>
            {partnerid !== userID ? <Link style={{
                display: "flex", justifyContent: "space-between",
                textDecoration: "none",
                alignItems: "center", cursor: "pointer", marginRight: "4px important!"
            }}>


                <MdCancel style={{ fontSize: 22, color: "#DA7B93", marginRight: "4px important!", }} onClick={() => {
                    setConfirmDialog({
                        isOpen: true,
                        subject: `${partnername} (${partnerid})`,
                        title: "Are you sure you want to disengage this partner?",
                        subtitle: "This operation cannot be undone!",
                        onConfirm: () => {
                            onDelete(partnerid);
                        },
                    });
                }} />
            </Link>
                : ""}
        </ul>
        <PopUp
            openPopUp={isOpen}
            setOpenPopUp={setIsOpen}
            title={orgname}
        >
            <PartnerLogin orgid={orgid} userID={userID} />
        </PopUp>
        <Box>
            <Confirm
                confirmDialog={confirmDialog}
                setConfirmDialog={setConfirmDialog}
            />
        </Box>
    </>
    )
}
