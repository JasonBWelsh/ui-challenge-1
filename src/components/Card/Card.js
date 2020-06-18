import React from 'react';
import { StyledCard } from './StyledCard';

function Card() {
  return (
    <StyledCard>
      <div className="step-indicator__container">1</div>
      <div className="content-container">
        <h1 className="card-heading">Heading</h1>
        <p className="card-text">card text blah blah blah blah something</p>
      </div>

      <button className="card-btn">OK</button>
    </StyledCard>
  );
}

export default Card;
