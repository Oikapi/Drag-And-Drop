import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ButtonGroup, ToggleButton } from 'react-bootstrap';
import { useState } from 'react';
import hivesForChoose from '../../../constants/hives';

export const ModalHive = ({ callback }) => {
    const [checked, setChecked] = useState(false);
    const [radioValue, setRadioValue] = useState(1);
    const [show, setShow] = useState(false);
    return (
        <>
            <Button variant="primary" onClick={() => setShow((prev) => !prev)}>
                Launch demo modal
            </Button>

            <Modal show={show} onHide={() => setShow((prev) => !prev)}>
                <Modal.Header closeButton>
                    <Modal.Title>Выберите улей</Modal.Title>
                </Modal.Header>
                <Modal.Body >

                    <ButtonGroup className="mb-2" style={{ display: "flex", flexWrap: "wrap" }}>
                        {hivesForChoose.map((el) => (
                            <ToggleButton
                                key={el.id}
                                id={`radio-${el.id}`}
                                type="radio"
                                variant="secondary"
                                value={el.id}
                                checked={radioValue === el.id}
                                onChange={(e) => setRadioValue(Number(e.currentTarget.value))}
                            >
                                <div className="hivesInModal" style={{}}>
                                    <img src={el.img} alt="" style={{ width: "64px" }} />
                                </div>
                            </ToggleButton>
                        ))}
                    </ButtonGroup>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShow((prev) => !prev)}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => callback(radioValue)}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
