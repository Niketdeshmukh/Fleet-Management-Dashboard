import React, { useState } from 'react';

export function AddVehicle({ addVehicle, setView }) {
  const [vehicleData, setVehicleData] = useState({
    id: '',
    battery: 100,
    distance: 0,
    lastCharge: new Date().toLocaleString(),
    status: 'Idle'
  });

  const [vehicles, setVehicles] = useState(
    JSON.parse(localStorage.getItem('fleetData')) || []
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedVehicles = [...vehicles, vehicleData];
    setVehicles(updatedVehicles);
    localStorage.setItem('fleetData', JSON.stringify(updatedVehicles));
    addVehicle(vehicleData);
    setVehicleData({ id: '', battery: 100, distance: 0, lastCharge: new Date().toLocaleString(), status: 'Idle' });
  };

  const handleDelete = (id) => {
    const updatedVehicles = vehicles.filter((vehicle) => vehicle.id !== id);
    setVehicles(updatedVehicles);
    localStorage.setItem('fleetData', JSON.stringify(updatedVehicles));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setVehicleData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="add-vehicle">
      <h2>Add New Vehicle</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Vehicle ID:
          <input
            type="text"
            name="id"
            value={vehicleData.id}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Battery (%):
          <input
            type="number"
            name="battery"
            value={vehicleData.battery}
            onChange={handleChange}
            required
            max="100"
          />
        </label>
        <label>
          Distance Traveled (km):
          <input
            type="number"
            name="distance"
            value={vehicleData.distance}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit" style={{margin:'auto'}}>Add Vehicle</button>
      </form>

      <h3>Vehicle List</h3>
      <ul className="vehicle-list">
        {vehicles.map((vehicle) => (
          <li key={vehicle.id}>
            <span>ID: {vehicle.id}</span>
            <span>Battery: {vehicle.battery}%</span>
            <span>Distance: {vehicle.distance} km</span>
            <button onClick={() => handleDelete(vehicle.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
