import { Box, Avatar } from '@material-ui/core'
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { GlobalContext } from '../../../Context/Provider';

import { useQuery } from "react-query";
import { fetchOneTeacher, fetchOneStudent } from "../../../Async/profile";

function Conversation({ friends, setTutor, setLeaner  }) {
    const { id, senderid, receiverid } = friends
  

    const {
        loginState: {
            login: { isLoggin, logger, isPemmitted },
        },
    } = useContext(GlobalContext);

    const { data, } = useQuery(["profile", receiverid], () => fetchOneTeacher(receiverid), {
        onSuccess: (data) => setTutor(data?.data[0]),
    });
    const { data: student, } = useQuery(["student", senderid], () => fetchOneStudent(senderid), {
        onSuccess: (data) => setLeaner(student?.data[0]),
    });


    return (
        <Box style={{ cursor: 'pointer' }}>
            {(logger?.userID !== data?.data?.[0].userid) ? (<Box style={{ display: "flex", alignItems: "center", marginTop: 8 }}>
                <Avatar
                    style={{ width: 35, height: 35, background: "#2f4454" }}
                    src={data?.data?.[0].picsUrl}
                >
                </Avatar>
                <em style={{ fontWeight: "bold", color: "#376e6f", marginLeft: 12, }}>{data?.data?.[0].orgName}</em>
            </Box>)
                : ''}

            {(logger?.userID !== student?.data?.[0].userid) ? (<Box style={{ display: "flex", alignItems: "center", marginTop: 8 }}>
                <Avatar
                    style={{ width: 35, height: 35, background: "#2f4454" }}
                    src={student?.data?.[0].picsUrl}
                >
                </Avatar>
                <em style={{ fontWeight: "bold", color: "#376e6f", marginLeft: 12, }}>{student?.data?.[0].stuname}</em>
            </Box>)
                : ''}
        </Box>
    )
}

export default Conversation
