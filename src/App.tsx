import React from 'react';
import Card from './components/Card';
import './styles/App.css';
const App: React.FC = () => {
  return (
    <div className="app">
      <h1>Car Rental Options</h1>
      <div className="card-container">
        <Card
          image="https://picsum.photos/200/300"
          title="Toyota Camry"
          description="The Toyota Camry is a mid-size sedan with a comfortable ride and good fuel economy."
        />
        <Card
          image="https://picsum.photos/200/301"
          title="Honda Civic"
          description="The Honda Civic is a compact car with a reputation for reliability and fuel efficiency."
        />
        <Card
          image="https://picsum.photos/200/302"
          title="Ford Mustang"
          description="The Ford Mustang is a sports car with a powerful engine and sleek design."
        />
      </div>
    </div>
  );
};
export default App;