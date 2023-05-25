import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';

import { greyColors, primaryColors } from '../assets/constants/colors';
import navigations from '../assets/constants/navigations';

const SideBarContainer = styled.aside`
  padding: 2.5rem;
  background: ${greyColors.color2};
  min-height: calc(100vh - 10.3rem);

  .navigation-list {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2.5rem;

    .navigation-item {
      &:link,
      &:visited {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: 1rem;
        font-size: 1.8rem;

        .text {
          padding-right: 0.5rem;
          transition: 0.3s;
        }
      }

      &:hover,
      &:active,
      &.active {
        color: ${primaryColors.color1};

        .text {
          padding-right: 0rem;
          padding-left: 0.5rem;
        }
      }
    }
  }
`;

const SideBar = () => {
  const navigationContent = navigations.map(({ id, path, label, icon }) => (
    <li key={id}>
      <NavLink
        to={path}
        className={({ isActive }) =>
          isActive ? 'navigation-item active' : 'navigation-item'
        }
      >
        {icon}
        <span className="text">{label}</span>
      </NavLink>
    </li>
  ));

  return (
    <SideBarContainer>
      <ul className="navigation-list">{navigationContent}</ul>
    </SideBarContainer>
  );
};

export default SideBar;
