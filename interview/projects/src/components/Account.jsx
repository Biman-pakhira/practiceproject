import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout, logging } from "../redux/features/AddItem";
const Account = () => {
  const valselector = useSelector((e) => e.val.isLogin);
  const valuee = useSelector((e) => e.val.user);
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const dlt = (e) => {
    dispatch(logging(name))
    setName("")
}
  console.log(valuee);
  return (
    <div>
      {valselector ? (
        <div>
          User LogEdIn
          {valuee.map((e, ids) => (
            <div key={ids}>
              <h1>{e.name}</h1>
              <button onClick={(e) => dispatch(logout())}>Logout</button>
            </div>
          ))}
        </div>
      ) : (
        <div>
          <p>User Loged out, Please Login</p>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button onClick={dlt}>Login</button>
        </div>
      )}
    </div>
  );
};

export default Account;
