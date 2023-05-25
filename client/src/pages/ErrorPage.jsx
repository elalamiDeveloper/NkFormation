import { styled } from 'styled-components';

import { HiOutlineXCircle } from '../assets/constants/icons';

const ErrorPageContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2.5rem;

  font-size: 4.2rem;
  text-align: center;

  .icon {
    font-size: 10rem;
  }
`;

const ErrorPage = () => {
  return (
    <ErrorPageContainer>
      <h1>Page Not Found</h1>
      <HiOutlineXCircle className="icon" />
    </ErrorPageContainer>
  );
};

export default ErrorPage;
