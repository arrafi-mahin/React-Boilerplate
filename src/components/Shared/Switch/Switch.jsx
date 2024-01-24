import React, { useState } from 'react';
/**
 * Switch component for creating a toggle switch.
 *
 * @param {string} id - Unique identifier for the switch.
 * @param {boolean} defaultChecked - The initial checked state (true for checked, false for unchecked).
 * @param {function} onChange - Callback function to handle switch state changes.
 */

export default function Switch({ id, label, defaultChecked = false, onChange }) {
    const [isChecked, setIsChecked] = useState(defaultChecked);

    const handleSwitchChange = (e) => {
        const newChecked = e.target.checked;
        setIsChecked(newChecked);
        onChange(id, newChecked);
    };

    return (
        <div>
            <div className="max-w-max min-w-[14.5rem]">
                <div className="flex justify-between items-center">
                    <p className="tex-base leading-6 font-normal text-blackSecondary">{label ? label : ''}</p>
                    <div className="w-[3.25rem] h-8 relative">
                        <input
                            type="checkbox"
                            className="checkbox w-0 h-0 opacity-0 absolute"
                            id={id}
                            onChange={handleSwitchChange}
                            checked={isChecked}
                        />
                        <label className="switch w-full h-full block border-2 border-[#1d1b201f] rounded-[6.25rem] cursor-pointer transition-all duration-300 ease-out" htmlFor={id}>
                            <span className="slider">{ }</span>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
}

/*
use example: 
const handleSwitchChange = (id, isChecked) => {
    console.log(`Switch with ID ${id} is now ${isChecked ? 'checked' : 'unchecked'}`);
  };

  return (
    <div>
      <Switch id="exampleSwitch" defaultChecked={true} onChange={handleSwitchChange} />
    </div>
  );

  */