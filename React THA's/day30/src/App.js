import React, { useEffect, useState } from "react";
import ItemCard from "./components/ItemCard";
import "./App.css"

function App() {
  const [itemsData, setItemsData] = useState({});

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setItemsData(data);
      });
  }, []);

  return (
    <div className="App">
      <div className="row">
        {itemsData && itemsData.length > 0
          ? itemsData.map((item) => <ItemCard key={item.id} item={item} />)
          : ""}
      </div>
    </div>
  );
}

export default App;
