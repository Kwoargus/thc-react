import {ApiCommon} from "../Common";
import {TResponse} from "../Common/types";
import {TGetFrontTaskFactors, TGetFrontTaskFactorsResponce} from "./types";

export class FrontApiClass extends ApiCommon {
    public getAccess = <T = TGetFrontTaskFactors>(
        data: TGetFrontTaskFactors
    ): TResponse<T> => {
        const path = "/taskHardnessCalc/v1/taskFront";
        return this.post<T, TGetFrontTaskFactors>(path, data);
    };
}

export const frontApi = new FrontApiClass();