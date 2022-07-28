import React, { useEffect } from 'react'
// import useAuth from '../../Hooks/useAuth'
import Box from './Box'
import Buttons from './Buttons'
import "./Dashboard.css"



// console.log(app);

const Dashboard = () => {


    return (
        <div className='middle-container'>
            <h1>Stopwatch</h1>
            <p>⏰ Hello World!</p>
            <Box />
            {/* <Buttons /> */}
        </div>
    )
}

export default Dashboard