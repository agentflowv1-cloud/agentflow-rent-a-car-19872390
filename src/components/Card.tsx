import React from 'react';
interface CardProps {
  image: string;
  title: string;
  description: string;
}
const Card: React.FC<CardProps> = ({ image, title, description }) => {
  return (
    <div className="card">
      <img src={image} alt="car image" />
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};
export default Card;