import RegisterForm from "../../components/forms/register-form";
import RegisterCard from "../../components/shared/cards/register-card";
import TalentflowLogo from "../../components/shared/talentflow-logo";
import * as S from "./styles";

const Register = () => {
  return (
    <>
      <S.RegisterPageStyle>
        <RegisterCard>
          <S.TalentflowLogoStyle>
            <TalentflowLogo />
          </S.TalentflowLogoStyle>
          <RegisterForm />
        </RegisterCard>
      </S.RegisterPageStyle>
    </>
  );
};

export default Register