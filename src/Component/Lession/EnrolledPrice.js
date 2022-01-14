import React from 'react'

export const EnrolledPrice = (props) => {
    const { item } = props

    console.log(typeof item)
  
    // const total = item?.reduce(
    //     (prevValue, currentValue) => prevValue + currentValue.price,
    //     0
    // );

    return (
        <div>
            {/* {total} */}
        </div>
    )
}
