import { makeAutoObservable } from "mobx";
import { backApi } from "src/api/back";
import { TGetBackTaskFactors } from "src/api/back/types";

export class BackStore {

    accValue: number = 0;
    factorValue: number = 1;

    user_id: string = "";
    access_factor: number = 0;
    job_factor : number = 0;
    model_factor: number = 0;
    instrument_factor: number = 0;
    infra_factor: number = 0;
    specs_factor: number = 0;
    tables_factor: number = 0;
    test_data_factor: number = 0;
    entity_factor: number = 0;
    biz_func_factor: number = 0;
    end_point_factor: number = 0;
    io_data_factor: number = 0;
    web_client_factor: number = 0;
    brocker_factor: number = 0;
    r_and_d_factor: number = 0;
    unit_test_factor: number = 0;
    log_factor: number = 0;
    migration_factor: number = 0;
    comments_factor: number = 0;

    auto_label: number = 0;
    create_date: string = "";
    status: string = "";
    user_label_sp: number = 0;
    user_label_hr: number = 0;
    nazvanie: string = "";
    user_comments: string = "";
    description: string = "";

    constructor() {
        makeAutoObservable(this);
    }

    public getAccess = (data: TGetBackTaskFactors): void => {
        backApi.getAccess(data).then((res) => console.log(res));
    };


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

    public setUserId(userId: string) {
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

    public setInfraFactor(infraFactor:number) {
        this.infra_factor = infraFactor;
    }
    public getInfraFactor() {
        return this.infra_factor;
    }
    public setSpecsFactor(specsFactor:number) {
        this.specs_factor = specsFactor;
    }
    public getSpecsFactor() {
        return this.specs_factor;
    }
    public setTablesFactor(tablesFactor:number) {
        this.tables_factor = tablesFactor;
    }
    public getTablesFactor() {
        return this.tables_factor;
    }
    public setTestDataFactor(testDataFactor:number) {
        this.test_data_factor = testDataFactor;
    }
    public getTestDataFactor() {
        return this.test_data_factor;
    }
    public setEntityFactor(entityFactor:number) {
        this.entity_factor = entityFactor;
    }
    public getEntityFactor() {
        return this.entity_factor;
    }
    public setBizFuncFactor(bizFuncFactor:number) {
        this.biz_func_factor = bizFuncFactor;
    }
    public getBizFuncFactor() {
        return this.biz_func_factor;
    }
    public setEndPointFactor(endPointFactor:number) {
        this.end_point_factor = endPointFactor;
    }
    public getEndPointFactor() {
        return this.end_point_factor;
    }
    public setIoDataFactor(ioDataFactor:number) {
        this.io_data_factor = ioDataFactor;
    }
    public getIoDataFactor() {
        return this.io_data_factor;
    }
    public setWebClientFactor(webClientFactor:number) {
        this.web_client_factor = webClientFactor;
    }
    public getWebClientFactor() {
        return this.web_client_factor;
    }
    public setBrockerFactor(brockerFactor:number) {
        this.brocker_factor = brockerFactor;
    }
    public getBrockerFactor() {
        return this.brocker_factor;
    }
    public setRandDFactor(rAndDFactor:number) {
        this.r_and_d_factor = rAndDFactor;
    }
    public getRandDFactor() {
        return this.r_and_d_factor;
    }
    public setUnitTestFactor(unitTestFactor:number) {
        this.unit_test_factor = unitTestFactor;
    }
    public getUnitTestFactor() {
        return this.unit_test_factor;
    }
    public setLogFactor(logFactor:number) {
        this.log_factor = logFactor;
    }
    public getLogFactor() {
        return this.log_factor;
    }
    public setMigrationFactor(migrationFactor:number) {
        this.migration_factor = migrationFactor;
    }
    public getMigrationFactor() {
        return this.migration_factor;
    }
    public setCommentsFactor(commentsFactor:number) {
        this.comments_factor = commentsFactor;
    }
    public getCommentsFactor() {
        return this.comments_factor;
    }
    public setAutoLabel(autoLabel:number) {
        this.auto_label = autoLabel;
    }
    public getAutoLabel() {
        return this.auto_label;
    }
    public setCreateDate(createDate:string) {
        this.create_date = createDate;
    }
    public getCreateDate() {
        return this.create_date;
    }
    public setStatus(stts:string) {
        this.status = stts;
    }
    public getStatus() {
        return this.status;
    }
    public setUserLabelSp(userLabelSp:number) {
        this.user_label_sp = userLabelSp;
    }
    public getUserLabelSp() {
        return this.user_label_sp;
    }
    public setUserLabelHr(userLabelHr:number) {
        this.user_label_hr = userLabelHr;
    }
    public gettUserLabelHr() {
        return this.user_label_hr;
    }
    public setNazvanie(nazv:string) {
        this.nazvanie = nazv;
    }
    public getNazvanie() {
        return this.nazvanie;
    }
    public setUserComments(userComments:string) {
        this.user_comments = userComments;
    }
    public getUserComments() {
        return this.user_comments;
    }
    public setDescription(descr:string) {
        this.description = descr;
    }
    public getDescription() {
        return this.description;
    }


}