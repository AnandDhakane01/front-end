import React, { useState } from 'react'
import CalorieCard from './CalorieCard'
import data from './data'

export default function THA20() {
    // state
    const [items, setItems] = useState(data);

    const deleteCalCard = (food) => {
        let updatedItems = items.filter(item => item.foodName !== food)
        setItems(updatedItems);
    }
    const cardComponents = items.map(item => {
        return <CalorieCard key={item.id} foodName={item.foodName} calorieNo={item.calorieNo} deleteCalCard = {deleteCalCard}/>
    })

    return (
        <div className="main">
            <h2>Calorie Tracker</h2>
            <div className="container">
                {cardComponents}
            </div>
        </div>
    )
}