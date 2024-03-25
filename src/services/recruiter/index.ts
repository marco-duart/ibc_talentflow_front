import { isAxiosError } from "axios";
import api from "../api";
import { CreateRecruiterDTO, GetRecruiterDTO } from "./DTO";

export const GetRecruiter = async (
  params: GetRecruiterDTO.IParams
) => {
  try {
    const { id, token } = params
    const response = await api.get<GetRecruiterDTO.IResponse>(
      `/admins/recruiter/${id}`,
      { headers: { Authorization: token } }
    );

    return {
      success: true,
      message: "MESSAGE",
      code: response.data.code,
      recruiter: response.data.recruiter,
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

export const CreateRecruiter = async (
  params: CreateRecruiterDTO.IParams
) => {
  try {
    const { token,...restParams } = params
    const response = await api.post<CreateRecruiterDTO.IResponse>(
      "/admins/recruiter",
      { params: restParams, headers: { Authorization: token } }
    );

    return {
      success: true,
      message: "MESSAGE",
      code: response.data.code,
      recruiter: response.data.recruiter,
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
