import { Outlet } from 'react-router-dom';
import { styled } from 'styled-components';

import { Header, SideBar } from '../components';

const HomePageContainer = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
`;

const HomePage = (props) => {
  console.log(props);

  return (
    <HomePageContainer>
      <Header />
      <SideBar />
      <Outlet />
    </HomePageContainer>
  );
};

export default HomePage;
