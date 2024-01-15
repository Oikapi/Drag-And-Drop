import React from 'react'
import { useDrag } from 'react-dnd'

const EachHive = ({ el }) => {
    const [, dragRef] = useDrag({
        type: "hive",
        item: el
    })
    return (
        <div className='Hive' ref={dragRef}>
            {/* <p>{el.id}</p> */}
            <img src={el.img} alt="" style={{ width: "100%" }} />
        </div>
    )
}

export default EachHive