export type TGetTesterTaskFactors = {
    user_id: string;

    access: number;                //front_tag === 1
    job: number;                   //front_tag === 2
    model: number;                 //front_tag === 3
    instrument: number;            //front_tag === 4
    infra: number;                 //front_tag === 5
    specs: number;                 //front_tag === 6
    test_data: number;             //front_tag === 7
    test_case: number;             //front_tag === 8
    method_test: number;           //front_tag === 9
    io_data: number;               //front_tag === 10
    bug_report: number;            //front_tag === 11
    pages: number;                 //front_tag === 12

    auto_label: number;
    create_date: string;
    status: string;
    user_label_sp: number;
    user_label_hr: number;
    nazvanie: string;
    user_comments: string;
    description: string;
};

export type TGetTesterTaskFactorsResponce = string;