import { isAxiosError } from "axios";
import api from "../api";
import { BanUserDTO } from "./DTO";

export const BanUser = async (
  params: BanUserDTO.IParams
) => {
  try {
    const { token,...restParams } = params
    const response = await api.post<BanUserDTO.IResponse>(
      "/admins/ban",
      { params: restParams, headers: { Authorization: token } }
    );

    return {
      success: true,
      message: "MESSAGE",
      code: response.data.code,
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
