import React, { useState, useEffect } from 'react';
import { Dashboard } from './components/Dashboard';
import { AddVehicle } from './components/AddVehicle';
import { ChargingSchedule } from './components/ChargingSchedule';
import './App.css';

function App() {
  const [view, setView] = useState('dashboard');
  const [vehicles, setVehicles] = useState(
    JSON.parse(localStorage.getItem('fleetData')) || []
  );

  useEffect(() => {
    localStorage.setItem('fleetData', JSON.stringify(vehicles));
  }, [vehicles]);

  const addVehicle = (vehicle) => setVehicles([...vehicles, vehicle]);

  const updateVehicleStatus = (id, status) => {
    setVehicles((prevVehicles) =>
      prevVehicles.map((v) =>
        v.id === id ? { ...v, status } : v
      )
    );
  };

  return (
    <div className="app">
      <nav className="sidebar">
        <button onClick={() => setView('dashboard')}>Dashboard</button>
        <button onClick={() => setView('addVehicle')}>Add Vehicle</button>
        <button onClick={() => setView('chargingSchedule')}>Charging Schedule</button>
      </nav>
      <div className="main-content">
        {view === 'dashboard' ? (
          <Dashboard vehicles={vehicles} />
        ) : view === 'addVehicle' ? (
          <AddVehicle addVehicle={addVehicle} setView={setView} />
        ) : (
          <ChargingSchedule vehicles={vehicles} updateVehicleStatus={updateVehicleStatus} />
        )}
      </div>
    </div>
  );
}

export default App;
