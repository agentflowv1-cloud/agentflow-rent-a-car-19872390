import React from 'react';
import './CarRentalCard.css';

interface CarRentalCardProps {
  image: string;
  title: string;
  description: string;
}

function CarRentalCard({ image, title, description }: CarRentalCardProps) {
  return (
    <div className="card">
      <img src={image} alt="Car Image" />
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

export default CarRentalCard;
