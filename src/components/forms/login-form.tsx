//NATIVE
import { useState } from "react";
//LIBRARIES
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import useLocalStorage from "react-localstorage-hook";
//COMPONENTS
import BaseButton from "../shared/buttons/base-button";
import { LoginAPI } from "../../services/register";
//STYLES
import * as S from "./styles";
import { EyeFill, EyeSlashFill } from "@styled-icons/bootstrap"
//UTILS
import { FORM_MESSAGE } from "../../utils/enums/form-message";

const loginFormSchema = z.object({
  email: z
    .string()
    .min(6, FORM_MESSAGE.EMAIL)
    .email(FORM_MESSAGE.EMAIL_FORMAT)
    .toLowerCase(),
  password: z.string().min(8, FORM_MESSAGE.PASSWORD_SIZE),
  remember: z.boolean().default(false),
});

type loginFormData = z.infer<typeof loginFormSchema>;

const LoginForm = () => {
  // const [values, setValue] = useLocalStorage("remenber", false);
  const [passwordIsOpen, setPasswordIsOpen] = useState(false)
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<loginFormData>({
    resolver: zodResolver(loginFormSchema),
  });

  const handleLogin = async (data: loginFormData) => {
    const { remember, ...restData } = data
    
    // handleLocalStorage(remember)

    const result = await LoginAPI(restData);

    if (!result.error) {
      navigate(" ENTIDADE /home")
    } else {
      console.log("Deu ruim!")
    }
  };

  // const handleLocalStorage = (remember: boolean) => {
  //   setValue("remember", remember)
  // }

  const handlePassword = () => {
    setPasswordIsOpen(!passwordIsOpen)
  }

  return (
    <S.LoginFormStyle onSubmit={handleSubmit(handleLogin)}>
      <S.BaseTitleFormStyle>Login</S.BaseTitleFormStyle>
      <div className="first-section">
        <label htmlFor="email" hidden>
          E-mail
        </label>
        <S.BaseInputFormStyle {...register("email")} type="text" placeholder="Email" error={errors.email ? true : false}/>
        {errors.email && <S.BaseSmallFormStyle>{errors.email.message}</S.BaseSmallFormStyle>}
      </div>
      <S.PasswordSectionFormStyle>
        <label htmlFor="password" hidden>
          Senha
        </label>
        <S.BaseInputFormStyle {...register("password")} type={passwordIsOpen ? "text" : "password"} placeholder="Senha" error={errors.password ? true : false}/>
        <div onClick={() => handlePassword()}>
          {passwordIsOpen ? <EyeFill /> : <EyeSlashFill />}
        </div>
        {errors.password && <S.BaseSmallFormStyle>{errors.password.message}</S.BaseSmallFormStyle>}
      </S.PasswordSectionFormStyle>
      <div className="second-section">
        <label htmlFor="remember">Lembrar</label>
        <S.BaseCheckboxFormStyle {...register("remember")} type="checkbox" />
      </div>
      <BaseButton type="submit">ENTRAR</BaseButton>
    </S.LoginFormStyle>
  );
};

export default LoginForm;
