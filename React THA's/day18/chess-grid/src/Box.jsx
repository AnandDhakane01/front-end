import React from 'react'


function Box(props) {

    // deciding what squares should be black
    var color;
    if (props.posRow === "odd" && props.posBox === "even") {
       color = "black"; 

    }
    else if (props.posRow === "even" && props.posBox === "odd") {
       color = "black"; 
    }


    return (
        <div className="box" style={{backgroundColor: color}}></div>
    )
}

export default Box