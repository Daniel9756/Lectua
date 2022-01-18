import React, { useContext, useEffect, } from "react";
import { Box, makeStyles, Container } from "@material-ui/core";
import { useQuery} from "react-query";
import { useParams } from "react-router";
import { GlobalContext } from "../../../Context/Provider";
import { fetchOneAward } from "../../../Async/profile"
import Award from "../info/Award"
import { LinearLoading } from "../../../utils/Progress/Linear";
import MessageBox from "../../../utils/Alert";
import { getOneProfile } from "../../../Context/actions/profile/getProfile";
import TeacherPro from "../info/Profile"

const useStyles = makeStyles({
  root: {
    paddingRight: 43,
    paddingLeft: 52,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 43
  },
  service: {
    width: "100%",
    height: "400px",
    borderRadius: 12,
    color: "#fff",
  },
  title1: {
    padding: 10,
    fontFamily: "serif",
    fontWeight: "bold",
    color: "#DA7B93",
  },
  list: {
    display: "flex",
    alignItems: "center",
  },
  "@media (max-width: 960px)": {

  },
  "@media (max-width: 440px)": {
    root: {
      paddingRight: 50,
      paddingLeft: 50,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column"

    },
  },
});

function TeacherIndex() {
  const classes = useStyles();
  const { id } = useParams()

  const {
    getprofileDispatch,
    getprofileState: {
      getprofile: { isGettingprofile, isFetched, folder, isError: isErr },
    },
  } = useContext(GlobalContext);
  console.log(isGettingprofile, folder,)
  useEffect(() => {
    getOneProfile(id)(getprofileDispatch);
  }, [getprofileDispatch,id ]);

  console.log(id)
  const { data: awards, isLoading, isError, isSuccess } = useQuery(["teacheraward", id], () => fetchOneAward(id), {
    onSuccess: (awards) => console.log(awards),

      });
      const award = awards?.data
      const profile = folder?.data
      

  return (
<>
    <Box className={classes.root}>
      <Container container style={{
        marginTop: 40, paddingRight: 22,
        paddingLeft: 22,
      }}>

        <Box>
          {isGettingprofile && (<LinearLoading />)}
          {isErr && (<MessageBox message="Your profile is not available at the moment " severity="error" />)}
          {isFetched && (
            <div>              
                <TeacherPro key={profile.id} item={profile}  />           
            </div>
          )}

        </Box>
        <Box>
          {isLoading && (<LinearLoading />)}
          {isError && (<MessageBox message="Your user is not available at the moment " severity="error" />)}
          {isSuccess && (
            <div>             
                <Award key={award.id} item={award}  />             
            </div>
          )}
        </Box>
      </Container>{" "}
    </Box>
    </>
  )
}

export default TeacherIndex
