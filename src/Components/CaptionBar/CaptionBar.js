import React from 'react'
import "./CaptionBar.css"
// const customTitlebar = require('custom-electron-titlebar');
// import { TitleBar } from 'react-desktop/windows';

// import { TitleBar } from 'electron-react-titlebar/renderer'
// import 'electron-react-titlebar/assets/style.css'

const CaptionBar = () => {


    // <TitleBar menu={menuTemplate} icon={iconPath} />
    
    // let MyTitleBar = new customTitlebar.Titlebar({
    //     backgroundColor: customTitlebar.Color.fromHex('#03a9f4')
    // });

    // MyTitleBar.updateTitle('Our Code World Tutorials Rock !');

    return (
        <>
            {/* <TitleBar
                title="Tools Dev"
                controls
                isMaximized="true"
                background="#212529"
                color="white"
                onCloseClick={close}
                onMinimizeClick={minimize}

            /> */}
            <div className='captions'>
                <i className='fa fa-minus'></i>
                <i className='fa fa-times closebtn'></i>
            </div>
        </>
    )
}

export default CaptionBar