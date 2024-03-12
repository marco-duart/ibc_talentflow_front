import { isAxiosError } from "axios";
import api from "../api";
import {
  GetSkillsDTO,
  CreateSkillDTO,
  DeleteSkillDTO,
} from "./DTO";

export const GetSkills = async (
  params: GetSkillsDTO.IParams
) => {
  try {
    const { token } = params;
    const response = await api.get<GetSkillsDTO.IResponse>(
      "/candidates/skills",
      { params, headers: { Authorization: token } }
    );

    return {
      error: false,
      message: "MESSAGE",
      code: response.data.code,
      skills: response.data.skill,
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

export const CreateSkill = async (
  params: CreateSkillDTO.IParams
) => {
  try {
    const { token, ...restParams } = params;
    const response = await api.post<CreateSkillDTO.IResponse>(
      "/candidates/skill",
      { params: restParams, headers: { Authorization: token } }
    );

    return {
      error: false,
      message: "MESSAGE",
      code: response.data.code,
      skill: response.data.skill,
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

export const DeleteSkill = async (
  params: DeleteSkillDTO.IParams
) => {
  try {
    const { id, token } = params;
    const response = await api.post<DeleteSkillDTO.IResponse>(
      `/candidates/skill/${id}`,
      { params, headers: { Authorization: token } }
    );

    return {
      error: false,
      message: "MESSAGE",
      code: response.data.code,
      skill: response.data.skill,
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
