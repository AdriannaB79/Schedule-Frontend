import React from "react";
import "../App.css";

const Shift = ({
  type,
  label,
  time,
  color,
  dayIndex,
  shiftData,
  onShiftChange,
}) => {
  return (
    <div className="shift" style={{ backgroundColor: color }}>
      <h4>{label}</h4>
      <p>{time}</p>
      <select
        value={shiftData || ""}
        onChange={(e) => onShiftChange(dayIndex, type, e.target.value)}
      >
        {/* sth what has to be changed */}
        <option value="">Select Shift</option>
        <option value="Nurse 1">Nurse 1</option>
        <option value="Nurse 2">Nurse 2</option>
        <option value="Nurse 3">Nurse 3</option>
      </select>
    </div>
  );
};

export default Shift;
