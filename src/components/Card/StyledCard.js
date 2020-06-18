import styled from 'styled-components';

export const StyledCard = styled.div`
  height: 300px;
  width: 300px;
  border-radius: 5px;
  background: #fff;
  position: relative; // for step indicator
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (min-width: 768px) {
    height: 400px;
    width: 400px;
  }

  // step indicicator
  .step-indicator__container {
    /* display: inline-block; */
    position: absolute;
    top: 0%;
    right: 0%;
    padding: 1rem;
    background: grey;
  }
`;
