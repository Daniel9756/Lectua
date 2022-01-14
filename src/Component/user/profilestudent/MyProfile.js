import { Box, Typography } from '@material-ui/core';
import React, { useState } from 'react'
import { useQuery } from "react-query";
import { fetchOneUser } from "../../../Async/users"
import Student from "../info/Student"
import { fetchOneStudent } from "../../../Async/profile"
import { GroupButton } from "../../../controls/Button";
import { MdEdit } from "react-icons/md";
import { LinearLoading } from "../../../utils/Progress/Linear";
import MessageBox from "../../../utils/Alert";
import StudentInfo from '../info/StudentInfo';
import PopUp from "../../../utils/PopUp";
import StudentBio from "../edit/StudentBio"



function MyProfile({ getPics }) {
    const userId = localStorage.getItem("userId");
    const [isOpen, setIsOpen] = useState(false);

    const { data, isLoading, isError, isSuccess, } = useQuery(["user", userId], () => fetchOneUser(userId), {
        // onSuccess: (data) => console.log(data),
    });

    const { data: student, isError: isMistake, isSuccess: isSucced, isFetching, error: err } = useQuery(["studentprofile", userId], () => fetchOneStudent(userId), {
        onSuccess: (data) => getPics(data?.response?.[0]?.picsUrl),
    });

    const user = data?.user
    const scholar = student?.response


    return (<>
        <Box>
            <Box style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
            }}>
                <Box>
                    <Typography
                        variant="h6"
                        style={{ color: "#DA7B93", fontFamily: "serif", float: 'left', fontWeight: 'bold' }}
                    >
                        {" "}
                        My Profile
                    </Typography>
                </Box>
                <GroupButton
                    onClick={() => {
                        setIsOpen(true);

                    }}
                >
                    <MdEdit
                        style={{
                            fontSize: 35,
                            background: "#DA7B93",
                            borderRadius: 4
                        }}
                    />
                </GroupButton>
            </Box>
            {isLoading && (<LinearLoading />)}
            {isError && (<MessageBox message="Your user is not available at the moment " severity="error" />)}
            {isSuccess && (
                <div>                   
                        <Student key={user?.id} item={user}  />                  
                </div>
            )}
        </Box>
        <Box>
            {isFetching && (<LinearLoading />)}
            {isMistake && (<MessageBox message="Your user is not available at the moment " severity="error" />)}
            {isSucced && (
                <div>
                        <StudentInfo key={scholar?.id} item={scholar}  />
                </div>
            )}
        </Box>
        <Box>
            <PopUp
                openPopUp={isOpen}
                setOpenPopUp={setIsOpen}
                title="Edit Student Biography"
            >
                <StudentBio setIsOpen={setIsOpen} />
            </PopUp>
        </Box>

    </>
    )
}

export default MyProfile
