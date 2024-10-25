import React, { useState, useEffect } from 'react';
import './ChargingSchedule.css'; // Import the CSS file for styling

export function ChargingSchedule({ vehicles, updateVehicleStatus }) {
  const [vehicleStatuses, setVehicleStatuses] = useState(
    vehicles.reduce((acc, vehicle) => ({
      ...acc,
      [vehicle.id]: {
        status: 'Idle',
        battery: vehicle.battery || 100,
        distance: vehicle.distance || 0
      }
    }), {})
  );

  const handleStatusChange = (id, status) => {
    setVehicleStatuses((prev) => ({
      ...prev,
      [id]: { ...prev[id], status }
    }));
    if (status === 'Charging') updateVehicleStatus(id, 'Charging');
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setVehicleStatuses((prevStatuses) => {
        const updatedStatuses = { ...prevStatuses };

        Object.keys(updatedStatuses).forEach((id) => {
          const vehicle = updatedStatuses[id];

          if (vehicle.status === 'In Transit') {
            const newBattery = Math.max(vehicle.battery - 1, 0);
            const newDistance = vehicle.distance + 3;
            updatedStatuses[id] = { ...vehicle, battery: newBattery, distance: newDistance };
          } else if (vehicle.status === 'Charging') {
            const newBattery = Math.min(vehicle.battery + 10, 100);
            updatedStatuses[id] = { ...vehicle, battery: newBattery };
          }

          if (vehicle.battery <= 0 && vehicle.status === 'In Transit') {
            updatedStatuses[id] = { ...vehicle, status: 'Idle' };
          }
        });

        return updatedStatuses;
      });
    }, 600000);

    return () => clearInterval(interval);
  }, []);

  const getTimeToFullCharge = (battery) => {
    if (battery >= 100) return 'Fully Charged';
    const remainingPercent = 100 - battery;
    const minutes = (remainingPercent / 10) * 10;
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours}h ${mins}m remaining`;
  };

  return (
    <div className="charging-schedule">
      <h2>Charging Schedule Management</h2>
      <div className="vehicle-cards">
        {vehicles.map((vehicle) => (
          <div key={vehicle.id} className="vehicle-card">
            <span className="vehicle-info">
              <strong>{vehicle.model}</strong> (ID: {vehicle.id})
            </span>
            <div className="status-control">
              <label>Status:</label>
              <select
                value={vehicleStatuses[vehicle.id]?.status || 'Idle'}
                onChange={(e) => handleStatusChange(vehicle.id, e.target.value)}
                className="status-select"
              >
                <option value="Idle">Idle</option>
                <option value="In Transit">In Transit</option>
                <option value="Charging">Charging</option>
              </select>
            </div>
            <span className="vehicle-status">
              {vehicleStatuses[vehicle.id]?.status === 'Charging'
                ? `Battery: ${vehicleStatuses[vehicle.id].battery}% - ${getTimeToFullCharge(vehicleStatuses[vehicle.id].battery)}`
                : vehicleStatuses[vehicle.id]?.status === 'In Transit'
                ? `Battery: ${vehicleStatuses[vehicle.id].battery}% (In Transit)`
                : `Battery: ${vehicleStatuses[vehicle.id].battery}% (Idle)`}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
