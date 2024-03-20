//NATIVE
import { useState } from "react";

//LIBRARIES
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { cpf } from "cpf-cnpj-validator";

//COMPONENTS
import DefaultButton from "../shared/buttons/base-button";
import { Register } from "../../services/register";
import BaseButton from "../shared/buttons/base-button";
//STYLES
import * as S from "./styles";

//UTILS
import { FORM_MESSAGE } from "../../utils/enums/form-message";

const regexPassword =
  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
const MAX_FILE_SIZE = 5000000; // Fazer um refine para limitar em 5mb

const checkFileType = (file: File) => {
  if (file?.name) {
    const fileType = file.name.split(".").pop();
    if (fileType === "" || fileType === "") return true;
  }
  return false;
};

const registerFormSchema = z
  .object({
    name: z.string().min(3, FORM_MESSAGE.NAME),
    cpf: z
      .string()
      .min(11, FORM_MESSAGE.CPF_SIZE)
      .refine((value) => cpf.isValid(value), FORM_MESSAGE.CPF_VALID),
    email: z
      .string()
      .min(6, FORM_MESSAGE.EMAIL)
      .email(FORM_MESSAGE.EMAIL_FORMAT)
      .toLowerCase(),
    password: z
      .string()
      .min(8, FORM_MESSAGE.PASSWORD_SIZE)
      .regex(regexPassword, FORM_MESSAGE.PASSWORD_RULE),
    confirm: z.string().min(8, FORM_MESSAGE.CONFIRM_PASSWORD),
    photo: z
      .any()
      .refine((file) => checkFileType(file), FORM_MESSAGE.IMAGE_FORMAT),
  })
  .refine((data) => data.password === data.confirm, {
    message: FORM_MESSAGE.PASSWORD_CONFIRM_MATCH,
    path: ["confirm"],
  });

type registerFormData = z.infer<typeof registerFormSchema>;

const RegisterForm = () => {
  const [output, setOutput] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<registerFormData>({
    resolver: zodResolver(registerFormSchema),
  });

  const handleRegister = async (data: registerFormData) => {
    setOutput(JSON.stringify(output, null, 2));
    const result = await Register(data);
  };

  return (
    <S.RegisterFormStyle onSubmit={handleSubmit(handleRegister)}>
      <S.BaseTitleFormStyle>Cadastro</S.BaseTitleFormStyle>
      <div className="first-section">
        <label htmlFor="name" hidden>
          Nome
        </label>
        <S.BaseInputFormStyle
          {...register("name")}
          type="text"
          placeholder="Nome"
        />
        {errors.name && (
          <S.BaseSmallFormStyle>{errors.name.message}</S.BaseSmallFormStyle>
        )}
      </div>

      <div className="first-section">
        <label htmlFor="cpf" hidden>
          CPF
        </label>
        <S.BaseInputFormStyle
          {...register("cpf")}
          type="text"
          placeholder="CPF"
        />
        {errors.cpf && (
          <S.BaseSmallFormStyle>{errors.cpf.message}</S.BaseSmallFormStyle>
        )}
      </div>

      <div className="first-section">
        <label htmlFor="email" hidden>
          E-mail
        </label>
        <S.BaseInputFormStyle
          {...register("email")}
          type="text"
          placeholder="Email"
        />
        {errors.email && (
          <S.BaseSmallFormStyle>{errors.email.message}</S.BaseSmallFormStyle>
        )}
      </div>

      <div className="first-section">
        <label htmlFor="password" hidden>
          Senha
        </label>
        <S.BaseInputFormStyle
          {...register("password")}
          type="password"
          placeholder="Senha"
        />
        {errors.password && (
          <S.BaseSmallFormStyle>{errors.password.message}</S.BaseSmallFormStyle>
        )}
      </div>

      <div className="first-section">
        <label htmlFor="confirm" hidden>
          Confirmar Senha
        </label>
        <S.BaseInputFormStyle
          {...register("confirm")}
          type="password"
          placeholder="Confirmar Senha"
        />
        {errors.confirm && (
          <S.BaseSmallFormStyle>{errors.confirm.message}</S.BaseSmallFormStyle>
        )}
      </div>

      <div className="first-section">
        <label htmlFor="photo" hidden>
          Foto
        </label>
        <input
          {...register("photo")}
          type="file"
          accept="image/png, image/jpg, image/jpeg"
        />
        {errors.photo && (
          <S.BaseSmallFormStyle>
            {errors.photo.message as string}
          </S.BaseSmallFormStyle>
        )}
      </div>

      <BaseButton type="submit">CADASTRAR-ME</BaseButton>
    </S.RegisterFormStyle>
  );
};

export default RegisterForm;
