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
  const [values, setValue] = useLocalStorage("remenber", false);
  const [output, setOutput] = useState("");
  //const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<loginFormData>({
    resolver: zodResolver(loginFormSchema),
  });

  const handleLogin = async (data: loginFormData) => {
    const { remember, ...restData } = data
    
    handleLocalStorage(remember) // Usar na Homepage após logado

    const result = await LoginAPI(restData);

    if (!result.error) {
      //navigate(" ENTIDADE /home")
    } else {
      // erro
    }
  };

  const handleLocalStorage = (remember: boolean) => {
    setValue("remember", remember)
  }

  return (
    <S.LoginFormStyle onSubmit={handleSubmit(handleLogin)}>
      <S.BaseTitleFormStyle>Login</S.BaseTitleFormStyle>
      <div className="first-section">
        <label htmlFor="email" hidden>
          E-mail
        </label>
        <S.BaseInputFormStyle {...register("email")} type="text" placeholder="Email" />
        {errors.email && <S.BaseSmallFormStyle>{errors.email.message}</S.BaseSmallFormStyle>}
      </div>
      <div className="first-section">
        <label htmlFor="password" hidden>
          Senha
        </label>
        <S.BaseInputFormStyle {...register("password")} type="password" placeholder="Senha" />
        {errors.password && <S.BaseSmallFormStyle>{errors.password.message}</S.BaseSmallFormStyle>}
      </div>
      <div className="second-section">
        <label htmlFor="remember">Lembrar</label>
        <S.BaseCheckboxFormStyle {...register("remember")} type="checkbox" />
      </div>
      <BaseButton type="submit">ENTRAR</BaseButton>
    </S.LoginFormStyle>
  );
};

export default LoginForm;
