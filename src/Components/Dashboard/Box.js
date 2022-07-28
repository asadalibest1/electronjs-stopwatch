import React, { useState, useEffect } from "react";
import { db } from "../../connections/firebase";
import './Box.css'
import Buttons from "./Buttons";
import ChildBox from "./ChildBox";
import {
    doc,
    collection,
    addDoc,
    serverTimestamp,
} from "firebase/firestore";
import useUser from "../../Hooks/useUser";
import useData from "../../Hooks/useData";

const Box = () => {
    const [time, setTime] = useState(0);
    const [running, setRunning] = useState(false);
    const { addData } = useData();


    useEffect(() => {


        let interval;
        if (running) {
            interval = setInterval(() => {
                setTime((prevTime) => prevTime + 10);
            }, 10);
        } else if (!running) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);




    }, [running]);


    return (
        <div className="">

            <div className="d-flex justify-content-between" style={{ width: '500px' }}>
                <ChildBox id="h" value={("0" + Math.floor((time / (60000 * 60000)) % 60)).slice(-2)} />
                <ChildBox id="m" value={("0" + Math.floor((time / 60000) % 60)).slice(-2)} />
                <ChildBox id="s" value={("0" + Math.floor((time / 1000) % 60)).slice(-2)} />
                <ChildBox id="ms" value={("0" + ((time / 10) % 100)).slice(-2)} />

            </div>


            <Buttons setRunning={setRunning} setTime={setTime}
                onSave={addData}
            />

        </div>
    )
}

export default Box