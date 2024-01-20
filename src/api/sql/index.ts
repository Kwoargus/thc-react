import { ApiCommon } from "../Common";
import { TResponse } from "../Common/types";
import { TGetSqlTaskFactors, TGetSqlTaskFactorsResponce } from "./types";

export class SqlApiClass extends ApiCommon {
    public getAccess = <T = TGetSqlTaskFactors>(
        data: TGetSqlTaskFactors
    ): TResponse<T> => {
        const path = "/taskHardnessCalc/v1/taskSql";
        return this.post<T, TGetSqlTaskFactors>(path, data);
    };
}

export const sqlApi = new SqlApiClass();