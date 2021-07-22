import React from 'react'
import { IconButton, Collapse } from "@material-ui/core";

import Alert from '@material-ui/lab/Alert';
import { AiFillCloseCircle } from "react-icons/ai";

function MessageBox(props) {
    const { message, severity } = props
    const [open, setOpen] = React.useState(true);

    return (
        <Collapse in={open}>
            <Alert severity={severity} action={
                <IconButton
                    aria-label="close"
                    color="inherit"
                    size="small"
                    onClick={() => {
                        setOpen(false);
                    }}
                >
                    <AiFillCloseCircle fontSize="inherit" />
                </IconButton>
            }>{message}</Alert>

        </Collapse>

    )
}

export default MessageBox
