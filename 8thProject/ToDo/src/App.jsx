import React, { useState } from 'react';

const App = () => {
  const [fruits, setFruits] = useState({
    mango: false,
    apple: false,
    guava: false,
    orange: false,
  });

  // Select All
  const handleAll = (e) => {
    const checked = e.target.checked;

    setFruits({
      mango: checked,
      apple: checked,
      guava: checked,
      orange: checked,
    });
  };

  // Individual Checkbox
  const handleSingle = (e) => {
    const { id, checked } = e.target;

    setFruits({
      ...fruits,
      [id]: checked,
    });
  };

  // Check if all selected
  const allChecked =
    fruits.mango &&
    fruits.apple &&
    fruits.guava &&
    fruits.orange;

  return (
    <div>
      <form>
        {/* Select All */}
        <input
          type="checkbox"
          id="selectall"
          checked={allChecked}
          onChange={handleAll}
        />

        <label htmlFor="selectall">
          Select All
        </label>

        <br />

        {/* Mango */}
        <input
          type="checkbox"
          id="mango"
          checked={fruits.mango}
          onChange={handleSingle}
        />

        <label htmlFor="mango">Mango</label>

        <br />

        {/* Apple */}
        <input
          type="checkbox"
          id="apple"
          checked={fruits.apple}
          onChange={handleSingle}
        />

        <label htmlFor="apple">Apple</label>

        <br />

        {/* Guava */}
        <input
          type="checkbox"
          id="guava"
          checked={fruits.guava}
          onChange={handleSingle}
        />

        <label htmlFor="guava">Guava</label>

        <br />

        {/* Orange */}
        <input
          type="checkbox"
          id="orange"
          checked={fruits.orange}
          onChange={handleSingle}
        />

        <label htmlFor="orange">Orange</label>
      </form>
    </div>
  );
};

export default App;