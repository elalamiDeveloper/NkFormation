import { styled } from 'styled-components';

import { logoURL } from '../assets/images/index';
import { greyColors } from '../assets/constants/colors';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${greyColors.color2};
  padding: 0 3rem;
  font-size: 1.8rem;
  grid-column: span 2;

  .logo-container {
    width: 10rem;
  }

  .text {
    font-size: 1.6rem;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <div className="logo-container">
        <img src={logoURL} alt="nk formation logo" />
      </div>

      <h2 className="text">Bonjour Nathane </h2>
    </HeaderContainer>
  );
};

export default Header;
