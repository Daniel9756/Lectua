import React, { useContext } from 'react'
import StudentTimeData from '../../Lession/StudentTimeData'
import { GlobalContext } from '../../../Context/Provider';
import { LinearLoading } from '../../../utils/Progress/Linear';
import MessageBox from '../../../utils/Alert';

function EnrolledCourses(props) {
    const {    
        myEnrolledlecturesState: {
            myenrollecture: { isEnrolling, myenrolled, isFetched,  isError },
        },

    } = useContext(GlobalContext);

    return (
        <div>
             {isEnrolling && (<LinearLoading />)}
              {isError && (<MessageBox message="Error fetching data" severity="error" />)}
              {isFetched && (
                <div>
                  {myenrolled.data.map((item) => (
                    <StudentTimeData key={item.id} item={item} id={item.id}  />
                  ))}
                </div>
              )}
        </div>
    )
}

export default EnrolledCourses

