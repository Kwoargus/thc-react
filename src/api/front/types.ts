export type TGetFrontTaskFactors = {
    user_id: string;

    access: number;                //front_tag === 1
    job: number;                   //front_tag === 2
    instrument: number;            //front_tag === 3
    infra: number;                 //front_tag === 4
    specs: number;                 //front_tag === 5
    pages: number;                 //front_tag === 6
    components: number;            //front_tag === 7
    test_data: number;             //front_tag === 8
    endpoint: number;              //front_tag === 9
    func: number;                  //front_tag === 10
    authorization: number;         //front_tag === 11
    io_data: number;               //front_tag === 12
    back_request: number;          //front_tag === 13
    r_and_d: number;               //front_tag === 14

    auto_label: number;
    create_date: string;
    status: string;
    user_label_sp: number;
    user_label_hr: number;
    nazvanie: string;
    user_comments: string;
    description: string;
};

export type TGetFrontTaskFactorsResponce = string;