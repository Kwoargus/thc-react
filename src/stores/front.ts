import {makeAutoObservable} from "mobx";
import {frontApi} from "src/api/front";
import {TGetFrontTaskFactors} from "src/api/front/types";

export class FrontStore {

    accValue: number = 0;
    factorValue: number = 1;

    user_id: string = "";

    access_factor: number = 0                //front_tag === 1
    job_factor: number = 0                   //front_tag === 2
    instrument_factor: number = 0            //front_tag === 3
    infra_factor: number = 0                 //front_tag === 4
    specs_factor: number = 0                 //front_tag === 5
    pages_factor: number = 0                 //front_tag === 6
    components_factor: number = 0            //front_tag === 7
    test_data_factor: number = 0             //front_tag === 8
    endpoint_factor: number = 0              //front_tag === 9
    func_factor: number = 0                  //front_tag === 10
    authorization_factor: number = 0         //front_tag === 11
    io_data_factor: number = 0               //front_tag === 12
    back_request_factor: number = 0          //front_tag === 13
    r_and_d_factor: number = 0               //front_tag === 14

    auto_label: number = 0
    create_date: string = "";
    status: string = ""
    user_label_sp: number = 0
    user_label_hr: number = 0
    nazvanie: string = ""
    user_comments: string = ""
    description: string = ""

    data: any;

    constructor() {
        makeAutoObservable(this);
    }

    // public getAccess(data: TGetFrontTaskFactors) {
    //     frontApi.getAccess(data).then((res) => console.log(res));
    // }
    public getAccess = (data: TGetFrontTaskFactors): void => {
        frontApi.getAccess(data).then((res) => {
            const { data} = res;
            this.setValue(data);
            console.log('data: ', data);
        });
    };


    setValue(data:TGetFrontTaskFactors){
        this.data = data;
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

    public setPagesFactor(pagesFactor: number) {
        this.pages_factor = pagesFactor;
    }

    public getPagesFactor() {
        return this.pages_factor;
    }

    public setComponentsFactor(componentsFactor: number) {
        this.components_factor = componentsFactor;
    }

    public getComponentsFactor() {
        return this.components_factor;
    }

    public setTestDataFactor(testDataFactor: number) {
        this.test_data_factor = testDataFactor;
    }

    public getTestDataFactor() {
        return this.test_data_factor;
    }

    public setEndpointFactor(endpointFactor: number) {
        this.endpoint_factor = endpointFactor;
    }

    public getEndpointFactor() {
        return this.endpoint_factor;
    }

    public setFuncFactor(funcFactor: number) {
        this.func_factor = funcFactor;
    }

    public getFuncFactor() {
        return this.func_factor;
    }

    public setAuthorizationFactor(authorizationFactor: number) {
        this.authorization_factor = authorizationFactor;
    }

    public getAuthorizationFactor() {
        return this.authorization_factor;
    }

    public setIoDataFactor(ioDataFactor: number) {
        this.io_data_factor = ioDataFactor;
    }

    public getIoDataFactor() {
        return this.io_data_factor;
    }

    public setBackRequestFactor(backRequestFactor: number) {
        this.back_request_factor = backRequestFactor;
    }

    public getBackRequestFactor() {
        return this.back_request_factor;
    }

    public setRAndDFactor(rAndDFactor: number) {
        this.r_and_d_factor = rAndDFactor;
    }

    public getRAndDFactor() {
        return this.r_and_d_factor;
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
