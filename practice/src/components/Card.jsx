import React from "react";

const Card = ({ name, power,rating, speciality, img }) => {
  return (
    <div
      style={{
        height: "35%",
        width: "20%",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        border: "1px solid black",
        margin: "10px",
      }}
    >
      <img
        src={img}
        alt={name}
        style={{ height: "80%", width: "100%", objectFit: "cover" }}
      />
      <div>
        <h1>{name}</h1>
        <p>Power:{power}</p>
        <h2>Rating: {rating}</h2>
        <h2>Speciality:{speciality}</h2>
      </div>
    </div>
  );
};

export default Card;
