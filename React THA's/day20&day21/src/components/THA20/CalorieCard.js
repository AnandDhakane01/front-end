import React from 'react'

function CalorieCard(props) {

    const color = props.calorieNo > 100 ? "red" : "green";
    

    return (
    <div className="card">
        <div className="cal-col" style={{backgroundColor: color}}>
            <div></div>
        </div> 
        <div>
            <h4>{props.foodName}</h4>
            <p>You have consumed {props.calorieNo} cals today</p>
            <br/>
        </div>
            <button class="tha20-delete" onClick={(e) => props.deleteCalCard(props.foodName)}>delete</button>
    </div>
    )
}

export default CalorieCard