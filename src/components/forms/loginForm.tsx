//NATIVE
import { useState } from "react";
//LIBRARIES
import { z } from 'zod'
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod'
import { useNavigate } from "react-router-dom";
import useLocalStorage from 'react-localstorage-hook'
//COMPONENTS
import DefaultButton from "../../components/shared/buttons/defaultButton";
import { LoginAPI } from "../../services/register";
//STYLES
import * as S from "./styled";
//UTILS
import { FORM_MESSAGE } from "../../utils/enums/formMessage";

const loginFormSchema = z.object({
  email: z.string().min(1,FORM_MESSAGE.EMAIL).email(FORM_MESSAGE.EMAIL_FORMAT).toLowerCase(),
  password: z.string().min(8, FORM_MESSAGE.PASSWORD_SIZE),
  remember: z.boolean().default(false)
})

type loginFormData = z.infer<typeof loginFormSchema>

const LoginForm = () => {
  const [values, setValue] = useLocalStorage("remenber", false)
  const [output, setOutput] = useState("");
  //const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm<loginFormData>({
    resolver: zodResolver(loginFormSchema)
  });

  const handleLogin = async (data: loginFormData) => {
    setOutput(JSON.stringify(data, null, 2));
    const result = await LoginAPI(data)

    if(result.user) {

      //navigate(" ENTIDADE /home")
    }

  }

  return (
    <S.LoginFormStyle onSubmit={handleSubmit(handleLogin)}>
      <h1>Login</h1>
      <div className="first-section">
        <label htmlFor="email" hidden>E-mail</label>
        <input {...register('email')} type="text" placeholder="Email" />
        {errors.email && <small>{errors.email.message}</small>}
      </div>
      <div className="first-section">
        <label htmlFor="password" hidden>Senha</label>
        <input {...register('password')} type="password" placeholder="Senha" />
        {errors.password && <small>{errors.password.message}</small> }
      </div>
      <div className="second-section">
        <label htmlFor="remember">Lembrar</label>
        <input {...register('remember')} type="checkbox" />
      </div>
        <DefaultButton type="submit">ENTRAR</DefaultButton>
      <div>${output}</div>
    </S.LoginFormStyle>
  );
};

export default LoginForm;
