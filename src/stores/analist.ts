import { makeAutoObservable } from "mobx";
import { analistApi } from "src/api/analist";
import { TGetAnalistTaskFactors } from "src/api/analist/types";

export class AnalistStore {

    accValue: number = 0;
    factorValue: number = 1;

    user_id: String = "";
    access_factor: Number = 0;
    job_factor : Number = 0;
    model_factor: Number = 0;
    instrument_factor: Number = 0;
    information_factor: Number = 0;
    buziness_factor: Number = 0;
    ui_back_factor: Number = 0;
    collegues_factor: Number = 0;
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

    // public getAccess = (data: TGetAnalistTaskFactors): void => {
    //     analistApi.getAccess(data).then((res) => console.log(res));
    // };


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





    public getAccess(data: TGetAnalistTaskFactors) {
        analistApi.getAccess(data).then((res) => console.log(res));
    }
}
    // public getAccess() {
    //     const data: TGetAnalistTaskFactors = {  user_id: this.user_id,
    //         access: this.access_factor,
    //         job: this.job_factor,
    //         model: this.model_factor,
    //         instrument: this.instrument_factor,
    //         information: this.information_factor,
    //         buziness: this.buziness_factor,
    //         ui_back: this.ui_back_factor,
    //         collegues: this.collegues_factor,
    //         auto_label: this.auto_label,
    //         create_date: this.create_date,
    //         status: this.status,
    //         user_label_sp: this.user_label_sp,
    //         user_label_hr: this.user_label_hr,
    //         nazvanie: this.nazvanie,
    //         user_comments: this.user_comments,
    //         description: this.description
    //     };
    //     analistApi.getAccess(data).then((res) => console.log(res));
    // }