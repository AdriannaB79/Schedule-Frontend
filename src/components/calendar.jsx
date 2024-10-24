import React, { useState } from "react";
import Shift from "./shift";
import "../App.css";

const Calendar = () => {
  const daysOfWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  // State to store the shifts for each day
  const [shifts, setShifts] = useState(
    daysOfWeek.map(() => ({
      dayShift: null,
      nightShift: null,
      sixHourShift: null,
      eightHourShift: null,
    }))
  );

  const handleShiftChange = (dayIndex, shiftType, newShift) => {
    const updatedShifts = [...shifts];
    updatedShifts[dayIndex][shiftType] = newShift;
    setShifts(updatedShifts);
  };

  return (
    <div className="calendar">
      {daysOfWeek.map((day, index) => (
        <div key={index} className="day">
          <h3>{day}</h3>
          <Shift
            type="dayShift"
            label="12-Hour Day Shift"
            time="7:00 - 19:00"
            color="lightblue"
            dayIndex={index}
            shiftData={shifts[index].dayShift}
            onShiftChange={handleShiftChange}
          />
          <Shift
            type="nightShift"
            label="12-Hour Night Shift"
            time="19:00 - 7:00"
            color="lightcoral"
            dayIndex={index}
            shiftData={shifts[index].nightShift}
            onShiftChange={handleShiftChange}
          />
          <Shift
            type="sixHourShift"
            label="6-Hour Shift"
            time="7:00 - 13:00"
            color="lightgreen"
            dayIndex={index}
            shiftData={shifts[index].sixHourShift}
            onShiftChange={handleShiftChange}
          />
          <Shift
            type="eightHourShift"
            label="8-Hour Shift"
            time="7:00 - 15:00"
            color="lightgoldenrodyellow"
            dayIndex={index}
            shiftData={shifts[index].eightHourShift}
            onShiftChange={handleShiftChange}
          />
        </div>
      ))}
    </div>
  );
};

export default Calendar;
