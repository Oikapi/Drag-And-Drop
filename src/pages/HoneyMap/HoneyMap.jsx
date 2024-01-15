import React, { useState, useId, useReducer } from 'react';
import "./HoneyMap.css"
import hivesForChoose from '../../constants/hives';
import { SquareHive } from './components/SquareHive';
import EachHive from './components/EachHive';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { ModalHive } from './components/ModalHive';


function reducer(state, action) {
    if (action.type === 'move') {
        return (
            state.map((el) => {
                if (el.id == action.id) {
                    return { ...el, cords: { x: action.x, y: action.y } }
                }
            })
        );
    }
    else if (action.type === 'addHive') {
        return (
            [...state, action.newHive]
        );
    }
    throw Error('Unknown action.');
}
const HoneyMap = () => {
    const [hivesOnTheField, actHiveToField] = useReducer(reducer, [{
        id: 3,
        cords: {
            x: 0,
            y: 0,
        },
        img: "src/assets/apiary" + 3 + ".png",
        info: "",
    }])

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

    console.log(hivesOnTheField)
    return (
        <DndProvider backend={HTML5Backend}>

            <ModalHive />
            <div style={{
                width: "512px",
                height: "512px",
            }}>
                <div style={{
                    borderRadius: "20px",
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

            <button onClick={() => actHiveToField({ type: "move", id: 3, x: 1, y: 2, })}>fktt</button>
            <button onClick={() => actHiveToField({
                type: "addHive", newHive:
                {
                    id: 5,
                    cords: {
                        x: 5,
                        y: 6,
                    },
                    img: "src/assets/apiary" + 6 + ".png",
                    info: "",

                }
            })}>fktt</button>

        </DndProvider >

    );
};

export default HoneyMap;
