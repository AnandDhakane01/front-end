import React, { useState } from 'react'
import ItemCard from './ItemCard';


export default function THA21() {

  // state for all the items added
  const [items, setItems] = useState([]);

  // state for the current item being added
  const [item, setItem] = useState({
    food: "",
    calories: ""
  })

  // add item on click and set the current item to none
  function handleClick(event) {
    event.preventDefault()
    if (item.food !== "" && item.calories !== "") {
      setItems([
        ...items,
        item]
      )
      setItem({
        food: "", 
        calories: ""
      });
    }
  }
 
  // manage the stage of the current item being added
  function handleChange(event) {
    setItem({
      ...item,
      [event.target.name]: [event.target.value]
    })
  }

  //delete item
  function deleteItem(i) {
    let newItems = items.filter((element, index) => index !== i);
    setItems(newItems);
  }

  // render the items
  const itemsList = items.map((item, index) => {
    return <ItemCard key={index} foodName={item.food} calories={item.calories} deleteItem={deleteItem} index={index} setItems={setItems} items={items}/>
  })

  return (
      <div className="Tha21">
      <form className="tha21-form">

        <input 
        name="food"
        value={item.food}
        onChange={handleChange}
        className="food-name input-field" 
        autoComplete="off"
        type="text" 
        placeholder="Food Name" />
        <br/>

        <input 
        name="calories"
        value={item.calories}
        onChange={handleChange}
        autoComplete="off"
        className="calorie-no input-field" 
        type="number" 
        placeholder="Calories" />
        <br/>

        <button 
        className="tha21-button" 
        onClick={handleClick}>
        Add
        </button>
        <br/>
      </form>

      <div className="items-list">
        {itemsList}
      </div>

      </div> 
  )
}