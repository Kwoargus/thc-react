import { makeAutoObservable } from "mobx";
import { manualQAApi } from "src/api/manualQA";
import { TGetManualQATaskFactors } from "src/api/manualQA/types";

export class ManualQAStore {

    accValue: number = 0;
    factorValue: number = 1;

    user_id: String = "";
    
    access_factor: Number = 0;              //tag === 1
    job_factor : Number = 0;                //tag === 2
    instrument_factor: Number = 0;          //tag === 3
    infra_factor: Number = 0;               //tag === 4
    specs_factor: Number = 0;               //tag === 5
    model_factor: Number = 0;               //tag === 6
    test_data_factor: Number = 0;            //tag === 7
    test_case_factor: Number = 0;            //tag === 8
    method_test_factor: Number = 0;          //tag === 9
    bug_report_factor: Number = 0;           //tag === 10
    io_data_factor: Number = 0;              //tag === 11

    auto_label: Number = 0;
    create_date: String = "";
    status: String = "";
    user_label_sp: Number = 0;
    user_label_hr: Number = 0;
    nazvanie: String = "";
    user_comments: String = "";
    description: String = "";

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
    //tag === 1
    public setAccessFactor(accessFactor:number) {
        this.access_factor = accessFactor;
    }
    public getAccessFactor() {
        return this.access_factor;
    }
    //tag === 2
    public setJobFactor(jobFactor:number) {
        this.job_factor = jobFactor;
    }
    public getJobFactor() {
        return this.job_factor;
    }
    //tag === 3
    public setInstrumentFactor(instrumentFactor:number) {
        this.instrument_factor = instrumentFactor;
    }
    public getInstrumentFactor() {
        return this.instrument_factor;
    }
    //tag === 4
    public setInfraFactor(instrumentFactor:number) {
        this.instrument_factor = instrumentFactor;
    }
    public getInfraFactor() {
        return this.infra_factor;
    }
    //tag === 5
    public setSpecsFactor(specs_factor:number) {
        this.specs_factor = specs_factor;
    }
    public getSpecsFactor() {
        return this.specs_factor;
    }
    //tag === 6
    public setModelFactor(model_factor:number) {
        this.model_factor = model_factor;
    }
    public getModelFactor() {
        return this.model_factor;
    }
    //tag === 7
    public setTestDataFactor(test_data_factor:number) {
        this.test_data_factor = test_data_factor;
    }
    public getTestDataFactor() {
        return this.test_data_factor;
    }
    //tag === 8
    public setTestCaseFactor(test_case_factor:number) {
        this.test_case_factor = test_case_factor;
    }
    public getTestCaseFactor() {
        return this.test_case_factor;
    }
    //tag === 9
    public setMethodTestFactor(method_test_factor:number) {
        this.method_test_factor = method_test_factor;
    }
    public getMethodTestFactor() {
        return this.method_test_factor;
    }
    //tag === 10
    public setBugReportFactor(bug_report_factor:number) {
        this.bug_report_factor = bug_report_factor;
    }
    public getBugReportFactor() {
        return this.bug_report_factor;
    }
    //tag === 11
    public setIoDataFactor(io_data_factor:number) {
        this.io_data_factor = io_data_factor;
    }
    public getIoDataFactor() {
        return this.io_data_factor;
    }

    public setAutoLabel(autoLabel:Number) {
        this.auto_label = autoLabel;
    }
    public getAutoLabel() {
        return this.auto_label;
    }
    public setCreateDate(createDate:String) {
        this.create_date = createDate;
    }
    public getCreateDate() {
        return this.create_date;
    }
    public setStatus(stts:String) {
        this.status = stts;
    }
    public getStatus() {
        return this.status;
    }
    public setUserLabelSp(userLabelSp:Number) {
        this.user_label_sp = userLabelSp;
    }
    public getUserLabelSp() {
        return this.user_label_sp;
    }
    public setUserLabelHr(userLabelHr:Number) {
        this.user_label_hr = userLabelHr;
    }
    public gettUserLabelHr() {
        return this.user_label_hr;
    }
    public setNazvanie(nazv:String) {
        this.nazvanie = nazv;
    }
    public getNazvanie() {
        return this.nazvanie;
    }
    public setUserComments(userComments:String) {
        this.user_comments = userComments;
    }
    public getUserComments() {
        return this.user_comments;
    }
    public setDescription(descr:String) {
        this.description = descr;
    }
    public getDescription() {
        return this.description;
    }





    public getAccess(data: TGetManualQATaskFactors) {
        manualQAApi.getAccess(data).then((res) => console.log(res));
    }
}