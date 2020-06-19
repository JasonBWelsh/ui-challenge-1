import React from 'react';
import { StyledCard } from './StyledCard';
import { useSelector, useDispatch } from 'react-redux';
import { cardCopy } from '../../copy/cardCopy.js';

function Card() {
  const dispatch = useDispatch();
  const cardStep = useSelector((state) => state.cardStep);
  const copy = useSelector((state) => state.copy);

  function setCardCopy(cardCopy, step) {
    console.log('setCardCopy log step:::', step);
    dispatch({ type: 'SET_COPY', payload: cardCopy[step - 1] });
  }

  function handleNextStep() {
    let step = cardStep;
    if (step < 3) {
      step += 1;
    } else {
      step = 1;
    }
    dispatch({ type: 'NEXT_STEP', payload: step });

    setCardCopy(cardCopy, step);
  }

  return (
    <StyledCard>
      <div className="step-indicator__container">{cardStep}</div>
      <div className="content-container">
        <h1 className="card-heading">{copy.headline}</h1>
        <p className="card-text">{copy.text}</p>
      </div>

      <button className="card-btn" onClick={handleNextStep}>
        OK
      </button>
    </StyledCard>
  );
}

export default Card;
