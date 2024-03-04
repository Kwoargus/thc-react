export type TGetSqlTaskFactors = {

    access: number;                  //sqldev_tag === 1
    job: number;                     //sqldev_tag === 2
    model: number;                   //sqldev_tag === 3
    tables: number;                  //sqldev_tag === 4
    instrument: number;              //sqldev_tag === 5
    specs: number;                   //sqldev_tag === 6
    view: number;                    //sqldev_tag === 7
    func: number;                    //sqldev_tag === 8
    trigg: number;                   //sqldev_tag === 9
    history: number;                 //sqldev_tag === 10
    optimize: number;                //sqldev_tag === 11
    partition: number;               //sqldev_tag === 12
    archive: number;                 //sqldev_tag === 13
    clean: number;                   //sqldev_tag === 14
    test_data: number;               //sqldev_tag === 15
    migration_data: number;          //sqldev_tag === 16

    auto_label: number;
    create_date: string;
    status: string;
    user_label_sp: number;
    user_label_hr: number;
    nazvanie: string;
    user_comments: string;
    description: string;   
    user_id: String;

};

export type TGetSqlTaskFactorsResponce = string;