export type TGetManualQATaskFactors = {
    user_id: String;
    access: Number;              //tag === 1
    job : Number;                //tag === 2
    instrument: Number;          //tag === 3
    infra: Number;               //tag === 4
    specs: Number;               //tag === 5
    model: Number;               //tag === 6
    test_data: Number;           //tag === 7
    test_case: Number;           //tag === 8
    method_test: Number;         //tag === 9
    bug_report: Number;          //tag === 10
    io_data: Number;             //tag === 11
    auto_label: Number;
    create_date: String;
    status: String;
    user_label_sp: Number;
    user_label_hr: Number;
    nazvanie: String;
    user_comments: String;
    description: String;
};

export type TGetManualQATaskFactorsResponce = string;