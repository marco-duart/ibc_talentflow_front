import { isAxiosError } from "axios";
import api from "../api";
import {
  GetApplicationDTO,
  GetApplicationsDTO,
  CreateApplicationDTO,
  DeleteApplicationDTO,
} from "./DTO";

export const GetApplication = async (params: GetApplicationDTO.IParams) => {
  try {
    const { id, token } = params;
    const response = await api.get<GetApplicationDTO.IResponse>(
      `/candidates/application/${id}`,
      { headers: { Authorization: token } }
    );

    return {
      error: false,
      message: "MESSAGE",
      code: response.data.code,
      application: response.data.application,
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

export const GetApplications = async (params: GetApplicationsDTO.IParams) => {
  try {
    const { token } = params;
    const response = await api.get<GetApplicationsDTO.IResponse>(
      "/candidates/applications",
      { params, headers: { Authorization: token } }
    );

    return {
      error: false,
      message: "MESSAGE",
      code: response.data.code,
      applications: response.data.applications,
      pageable: response.data.pageable,
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

export const CreateApplication = async (
  params: CreateApplicationDTO.IParams
) => {
  try {
    const { token, ...restParams } = params;
    const response = await api.post<CreateApplicationDTO.IResponse>(
      "/candidates/application",
      { params: restParams, headers: { Authorization: token } }
    );

    return {
      error: false,
      message: "MESSAGE",
      code: response.data.code,
      application: response.data.application,
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

export const DeleteApplication = async (
  params: DeleteApplicationDTO.IParams
) => {
  try {
    const { id, token } = params;
    const response = await api.post<DeleteApplicationDTO.IResponse>(
      `/candidates/application/${id}`,
      { params, headers: { Authorization: token } }
    );

    return {
      error: false,
      message: "MESSAGE",
      code: response.data.code,
      application: response.data.application,
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
