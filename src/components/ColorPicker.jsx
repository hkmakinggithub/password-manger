import React, { useState } from 'react';
import { SketchPicker } from 'react-color';

const ColorPicker = ({ handleColorChange }) => {
    const [color, setColor] = useState('#fff');

    const handleChangeComplete = (color) => {
        setColor(color.hex);
        handleColorChange(color.hex);
    };

    return (
        <div>
            <SketchPicker
                color={color}
                onChangeComplete={handleChangeComplete}
            />
        </div>
    );
};

export default ColorPicker;
