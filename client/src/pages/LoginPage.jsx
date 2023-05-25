import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';

import { greyColors } from '../assets/constants/colors';
import { PrimaryButton } from '../components';

const LoginPageContainer = styled.main`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .login-form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2.5em;
    padding: 5rem;
    width: 90%;
    max-width: 50rem;
    background: ${greyColors.color3};
    color: ${greyColors.color2};
    border-radius: 0.5rem;

    .login-form__item {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;

      .login-form__label {
        font-size: 1.8rem;
        text-transform: capitalize;
      }

      .login-form__input {
        padding: 1rem;
        border: 0.1px solid transparent;
        border-radius: 0.5rem;

        &:focus {
          border-color: ${greyColors.color2};
        }
      }
    }
  }
`;

const LoginPage = () => {
  const navigate = useNavigate();

  const connexionHandler = (e) => {
    e.preventDefault();
    navigate('/Nathane-Korssia');
    console.log('Connect...');
  };

  return (
    <LoginPageContainer>
      <form className="login-form">
        <div className="login-form__item">
          <label htmlFor="" className="login-form__label">
            identifiant
          </label>
          <input type="text" className="login-form__input" />
        </div>

        <div className="login-form__item">
          <label htmlFor="" className="login-form__label">
            mot de passe
          </label>
          <input type="password" className="login-form__input" />
        </div>

        <PrimaryButton type="submit" onClick={connexionHandler}>
          connexion
        </PrimaryButton>
      </form>
    </LoginPageContainer>
  );
};

export default LoginPage;
