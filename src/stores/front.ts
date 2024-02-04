import {makeAutoObservable} from "mobx";
import {frontApi} from "src/api/front";
import {TGetFrontTaskFactors} from "src/api/front/types";

export class FrontStore {

    accValue: number = 0;
    factorValue: number = 1;

    front_user_id: string = "";

    front_access: number = 0                //front_tag === 1
    front_job: number = 0                   //front_tag === 2
    front_instrument: number = 0            //front_tag === 3
    front_infra: number = 0                 //front_tag === 4
    front_specs: number = 0                 //front_tag === 5
    front_pages: number = 0                 //front_tag === 6
    front_components: number = 0            //front_tag === 7
    front_test_data: number = 0             //front_tag === 8
    front_endpoint: number = 0              //front_tag === 9
    front_func: number = 0                  //front_tag === 10
    front_authorization: number = 0         //front_tag === 11
    front_io_data: number = 0               //front_tag === 12
    front_back_request: number = 0          //front_tag === 13
    front_r_and_d: number = 0               //front_tag === 14

    front_auto_label: number = 0
    front_user_label_sp: number = 0
    front_user_label_hr: number = 0
    front_user_nazvanie: string = ""
    front_user_description: string = ""
    front_user_comments: string = ""
    front_status: string = ""


    constructor() {
        makeAutoObservable(this);
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

    public setUserId(frontUserId: string) {
        this.front_user_id = frontUserId;
    }

    public getUserId() {
        return this.front_user_id;
    }

    public setFrontAccess(frontAccess: number) {
        this.front_access = frontAccess;
    }

    public getFrontAccess() {
        return this.front_access;
    }

    public setFrontJob(frontJob: number) {
        this.front_job = frontJob;
    }

    public getFrontJob() {
        return this.front_job;
    }

    public setFrontInstrument(frontInstrument: number) {
        this.front_instrument = frontInstrument;
    }

    public getFrontInstrument() {
        return this.front_instrument;
    }

    public setFrontInfra(frontInfra: number) {
        this.front_infra = frontInfra;
    }

    public getFrontInfra() {
        return this.front_infra;
    }

    public setFrontSpecs(frontSpecs: number) {
        this.front_specs = frontSpecs;
    }

    public getFrontSpecs() {
        return this.front_specs;
    }

    public setFrontPages(frontPages: number) {
        this.front_pages = frontPages;
    }

    public getFrontPages() {
        return this.front_pages;
    }

    public setFrontComponents(frontComponents: number) {
        this.front_components = frontComponents;
    }

    public getFrontComponents() {
        return this.front_components;
    }

    public setFrontTestData(frontTestData: number) {
        this.front_test_data = frontTestData;
    }

    public getFrontTestData() {
        return this.front_test_data;
    }

    public setFrontEndpoint(frontEndpoint: number) {
        this.front_endpoint = frontEndpoint;
    }

    public getFrontEndpoint() {
        return this.front_endpoint;
    }

    public setFrontFunc(frontFunc: number) {
        this.front_func = frontFunc;
    }

    public getFrontFunc() {
        return this.front_func;
    }

    public setFrontAuthorization(frontAuthorization: number) {
        this.front_authorization = frontAuthorization;
    }

    public getFrontAuthorization() {
        return this.front_authorization;
    }

    public setFrontIoData(frontIoData: number) {
        this.front_io_data = frontIoData;
    }

    public getFrontIoData() {
        return this.front_io_data;
    }

    public setFrontBackRequest(frontBackRequest: number) {
        this.front_back_request = frontBackRequest;
    }

    public getFrontBackRequest() {
        return this.front_back_request;
    }

    public setFrontRAndD(frontRAndD: number) {
        this.front_r_and_d = frontRAndD;
    }

    public getFrontRAndD() {
        return this.front_r_and_d;
    }


    public setFrontAutoLabel(frontAutoLabel: number) {
        this.front_auto_label = frontAutoLabel;
    }

    public getFrontAutoLabel() {
        return this.front_auto_label;
    }

    public setFrontUserLabelSp(frontUserLabelSp: number) {
        this.front_user_label_sp = frontUserLabelSp;
    }

    public getFrontUserLabelSp() {
        return this.front_user_label_sp;
    }

    public setFrontUserLabelHr(frontUserLabelHr: number) {
        this.front_user_label_hr = frontUserLabelHr;
    }

    public getFrontUserLabelHr() {
        return this.front_user_label_hr;
    }

    public setFrontUserNazvanie(frontUserNazvanie: string) {
        this.front_user_nazvanie = frontUserNazvanie;
    }

    public getFrontUserNazvanie() {
        return this.front_user_nazvanie;
    }

    public setFrontUserDescription(frontUserDescription: string) {
        this.front_user_description = frontUserDescription;
    }

    public getFrontUserDescription() {
        return this.front_user_description;
    }

    public setFrontUserComments(frontUserComments: string) {
        this.front_user_comments = frontUserComments;
    }

    public getFrontUserComments() {
        return this.front_user_comments;
    }

    public setFrontStatus(frontStatus: string) {
        this.front_status = frontStatus;
    }

    public getFrontStatus() {
        return this.front_status;
    }


    public getAccess(data: TGetFrontTaskFactors) {
        frontApi.getAccess(data).then((res) => console.log(res));
    }
}
