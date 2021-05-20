import React from "react";
import Host from "./Host";
import { useParams } from "react-router-dom";
import { Container } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useQuery, useQueryClient } from "react-query";
import { fetchDetails, fetchOneDetail } from "../../../Async/lessonDetail";
import Linear from "../../utils/Progress/Linear"
function Room() {
  const params = useParams();
  console.log(params.id);
  // const id = params.id
  //  const { data: lecture, status: state } = useQuery("lecture", fetchDetails, {
  //         onSuccess: () => console.log("All details successfully fetched"),
  //   });

  const {
    data: detail,
    isLoading,
    isError,
  } = useQuery(["details", params.id], () => fetchOneDetail(params.id), {
    onSuccess: () => console.log("This detail successfully fetched"),
  });
  console.log(detail, "details");

  //   console.log(lecture, "details");

  return (
    <Container>
        {isLoading && (<Linear  valueBuffer={50} value={50} />)}
      <p>This is the room</p>
    </Container>
  );
}

export default Room;
