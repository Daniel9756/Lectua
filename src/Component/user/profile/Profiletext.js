import React, { useContext } from "react";
import { Box, } from "@material-ui/core";
import { fetchOneUser } from "../../../Async/users"
import { useQuery } from "react-query";
import GetRegProfile from "../info/GetRegProfile";
import { GlobalContext } from "../../../Context/Provider";
import { LinearLoading } from "../../../utils/Progress/Linear";
import MessageBox from "../../../utils/Alert";
import GetRegInfo from "../info/GetRegInfo";



function Profiletext({getPics}) {
  const userID = localStorage.getItem("userID");

  const { data, isLoading, isError, isSuccess, } = useQuery(["user", userID], () => fetchOneUser(userID), {
    // onSuccess: (data) => console.log(data),
  });

  const {
    getprofileState: {
      getprofile: { isGettingprofile: isFetching, folder: teacher, isFetched, isError: isMistake },
    },
  } = useContext(GlobalContext);

  return (
    <>
      <Box>
        {isFetching && (<LinearLoading />)}
        {isMistake && (<MessageBox message="Your profile is not available at the moment " severity="error" />)}
        {isFetched && (
          <div>
            {teacher.data.map((item) => (
              <GetRegProfile key={item.id} item={item} id={item.id} getPics={getPics} />
            ))}
          </div>
        )}

      </Box>


      <Box style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginRight: 4 }}>
        <Box>
          {isLoading && (<LinearLoading />)}
          {isError && (<MessageBox message="Your user is not available at the moment " severity="error" />)}
          {isSuccess && (
            <div>
              {data.data.map((item) => (
                <GetRegInfo key={item.id} item={item} id={item.id} />
              ))}
            </div>
          )}
        </Box>
       
      </Box>
    </>
  );
}

export default Profiletext;
