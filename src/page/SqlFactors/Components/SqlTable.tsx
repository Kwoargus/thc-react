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
export const sqldev_access_string:string[] = new Array(13);
sqldev_access_string[0] = "У sql-разработчика есть все необходимые доступы к ресурсам инфрастуктуры и лицензии.";
sqldev_access_string[1] = "У sql-разработчика нет одного из доступов к ресурсам инфрастуктуры и/или лицензий, которые будет легко получить за незначительное время.";
sqldev_access_string[2] = "У sql-разработчика нет доступа к нескольким ресурсам инфрастуктуры и/или лицензий, получить которые можно за 1-2 дня.";
sqldev_access_string[3] = "У sql-разработчика нет доступа к половине ресурсов инфрастуктуры и/или лицензий, получить которые можно за 3-5 дней.";
sqldev_access_string[5] = "У sql-разработчика нет доступа к большей части инфрастуктуры и/или лицензий, получить которые можно за 6-9 дней.";
sqldev_access_string[8] = "У sql-разработчика нет никаких доступов к инфрастуктуре и/или лицензий, на получение этих доступов потребуется более 10 дней.";
sqldev_access_string[13] = "";

//2.
export const sqldev_job_string:string[] = new Array(13);
sqldev_job_string[0] = "sql-разработчику понятно описание задачи и все функции бизнес логики, которые необходимо разработать.";
sqldev_job_string[1] = "sql-разработчику не понятны небольшая часть описания задачи и некоторые функции бизнес логики, которую необходимо разработать.";
sqldev_job_string[2] = "sql-разработчику не понятны примерно половина описания задачи и примерно половина функций бизнес логики, которую необходимо разработать.";
sqldev_job_string[3] = "sql-разработчику не понятны примерно половина описания задачи и бОльшая часть функции бизнес логики, которую необходимо разработать.";
sqldev_job_string[5] = "sql-разработчику не понятны бОльшая часть описания задачи и бОльшая часть функции бизнес логики, которую необходимо разработать.";
sqldev_job_string[8] = "sql-разработчику не понятны все описания задачи и все функции бизнес логики, которую необходимо разработать.";
sqldev_job_string[13] = "";

//3.
export const sqldev_model_string:string[] = new Array(13);
sqldev_model_string[0] = "sql-разработчику понятна структура модели данных и атрибутивный состав таблиц.";
sqldev_model_string[1] = "sql-разработчику не понятна небольшая часть структуры модели данных и/или назначение некоторых атрибутов.";
sqldev_model_string[2] = "sql-разработчику не понятна примерно половина структуры модели данных и/или назначение половины атрибутов.";
sqldev_model_string[3] = "sql-разработчику не понятна бОльшая часть структуры модели данных и/или назначение бОльшей части атрибутов.";
sqldev_model_string[5] = "sql-разработчику не понятна вся структура модели данных и атрибутивный состав таблиц.";
sqldev_model_string[8] = "";
sqldev_model_string[13] = "";

//4.
export const sqldev_tables_string:string[] = new Array(13);
sqldev_tables_string[0] = "Не требуется разрабатывать структуру таблиц.";
sqldev_tables_string[1] = "Требуется разработать структуру от 1 до 10 таблиц.";
sqldev_tables_string[2] = "Требуется разработать структуру от 11 до 20 таблиц.";
sqldev_tables_string[3] = "Требуется разработать структуру от 21 до 30 таблиц.";
sqldev_tables_string[5] = "Требуется разработать структуру от 31 до 40 таблиц.";
sqldev_tables_string[8] = "Требуется разработать структуру от 41 до 50 таблиц.";
sqldev_tables_string[13] = "Требуется разработать структуру от 51 и более таблиц.";

//5.
export const sqldev_instrument_string:string[] = new Array(13);
sqldev_instrument_string[0] = "Из необходимых инструментов анализа, все хорошо знакомы аналитику и у него имеется достаточный опыт их использования.";
sqldev_instrument_string[1] = "Из необходимых инструментов анализа, все, кроме одного, хорошо знакомы аналитику, и у него имеется достаточный опыт использования всех кроме одного.";
sqldev_instrument_string[2] = "";
sqldev_instrument_string[3] = "Из необходимых инструменты анализа, половина, хорошо знакомы аналитику, и у него имеется достаточный опыт их использования с остальными опыта нет или его недостаточно.";
sqldev_instrument_string[5] = "";
sqldev_instrument_string[8] = "Из необходимых инструменты анализа, все не знакомы и опыта их использования нет или недостаточно.";
sqldev_instrument_string[13] = "";

//6.
export const sqldev_specs_string:string[] = new Array(13);
sqldev_specs_string[0] = "Спецификация не требуется.";
sqldev_specs_string[1] = "Спецификация имеется в наличии, она полна и корректна.";
sqldev_specs_string[2] = "Спецификация имеется в наличии, она не полна или не во всём корректна.";
sqldev_specs_string[3] = "Спецификация имеется в наличии, но она не полна и не во всём корректна.";
sqldev_specs_string[5] = "Спецификация имеется в наличии, но она фрагментарна и во многом не корректна.";
sqldev_specs_string[8] = "Спецификация имеется в наличии, но она описывает малую часть задачи и по большей части не корректна.";
sqldev_specs_string[13] = "Спецификация необходима, но полностью отсутствует.";

//7.
export const sqldev_view_string:string[] = new Array(13);
sqldev_view_string[0] = "Не требуется разрабатывать представления.";
sqldev_view_string[1] = "Требуется разработать от 1 до 3 представлений.";
sqldev_view_string[2] = "Требуется разработать от 4 до 6 представлений.";
sqldev_view_string[3] = "Требуется разработать от 7 до 9 представлений.";
sqldev_view_string[5] = "Требуется разработать от 10 до 12 представлений.";
sqldev_view_string[8] = "Требуется разработать от 13 до 15 представлений.";
sqldev_view_string[13] = "Требуется разработать от 16 и более представлений.";

//8.
export const sqldev_func_string:string[] = new Array(13);
sqldev_func_string[0] = "Не требуется разрабатывать функции.";
sqldev_func_string[1] = "Требуется разработать от 1 до 3 функций.";
sqldev_func_string[2] = "Требуется разработать от 4 до 6 функций.";
sqldev_func_string[3] = "Требуется разработать от 7 до 9 функций.";
sqldev_func_string[5] = "Требуется разработать от 10 до 12 функций.";
sqldev_func_string[8] = "Требуется разработать от 13 до 15 функций.";
sqldev_func_string[13] = "Требуется разработать от 16 и более  функций.";

//9.
export const sqldev_trigg_string:string[] = new Array(13);
sqldev_trigg_string[0] = "Не требуется разрабатывать триггеры.";
sqldev_trigg_string[1] = "Требуется разработать от 1 до 3 триггеров.";
sqldev_trigg_string[2] = "Требуется разработать от 4 до 6 триггеров.";
sqldev_trigg_string[3] = "Требуется разработать от 7 до 9 триггеров.";
sqldev_trigg_string[5] = "Требуется разработать от 10 до 12 триггеров.";
sqldev_trigg_string[8] = "Требуется разработать от 13 до 15 триггеров.";
sqldev_trigg_string[13] = "Требуется разработать от 16 и более  триггеров.";

//10.
export const sqldev_history_string:string[] = new Array(13);
sqldev_history_string[0] = "Не требуется хранить историю изменения данных.";
sqldev_history_string[1] = "Требуется хранить историю изменения данных малой части таблиц.";
sqldev_history_string[2] = "Требуется хранить историю изменения данных значительной части таблиц.";
sqldev_history_string[3] = "Требуется хранить историю изменения данных примерно для половины таблиц.";
sqldev_history_string[5] = "Требуется хранить историю изменения данных большей части таблиц.";
sqldev_history_string[8] = "Требуется хранить историю изменения данных всех таблиц.";
sqldev_history_string[13] = "";

//11.
export const sqldev_optimize_string:string[] = new Array(13);
sqldev_optimize_string[0] = "Не требуется выполнять оптимизацию запросов.";
sqldev_optimize_string[1] = "Требуется оптимизировать от 1 до 5 запросов.";
sqldev_optimize_string[2] = "Требуется оптимизировать от 6 до 10 запросов.";
sqldev_optimize_string[3] = "Требуется оптимизировать от 11 до 15 запросов.";
sqldev_optimize_string[5] = "Требуется оптимизировать от 16 до 20 запросов.";
sqldev_optimize_string[8] = "Требуется оптимизировать от 21 до 25 запросов.";
sqldev_optimize_string[13] = "Требуется оптимизировать от 26 и более запросов.";

//12.
export const sqldev_partition_string:string[] = new Array(13);
sqldev_partition_string[0] = "Не требуется выполнять партиционирование.";
sqldev_partition_string[1] = "Требуется выполнить партиционирование от 1 до 5 таблиц.";
sqldev_partition_string[2] = "Требуется выполнить партиционирование от 6 до 10 таблиц.";
sqldev_partition_string[3] = "Требуется выполнить партиционирование от 11 до 15 таблиц.";
sqldev_partition_string[5] = "Требуется выполнить партиционирование от 16 до 20 таблиц.";
sqldev_partition_string[8] = "Требуется выполнить партиционирование от 21 до 25 таблиц.";
sqldev_partition_string[13] = "Требуется выполнить партиционирование от 26 и более таблиц.";

//13.
export const sqldev_archive_string:string[] = new Array(13);
sqldev_archive_string[0] = "Не требуется выполнять архивирование.";
sqldev_archive_string[1] = "Требуется выполнить архивирование от 1 до 5 таблиц.";
sqldev_archive_string[2] = "Требуется выполнить архивирование от 6 до 10 таблиц.";
sqldev_archive_string[3] = "Требуется выполнить архивирование от 11 до 15 таблиц.";
sqldev_archive_string[5] = "Требуется выполнить архивирование от 16 до 20 таблиц.";
sqldev_archive_string[8] = "Требуется выполнить архивирование от 21 до 25 таблиц.";
sqldev_archive_string[13] = "Требуется выполнить архивирование от 26 и более таблиц.";

//14.
export const sqldev_clean_string:string[] = new Array(13);
sqldev_clean_string[0] = "Очистка от устаревших данных не требуется";
sqldev_clean_string[1] = "Очистка от устаревших данных требуется для небольшой части таблиц.";
sqldev_clean_string[2] = "Очистка от устаревших данных требуется для примерно половины таблиц.";
sqldev_clean_string[3] = "Очистка от устаревших данных требуется для большинства таблиц.";
sqldev_clean_string[5] = "Очистка от устаревших данных требуется для всех таблиц.";
sqldev_clean_string[8] = "";
sqldev_clean_string[13] = "";

//15.
export const sqldev_test_data_string:string[] = new Array(13);
sqldev_test_data_string[0] = "Вносить тестовые данные и контролировать их полноту и корректность не требуется.";
sqldev_test_data_string[1] = "Необходимо вносить тестовые данные в небольшое количество таблиц, а также требуется контролировать их полноту и корректность.";
sqldev_test_data_string[2] = "Необходимо вносить тестовые данные примерно в половину таблиц, а также требуется контролировать их полноту и корректность.";
sqldev_test_data_string[3] = "Необходимо вносить тестовые данные в бОльшую таблиц, а также требуется контролировать их полноту и корректность.";
sqldev_test_data_string[5] = "Необходимо вносить тестовые данные во все таблицы, а также требуется контролировать их полноту и корректность.";
sqldev_test_data_string[8] = "";
sqldev_test_data_string[13] = "";

//16.
export const sqldev_migration_data_string:string[] = new Array(13);
sqldev_migration_data_string[0] = "Вести скрипты миграции не требуется.";
sqldev_migration_data_string[1] = "Необходимо вести скрипты миграции для небольшого количества таблиц.";
sqldev_migration_data_string[2] = "Необходимо вести скрипты миграции примерно для половины таблиц.";
sqldev_migration_data_string[3] = "Необходимо вести скрипты миграции для бОльшей части таблиц.";
sqldev_migration_data_string[5] = "Необходимо вести скрипты миграции для всех таблиц.";
sqldev_migration_data_string[8] = "";
sqldev_migration_data_string[13] = "";

const SqlTable: React.FC = () => {

    const {SqlStore} = useStores();

    const accessFactor: string = sqldev_access_string[SqlStore.getAccessFactor()];
    const jobFactor: string = sqldev_job_string[SqlStore.getJobFactor()];
    const modelFactor: string = sqldev_model_string[SqlStore.getModelFactor()];
    const instrumentFactor: string = sqldev_instrument_string[SqlStore.getInstrumentFactor()];
    const tableFactor: string = sqldev_tables_string[SqlStore.getTablesFactor()];
    const specsFactor: string = sqldev_specs_string[SqlStore.getSpecsFactor()];
    const viewFactor: string = sqldev_view_string[SqlStore.getViewFactor()];
    const funcFactor: string = sqldev_func_string[SqlStore.getFuncFactor()];
    const triggFactor: string = sqldev_trigg_string[SqlStore.getTriggFactor()];
    const historyFactor: string = sqldev_history_string[SqlStore.getHistoryFactor()];
    const optimizeFactor: string = sqldev_optimize_string[SqlStore.getOptimizeFactor()];
    const partitionFactor: string = sqldev_partition_string[SqlStore.getPartitionFactor()];
    const archiveFactor: string = sqldev_archive_string[SqlStore.getArchiveFactor()];
    const cleanFactor: string = sqldev_clean_string[SqlStore.getCleanFactor()];
    const testDataFactor: string = sqldev_test_data_string[SqlStore.getTestDataFactor()];
    const migrationDataFactor: string = sqldev_migration_data_string[SqlStore.getMigrationDataFactor()];

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
            factorEstimate: SqlStore.getAccessFactor().toString(),
        },
        {
            key: '2',
            factorName: '2. Уровень понимания задачи:',
            factorVariant: jobFactor,
            factorEstimate: SqlStore.getJobFactor().toString(),
        },
        {
            key: '3',
            factorName: '3. Модель данных:',
            factorVariant: modelFactor,
            factorEstimate: SqlStore.getModelFactor().toString(),
        },
        {
            key: '4',
            factorName: '4. Владение необходимым инструментарием:',
            factorVariant: instrumentFactor,
            factorEstimate: SqlStore.getInstrumentFactor().toString(),
        },
        {
            key: '5',
            factorName: '5. Состояние спецификаций:',
            factorVariant: tableFactor,
            factorEstimate: SqlStore.getTablesFactor().toString(),
        },
        {
            key: '6',
            factorName: '6. Наличме, полнота и корректность спецификаций:',
            factorVariant: specsFactor,
            factorEstimate: SqlStore.getSpecsFactor().toString(),
        },
        {
            key: '7',
            factorName: '7. Разработка представлений (вью):',
            factorVariant: viewFactor,
            factorEstimate: SqlStore.getViewFactor().toString(),
        },
        {
            key: '8',
            factorName: '8. Разработка функций:',
            factorVariant: funcFactor,
            factorEstimate: SqlStore.getFuncFactor().toString(),
        },
        {
            key: '9',
            factorName: '9. Разработка триггеров:',
            factorVariant: triggFactor,
            factorEstimate: SqlStore.getTriggFactor().toString(),
        },
        {
            key: '10',
            factorName: '10. Хранение истории изменения данных:',
            factorVariant: historyFactor,
            factorEstimate: SqlStore.getHistoryFactor().toString(),
        },
        {
            key: '11',
            factorName: '11. Оптимизация запросов:',
            factorVariant: optimizeFactor,
            factorEstimate: SqlStore.getOptimizeFactor().toString(),
        },
        {
            key: '12',
            factorName: '12. Партиционирование:',
            factorVariant: partitionFactor,
            factorEstimate: SqlStore.getPartitionFactor().toString(),
        },
        {
            key: '13',
            factorName: '13. Архивирование:',
            factorVariant: archiveFactor,
            factorEstimate: SqlStore.getArchiveFactor().toString(),
        },
        {
            key: '14',
            factorName: '14. Очистка от устаревших данных:',
            factorVariant: cleanFactor,
            factorEstimate: SqlStore.getCleanFactor().toString(),
        },
        {
            key: '15',
            factorName: '15. Тестовые данные:',
            factorVariant: testDataFactor,
            factorEstimate: SqlStore.getTestDataFactor().toString(),
        },
        {
            key: '16',
            factorName: '16. Скрипты миграции:',
            factorVariant: migrationDataFactor,
            factorEstimate: SqlStore.getMigrationDataFactor().toString(),
        },
        {
            key: '17',
            factorName: '',
            factorVariant: 'Сумма',
            factorEstimate: SqlStore.getAccum().toString(),
        },
    ];

    return <Table columns={columns} dataSource={data} pagination={false} />;
}

export default SqlTable;