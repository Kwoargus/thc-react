import { makeAutoObservable } from "mobx";
import { sqlApi } from "src/api/sql";
import { TGetSqlTaskFactors } from "src/api/sql/types";

export class SqlStore {

    accValue: number = 0;
    factorValue: number = 1;

    user_id: String = "";
    access_factor: Number = 0;
    job_factor : Number = 0;
    model_factor: Number = 0;
    instrument_factor: Number = 0;
    

    constructor() {
        makeAutoObservable(this);
    }

     public setAccum(accm:number) {
        this.accValue = this.accValue + accm;
    }
    public getAccum() {
        return this.accValue;
    }
    public setFactor(factor:number) {
        console.log("factorValue=", factor)
        this.factorValue = factor;
    }

    public getFactor() {
        return this.factorValue;
    }

    public setUserId(userId:String) {
        this.user_id = userId;
    }
    public getUserId() {
        return this.user_id;
    }
    public setAccessFactor(accessFactor:number) {
        this.access_factor = accessFactor;
    }
    public getAccessFactor() {
        return this.access_factor;
    }
    public setJobFactor(jobFactor:number) {
        this.job_factor = jobFactor;
    }
    public getJobFactor() {
        return this.job_factor;
    }
    public setModelFactor(modelFactor:number) {
        this.model_factor = modelFactor;
    }
    public getModelFactor() {
        return this.model_factor;
    }
    public setInstrumentFactor(instrumentFactor:number) {
        this.instrument_factor = instrumentFactor;
    }
    public getInstrumentFactor() {
        return this.instrument_factor;
    }

    public getAccess(data: TGetSqlTaskFactors) {
        sqlApi.getAccess(data).then((res) => console.log(res));
    }
}
   