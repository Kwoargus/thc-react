import { ApiCommon } from "../Common";
import { TResponse } from "../Common/types";
import { TGetAnalistTaskFactors, TGetAnalistTaskFactorsResponce } from "./types";

export class AnalistApiClass extends ApiCommon {
    public getAccess = <T = TGetAnalistTaskFactors>(
        data: TGetAnalistTaskFactors
    ): TResponse<T> => {
        const path = "/taskHardnessCalc/v1/taskAnalist";
        return this.post<T, TGetAnalistTaskFactors>(path, data);
    };
}

export const analistApi = new AnalistApiClass();