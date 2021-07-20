import React, { useState } from 'react'
import CalorieCard from './components/THA20/CalorieCard'
import data from './components/THA20/data'
import './components/THA20/styles.css'



function App() {
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

export default App