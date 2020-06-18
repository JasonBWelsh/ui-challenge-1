import styled from 'styled-components';

export const StyledCard = styled.div`
  width: 300px;
  border-radius: 5px;
  background: #fff;
  position: relative; // for step indicator
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  color: #8391a1;
  box-shadow: 4px 8px 12px 0px rgba(0, 0, 0, 0.1);

  @media (min-width: 768px) {
    width: 400px;
  }

  /* step indicicator */
  .step-indicator__container {
    height: 10px;
    width: 10px;
    position: absolute;
    top: 0%;
    right: 0%;
    padding: 1rem;
    background: #8391a1;
    color: #fff;
    /* border-radius: 50%; */
    /* border-radius: 0 5px 0 100%; */
    transform: rotate(45deg);
  }

  /* card-content */
  .content-container {
    width: 80%;

    .card-heading {
      color: #616e7d;
    }

    .card-text {
      margin-bottom: 2rem;
    }
  }

  /* bottom button */
  .card-btn {
    width: 100%;
    border: none;
    cursor: pointer;
    padding: 1rem;
    background: #046bde;
    color: #fff;
    border-radius: 0 0 5px 5px;
  }
`;
