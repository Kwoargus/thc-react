import {makeAutoObservable} from "mobx";
import {testerApi} from "src/api/tester";
import {TGetTesterTaskFactors} from "src/api/tester/types";

export class TesterStore {

    accValue: number = 0;
    factorValue: number = 1;

    user_id: string = "";

    access_factor: number = 0                //front_tag === 1
    job_factor: number = 0                   //front_tag === 2
    model_factor: number = 0                 //front_tag === 4
    instrument_factor: number = 0            //front_tag === 3
    infra_factor: number = 0                 //front_tag === 4
    specs_factor: number = 0                 //front_tag === 5
    test_data_factor: number = 0             //front_tag === 8
    test_case_factor: number = 0             //front_tag === 9
    method_test_factor: number = 0           //front_tag === 10
    io_data_factor: number = 0               //front_tag === 11
    bug_report_factor: number = 0            //front_tag === 12
    pages_factor: number = 0                 //front_tag === 13

    auto_label: number = 0
    create_date: string = "";
    status: string = ""
    user_label_sp: number = 0
    user_label_hr: number = 0
    nazvanie: string = ""
    user_comments: string = ""
    description: string = ""

    constructor() {
        makeAutoObservable(this);
    }

    public getAccess(data: TGetTesterTaskFactors) {
        testerApi.getAccess(data).then((res) => console.log(res));
    }


    public setAccum(accm: number) {
        this.accValue = this.accValue + accm;
    }

    public getAccum() {
        return this.accValue;
    }

    public setFactor(factor: number) {
        console.log("factorValue=", factor)
        this.factorValue = factor;
    }

    public getFactor() {
        return this.factorValue;
    }

    public setUserId(userId: string) {
        this.user_id = userId;
    }

    public getUserId() {
        return this.user_id;
    }

    public setAccessFactor(accessFactor: number) {
        this.access_factor = accessFactor;
    }

    public getAccessFactor() {
        return this.access_factor;
    }

    public setJobFactor(jobFactor: number) {
        this.job_factor = jobFactor;
    }

    public getJobFactor() {
        return this.job_factor;
    }

    public setModelFactor(modelFactor: number) {
        this.model_factor = modelFactor;
    }

    public getModelFactor() {
        return this.model_factor;
    }
    public setInstrumentFactor(instrumentFactor: number) {
        this.instrument_factor = instrumentFactor;
    }

    public getInstrumentFactor() {
        return this.instrument_factor;
    }

    public setInfraFactor(infraFactor: number) {
        this.infra_factor = infraFactor;
    }

    public getInfraFactor() {
        return this.infra_factor;
    }

    public setSpecsFactor(specsFactor: number) {
        this.specs_factor = specsFactor;
    }

    public getSpecsFactor() {
        return this.specs_factor;
    }

    public setTestDataFactor(testDataFactor: number) {
        this.test_data_factor = testDataFactor;
    }

    public getTestDataFactor() {
        return this.test_data_factor;
    }

    public setTestCaseFactor(testCaseFactor: number) {
        this.test_case_factor = testCaseFactor;
    }

    public getTestCaseFactor() {
        return this.test_case_factor;
    }

    public setMethodTestFactor(methodCaseFactor: number) {
        this.test_case_factor = methodCaseFactor;
    }

    public getMethodTestFactor() {
        return this.method_test_factor;
    }
    public setIoDataFactor(ioDataFactor: number) {
        this.io_data_factor = ioDataFactor;
    }

    public getIoDataFactor() {
        return this.io_data_factor;
    }
    public setBugReportFactor(bugReportFactor: number) {
        this.bug_report_factor = bugReportFactor;
    }

    public getBugReportFactor() {
        return this.bug_report_factor;
    }

    public setPagesFactor(pagesFactor: number) {
        this.pages_factor = pagesFactor;
    }

    public getPagesFactor() {
        return this.pages_factor;
    }
    public setAutoLabel(autoLabel: number) {
        this.auto_label = autoLabel;
    }

    public getAutoLabel() {
        return this.auto_label;
    }

    public setCreateDate(createDate: string) {
        this.create_date = createDate;
    }

    public getCreateDate() {
        return this.create_date;
    }

    public setStatus(stts: string) {
        this.status = stts;
    }

    public getStatus() {
        return this.status;
    }

    public setUserLabelSp(userLabelSp: number) {
        this.user_label_sp = userLabelSp;
    }

    public getUserLabelSp() {
        return this.user_label_sp;
    }

    public setUserLabelHr(userLabelHr: number) {
        this.user_label_hr = userLabelHr;
    }

    public gettUserLabelHr() {
        return this.user_label_hr;
    }

    public setNazvanie(nazv: string) {
        this.nazvanie = nazv;
    }

    public getNazvanie() {
        return this.nazvanie;
    }

    public setUserComments(userComments: string) {
        this.user_comments = userComments;
    }

    public getUserComments() {
        return this.user_comments;
    }

    public setDescription(descr: string) {
        this.description = descr;
    }

    public getDescription() {
        return this.description;
    }
}
