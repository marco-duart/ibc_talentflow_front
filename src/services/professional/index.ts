import { isAxiosError } from "axios";
import api from "../api";
import {
  GetProfessionalDTO,
  GetProfessionalsDTO,
  CreateProfessionalDTO,
  UpdateProfessionalDTO,
  DeleteProfessionalDTO,
} from "./DTO";

export const GetProfessional = async (
  params: GetProfessionalDTO.IParams
) => {
  try {
    const { id, token } = params;
    const response = await api.get<GetProfessionalDTO.IResponse>(
      `/candidates/professional/${id}`,
      { headers: { Authorization: token } }
    );

    return {
      error: false,
      message: "MESSAGE",
      code: response.data.code,
      professional: response.data.professional,
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

export const GetProfessionals = async (
  params: GetProfessionalsDTO.IParams
) => {
  try {
    const { token } = params;
    const response = await api.get<GetProfessionalsDTO.IResponse>(
      "/candidates/professionals",
      { params, headers: { Authorization: token } }
    );

    return {
      error: false,
      message: "MESSAGE",
      code: response.data.code,
      professionals: response.data.professional,
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

export const CreateProfessional = async (
  params: CreateProfessionalDTO.IParams
) => {
  try {
    const { token, ...restParams } = params;
    const response = await api.post<CreateProfessionalDTO.IResponse>(
      "/candidates/professional",
      { params: restParams, headers: { Authorization: token } }
    );

    return {
      error: false,
      message: "MESSAGE",
      code: response.data.code,
      professional: response.data.professional,
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

export const UpdateProfessional = async (
  params: UpdateProfessionalDTO.IParams
) => {
  try {
    const { id, token, ...restParams } = params;
    const response = await api.post<UpdateProfessionalDTO.IResponse>(
      `/candidates/professional/${id}`,
      { params: restParams, headers: { Authorization: token } }
    );

    return {
      error: false,
      message: "MESSAGE",
      code: response.data.code,
      professional: response.data.professional,
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

export const DeleteProfessional = async (
  params: DeleteProfessionalDTO.IParams
) => {
  try {
    const { id, token } = params;
    const response = await api.post<DeleteProfessionalDTO.IResponse>(
      `/candidates/professional/${id}`,
      { params, headers: { Authorization: token } }
    );

    return {
      error: false,
      message: "MESSAGE",
      code: response.data.code,
      professional: response.data.professional,
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
