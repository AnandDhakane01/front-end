import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const ItemCard = (props) => {
  return (
    <div onClick={() => {console.log("click")}}className="col-lg-3 col-md-6">
      <div className="card card-cascade card-ecommerce wider mb-5">
        <div className="view view-cascade overlay text-center">
          <img className="card-img-top" src={props.item.image} alt="" />
        </div>
        <div className="card-body card-body-cascade text-center">
          <h6 className="card-title font-weight-bold">{props.item.title}</h6>
          <p className="card-text">{props.item.description.slice(0, 70)}....</p>
          <h3 className="price">Price: ${props.item.price}</h3>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;