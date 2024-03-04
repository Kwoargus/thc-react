import React from 'react';
import {Table} from 'antd';
import type {ColumnsType, TableProps} from 'antd/es/table';
import {useStores} from "../../../stores";

interface DataType {
    key: React.Key;
    factorName: string;
    factorVariant: string;
    factorEstimate: string;
}

//1.
export const tester_access_string:string[] = new Array(13);
tester_access_string[0] = "У тестировшика есть все необходимые доступы к ресурсам инфрастуктуры и лицензии."
tester_access_string[1] = "У тестировшика нет одного из доступов к ресурсам инфрастуктуры и/или лицензий, которые будет легко получить за незначительное время."
tester_access_string[2] = "У тестировшика нет доступа к нескольким ресурсам инфрастуктуры и/или лицензий, получить которые можно за 1-2 дня."
tester_access_string[3] = "У тестировшика нет доступа к половине ресурсов инфрастуктуры и/или лицензий, получить которые можно за 3-5 дней."
tester_access_string[5] = "У тестировшика нет доступа к большей части инфрастуктуры и/или лицензий, на получение этих доступов потребуется значителтное время."
tester_access_string[8] = "У тестировшика нет доступа к инфрастуктуре и/или лицензий, на получение этих доступов потребуется неопределённое время."
tester_access_string[13] = ""
//2.
export const tester_job_string = new Array(13);
tester_job_string[0] = "Тестировшику понятны формулировка задачи и бизнес логика, которую необходимо реализовать."
tester_job_string[1] = "Тестировшику не понятны небольшая часть описания задачи и некоторые функции бизнес логики, которую необходимо реализовать."
tester_job_string[2] = "Тестировшику не понятны примерно половина описания задачи и примерно половина функций бизнес логики, которую необходимо реализовать."
tester_job_string[3] = "Тестировшику не понятны бОльшая часть описания задачи и и бОльшая часть функции бизнес логики, которую необходимо реализовать."
tester_job_string[5] = "Тестировшику не понятны все описания задачи и все функции бизнес логики, которую необходимо реализовать."
tester_job_string[8] = ""
tester_job_string[13] = ""
//3.
export const  tester_model_string = new Array(13);
tester_model_string[0] = "Тестировщику понятна структура модели данных и атрибутивный состав таблиц."
tester_model_string[1] = "Тестировщику не понятна небольшая часть структуры модели данных и/или назначение некоторых атрибутов."
tester_model_string[2] = "Тестировщику не понятна примерно половина структуры модели данных и/или назначение половины атрибутов."
tester_model_string[3] = "Тестировщику не понятна бОльшая часть структуры модели данных и/или назначение бОльшей части атрибутов."
tester_model_string[5] = "Тестировщику не понятна вся структура модели данных и атрибутивный состав таблиц."
tester_model_string[8] = ""
tester_model_string[13] = ""
//4.
export const tester_instrument_string = new Array(13);
tester_instrument_string[0] = "Из необходимых инструментов, все хорошо знакомы тестировшику и у него имеется достаточный опыт их использования."
tester_instrument_string[1] = "Из необходимых инструментов, все, кроме одного, хорошо знакомы тестировшику, и у него имеется достаточный опыт их использования всех кроме одного."
tester_instrument_string[2] = "Из необходимых инструменты, большая часть знакомы тестировшику, и у него имеется достаточный опыт их использования с остальными опыта нет или его недостаточно."
tester_instrument_string[3] = "Из необходимых инструментов, половина, хорошо знакомы тестировшику, и у него имеется достаточный опыт их использования с остальными опыта нет или его недостаточно."
tester_instrument_string[5] = "Из необходимых инструменты, большая часть не знакомы и опыта их использования недостаточно."
tester_instrument_string[8] = "Из необходимых инструментов все не знакомы и опыта их использования нет или недостаточно."
tester_instrument_string[13] = ""
//5.
export const tester_infra_string = new Array(13);
tester_infra_string[0] = "Все элементы инфраструктуры корректно настроены и работают стабильно."
tester_infra_string[1] = "Все элементы инфраструктуры корректно настроены но некоторые работают иногда не стабильно."
tester_infra_string[2] = ""
tester_infra_string[3] = "Некоторые элементы инфраструктуры настроены не вполне корректно и работают не стабильно."
tester_infra_string[5] = ""
tester_infra_string[8] = "Некоторые элементы инфраструктуры не корректно настроены и/или работают нестабильно."
tester_infra_string[13] = ""
//6.
export const tester_specs_string = new Array(13);
tester_specs_string[0] = "В задаче не нужны спецификации"
tester_specs_string[1] = "Все спецификации в наличии, их содержание полно и корректно."
tester_specs_string[2] = "Все спецификации в наличии, но их содержание не полно и/или не корректно."
tester_specs_string[3] = "Часть спецификаций отсутствует."
tester_specs_string[5] = "Спецификаций нет."
tester_specs_string[8] = ""
tester_specs_string[13] = ""
//7.
export const tester_test_data_string = new Array(13);
tester_test_data_string[0] = "Необходимые тестовые данные в таблицы внесены, они полны и корректны."
tester_test_data_string[1] = ""
tester_test_data_string[2] = "Часть необходимых тестовых данных в таблицы не внесены или они некорректны и/или не определена часть связей."
tester_test_data_string[3] = ""
tester_test_data_string[5] = "Необходимые тестовые данные в таблицах полностью отсутствуют."
tester_test_data_string[8] = ""
tester_test_data_string[13] = ""
//8.
export const tester_test_case_string = new Array(13);
tester_test_case_string[0] = "В задаче не требуется формулировать тест-кейсы"
tester_test_case_string[1] = "Сформулировать от 1 до 10 тест-кейсов."
tester_test_case_string[2] = "Сформулировать от 11 до 20 тест-кейсов."
tester_test_case_string[3] = "Сформулировать от 21 до 30 тест-кейсов."
tester_test_case_string[5] = "Сформулировать от 31 до 40 тест-кейсов."
tester_test_case_string[8] = "Сформулировать от 41 до 50 тест-кейсов."
tester_test_case_string[13] = ""
//9.
export const tester_method_test_string = new Array(13);
tester_method_test_string[0] = "Все эндпоинты на бэке готовы и работают корректно."
tester_method_test_string[1] = "Все эндпоинты на бэке готовы но некоторые работают не вполне корректно."
tester_method_test_string[2] = "Некоторые эндпоинты на бэке ещё не готовы и некоторые работают не вполне корректно."
tester_method_test_string[3] = "Приблизительно половина эндпоинтов на бэке ещё не готовы и некоторые работают не вполне корректно."
tester_method_test_string[5] = "Большая часть эндпоинтов на бэке ещё не готовы или работают не корректно."
tester_method_test_string[8] = "Эндпоинты на бэке ещё не разработаны."
tester_method_test_string[13] = ""
//10.
export const tester_io_data_string = new Array(13);
tester_io_data_string[0] = "В задаче не будут использоваться входные/выходные данные."
tester_io_data_string[1] = "Тестировшику понятны все форматы входных и выходных данных для ендпоинтов."
tester_io_data_string[2] = "Тестировшику понятны только часть форматов входных и выходных данных для ендпоинтов."
tester_io_data_string[3] = "Тестировшику НЕ понятны форматы входных и выходных данных для ендпоинтов."
tester_io_data_string[5] = ""
tester_io_data_string[8] = ""
tester_io_data_string[13] = ""
//11.
export const tester_bug_report_string = new Array(13);
tester_bug_report_string[0] = ""
tester_bug_report_string[1] = "Составить от 1 до 10 баг-репортов."
tester_bug_report_string[2] = "Составить от 11 до 20 баг-репортов."
tester_bug_report_string[3] = "Составить от 21 до 30 баг-репортов."
tester_bug_report_string[5] = "Составить от 31 до 40 баг-репортов."
tester_bug_report_string[8] = "Составить от 41 до 50 баг-репортов."
tester_bug_report_string[13] = ""
//12.
export const tester_pages_string = new Array(13);
tester_pages_string[0] = "В задаче не требуется реализовывать новые функций-обработчиков событий / функций логики."
tester_pages_string[1] = "В задаче потребуется реализовать от 1 до 5 функций обработчиков событий / функций логики."
tester_pages_string[2] = "В задаче потребуется реализовать от 6 до 10 функций обработчиков событий / функций логики."
tester_pages_string[3] = "В задаче потребуется реализовать от 11 до 15 функций обработчиков событий / функций логики."
tester_pages_string[5] = "В задаче потребуется реализовать от 16 до 20 функций обработчиков событий / функций логики."
tester_pages_string[8] = "В задаче потребуется реализовать более 20 функций обработчиков событий / функций логики."
tester_pages_string[13] = ""




const TesterTable: React.FC = () => {

    const {TesterStore} = useStores();

    const accessFactor: string = tester_access_string[TesterStore.getAccessFactor()];
    const jobFactor: string = tester_job_string[TesterStore.getJobFactor()];
    const modelFactor: string = tester_model_string[TesterStore.getModelFactor()];
    const instrumentFactor: string = tester_instrument_string[TesterStore.getInstrumentFactor()];
    const infraFactor: string = tester_infra_string[TesterStore.getInfraFactor()];
    const specsFactor: string = tester_specs_string[TesterStore.getSpecsFactor()];
    const testDataFactor: string = tester_test_data_string[TesterStore.getTestDataFactor()];
    const testCaseFactor: string = tester_test_case_string[TesterStore.getTestCaseFactor()];
    const methodTestFactor: string = tester_method_test_string[TesterStore.getMethodTestFactor()];
    const ioDataFactor: string = tester_io_data_string[TesterStore.getIoDataFactor()];
    const bugReportFactor: string = tester_bug_report_string[TesterStore.getBugReportFactor()];
    const pagesFactor: string = tester_pages_string[TesterStore.getPagesFactor()];

    const columns: ColumnsType<DataType> = [
        {
            title: 'Наименование фактора',
            dataIndex: 'factorName',
        },
        {
            title: 'Вариант влияния фактора на итоговую трудоёмкость задачи',
            dataIndex: 'factorVariant',
        },
        {
            title: 'Сторипоинты варианта фактора',
            dataIndex: 'factorEstimate',
        },
    ];

    const data = [
        {
            key: '1',
            factorName: '1. Наличие необходимых лицензий и доступов к ресурсам инфрастуктуры:',
            factorVariant: accessFactor,
            factorEstimate: TesterStore.getAccessFactor().toString(),
        },
        {
            key: '2',
            factorName: '2. Уровень понимания задачи:',
            factorVariant: jobFactor,
            factorEstimate: TesterStore.getJobFactor().toString(),
        },
        {
            key: '3',
            factorName: '3. Уровень понимания модели данных:',
            factorVariant: modelFactor,
            factorEstimate: TesterStore.getModelFactor().toString(),
        },
        {
            key: '4',
            factorName: '3. Уровень владения инструментарием:',
            factorVariant: instrumentFactor,
            factorEstimate: TesterStore.getInstrumentFactor().toString(),
        },
        {
            key: '5',
            factorName: '4. Состояние инфраструктуры:',
            factorVariant: infraFactor,
            factorEstimate: TesterStore.getInfraFactor().toString(),
        },
        {
            key: '6',
            factorName: '5. Состояние спецификаций:',
            factorVariant: specsFactor,
            factorEstimate: TesterStore.getSpecsFactor().toString(),
        },
        {
            key: '7',
            factorName: '7. Уровень заполнения таблиц тестовыми данными:',
            factorVariant: testDataFactor,
            factorEstimate: TesterStore.getTestDataFactor().toString(),
        },
        {
            key: '8',
            factorName: '8. Количество тест-кейсов:',
            factorVariant: testCaseFactor,
            factorEstimate: TesterStore.getTestCaseFactor().toString(),
        },
        {
            key: '9',
            factorName: '9. Количество методов которые требуется протестировать:',
            factorVariant: methodTestFactor,
            factorEstimate: TesterStore.getMethodTestFactor().toString(),
        },
        {
            key: '10',
            factorName: '10. Уровень понимания структуры и содержания наборов входных/выходных данных:',
            factorVariant: ioDataFactor,
            factorEstimate: TesterStore.getIoDataFactor().toString(),
        },
        {
            key: '11',
            factorName: '11. Составление баг-репортов:',
            factorVariant: bugReportFactor,
            factorEstimate: TesterStore.getBugReportFactor().toString(),
        },
        {
            key: '6',
            factorName: '12. Готовность страниц, понимание их структуры и функционала:',
            factorVariant: pagesFactor,
            factorEstimate: TesterStore.getPagesFactor().toString(),
        },
        {
            key: '13',
            factorName: '',
            factorVariant: 'Сумма',
            factorEstimate: TesterStore.getAccum().toString(),
        },

    ];

    return <Table columns={columns} dataSource={data} pagination={false} />;
}

export default TesterTable;