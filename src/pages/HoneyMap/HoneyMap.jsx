import React, { useState, useId } from 'react';
import "./HoneyMap.css"
import hivesForChoose from '../../constants/hives';
import { SquareHive } from './components/SquareHive';
import EachHive from './components/EachHive';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

const HoneyMap = () => {

    const [hivePostion, moveHiveTo] = useState({
        x: 7,
        y: 4,
    })

    const squares = []
    for (let i = 0; i < 64; i++) {
        squares.push(renderSquare(i, hivePostion, hivesForChoose[0]))
    }
    function renderSquare(i, coorHive, hiveObj) {
        console.log("render squra")
        const x = i % 8
        const y = Math.floor(i / 8)
        const hiveInSquare = x === coorHive.x && y === coorHive.y
        const color = i % 2 == 0 ? "#5CDB95" : "#379683"
        const Hive = hiveInSquare ? <EachHive el={hiveObj} /> : null
        return (
            <SquareHive key={i} callback={moveHiveTo} x={x} y={y} color={color}>{Hive}</SquareHive>
        )
    }

    console.log(hivesForChoose)
    return (
        <DndProvider backend={HTML5Backend}>

            <button >
                Заполнить поле
            </button>
            <div style={{
                width: "512px",
                height: "512px",
                border: "1px solid gray"
            }}>
                <div style={{
                    backgroundImage: "url(src/assets/field.jpg)",
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexWrap: 'wrap'
                }}>
                    {squares.map((el) => {
                        return (el)
                    })}
                </div>
            </div>
        </DndProvider>

    );
};

export default HoneyMap;
