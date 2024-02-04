export type TGetFrontTaskFactors = {
    front_user_id: string;
    front_access: number;                //front_tag === 1
    front_job: number;                   //front_tag === 2
    front_instrument: number;            //front_tag === 3
    front_infra: number;                 //front_tag === 4
    front_specs: number;                 //front_tag === 5
    front_pages: number;                 //front_tag === 6
    front_components: number;            //front_tag === 7
    front_test_data: number;             //front_tag === 8
    front_endpoint: number;              //front_tag === 9
    front_func: number;                  //front_tag === 10
    front_authorization: number;         //front_tag === 11
    front_io_data: number;               //front_tag === 12
    front_back_request: number;          //front_tag === 13
    front_r_and_d: number;               //front_tag === 14

    front_auto_label: number;
    front_user_label_sp: number;
    front_user_label_hr: number;
    front_user_nazvanie: string;
    front_user_description: string;
    front_user_comments: string;
    front_status: string;
};

export type TGetFrontTaskFactorsResponce = string;