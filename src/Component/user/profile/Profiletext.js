import React, { useContext, useEffect } from "react";
import { Box } from "@material-ui/core";
import { fetchOneUser } from "../../../Async/users";
import { useQuery } from "react-query";
import GetRegProfile from "../info/GetRegProfile";
import { GlobalContext } from "../../../Context/Provider";
import { LinearLoading } from "../../../utils/Progress/Linear";
import MessageBox from "../../../utils/Alert";
import GetRegInfo from "../info/GetRegInfo";
import { getOneProfile } from "../../../Context/actions/profile/getProfile";

function Profiletext({ getPics }) {
  const userId = localStorage.getItem("userId");
  const { data, isLoading, isError, isSuccess } = useQuery(
    ["user", userId],
    () => fetchOneUser(userId),
    {
      // onSuccess: (data) => console.log(data),
    }
  );

  const {
    getprofileDispatch,
    getprofileState: {
      getprofile: {
        isGettingprofile: isFetching,
        folder,
        isFetched,
        isError: isMistake,
      },
    },
  } = useContext(GlobalContext);
  const result = data?.user;
  const teacher = folder?.data;
  useEffect(() => {
    getOneProfile(userId)(getprofileDispatch);
  }, [getprofileDispatch, userId]);
  return (
    <>
      <Box>
        {isFetching && <LinearLoading />}
        {isMistake && (
          <MessageBox
            message="Your profile is not available at the moment "
            severity="error"
          />
        )}
        {isFetched && (
          <div>
            <GetRegProfile
              item={teacher}
              getPics={getPics}
            />
          </div>
        )}
      </Box>

      <Box
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginRight: 4,
        }}
      >
        <Box>
          {isLoading && <LinearLoading />}
          {isError && (
            <MessageBox
              message="Your user is not available at the moment "
              severity="error"
            />
          )}
          {isSuccess && (
            <div>
              <GetRegInfo  item={result} id={result.id} />
             
            </div>
          )}
        </Box>
      </Box>
    </>
  );
}

export default Profiletext;
