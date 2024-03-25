import { isAxiosError } from "axios";
import api from "../api";
import {
  GetKnowledgesDTO,
  CreateKnowledgeDTO,
  DeleteKnowledgeDTO,
  AssignKnowledgeDTO,
  RemoveKnowledgeDTO,
} from "./DTO";

export const GetKnowledges = async (
  params: GetKnowledgesDTO.IParams
) => {
  try {
    const { prefix, token } = params;
    const response = await api.get<GetKnowledgesDTO.IResponse>(
      `/${prefix}/knowledges`,
      { params, headers: { Authorization: token } }
    );

    return {
      success: true,
      message: "MESSAGE",
      code: response.data.code,
      knowledges: response.data.knowledge,
    };
  } catch (error) {
    if (isAxiosError(error)) {
      return {
        success: false,
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

export const CreateKnowledge = async (
  params: CreateKnowledgeDTO.IParams
) => {
  try {
    const { token, ...restParams } = params;
    const response = await api.post<CreateKnowledgeDTO.IResponse>(
      "/admins/knowledge",
      { params: restParams, headers: { Authorization: token } }
    );

    return {
      success: true,
      message: "MESSAGE",
      code: response.data.code,
      knowledge: response.data.knowledge,
    };
  } catch (error) {
    if (isAxiosError(error)) {
      return {
        success: false,
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

export const DeleteKnowledge = async (
  params: DeleteKnowledgeDTO.IParams
) => {
  try {
    const { id, token } = params;
    const response = await api.delete<DeleteKnowledgeDTO.IResponse>(
      `/admins/knowledge/${id}`,
      { params, headers: { Authorization: token } }
    );

    return {
      success: true,
      message: "MESSAGE",
      code: response.data.code,
      knowledge: response.data.knowledge,
    };
  } catch (error) {
    if (isAxiosError(error)) {
      return {
        success: false,
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

export const AssignKnowledge = async (
  params: AssignKnowledgeDTO.IParams
) => {
  try {
    const { token, ...restParams } = params;
    const response = await api.post<AssignKnowledgeDTO.IResponse>(
      "/candidates/knowledge",
      { params: restParams, headers: { Authorization: token } }
    );

    return {
      success: true,
      message: "MESSAGE",
      code: response.data.code,
      knowledge: response.data.knowledge,
    };
  } catch (error) {
    if (isAxiosError(error)) {
      return {
        success: false,
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

export const RemoveKnowledge = async (
  params: RemoveKnowledgeDTO.IParams
) => {
  try {
    const { id, token } = params;
    const response = await api.delete<RemoveKnowledgeDTO.IResponse>(
      `/candidates/knowledge/${id}`,
      { params, headers: { Authorization: token } }
    );

    return {
      success: true,
      message: "MESSAGE",
      code: response.data.code,
      knowledge: response.data.knowledge,
    };
  } catch (error) {
    if (isAxiosError(error)) {
      return {
        success: false,
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
