import React from 'react'
import Host from "./Host"
import { useParams } from 'react-router-dom';
import { Container } from "@material-ui/core";
import { Link } from "react-router-dom";


function Room({match}) {

    return (
        <Container>
           <Link to={`/host/${match.params.id}`}>
               Start Session Now
           </Link>
        </Container>
    )
}

export default Room
