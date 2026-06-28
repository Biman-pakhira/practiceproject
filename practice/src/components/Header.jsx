import React from "react";

const Header = () => {
  return (
    <div
      style={{
        backgroundColor: "wheat",
        padding: "30px",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <h1>This Is Header</h1>
      <div style={{ position: "relative" }}>
        <i className="bi bi-cart-fill" style={{ fontSize: "30px", cursor:"pointer"}}></i>

        <span
          className="badge bg-danger"
          style={{
            position: "absolute",
            top: "-8px",
            right: "-10px",
          }}
        >
          {0}
        </span>
      </div>
      
    </div>
  );
};

export default Header;
