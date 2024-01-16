import React, { useState, useId, useReducer } from 'react';
import "./HoneyMap.css"
import hivesForChoose from '../../constants/hives';
import { SquareHive } from './components/SquareHive';
import EachHive from './components/EachHive';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { ModalHive } from './components/ModalHive';


function reducer(state, action) {
    console.log(action)
    if (action.type === 'move') {
        return (

            state.map((el) => {
                if (el.id == action.id) {
                    return { ...el, cords: action.cords }
                } else {
                    return el
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
            x: 1,
            y: 1,
        },
        img: "src/assets/apiary" + 3 + ".png",
        info: "",
    }])
    console.log(hivesOnTheField)
    const squares = []
    for (let i = 0; i < 64; i++) {
        squares.push(renderSquare(i))
    }
    function renderSquare(i) {
        console.log("render squra")
        const x = i % 8
        const y = Math.floor(i / 8)
        const color = i % 2 == 0 ? "#5CDB95" : "#379683"
        const hiveInSquare = hivesOnTheField.find((el) => {
            if (el.cords.x === x && el.cords.y === y) {
                return true
            }
            else {
                // console.log(el.cords, x, y)
                return false
            }

        })
        const hiveId = typeof (hiveInSquare) === "undefined" ? null : hiveInSquare.id
        // console.log(typeof (Hive) === "undefined")
        return (
            <SquareHive key={i}
                callback={(data) => actHiveToField({ type: "move", cords: { x: x, y: y }, id: data.id })}
                color={color}>{typeof (hiveInSquare) === "undefined" ? null : <EachHive el={hiveInSquare} />}</SquareHive>
        )
    }

    const AddNewHive = (id) => {

        const newHive = hivesForChoose[id]
        console.log(id)
        actHiveToField({ type: "addHive", newHive: { ...newHive, cords: { x: 1, y: 5 } } })
    }

    console.log(hivesOnTheField)
    return (
        <DndProvider backend={HTML5Backend}>

            <ModalHive callback={(id) => AddNewHive(id)} />
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

        </DndProvider >

    );
};

export default HoneyMap;
