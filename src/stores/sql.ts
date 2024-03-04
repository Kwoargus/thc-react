import { makeAutoObservable } from "mobx";
import { sqlApi } from "src/api/sql";
import { TGetSqlTaskFactors } from "src/api/sql/types";

export class SqlStore {

    accValue: number = 0;
    factorValue: number = 1;

    user_id: string = "";

    access_factor: number = 0;                  //sqldev_tag === 1
    job_factor : number = 0;                    //sqldev_tag === 2
    model_factor: number = 0;                   //sqldev_tag === 3
    tables_factor: number = 0;                  //sqldev_tag === 4
    instrument_factor: number = 0;              //sqldev_tag === 5
    specs_factor: number = 0;                   //sqldev_tag === 6
    view_factor: number = 0;                    //sqldev_tag === 7
    func_factor: number = 0;                    //sqldev_tag === 8
    trigg_factor: number = 0;                   //sqldev_tag === 9
    history_factor: number = 0;                 //sqldev_tag === 10
    optimize_factor: number = 0;                 //sqldev_tag === 11
    partition_factor: number = 0;               //sqldev_tag === 12
    archive_factor: number = 0;                 //sqldev_tag === 13
    clean_factor: number = 0;                   //sqldev_tag === 14
    test_data_factor: number = 0;               //sqldev_tag === 15
    migration_data_factor: number = 0;          //sqldev_tag === 16
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

    public getAccess(data: TGetSqlTaskFactors) {
        sqlApi.getAccess(data).then((res) => console.log(res));
    }
    
    public setAccum(accm:number) {

        this.accValue = this.accValue + accm;
    }
    public getAccum() {
        return this.accValue;
    }

    public setFactor(factor:number) {
        console.log("factorValue=", factor)     // вывод в лог значения factor??
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

    public setTablesFactor(tablesFactor:number) {
        this.tables_factor = tablesFactor;
    }
    
    public getTablesFactor() {
        return this.tables_factor;
    }

    public setInstrumentFactor(instrumentFactor:number) {
        this.instrument_factor = instrumentFactor;
    }
    public getInstrumentFactor() {
        return this.instrument_factor;
    }

    public setSpecsFactor(specsFactor: number) {
        this.specs_factor = specsFactor;
    }

    public getSpecsFactor() {
        return this.specs_factor;
    }

    public setViewFactor(viewFactor: number) {
        this.view_factor = viewFactor;
    }

    public getViewFactor() {
        return this.view_factor;
    }

    public setFuncFactor(funcFactor: number) {
        this.func_factor = funcFactor;
    }

    public getFuncFactor() {
        return this.func_factor;
    }

    public setTriggFactor(triggFactor: number) {
        this.trigg_factor = triggFactor;
    }

    public getTriggFactor() {
        return this.trigg_factor;
    }

    public setHistoryFactor(historyFactor: number) {
        this.history_factor = historyFactor;
    }

    public getHistoryFactor() {
        return this.history_factor;
    }

    public setOptimizeFactor(optimizeFactor: number) {
        this.optimize_factor = optimizeFactor;
    }

    public getOptimizeFactor() {
        return this.optimize_factor;
    }

    public setPartitionFactor(partitionFactor: number) {
        this.partition_factor = partitionFactor;
    }

    public getPartitionFactor() {
        return this.partition_factor;
    }

    public setArchiveFactor(archiveFactor: number) {
        this.archive_factor = archiveFactor;
    }

    public getArchiveFactor() {
        return this.archive_factor;
    }

    public setCleanFactor(cleanFactor: number) {
        this.clean_factor = cleanFactor;
    }

    public getCleanFactor() {
        return this.clean_factor;
    }

    public setTestDataFactor(testDataFactor: number) {
        this.test_data_factor = testDataFactor;
    }

    public getTestDataFactor() {
        return this.test_data_factor;
    }

    public setMigrationDataFactor(migrationDataFactor: number) {
        this.migration_data_factor = migrationDataFactor;
    }

    public getMigrationDataFactor() {
        return this.migration_data_factor;
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
   