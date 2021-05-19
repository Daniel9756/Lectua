import React from 'react'
import Host from "./Host"
import { useParams } from 'react-router-dom';
import { Container } from "@material-ui/core";
import { Link } from "react-router-dom";


function Room() {
const {id} = useParams
console.log(id)
    return (
        <Container>
            <p>This is the room</p>
           {/* <Link to={`/host/${match.params.id}`}>
               Start Session Now
           </Link> */}
        </Container>
    )
}

export default Room
