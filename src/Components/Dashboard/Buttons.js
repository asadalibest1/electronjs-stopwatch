import React, { useEffect, useState } from 'react'

const Buttons = ({ setRunning, setTime, onSave }) => {

    const [Toggle, setToggle] = useState(false);
    // const [Start, setStart] = useState(false)

    console.log(Toggle);

    const startPause = () => {

        if (!Toggle) {
            setRunning(true);
        } else {
            setRunning(false);
        }
        setToggle(!Toggle)
    }

    const [Seconds, setSeconds] = useState('0')

    useEffect(() => {
        setSeconds(document.querySelector('.s').innerText)

    }, [])



    return (
        <div className='d-flex' style={{ flexDirection: 'row-reverse', justifyContent: 'center' }}>

            <button className="btn button-1" onClick={startPause}>
                <i class={`fa fa-${Toggle ? "pause" : "play"}`}
                    aria-hidden="true" style={{ fontSize: '16px', marginRight: '5px' }} ></i>
                <span>{Toggle ? "Pause" : "Start"}</span>
            </button>
            {
                (!Toggle && Seconds !== "0") &&
                <>
                    <button className="btn button-1" onClick={() => { setTime(0) }}>
                        <i class="fa fa-refresh"
                            aria-hidden="true" style={{ fontSize: '16px', marginRight: '5px' }} ></i>
                        <span>Reset</span>
                    </button>

                    <button className="btn button-1" onClick={() => { setTime(0); setRunning(false); onSave() }}>
                        <i class="fa fa-cloud"
                            aria-hidden="true" style={{ fontSize: '16px', marginRight: '5px' }} ></i>
                        <span>Save</span>
                    </button>

                </>

            }




            {/* <button className="btn button-1">
                <i class="fa fa-github" aria-hidden="true" style={{ fontSize: '20px', marginRight: '5px' }} ></i>
                <span>Lets Meet</span>
            </button> */}
        </div>
    )
}

export default Buttons