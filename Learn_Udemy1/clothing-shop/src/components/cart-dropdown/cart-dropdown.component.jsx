import React from "react";
import CustomBottun from "../custom-button/custom-button.component";
import './cart-dropdown.styles.scss'
const CartDropdown = () => (
  <div className='cart-dropdown'>
     <div className='cart-items'></div>
    <CustomBottun >GO TO CHECKOUT</CustomBottun>
  </div>
);

export default CartDropdown;
