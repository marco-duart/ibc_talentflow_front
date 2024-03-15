import { Link } from "react-router-dom";
import LoginForm from "../../components/forms/loginForm";
import DefaultCard from "../../components/shared/cards/defaultCard";
import TalentflowLogo from "../../components/shared/talentflowLogo";
import * as S from "./styles";

const Login = () => {
  return (
    <>
      <S.LoginPageStyle>
        <DefaultCard>
          <S.TalentflowLogoStyle>
            <TalentflowLogo />
          </S.TalentflowLogoStyle>
          <LoginForm />
          <S.FooterLoginPageStyle>
            <small>Não tem cadastro?</small>
            <div>
              <Link to="ROTA">Cadastre-se aqui</Link> | <Link to="ROTA">Esqueci a senha</Link>
            </div>
          </S.FooterLoginPageStyle>
        </DefaultCard>
      </S.LoginPageStyle>
    </>
  );
};

export default Login