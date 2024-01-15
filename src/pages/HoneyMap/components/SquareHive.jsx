import React from 'react'
import { useDrop } from 'react-dnd'

export const SquareHive = ({ color, children, x, y, callback }) => {
    const [{ isOver }, dropRef] = useDrop({
        accept: "hive",
        drop: () => { callback({ x, y }) },
        collect: monitor => ({
            isOver: !!monitor.isOver(),
        }),
    })

    return (
        <div style={{
            position: 'relative',
            // border: "solid black 1px",
            width: '12.5%',
            height: '12.5%'
        }} ref={dropRef} >
            {isOver && (
                <div
                    style={{
                        borderStyle: "dashed",
                        border: "dashed black 4px",
                        borderRadius: "10px",
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        height: '100%',
                        width: '100%',
                        zIndex: 1,
                        opacity: 0.5,
                    }}
                />
            )}
            {children}
        </div >
    )
}
