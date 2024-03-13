import { isAxiosError } from "axios";
import api from "../api";
import {
  GetDynamicFormDTO,
  GetDynamicFormsDTO,
  CreateDynamicFormDTO,
  UpdateDynamicFormDTO,
  DeleteDynamicFormDTO,
} from "./DTO";

export const GetDynamicForm = async (
  params: GetDynamicFormDTO.IParams
) => {
  try {
    const { id, token } = params;
    const response = await api.get<GetDynamicFormDTO.IResponse>(
      `/admins/form/${id}`,
      { headers: { Authorization: token } }
    );

    return {
      error: false,
      message: "MESSAGE",
      code: response.data.code,
      dynamicForm: response.data.form,
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

export const GetDynamicForms = async (
  params: GetDynamicFormsDTO.IParams
) => {
  try {
    const { token } = params;
    const response = await api.get<GetDynamicFormsDTO.IResponse>(
      "/admins/forms",
      { params, headers: { Authorization: token } }
    );

    return {
      error: false,
      message: "MESSAGE",
      code: response.data.code,
      dynamicForms: response.data.forms,
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

export const CreateDynamicForm = async (
  params: CreateDynamicFormDTO.IParams
) => {
  try {
    const { token, ...restParams } = params;
    const response = await api.post<CreateDynamicFormDTO.IResponse>(
      "/admins/form",
      { params: restParams, headers: { Authorization: token } }
    );

    return {
      error: false,
      message: "MESSAGE",
      code: response.data.code,
      dynamicForm: response.data.form,
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

export const UpdateDynamicForm = async (
  params: UpdateDynamicFormDTO.IParams
) => {
  try {
    const { id, token, ...restParams } = params;
    const response = await api.post<UpdateDynamicFormDTO.IResponse>(
      `/admins/form/${id}`,
      { params: restParams, headers: { Authorization: token } }
    );

    return {
      error: false,
      message: "MESSAGE",
      code: response.data.code,
      dynamicForm: response.data.form,
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

export const DeleteDynamicForm = async (
  params: DeleteDynamicFormDTO.IParams
) => {
  try {
    const { id, token } = params;
    const response = await api.post<DeleteDynamicFormDTO.IResponse>(
      `/admins/form/${id}`,
      { params, headers: { Authorization: token } }
    );

    return {
      error: false,
      message: "MESSAGE",
      code: response.data.code,
      dynamicForm: response.data.form,
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
