import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

import { greyColors, primaryColors } from '../../assets/constants/colors';

const LinkContainer = styled(Link)`
  &:link,
  &:visited {
    background: ${primaryColors.color1};
    padding: 1.5rem 3rem;
    font-size: 1.8rem;
    text-transform: capitalize;
    color: ${greyColors.color3};
    border-radius: 0.5rem;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
    transition: 0.3s;
  }

  &:hover,
  &:active {
    background: ${primaryColors.color2};
    scale: 1.05;
  }
`;

const LinkButton = ({ children, path }) => {
  return <LinkContainer to={path}>{children}</LinkContainer>;
};

export default LinkButton;
