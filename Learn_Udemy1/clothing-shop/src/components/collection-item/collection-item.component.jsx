import React from "react";
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions";

import CustomBottun from "../custom-button/custom-button.component";
import "./collection-item.styles.scss";

const CollectionItem = ({item, addItem}) => {
  const {  name, imageUrl, price } = item;
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <CustomBottun onClick={()=> addItem(item)} inverted>Add To Cart</CustomBottun>
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}$</span>
      </div>
    </div>
  );
};

const mapDistpatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});
export default connect(null, mapDistpatchToProps)(CollectionItem);
