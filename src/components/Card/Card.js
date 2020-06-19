import React from 'react';
import { StyledCard } from './StyledCard';
import { useSelector, useDispatch } from 'react-redux';

function Card() {
  const dispatch = useDispatch();
  const cardStep = useSelector((state) => state.cardStep);

  function handleNextStep() {
    let step = cardStep;
    if (step < 3) {
      step += 1;
    } else {
      step = 1;
    }
    dispatch({ type: 'NEXT_STEP', payload: step });
  }

  return (
    <StyledCard>
      <div className="step-indicator__container">{cardStep}</div>
      <div className="content-container">
        <h1 className="card-heading">Heading</h1>
        <p className="card-text">card text blah blah blah blah something</p>
      </div>

      <button className="card-btn" onClick={handleNextStep}>
        OK
      </button>
    </StyledCard>
  );
}

export default Card;
