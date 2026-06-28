import React from "react";
import { Link, Links, useNavigate, useNavigation } from "react-router-dom";

const Start = () => {
  return (
    <div>
      <h1>Hey there! this in Biman Pakhira</h1>
      <Link to="/comp">
        <button>Go for the images</button>
      </Link>
    </div>
  );
};

export default Start;
