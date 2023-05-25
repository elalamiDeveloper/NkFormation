import { styled } from 'styled-components';

import { primaryColors, greyColors } from '../../assets/constants/colors';

const PrimaryButtonContainer = styled.button`
  background: ${primaryColors.color1};
  padding: 1.5rem 3rem;
  font-size: 1.8rem;
  text-transform: capitalize;
  color: ${greyColors.color3};
  border-radius: 0.5rem;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  transition: 0.3s;

  &:hover {
    background: ${primaryColors.color2};
  }
`;

const PrimaryButton = ({ children, type, onClick }) => {
  return (
    <PrimaryButtonContainer type={type || 'button'} onClick={onClick}>
      {children}
    </PrimaryButtonContainer>
  );
};

export default PrimaryButton;
