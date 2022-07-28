import React from 'react'

const ChildBox = ({ value, label, id }) => {
    return (
        <div className="box-container">
            <div className="left" />
            <div className="right" />
            <span className={id} >{value}</span>
        </div>)
}

export default ChildBox