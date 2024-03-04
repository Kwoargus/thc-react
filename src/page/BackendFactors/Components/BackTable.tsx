import React from 'react';
import { Table } from 'antd';
import type { ColumnsType, TableProps } from 'antd/es/table';
import {useStores} from "../../../stores";

interface DataType {
    key: React.Key;
    factorName: string;
    factorVariant: string;
    factorEstimate: string;
}

export const back_access_string = new Array(13);
back_access_string[0] = "У разработчика есть все необходимые доступы к ресурсам инфрастуктуры и лицензии.";
back_access_string[1] = "У разработчика нет одного из доступов к ресурсам инфрастуктуры и/или лицензий, которые будет легко получить за незначительное время.";
back_access_string[2] = "У разработчика нет доступа к нескольким ресурсам инфрастуктуры и/или лицензий, получить которые можно за 1-2 дня.";
back_access_string[3] = "У разработчика нет доступа к половине ресурсов инфрастуктуры и/или лицензий, получить которые можно за 3-5 дней.";
back_access_string[5] = "У разработчика нет доступа к большей части инфрастуктуры и/или лицензий, на получение этих доступов потребуется значителтное время.";
back_access_string[8] = "У разработчика нет доступа к инфрастуктуре и нет лицензий, на получение этих доступов потребуется много время.";
back_access_string[13] = "";
//2.
export const back_job_string = new Array(13);
back_job_string[0] = "Разработчику понятны формулировка задачи и бизнес логика, которую необходимо реализовать.";
back_job_string[1] = "Разработчику не понятны небольшая часть описания задачи и некоторые функции бизнес логики, которую необходимо реализовать.";
back_job_string[2] = "Разработчику не понятны примерно половина описания задачи и примерно половина функций бизнес логики, которую необходимо реализовать.";
back_job_string[3] = "Разработчику не понятны бОльшая часть описания задачи и и бОльшая часть функции бизнес логики, которую необходимо реализовать.";
back_job_string[5] = "Разработчику не понятны все описания задачи и все функции бизнес логики, которую необходимо реализовать.";
back_job_string[8] = "";
back_job_string[13] = "";
//3.
export const back_model_string = new Array(13);
back_model_string[0] = "Разработчику понятна структура модели данных и атрибутивный состав таблиц.";
back_model_string[1] = "Разработчику не понятна небольшая часть структуры модели данных и/или назначение некоторых атрибутов.";
back_model_string[2] = "Разработчику не понятна примерно половина структуры модели данных и/или назначение половины атрибутов.";
back_model_string[3] = "Разработчику не понятна бОльшая часть структуры модели данных и/или назначение бОльшей части атрибутов.";
back_model_string[5] = "Разработчику не понятна вся структура модели данных и атрибутивный состав таблиц.";
back_model_string[8] = "";
back_model_string[13] = "";
//4.
export const back_instrument_string = new Array(13);
back_instrument_string[0] = "Из необходимых инструментов разработки, все хорошо знакомы разработчику и у него имеется достаточный опыт их использования.";
back_instrument_string[1] = "Из необходимых инструментов разработки, все, кроме одного, хорошо знакомы разработчику, и у него имеется достаточный опыт их использования всех кроме одного.";
back_instrument_string[2] = "Из необходимых инструменты разработки, большая часть знакомы разработчику, и у него имеется достаточный опыт их использования с остальными опыта нет или его недостаточно.";
back_instrument_string[3] = "Из необходимых инструменты разработки, половина, хорошо знакомы разработчику, и у него имеется достаточный опыт их использования с остальными опыта нет или его недостаточно.";
back_instrument_string[5] = "Из необходимых инструменты разработки, большая часть не знакомы и опыта их использования недостаточно.";
back_instrument_string[8] = "Из необходимых инструменты разработки, все не знакомы и опыта их использования нет.";
back_instrument_string[13] = "";
//5.
export const back_infra_string = new Array(13);
back_infra_string[0] = "Все элементы инфраструктуры корректно настроены и работают стабильно.";
back_infra_string[1] = "Все элементы инфраструктуры корректно настроены но некоторые работают иногда не стабильно.";
back_infra_string[2] = "";
back_infra_string[3] = "Некоторые элементы инфраструктуры настроены не вполне корректно и работают не стабильно.";
back_infra_string[5] = "";
back_infra_string[8] = "Некоторые элементы инфраструктуры не корректно настроены и работают нестабильно.";
back_infra_string[13] = "";
//6.
export const back_specs_string = new Array(13);
back_specs_string[0] = "В задаче спецификации не потребуются";
back_specs_string[1] = "Все спецификации в наличии, их содержание полно и корректно.";
back_specs_string[2] = "Все спецификаци в наличии, но их содержание не полно и/или не корректно.";
back_specs_string[3] = "Часть спецификаций отсутствует.";
back_specs_string[5] = "Спецификации полностью отсутствуют.";
back_specs_string[8] = "";
back_specs_string[13] = "";
//7.
export const back_tables_string = new Array(13);
back_tables_string[0] = "Все таблицы в БД созданы, атрибутивный состав полон и корректен и все необходимые связи по ключам определены.";
back_tables_string[1] = "Все таблицы в БД созданы, но их атрибутивный состав не полон и/или не корректен и/или не все необходимые связи по ключам определены.";
back_tables_string[2] = "Небольшая часть таблиц в БД не созданы, их атрибутивный состав ещё не сформирован.";
back_tables_string[3] = "Примерно половина таблиц в БД не созданы, их атрибутивный состав ещё не сформирован.";
back_tables_string[5] = "Большая часть таблиц в БД не созданы, их атрибутивный состав ещё не сформирован.";
back_tables_string[8] = "Таблицы в БД не созданы, их атрибутивный состав неопределён.";
back_tables_string[13] = "";
//8.
export const back_test_data_string = new Array(13);
back_test_data_string[0] = "Необходимые тестовые данные в таблицы внесены, они полны и корректны.";
back_test_data_string[1] = "";
back_test_data_string[2] = "Часть необходимых тестовых данных в таблицы не внесены или некорректны и/или не определена часть связей.";
back_test_data_string[3] = "";
back_test_data_string[5] = "Необходимые тестовые данные в таблицах полностью отсутствуют.";
back_test_data_string[8] = "";
back_test_data_string[13] = "";
//9.
export const back_entity_string = new Array(13);
back_entity_string[0] = "В задаче не требуется разрабатывать сущностные классы.";
back_entity_string[1] = "В задаче требуется разработать от 1 до 10 сущностных классов.";
back_entity_string[2] = "В задаче требуется разработать от 11 до 20 сущностных классов.";
back_entity_string[3] = "В задаче требуется разработать от 21 до 30 сущностных классов.";
back_entity_string[5] = "В задаче требуется разработать от 31 до 40 сущностных классов.";
back_entity_string[8] = "В задаче требуется разработать от 41 до 50 сущностных классов.";
back_entity_string[13] = "";
//10.
export const back_biz_func_string = new Array(13);
back_biz_func_string[0] = "В задаче не будут реализовываться функции бизнес/прикладной логики.";
back_biz_func_string[1] = "В бизнес логике задачи потребуется реализовать от 1 до 10 функции бизнес/прикладной логики.";
back_biz_func_string[2] = "В бизнес логике задачи потребуется реализовать от 11 до 20 функции бизнес/прикладной логики.";
back_biz_func_string[3] = "В бизнес логике задачи потребуется реализовать от 21 до 30 функции бизнес/прикладной логики.";
back_biz_func_string[5] = "В бизнес логике задачи потребуется реализовать от 31 до 40 функции бизнес/прикладной логики.";
back_biz_func_string[8] = "В бизнес логике задачи потребуется реализовать от 41 до 50 функции бизнес/прикладной логики.";
back_biz_func_string[13] = "";
//11.
export const back_end_point_string = new Array(13);
back_end_point_string[0] = "В задаче не будут реализовываться ендпоинты.";
back_end_point_string[1] = "Потребуется реализовать API с количеством ендпоинтов от 1 до 10.";
back_end_point_string[2] = "Потребуется реализовать API с количеством ендпоинтов от 11 до 20.";
back_end_point_string[3] = "Потребуется реализовать API с количеством ендпоинтов от 21 до 30.";
back_end_point_string[5] = "Потребуется реализовать API с количеством ендпоинтов от 31 до 40.";
back_end_point_string[8] = "Потребуется реализовать API с количеством ендпоинтов от 41 до 50.";
back_end_point_string[13] = "";
//12.
export const back_io_data_string = new Array(13);
back_io_data_string[0] = "В задаче не будут использоваться входные/выходные данные.";
back_io_data_string[1] = "Разработчику понятны все форматы входных и выходных данных для ендпоинтов / брокера сообщений / web-клиента.";
back_io_data_string[2] = "Разработчику понятны только часть форматов входных и выходных данных для ендпоинтов / брокера сообщений / web-клиента.";
back_io_data_string[3] = "Разработчику НЕ понятны форматы входных и выходных данных для ендпоинтов / брокера сообщений / web-клиента.";
back_io_data_string[5] = "";
back_io_data_string[8] = "";
back_io_data_string[13] = "";
//13.
export const back_web_client_string = new Array(13);
back_web_client_string[0] = "В задаче не будут реализовываться REST вызовы смежных сервисов с помощью web-слиентов.";
back_web_client_string[1] = "Потребуется реализовать REST вызовы смежных сервисов с помощью web-слиентов в от 1 до 10 бизнес-функций.";
back_web_client_string[2] = "Потребуется реализовать REST вызовы смежных сервисов с помощью web-слиентов в от 11 до 20 бизнес-функций.";
back_web_client_string[3] = "Потребуется реализовать REST вызовы смежных сервисов с помощью web-слиентов в от 21 до 30 бизнес-функций.";
back_web_client_string[5] = "Потребуется реализовать REST вызовы смежных сервисов с помощью web-слиентов в от 31 до 40 бизнес-функций.";
back_web_client_string[8] = "Потребуется реализовать REST вызовы смежных сервисов с помощью web-слиентов в от 41 до 50 бизнес-функций.";
back_web_client_string[13] = "";
//14.
export const back_brocker_string = new Array(13);
back_brocker_string[0] = "В задаче не требуется реализовывать передачу/получение сообщений через брокера.";
back_brocker_string[1] = "Потребуется реализовать передачу/получение сообщений в/от брокера в от 1 до 10 бизнес-функцях.";
back_brocker_string[2] = "Потребуется реализовать передачу/получение сообщений в/от брокера в от 11 до 20 бизнес-функцях.";
back_brocker_string[3] = "Потребуется реализовать передачу/получение сообщений в/от брокера в от 21 до 30 бизнес-функцях.";
back_brocker_string[5] = "Потребуется реализовать передачу/получение сообщений в/от брокера в от 31 до 40 бизнес-функцях.";
back_brocker_string[8] = "Потребуется реализовать передачу/получение сообщений в/от брокера в от 41 до 50 бизнес-функцях.";
back_brocker_string[13] = "";
//15.
export const back_r_and_d_string = new Array(13);
back_r_and_d_string[0] = "В задаче не потребуется проводить исследование (R&D) работы новых модулей/библиотек/компонентов.";
back_r_and_d_string[1] = "Потребуется провести исследование (R&D) работы одного-двух модулей/библиотек/компонентов.";
back_r_and_d_string[2] = "";
back_r_and_d_string[3] = "Потребуется провести исследование (R&D) работы от 3 до 5 модулей/библиотек/компонентов.";
back_r_and_d_string[5] = "";
back_r_and_d_string[8] = "Потребуется провести исследование (R&D) работы от 6 до 10 модулей/библиотек/компонентовх.";
back_r_and_d_string[13] = "Потребуется провести исследование (R&D) работы более 10 модулей/библиотек/компонентовх.";
//16.
export const back_unit_test_string = new Array(13);
back_unit_test_string[0] = "Покрывать unit-тестами методы не требуется.";
back_unit_test_string[1] = "Покрывать unit-тестами требуется лишь единичные методы.";
back_unit_test_string[2] = "Покрыть тестами необходимо менее 30 % методов.";
back_unit_test_string[3] = "Покрыть тестами необходимо от 30 до 50 % методов.";
back_unit_test_string[5] = "Покрыть тестами необходимо от 50 до 70 % методов.";
back_unit_test_string[8] = "Покрыть тестами необходимо от 70 до 90 % методов.";
back_unit_test_string[13] = "";
//17.
export const back_log_string = new Array(13);
back_log_string[0] = "Логировать события/методы не требуется.";
back_log_string[1] = "Требуется логировать единичные события/методы.";
back_log_string[2] = "Требуется логировать меньшую часть событий/методов.";
back_log_string[3] = "Требуется логировать примерно половину событий/методов.";
back_log_string[5] = "Требуется логировать большую часть событий/методов.";
back_log_string[8] = "Требуется логировать почти все события/методы.";
back_log_string[13] = "";
//18.
export const back_migration_string = new Array(13);
back_migration_string[0] = "Создавать скрипты миграции не требуется.";
back_migration_string[1] = "Создавать потребуется лишь единичные скрипты миграции.";
back_migration_string[2] = "Создавать потребуется небольшое количество скриптов миграции.";
back_migration_string[3] = "Создавать потребуется умеренное количество скриптов миграции.";
back_migration_string[5] = "Создавать потребуется большое количество скриптов миграции.";
back_migration_string[8] = "Создавать потребуется очень большое количество скриптов миграции.";
back_migration_string[13] = "";
//19.
export const back_comments_string = new Array(13);
back_comments_string[0] = "Писать комментарии не потребуется.";
back_comments_string[1] = "Требуется писать комментарии только для самых алгоритмически сложных фрагментов кода.";
back_comments_string[2] = "Требуется писать комментарии для алгоритмически сложных фрагментов кода, а так же для сигнатур классов и методов."
back_comments_string[3] = "Требуется писать комментарии для сигнатур классов и методов, логически обособленных блоков кода и для алгоритмически сложных фрагментов кода.";
back_comments_string[5] = "Требуется писать комментарии для заголовков классов, полей класса, сигнатур методов локальных переменных, логически обособленных блоков кода и для алгоритмически сложных фрагментов кода."
back_comments_string[8] = "Требуется писать комментарии для большинства строк кода.";
back_comments_string[13] = "";




const BackTable: React.FC = () => {

    const {BackStore} = useStores();

    const accessFactor :string = back_access_string[BackStore.getAccessFactor()];
    const jobFactor :string = back_job_string[BackStore.getJobFactor()];
    const modelFactor :string = back_model_string[BackStore.getModelFactor()];
    const instrumentFactor :string = back_instrument_string[BackStore.getInstrumentFactor()];
    const infraFactor :string = back_infra_string[BackStore.getInfraFactor()];
    const specsFactor :string = back_specs_string[BackStore.getSpecsFactor()];
    const tablesFactor :string = back_tables_string[BackStore.getTablesFactor()];
    const testDataFactor :string = back_test_data_string[BackStore.getTestDataFactor()];
    const entityFactor :string = back_entity_string[BackStore.getEntityFactor()];
    const bizFunkFactor :string = back_biz_func_string[BackStore.getBizFuncFactor()];
    const endPointFactor :string = back_end_point_string[BackStore.getEndPointFactor()];
    const ioDataFactor :string = back_io_data_string[BackStore.getIoDataFactor()];
    const webClientFactor :string = back_web_client_string[BackStore.getWebClientFactor()];
    const brockerFactor :string = back_brocker_string[BackStore.getBrockerFactor()];
    const rAndDFactor :string = back_r_and_d_string[BackStore.getRandDFactor()];
    const unitTestFactor :string = back_unit_test_string[BackStore.getUnitTestFactor()];
    const logFactor :string = back_log_string[BackStore.getLogFactor()];
    const migrationFactor :string = back_migration_string[BackStore.getMigrationFactor()];
    const commentsFactor :string = back_comments_string[BackStore.getCommentsFactor()];

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
            factorName: '1. Наличие необходимых лицензий и доступов к ресурсам инфрастуктуры.',
            factorVariant: accessFactor,
            factorEstimate: BackStore.getAccessFactor().toString(),
        },
        {
            key: '2',
            factorName: '2. Уровень понимания задачи',
            factorVariant: jobFactor,
            factorEstimate: BackStore.getJobFactor().toString(),
        },
        {
            key: '3',
            factorName: '3. Уровень понимания модели данных',
            factorVariant: modelFactor,
            factorEstimate: BackStore.getModelFactor().toString(),
        },
        {
            key: '4',
            factorName: '4. Уровень владения инструментарием',
            factorVariant: instrumentFactor,
            factorEstimate: BackStore.getInstrumentFactor().toString(),
        },
        {
            key: '5',
            factorName: '5. Вариант состояния инфраструктуры',
            factorVariant: infraFactor ,
            factorEstimate: BackStore.getInfraFactor().toString(),
        },
        {
            key: '6',
            factorName: '6. Вариант состояния спецификаций',
            factorVariant: specsFactor,
            factorEstimate: BackStore.getSpecsFactor().toString(),
        },
        {
            key: '7',
            factorName: '7. Степень готовности таблиц в БД',
            factorVariant: tablesFactor,
            factorEstimate: BackStore.getTablesFactor().toString(),
        },
        {
            key: '8',
            factorName: '8. Вариант уровня заполнения таблиц тестовыми данными',
            factorVariant: testDataFactor,
            factorEstimate: BackStore.getTestDataFactor().toString(),
        },
        {
            key: '9',
            factorName: '9. Вариант количесва сущностей',
            factorVariant: entityFactor,
            factorEstimate: BackStore.getEntityFactor().toString(),
        },
        {
            key: '10',
            factorName: '10. Количество реализуемых бизнес-функций',
            factorVariant: bizFunkFactor,
            factorEstimate: BackStore.getBizFuncFactor().toString(),
        },
        {
            key: '11',
            factorName: '11. Количество реализуемых ендпоинтов',
            factorVariant: endPointFactor,
            factorEstimate: BackStore.getEndPointFactor().toString(),
        },
        {
            key: '12',
            factorName: '12. Уровень понимания структуры и содержания наборов входных/выходных данных',
            factorVariant: ioDataFactor,
            factorEstimate: BackStore.getIoDataFactor().toString(),
        },
        {
            key: '13',
            factorName: '13. Использование REST вызовов смежных сервисов с помощью web-слиентов',
            factorVariant: webClientFactor,
            factorEstimate: BackStore.getWebClientFactor().toString(),
        },
        {
            key: '14',
            factorName: '14. Количество случаев использования брокера сообщений',
            factorVariant: brockerFactor,
            factorEstimate: BackStore.getBrockerFactor().toString(),
        },
        {
            key: '15',
            factorName: '15. Вариант возможности провести исследование (R&D) работы новых модулей/библиотек/компонентов',
            factorVariant: rAndDFactor,
            factorEstimate: BackStore.getRandDFactor().toString(),
        },
        {
            key: '16',
            factorName: '16. Уровень покрытия методов unit-тестами',
            factorVariant: unitTestFactor,
            factorEstimate: BackStore.getUnitTestFactor().toString(),
        },
        {
            key: '17',
            factorName: '17. Уровень покрытия методов логами',
            factorVariant: logFactor,
            factorEstimate: BackStore.getLogFactor().toString(),
        },
        {
            key: '18',
            factorName: '18. Вариант создания скриптов миграции',
            factorVariant: migrationFactor,
            factorEstimate: BackStore.getMigrationFactor().toString(),
        },
        {
            key: '19',
            factorName: '19. Вариант степени подробности комментирования кода',
            factorVariant: commentsFactor,
            factorEstimate: BackStore.getCommentsFactor().toString(),
        },
        {
            key: '20',
            factorName: '',
            factorVariant: 'Сумма',
            factorEstimate: BackStore.getAccum().toString().toString(),
        }
    ];

    return <Table columns={columns} dataSource={data}></Table>;
}

export default BackTable;