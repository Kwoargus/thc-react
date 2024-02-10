import { ApiCommon } from "../Common";
import { TResponse } from "../Common/types";
import { TGetManualQATaskFactors, TGetManualQATaskFactorsResponce } from "./types";

export class ManualQAApiClass extends ApiCommon {
    public getAccess = <T = TGetManualQATaskFactors>(
        data: TGetManualQATaskFactors
    ): TResponse<T> => {
        const path = "/taskHardnessCalc/v1/taskManualQA";
        return this.post<T, TGetManualQATaskFactors>(path, data);
    };
}

export const manualQAApi = new ManualQAApiClass();