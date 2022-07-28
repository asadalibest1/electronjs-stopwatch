import React from 'react'
import useUser from '../../Hooks/useUser';
import './Appbar.css'
const Appbar = ({ options }) => {

    const { State, setState } = options.AppbarOptions;
    const { setToggle } = options.Authoptions;

    const { user, __signout } = useUser();
    console.log(user)



    const _signOut = () => {
        const res = __signout();
        setState(0)
    }
    return (
        <div className='appbar-container'>
            {
                (State === 1) && <>
                    <i class="fa fa-clock-o text-white "
                        onClick={() => setToggle(true)}
                        style={{ fontSize: '30px', cursor: "pointer" }} aria-hidden="true"></i>

                    <div className='d-flex align-items-center'>
                        <div className='text-white' style={{ fontSize: '14px', marginRight: '5px' }}>{user?.email}</div>
                        <img class="user user-1" src="https://i.ibb.co/yVGxFPR/2.png" height="38" width="38" />
                        <button className='btn logout' onClick={_signOut}>Logout</button>
                    </div>
                </>
            }

        </div>
    )
}

export default Appbar