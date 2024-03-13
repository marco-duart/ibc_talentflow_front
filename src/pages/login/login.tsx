import TalentflowLogo from "../../components/shared/TalentflowLogo";
import * as Styled from "./styles";

const Login = () => {
  return (
    <>
      <Styled.LoginPageStyled>
        <Styled.LoginCardStyled>
          <Styled.TalentflowLogoStyled>
            <TalentflowLogo />
          </Styled.TalentflowLogoStyled>
        </Styled.LoginCardStyled>
      </Styled.LoginPageStyled>
    </>
  );
};

export default Login