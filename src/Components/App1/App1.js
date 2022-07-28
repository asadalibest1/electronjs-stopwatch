import React, { useEffect, useState } from 'react'
import { app } from '../../connections/firebase'
import useUser from '../../Hooks/useUser'
import Appbar from '../Appbar/Appbar'
// import CaptionBar from '../CaptionBar/CaptionBar'
import Dashboard from '../Dashboard/Dashboard'
import Loader from '../Loader/Loader'
import Login from '../Login/Login'
import { Sidebar } from '../Sidebar/Sidebar'

const App1 = () => {

    const [State, setState] = useState(0)
    const [Loading, setLoading] = useState(true)
    const [toggle, setToggle] = useState(true)
    const Authoptions = { toggle, setToggle };
    const AppbarOptions = { State, setState };
    const { currentUser } = useUser();



    useEffect(() => {
        const isUser = currentUser();
        console.log('isUser', isUser);
        if (isUser == true) {
            setLoading(false)
            return setState(1)
        } else if (isUser == false) {
            setLoading(false)
            return setState(0)

        }
    }, [])


    if (Loading) {
        return <div className='main-loader'><Loader /></div>
    }

    return (
        <>
            {/* <CaptionBar /> */}
            {

                State === 1 &&
                <>
                    <Appbar options={{ AppbarOptions, Authoptions }} />
                    <Sidebar options={Authoptions} />
                </>
            }
            {


                (State === 0) ? <Login changeState={setState} /> : <Dashboard changeState={setState} />

            }
        </>

    )
}

export default App1