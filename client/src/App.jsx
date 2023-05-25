import { styled } from 'styled-components';

import { logoURL } from './assets/images';
import { secondaryColors } from './assets/constants/colors';
import { LinkButton } from './components';

const AppContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2.5rem;
  min-height: 100vh;

  .logo-container {
    width: 25rem;
  }

  .text {
    text-transform: uppercase;
    font-size: 3.2rem;
    color: ${secondaryColors.color1};
    font-weight: 700;
    margin-bottom: 2.5rem;
  }
`;

const App = () => {
  return (
    <AppContainer>
      <div className="logo-container">
        <img src={logoURL} alt="logo nk formation" />
      </div>
      <h1 className="text">bienvenue</h1>
      <LinkButton path={'/login'}>connexion</LinkButton>
    </AppContainer>
  );
};

export default App;
