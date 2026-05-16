import React from 'react';
import CarRentalCard from './components/CarRentalCard';
import './App.css';

function App() {
  return (
    <div className="main-section">
      <h1>Car Rental Options</h1>
      <div className="card-container">
        <CarRentalCard
          image="https://via.placeholder.com/300"
          title="Economy Car"
          description="Rent an economy car for a low price"
        />
        <CarRentalCard
          image="https://via.placeholder.com/300"
          title="SUV"
          description="Rent an SUV for a comfortable ride"
        />
        <CarRentalCard
          image="https://via.placeholder.com/300"
          title="Luxury Car"
          description="Rent a luxury car for a special occasion"
        />
      </div>
    </div>
  );
}

export default App;