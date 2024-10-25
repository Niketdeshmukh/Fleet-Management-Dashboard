
import React from 'react';
import './BatteryIndicator.css';

const BatteryIndicator = ({ batteryLevel }) => {
  const batteryPercentage = Math.max(0, Math.min(100, batteryLevel));

  return (
    <div className="battery-indicator">
      <div className="battery-label">Battery (%)</div>
      <div className="battery-bar">
        <div
          className="battery-fill"
          style={{ width: `${batteryPercentage}%` }}
        ></div>
      </div>
      <div className="battery-percentage">{batteryPercentage}%</div>
    </div>
  );
};

export default BatteryIndicator;
