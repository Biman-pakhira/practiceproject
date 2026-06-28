import { useState } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { increase, deletee } from "./redux/features/counterSlice";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Card from "./components/Card";
import data from "./data/data";
import { Route, Routes } from "react-router-dom";
import Start from "./components/Start";

function App() {
  const [count, setCount] = useState("");
  const cnt = useSelector((s) => s.value);
  const dispatch = useDispatch();
  console.log(cnt);

  return (
    <>
      <div
        style={{
          position: "sticky",
          top: 0,
          zIndex: 100,
          backgroundColor: "blue",
        }}
      >
        <Header />
      </div>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route
          path="/comp"
          element={
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                padding: "10px",
                justifyContent: "space-evenly",
              }}
            >
              {data.map((e, idx) => (
                <Card
                  key={idx}
                  name={e.name}
                  power={e.power}
                  rating={e.rating}
                  speciality={e.speciality}
                  img={e.img}
                />
              ))}
            </div>
          }
        />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
