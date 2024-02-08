import { makeAutoObservable } from "mobx";
import { analistApi } from "src/api/analist";
import { TGetAnalistTaskFactors } from "src/api/analist/types";

export class AnalistStore {

    accValue: number = 0;
    factorValue: number = 1;

    user_id: string = "";
    access_factor: number = 0;
    job_factor : number = 0;
    model_factor: number = 0;
    instrument_factor: number = 0;
    information_factor: number = 0;
    buziness_factor: number = 0;
    ui_back_factor: number = 0;
    collegues_factor: number = 0;

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

    public setUserId(userId:string) {
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
    public setInformationFactor(informationFactor:number) {
        this.information_factor = informationFactor;
    }
    public getInformationFactor() {
        return this.information_factor;
    }
    public setBuzinessFactor(buzinessFactor:number) {
        this.buziness_factor = buzinessFactor;
    }
    public getBuzinessFactor() {
        return this.buziness_factor;
    }
    public setUiBackFactor(uibackFactor:number) {
        this.ui_back_factor = uibackFactor;
    }
    public getUiBackFactor() {
        return this.ui_back_factor;
    }
    public setColleguesFactor(colleguesFactor:number) {
        this.collegues_factor = colleguesFactor;
    }
    public getColleguesFactor() {
        return this.collegues_factor;
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


    public getAccess(data: TGetAnalistTaskFactors) {
        analistApi.getAccess(data).then((res) => console.log(res));
    }
}
