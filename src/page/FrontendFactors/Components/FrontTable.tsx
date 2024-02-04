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
export const front_access_string:string[] = new Array(13);
front_access_string[0] = "У разработчика есть все необходимые доступы к ресурсам инфрастуктуры и лицензии."
front_access_string[1] = "У разработчика нет одного из доступов к ресурсам инфрастуктуры и/или лицензий, которые будет легко получить за незначительное время."
front_access_string[2] = "У разработчика нет доступа к нескольким ресурсам инфрастуктуры и/или лицензий, получить которые можно за 1-2 дня."
front_access_string[3] = "У разработчика нет доступа к половине ресурсов инфрастуктуры и/или лицензий, получить которые можно за 3-5 дней."
front_access_string[5] = "У разработчика нет доступа к большей части инфрастуктуры и/или лицензий, на получение этих доступов потребуется значителтное время."
front_access_string[8] = "У разработчика нет доступа к инфрастуктуре и/или лицензий, на получение этих доступов потребуется неопределённое время."
front_access_string[13] = ""
//2.
export const front_job_string = new Array(13);
front_job_string[0] = "Разработчику понятны формулировка задачи и бизнес логика, которую необходимо реализовать."
front_job_string[1] = "Разработчику не понятны небольшая часть описания задачи и некоторые функции бизнес логики, которую необходимо реализовать."
front_job_string[2] = "Разработчику не понятны примерно половина описания задачи и примерно половина функций бизнес логики, которую необходимо реализовать."
front_job_string[3] = "Разработчику не понятны бОльшая часть описания задачи и и бОльшая часть функции бизнес логики, которую необходимо реализовать."
front_job_string[5] = "Разработчику не понятны все описания задачи и все функции бизнес логики, которую необходимо реализовать."
front_job_string[8] = ""
front_job_string[13] = ""
//3.
export const front_instrument_string = new Array(13);
front_instrument_string[0] = "Из необходимых инструментов разработки, все хорошо знакомы разработчику и у него имеется достаточный опыт их использования."
front_instrument_string[1] = "Из необходимых инструментов разработки, все, кроме одного, хорошо знакомы разработчику, и у него имеется достаточный опыт их использования всех кроме одного."
front_instrument_string[2] = "Из необходимых инструменты разработки, большая часть знакомы разработчику, и у него имеется достаточный опыт их использования с остальными опыта нет или его недостаточно."
front_instrument_string[3] = "Из необходимых инструментов разработки, половина, хорошо знакомы разработчику, и у него имеется достаточный опыт их использования с остальными опыта нет или его недостаточно."
front_instrument_string[5] = "Из необходимых инструменты разработки, большая часть не знакомы и опыта их использования недостаточно."
front_instrument_string[8] = "Из необходимых инструментов разработки, все не знакомы и опыта их использования нет или недостаточно."
front_instrument_string[13] = ""
//4.
export const front_infra_string = new Array(13);
front_infra_string[0] = "Все элементы инфраструктуры корректно настроены и работают стабильно."
front_infra_string[1] = "Все элементы инфраструктуры корректно настроены но некоторые работают иногда не стабильно."
front_infra_string[2] = ""
front_infra_string[3] = "Некоторые элементы инфраструктуры настроены не вполне корректно и работают не стабильно."
front_infra_string[5] = ""
front_infra_string[8] = "Некоторые элементы инфраструктуры не корректно настроены и/или работают нестабильно."
front_infra_string[13] = ""
//5.
export const front_specs_string = new Array(13);
front_specs_string[0] = ""
front_specs_string[1] = "Все спецификации в наличии, их содержание полно и корректно."
front_specs_string[2] = "Все спецификации в наличии, но их содержание не полно и/или не корректно."
front_specs_string[3] = "Часть спецификаций отсутствует."
front_specs_string[5] = "Спецификаций нет."
front_specs_string[8] = ""
front_specs_string[13] = ""
//6.
export const front_pages_string = new Array(13);
front_pages_string[0] = "Дизайн страниц полностью готов, понятен и не будет меняться."
front_pages_string[1] = "Дизайн страниц готов, есть незначительное количество вопросо по его содержанию, но он не будет меняться."
front_pages_string[2] = "Дизайн всех страниц готов, но есть значительное количество вопросов по его содержанию и он возможно будет меняться."
front_pages_string[3] = "Дизайн некоторых страниц готов не полностью, есть много вопросов по его содержанию и он возможно будет меняться."
front_pages_string[5] = "Дизайн готов лишь для части страниц, есть много вопросов по его содержанию и он возможно будет меняться."
front_pages_string[8] = "Дизайн готов лишь некоторых страниц, есть много вопросов по его содержанию и он будет меняться."
front_pages_string[13] = "Дизайна страниц нет"
//7.
export const front_components_string = new Array(13);
front_components_string[0] = "В задаче не требуется разрабатывать новые сложные компоненты/страницы."
front_components_string[1] = "В задаче требуется разработать от 1 до 5 новых сложных компонентов/страниц."
front_components_string[2] = "В задаче требуется разработать от 6 до 10 новых сложных компонентов/страниц."
front_components_string[3] = "В задаче требуется разработать от 11 до 15 новых сложных компонентов/страниц."
front_components_string[5] = "В задаче требуется разработать от 16 до 20 новых сложных компонентов/страниц."
front_components_string[8] = "В задаче требуется разработать от 21 до 25 новых сложных компонентов/страниц."
front_components_string[13] = "В задаче требуется разработать более 25 новых сложных компонентов/страниц."
//8.
export const front_test_data_string = new Array(13);
front_test_data_string[0] = "Необходимые тестовые данные в таблицы внесены, они полны и корректны."
front_test_data_string[1] = ""
front_test_data_string[2] = "Часть необходимых тестовых данных в таблицы не внесены или они некорректны и/или не определена часть связей."
front_test_data_string[3] = ""
front_test_data_string[5] = "Необходимые тестовые данные в таблицах полностью отсутствуют."
front_test_data_string[8] = ""
front_test_data_string[13] = ""
//9.
export const front_endpoint_string = new Array(13);
front_endpoint_string[0] = "Все эндпоинты на бэке готовы и работают корректно."
front_endpoint_string[1] = "Все эндпоинты на бэке готовы но некоторые работают не вполне корректно."
front_endpoint_string[2] = "Некоторые эндпоинты на бэке ещё не готовы и некоторые работают не вполне корректно."
front_endpoint_string[3] = "Приблизительно половина эндпоинтов на бэке ещё не готовы и некоторые работают не вполне корректно."
front_endpoint_string[5] = "Большая часть эндпоинтов на бэке ещё не готовы или работают не корректно."
front_endpoint_string[8] = "Эндпоинты на бэке ещё не разработаны."
front_endpoint_string[13] = ""
//10.
export const front_func_string = new Array(13);
front_func_string[0] = "В задаче не требуется реализовывать новые функций-обработчиков событий / функций логики."
front_func_string[1] = "В задаче потребуется реализовать от 1 до 5 функций обработчиков событий / функций логики."
front_func_string[2] = "В задаче потребуется реализовать от 6 до 10 функций обработчиков событий / функций логики."
front_func_string[3] = "В задаче потребуется реализовать от 11 до 15 функций обработчиков событий / функций логики."
front_func_string[5] = "В задаче потребуется реализовать от 16 до 20 функций обработчиков событий / функций логики."
front_func_string[8] = "В задаче потребуется реализовать более 20 функций обработчиков событий / функций логики."
front_func_string[13] = ""
//11.
export const front_authorization_string = new Array(13);
front_authorization_string[0] = "В задаче не требуется реализовать авторизацию пользователя."
front_authorization_string[1] = "В задаче требуется реализовать простейший вид авторизации пользователя."
front_authorization_string[2] = "В задаче требуется реализовать авторизации пользователя невысокой степени надёжности."
front_authorization_string[3] = "В задаче требуется реализовать авторизации пользователя средней степени надёжности."
front_authorization_string[5] = "В задаче требуется реализовать авторизации пользователя высокой степени надёжности."
front_authorization_string[8] = "В задаче требуется реализовать авторизации пользователя максимально высокой степени надёжности."
front_authorization_string[13] = ""
//12.
export const front_io_data_string = new Array(13);
front_io_data_string[0] = "В задаче не будут использоваться входные/выходные данные."
front_io_data_string[1] = "Разработчику понятны все форматы входных и выходных данных для ендпоинтов."
front_io_data_string[2] = "Разработчику понятны только часть форматов входных и выходных данных для ендпоинтов."
front_io_data_string[3] = "Разработчику НЕ понятны форматы входных и выходных данных для ендпоинтов."
front_io_data_string[5] = ""
front_io_data_string[8] = ""
front_io_data_string[13] = ""
//13.
export const front_back_request_string = new Array(13);
front_back_request_string[0] = "В задаче не будут использоваться запросы данных с бекенда."
front_back_request_string[1] = "В задаче необходимо реализовать от 1 до 10 запросов данных с (отправки данных на) бекенда."
front_back_request_string[2] = "В задаче необходимо реализовать от 11 до 20 запросов данных с (отправки данных на) бекенда."
front_back_request_string[3] = "В задаче необходимо реализовать от 21 до 30 запросов данных с (отправки данных на) бекенда."
front_back_request_string[5] = "В задаче необходимо реализовать от 31 до 40 запросов данных с (отправки данных на) бекенда."
front_back_request_string[8] = "В задаче необходимо реализовать более 40 запросов данных с (отправки данных на) бекенда."
front_back_request_string[13] = ""
//14.
export const front_r_and_d_string = new Array(13);
front_r_and_d_string[0] = "В задаче не потребуется проводить исследование (R&D) работы новых модулей/библиотек/компонентов."
front_r_and_d_string[1] = "Потребуется провести исследование (R&D) работы одного-двух модулей/библиотек/компонентов."
front_r_and_d_string[2] = ""
front_r_and_d_string[3] = "Потребуется провести исследование (R&D) работы от 3 до 5 модулей/библиотек/компонентов."
front_r_and_d_string[5] = ""
front_r_and_d_string[8] = "Потребуется провести исследование (R&D) работы от 6 до 10 модулей/библиотек/компонентовх."
front_r_and_d_string[13] = "Потребуется провести исследование (R&D) работы более 10 модулей/библиотек/компонентовх."

const FrontTable: React.FC = () => {

    const {FrontStore} = useStores();

    const frontAccess: string = front_access_string[FrontStore.getFrontAccess()];
    const frontJob: string = front_job_string[FrontStore.getFrontJob()];
    const frontInstrument: string = front_instrument_string[FrontStore.getFrontInstrument()];
    const frontInfra: string = front_infra_string[FrontStore.getFrontInfra()];
    const frontSpecs: string = front_specs_string[FrontStore.getFrontSpecs()];
    const frontPages: string = front_pages_string[FrontStore.getFrontPages()];
    const frontComponents: string = front_components_string[FrontStore.getFrontComponents()];
    const frontTestData: string = front_test_data_string[FrontStore.getFrontTestData()];
    const frontEndpoint: string = front_endpoint_string[FrontStore.getFrontEndpoint()];
    const frontFunc: string = front_func_string[FrontStore.getFrontFunc()];
    const frontAuthorization: string = front_authorization_string[FrontStore.getFrontAuthorization()];
    const frontIoData: string = front_io_data_string[FrontStore.getFrontIoData()];
    const frontBackRequest: string = front_back_request_string[FrontStore.getFrontBackRequest()];
    const frontRAndD: string = front_r_and_d_string[FrontStore.getFrontRAndD()];

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
            key: '2',
            factorName: '1. Наличие необходимых лицензий и доступов к ресурсам инфрастуктуры:',
            factorVariant: frontAccess,
            factorEstimate: FrontStore.getFrontAccess().toString(),
        },
        {
            key: '3',
            factorName: '2. Уровень понимания задачи:',
            factorVariant: frontJob,
            factorEstimate: FrontStore.getFrontJob().toString(),
        },
        {
            key: '4',
            factorName: '3. Уровень владения инструментарием:',
            factorVariant: frontInstrument,
            factorEstimate: FrontStore.getFrontInstrument().toString(),
        },
        {
            key: '5',
            factorName: '4. Состояние инфраструктуры:',
            factorVariant: frontInfra,
            factorEstimate: FrontStore.getFrontInfra().toString(),
        },
        {
            key: '6',
            factorName: '5. Состояние спецификаций:',
            factorVariant: frontSpecs,
            factorEstimate: FrontStore.getFrontSpecs().toString(),
        },
        {
            key: '7',
            factorName: '6. Готовность дизайна страниц:',
            factorVariant: frontPages,
            factorEstimate: FrontStore.getFrontPages().toString(),
        },
        {
            key: '8',
            factorName: '7. Количество новых сложных компонентов/страниц, которые нужно разработать:',
            factorVariant: frontComponents,
            factorEstimate: FrontStore.getFrontComponents().toString(),
        },
        {
            key: '9',
            factorName: '8. Уровень заполнения таблиц тестовыми данными:',
            factorVariant: frontTestData,
            factorEstimate: FrontStore.getFrontTestData().toString(),
        },
        {
            key: '10',
            factorName: '9. Готовность эндпоинтов на бэкенде:',
            factorVariant: frontEndpoint,
            factorEstimate: FrontStore.getFrontEndpoint().toString(),
        },
        {
            key: '11',
            factorName: '10. Количество реализуемых функций-обработчиков событий/функций логики:',
            factorVariant: frontFunc,
            factorEstimate: FrontStore.getFrontFunc().toString(),
        },
        {
            key: '12',
            factorName: '11. Вариант реализации авторизации пользователя:',
            factorVariant: frontAuthorization,
            factorEstimate: FrontStore.getFrontAuthorization().toString(),
        },
        {
            key: '13',
            factorName: '12. Уровень понимания структуры и содержания наборов входных/выходных данных:',
            factorVariant: frontIoData,
            factorEstimate: FrontStore.getFrontIoData().toString(),
        },
        {
            key: '14',
            factorName: '13. Количество запросов данных с бэкенда:',
            factorVariant: frontBackRequest,
            factorEstimate: FrontStore.getFrontBackRequest().toString(),
        },
        {
            key: '15',
            factorName: '14. Возможность провести исследование (R&D) работы новых модулей/библиотек/компонентов:',
            factorVariant: frontRAndD,
            factorEstimate: FrontStore.getFrontRAndD().toString(),
        },
        {
            key: '16',
            factorName: '',
            factorVariant: 'Сумма',
            factorEstimate: FrontStore.getAccum().toString(),
        },
    ];

    return <Table columns={columns} dataSource={data} pagination={false} />;
}

export default FrontTable;