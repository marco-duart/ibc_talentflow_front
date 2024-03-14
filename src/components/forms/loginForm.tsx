import { useForm } from "react-hook-form";
import DefaultButton from "../../components/shared/buttons/defaultButton";
import { useState } from "react";
import * as Styled from "./styled";

const LoginForm = () => {
  const [output, setOutput] = useState("");
  const { register, handleSubmit } = useForm();

  function fakeFunc(data: any) {
    setOutput(JSON.stringify(data, null, 2));
  }
  return (
    <Styled.LoginFormStyle onSubmit={handleSubmit(fakeFunc)}>
      <h1>Login</h1>
      <div>
        <label htmlFor="email" hidden>E-mail</label>
        <input {...register('email')} type="text" placeholder="Email" />
      </div>
      <div>
        <label htmlFor="password" hidden>Senha</label>
        <input {...register('password')} type="password" placeholder="Senha" />
      </div>
      <div>
        <DefaultButton type="submit">ENTRAR</DefaultButton>
      </div>
      <div>${output}</div>
    </Styled.LoginFormStyle>
  );
};

export default LoginForm;
