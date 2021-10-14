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
    const userID = localStorage.getItem("userID");
    const [isOpen, setIsOpen] = useState(false);

    const { data, isLoading, isError, isSuccess, } = useQuery(["user", userID], () => fetchOneUser(userID), {
        // onSuccess: (data) => console.log(data),
    });

    const { data: student, isError: isMistake, isSuccess: isSucced, isFetching, error: err } = useQuery(["studentprofile", userID], () => fetchOneStudent(userID), {
        onSuccess: (data) => getPics(data?.data?.[0]?.picsUrl),
    });


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
                    {data.data.map((item) => (
                        <Student key={item.id} item={item} id={item.id} />
                    ))}
                </div>
            )}
        </Box>
        <Box>
            {isFetching && (<LinearLoading />)}
            {isMistake && (<MessageBox message="Your user is not available at the moment " severity="error" />)}
            {isSucced && (
                <div>
                    {student.data.map((item) => (
                        <StudentInfo key={item.id} item={item} id={item.id} />
                    ))}
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
