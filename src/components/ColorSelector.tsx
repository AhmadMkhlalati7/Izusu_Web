import type React from "react";

interface Color {
  name: string;
  code: string;
}

interface ColorSelectorProps {
  colors: Color[];
  selectedColor: number;
  onColorChange: (index: number) => void;
}

const ColorSelector: React.FC<ColorSelectorProps> = ({
  colors,
  selectedColor,
  onColorChange,
}) => {
  return (
    <div className="mb-6 flex flex-wrap gap-4">
      {colors.map((color, index) => (
        <label key={color.name} className="cursor-pointer">
          <input
            type="radio"
            name="color"
            value={index}
            checked={selectedColor === index}
            onChange={() => onColorChange(index)}
            className="sr-only"
          />
          <div className="flex flex-col items-center">
            <div
              className={`h-8 w-8 rounded-full border-4 ${
                selectedColor === index
                  ? "border-blue-500"
                  : "border-transparent"
              }`}
              style={{ backgroundColor: color.code }}
            ></div>
            <span className="mt-2 text-xs">{color.name}</span>
          </div>
        </label>
      ))}
    </div>
  );
};

export default ColorSelector;
