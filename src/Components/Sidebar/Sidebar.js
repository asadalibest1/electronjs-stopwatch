import React from 'react'
import useData from '../../Hooks/useData';
import Loader from '../Loader/Loader';
import "./Sidebar.css"
export const Sidebar = ({ children, options }) => {
    const { Data, Loading } = useData();
    const { toggle, setToggle } = options;

    const date = new Date;

    console.log(Data);
    return (
        <div className='sidebar-main-container' style={{ left: toggle ? '0px' : '-300px' }}>
            <i className='fa fa-times text-white bg align-self-end' style={{ fontSize: '30px', cursor: "pointer" }}
                onClick={() => setToggle(false)} />

            <div className='list-main'>


                {
                    Loading ?
                        <Loader />
                        :
                        Data.map((item, ind) => {
                            console.log(item);
                            return <div className='list-o'>
                                <div className='list-cont'>
                                    <span className='span-1'>{item.time}</span>
                                    <span className='span-2'>{item.watchTime}</span>
                                </div>
                                <span className='span-3'>{item.date}</span>
                            </div>
                        })
                }
            </div>
        </div>
    )
}


