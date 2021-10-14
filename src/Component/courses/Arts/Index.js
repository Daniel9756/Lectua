import React from 'react'
import Index from "../Index"

import { useQuery} from "react-query";
import { fetchOneCategory } from "../../../Async/lesson";
function Arts(props) {
    const { content } = props

    console.log(content)
    const { data, isLoading, isError, isSuccess } = useQuery(["category", content], () => fetchOneCategory(content), {
        onSuccess: (category) => console.log(category),
    });
    return (
        <div>

            <Index data={data} isLoading={isLoading} isError={isError} isSuccess={isSuccess} />
        </div>
    )
}

export default Arts