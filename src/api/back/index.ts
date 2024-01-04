import { ApiCommon } from "../Common";
import { TResponse } from "../Common/types";
import { TGetBackTaskFactors, TGetBackTaskFactorsResponce } from "./types";

export class BackApiClass extends ApiCommon {
    public getAccess = <T = TGetBackTaskFactors>(
        data: TGetBackTaskFactors
    ): TResponse<T> => {
        const path = "/thc/v1/back";
        return this.post<T, TGetBackTaskFactors>(path, data);
    };
}

export const backApi = new BackApiClass();