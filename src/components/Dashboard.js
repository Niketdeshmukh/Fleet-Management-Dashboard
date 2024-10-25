// Dashboard.js
import React from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';
import BatteryIndicator from './BatteryIndicator'; // Import component

export function Dashboard({ vehicles }) {
  const avgBattery = (
    vehicles.reduce((sum, v) => sum + v.battery, 0) / vehicles.length || 0
  ).toFixed(2);
  const lowBatteryCount = vehicles.filter((v) => v.battery < 20).length;

  const chartData = {
    labels: vehicles.map((v) => v.id),
    datasets: [
      {
        label: 'Battery (%)',
        data: vehicles.map((v) => v.battery),
        backgroundColor: 'rgba(75,192,192,0.4)'
      },
      {
        label: 'Distance (km)',
        data: vehicles.map((v) => v.distance),
        backgroundColor: 'rgba(153,102,255,0.6)'
      }
    ]
  };

  return (
    <div className="dashboard">
      <h2>Fleet Dashboard</h2>
      <div className="metrics">
        <p>Average Battery: {avgBattery}%</p>
        <p>Vehicles with Low Battery: {lowBatteryCount}</p>
      </div>
      <Bar data={chartData} />

      <h3>Vehicle Battery Status</h3>
      <ul className="vehicle-list">
        {vehicles.map((vehicle) => (
          <li key={vehicle.id}>
            <span>{vehicle.id}</span>
            <BatteryIndicator batteryLevel={vehicle.battery} />
          </li>
        ))}
      </ul>
    </div>
  );
}
