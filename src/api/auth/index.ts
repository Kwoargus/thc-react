import { ApiCommon } from "../Common";
import { TResponse } from "../Common/types";
import { TGetAccessRequestData, TGetAccessResponse } from "./types";

export class AuthApiClass extends ApiCommon {
  public getAccess = <T = TGetAccessResponse>(
    data: TGetAccessRequestData
  ): TResponse<T> => {
    const path = "/thc/v1/login";
    return this.post<T, TGetAccessRequestData>(path, data);
  };
}

export const authApi = new AuthApiClass();
