import React from "react";
import { useQuery } from "react-query";
import { fetchAStudentTimeTable } from "../../Async/timeTable";



function StudentTimeData(props) {
    const { item: {  subjectid } } = props

    const { data: subjects } = useQuery(["mytimetable", subjectid], () => fetchAStudentTimeTable(subjectid), {
        // onSuccess: (data) => console.log(data),
    });


    // console.log(subjects)

    return (
        <div>
            {subjects && subjects.data > 0 && (
                subjects.data.array.forEach(sub => 
                    console.log(sub.endtime)
                )
            )}
        </div>
    )
}

export default StudentTimeData
