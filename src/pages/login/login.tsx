import LoginForm from "../../components/forms/loginForm";
import DefaultCard from "../../components/shared/cards/defaultCard";
import TalentflowLogo from "../../components/shared/talentflowLogo";
import * as Styled from "./styles";

const Login = () => {
  return (
    <>
      <Styled.LoginPageStyle>
        <DefaultCard>
          <Styled.TalentflowLogoStyle>
            <TalentflowLogo />
          </Styled.TalentflowLogoStyle>
          <LoginForm />
        </DefaultCard>
      </Styled.LoginPageStyle>
    </>
  );
};

export default Login