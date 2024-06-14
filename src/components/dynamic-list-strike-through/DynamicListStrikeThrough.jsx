import { useState } from "react";
import "./styles.css";

const DynamicListStrikeThrough = () => {
  const [items, setItems] = useState([]);
  const [newText, setNewText] = useState("");

  const handleAddItem = () => {
    if (newText) {
      setItems([...items, { text: newText, isStrikedThrough: false }]);
      setNewText("");
    }
  };

  // const handleStrikeThrough = (itemId) => {
  //   const updatedItems = [...items];
  //   updatedItems[itemId].isStrikedThrough =
  //     !updatedItems[itemId].isStrikedThrough;
  //   setItems(updatedItems);
  // };

  const handleStrikeThrough = (itemId) => {
    const updatedItems = items.map((item, index) =>
      index === itemId
        ? { ...item, isStrikedThrough: !item.isStrikedThrough }
        : item
    );
    setItems(updatedItems);
  };

  const handleClearAll = () => {
    setItems([]);
  };

  return (
    <div>
      <div>
        <input
          type="text"
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
          placeholder="Enter text"
        />
        <button onClick={handleAddItem}>Add Item</button>
        <button onClick={handleClearAll}>Clear Item</button>
      </div>

      <ul>
        {items.map((item, index) => {
          return (
            <li
              key={item.id}
              onClick={() => handleStrikeThrough(index)}
              className={`${item.isStrikedThrough && "striked-through"}`}
            >
              {item.id} - {item.text}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default DynamicListStrikeThrough;
