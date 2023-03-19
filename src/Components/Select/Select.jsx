import React, { useState, useRef } from "react";
import useOutsideClickHandler from "../../utils/outSideClick";
import "./Select.css";

const Select = ({
  value,
  setValue,
  options = ["React", "JavaScript", "HTML", "CSS", "NodeJS"],
}) => {
  const [dropdown, showDropdown] = useState(false);
  const dropdownRef = useRef(null);
  useOutsideClickHandler(dropdownRef, () => showDropdown(false));
  return (
    <div className="select" ref={dropdownRef}>
      <input
        type="text"
        value={value ? value : ""}
        placeholder={!value && "Select"}
        className="input primary-input select_input"
        onClick={() => showDropdown((prev) => !prev)}
      />
      {dropdown && (
        <div className="select_options">
          {options?.map((op) => (
            <li
              className={`option text-sm ${
                value.includes(op) ? "active_option" : ""
              }`}
              onClick={() => {
                setValue(op);
                showDropdown(false);
              }}
            >
              {op}
            </li>
          ))}
        </div>
      )}
    </div>
  );
};

export default Select;
