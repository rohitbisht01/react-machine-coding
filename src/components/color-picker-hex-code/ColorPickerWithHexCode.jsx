import { useState } from "react";
import { SketchPicker } from "react-color";

const ColorPickerWithHexCode = () => {
  const [selectedColor, setSelectedColor] = useState("#ffffff");

  const handleChangeColor = (newColor) => {
    setSelectedColor(newColor.hex);
  };

  return (
    <div>
      <SketchPicker
        color={selectedColor}
        onChangeComplete={handleChangeColor}
      />

      <p>Selected Color Hex Code : {selectedColor}</p>
    </div>
  );
};

export default ColorPickerWithHexCode;
