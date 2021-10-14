import React, { useState } from "react";
import { Box, } from "@material-ui/core";
import {  Title, } from "../../../controls/Input";
import Profiletext from "./Profiletext";
import { MdEdit } from "react-icons/md";
import { useQuery, } from "react-query";
import { fetchOneAward } from "../../../Async/profile"
import { GroupButton } from "../../../controls/Button";
import Award from "../info/Award"
import { LinearLoading } from "../../../utils/Progress/Linear";
import MessageBox from "../../../utils/Alert";
import PopUp from "../../../utils/PopUp";
import TeacherBio from "../edit/TeacherBio";
import Certificates from "../edit/Certificates";
import { Partner } from "../../partner/Partner";


function UserProfile({getPics}) {
  const userID = localStorage.getItem("userID");
  const [openPopUp, setOpenPopUp] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { data: awards, isLoading, isError, isSuccess } = useQuery(["teacheraward", userID], () => fetchOneAward(userID), {
    // onSuccess: (data) => console.log(data),
  });
  console.log(awards, isLoading, isError, isSuccess)

  return (
    <Box style={{ marginBottom: 25 }}>
      <Box
        container
        style={{ padding: 8, borderRadius: 8, background: "#dcdde1" }}
      >
        <Box
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingTop: 20,
          }}
        >
          <Title>Biography</Title>
          <GroupButton
            style={{
              background: "#dcdde1",
            }}
            onClick={() => {
              setOpenPopUp(true);

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
        <hr />
        <Profiletext getPics={getPics} />
       
      </Box>
      <Box
        style={{
          alignItems: "center",
          padding: 10,
          borderRadius: 8,
          background: "#dcdde1",
          marginTop: 16,
        }}
      >
        <Box
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingTop: 20,
          }}
        >
          <Title>Qualifications</Title>
          <GroupButton
            style={{
              background: "#dcdde1",
            }}
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
        <hr />
        <Box>
          {isLoading && (<LinearLoading />)}
          {isError && (<MessageBox message="Your user is not available at the moment " severity="error" />)}
          {isSuccess && (
            <div>
              {awards.data.map((item) => (
                <Award key={item.id} item={item} id={item.id} />
              ))}
            </div>
          )}

        </Box>{" "}
      </Box>{" "}
      <Box>
        <PopUp
          openPopUp={openPopUp}
          setOpenPopUp={setOpenPopUp}
          title="Edit Teacher Biography"

        >
          <TeacherBio setOpenPopUp={setOpenPopUp} />
        </PopUp>
      </Box>
      <Box>
        <PopUp
          openPopUp={isOpen}
          setOpenPopUp={setIsOpen}
          title="Edit Teacher Quaifications"
        >
          <Certificates
            setOpenPopUp={setOpenPopUp}

          />
        </PopUp>
      </Box>
    </Box>
  );
}

export default UserProfile;
