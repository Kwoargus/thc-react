import {ApiCommon} from "../Common";
import {TResponse} from "../Common/types";
import {TGetTesterTaskFactors, TGetTesterTaskFactorsResponce} from "./types";

export class TesterApiClass extends ApiCommon {
    public getAccess = <T = TGetTesterTaskFactors>(
        data: TGetTesterTaskFactors
    ): TResponse<T> => {
        const path = "/taskHardnessCalc/v1/taskTest";
        return this.post<T, TGetTesterTaskFactors>(path, data);
    };
}

export const testerApi = new TesterApiClass();