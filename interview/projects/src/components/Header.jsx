import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div style={{display:"flex", justifyContent:'space-between', padding:'20px'}}>
      <Link to="/">
        <div>Home</div>
      </Link>
      <div style={{display:'flex', justifyContent:'space-between', width:'10%'}}>
        <Link to="/cart">
          <p>Cart</p>
        </Link>
        <p>Account</p>
      </div>
    </div>
  );
};

export default Header;
