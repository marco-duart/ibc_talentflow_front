import { isAxiosError } from "axios";
import api from "../api";
import {
  GetSocialDTO,
  GetSocialsDTO,
  CreateSocialDTO,
  UpdateSocialDTO,
  DeleteSocialDTO,
} from "./DTO";

export const GetSocial = async (
  params: GetSocialDTO.IParams
) => {
  try {
    const { id, token } = params;
    const response = await api.get<GetSocialDTO.IResponse>(
      `/candidates/social/${id}`,
      { headers: { Authorization: token } }
    );

    return {
      error: false,
      message: "MESSAGE",
      code: response.data.code,
      social: response.data.social,
    };
  } catch (error) {
    if (isAxiosError(error)) {
      return {
        error: true,
        message: "MESSAGE",
        code: "CODIGO",
      };
    }
    return {
      error: true,
      message: "MESSAGE",
      code: "CODIGO",
    };
  }
};

export const GetSocials = async (
  params: GetSocialsDTO.IParams
) => {
  try {
    const { token } = params;
    const response = await api.get<GetSocialsDTO.IResponse>(
      "/candidates/socials",
      { params, headers: { Authorization: token } }
    );

    return {
      error: false,
      message: "MESSAGE",
      code: response.data.code,
      socials: response.data.social,
    };
  } catch (error) {
    if (isAxiosError(error)) {
      return {
        error: true,
        message: "MESSAGE",
        code: "CODIGO",
      };
    }
    return {
      error: true,
      message: "MESSAGE",
      code: "CODIGO",
    };
  }
};

export const CreateSocial = async (
  params: CreateSocialDTO.IParams
) => {
  try {
    const { token, ...restParams } = params;
    const response = await api.post<CreateSocialDTO.IResponse>(
      "/candidates/social",
      { params: restParams, headers: { Authorization: token } }
    );

    return {
      error: false,
      message: "MESSAGE",
      code: response.data.code,
      social: response.data.social,
    };
  } catch (error) {
    if (isAxiosError(error)) {
      return {
        error: true,
        message: "MESSAGE",
        code: "CODIGO",
      };
    }
    return {
      error: true,
      message: "MESSAGE",
      code: "CODIGO",
    };
  }
};

export const UpdateSocial = async (
  params: UpdateSocialDTO.IParams
) => {
  try {
    const { id, token, ...restParams } = params;
    const response = await api.post<UpdateSocialDTO.IResponse>(
      `/candidates/social/${id}`,
      { params: restParams, headers: { Authorization: token } }
    );

    return {
      error: false,
      message: "MESSAGE",
      code: response.data.code,
      social: response.data.social,
    };
  } catch (error) {
    if (isAxiosError(error)) {
      return {
        error: true,
        message: "MESSAGE",
        code: "CODIGO",
      };
    }
    return {
      error: true,
      message: "MESSAGE",
      code: "CODIGO",
    };
  }
};

export const DeleteSocial = async (
  params: DeleteSocialDTO.IParams
) => {
  try {
    const { id, token } = params;
    const response = await api.post<DeleteSocialDTO.IResponse>(
      `/candidates/social/${id}`,
      { params, headers: { Authorization: token } }
    );

    return {
      error: false,
      message: "MESSAGE",
      code: response.data.code,
      social: response.data.social,
    };
  } catch (error) {
    if (isAxiosError(error)) {
      return {
        error: true,
        message: "MESSAGE",
        code: "CODIGO",
      };
    }
    return {
      error: true,
      message: "MESSAGE",
      code: "CODIGO",
    };
  }
};
