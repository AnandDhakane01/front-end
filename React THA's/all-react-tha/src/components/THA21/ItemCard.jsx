import React, { useState } from 'react'


function ItemCard(props) {

    let [isEditing, setIsEditing] = useState(false);
    let [updatedItem, updateItem] = useState({
        food: "",
        calories: ""
    })
    
    // handle change while editing
    function handleChange(event) {
        updateItem({
            ...updatedItem,
            [event.target.name]:event.target.value
        })
    }

    // handle click after the user is done editing
    function handleClick(event) {
        event.preventDefault()
        if (updatedItem.food !== "" && updatedItem.calories !== "") {
            let updatedItems = [...props.items];
            updatedItems[props.index] = {...updatedItem};
            props.setItems(updatedItems);
            updateItem({food: "", calories: ""})
            }
        }


    if (!isEditing) {
        return (
        <div className="item">
            <h2 className="item-foodname">{ props.foodName }</h2>
            <p className="item-calories">You have consumed { props.calories } calories.</p>
            <div>
                <button className="tha21-button" onClick={() => {
                    props.deleteItem(props.index);
                }}>Delete</button>
                <button className="tha21-button" onClick={() => {
                    setIsEditing(true);
                    updateItem({
                        food: [props.foodName],
                        calories: [props.calories]
                    })
                    }}>Edit</button>
            </div>
        </div>
        )
    } 

    else {
        return (
        <div>
            <form className="item">
                <input 
                type="text" 
                name="food" 
                autoComplete="off"
                onChange={handleChange}
                className="input-field" 
                value={updatedItem.food}/> 

                <input 
                type="number" 
                name="calories" 
                autoComplete="off"
                onChange={handleChange} 
                className="input-field" 
                value={updatedItem.calories}/>

                <button 
                className="tha21-button" 
                onClick={(e) => {
                    handleClick(e);
                    setIsEditing(false);
                }}>Done</button>

            </form>
        </div>
        )
    }
}

export default ItemCard