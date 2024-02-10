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

const ManualQATable: React.FC = () => {

    const {ManualQAStore} = useStores();

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
            factorName: '1. Наличие необходимых лицензий и доступов к ресурсам инфрастуктуры.',
            factorVariant: 'У аналитика есть все необходимые доступы к ресурсам инфрастуктуры и лицензии.',
            factorEstimate: ManualQAStore.getAccessFactor().toString(),
        },
        {
            key: '3',
            factorName: '2. Уровень понимания задачи',
            factorVariant: 'Аналитику понятно описание задачи и все функции бизнес логики, которые необходимо описать.',
            factorEstimate: ManualQAStore.getJobFactor().toString(),
        },
        {
            key: '4',
            factorName: '3. Уровень владения инструментарием',
            factorVariant: 'Из необходимых инструментов анализа, все хорошо знакомы аналитику и у него имеется достаточный опыт их использования.',
            factorEstimate: ManualQAStore.getInstrumentFactor().toString(),
        },
        {
            key: '5',
            factorName: '4. Состояние инфраструктуры',
            factorVariant: 'Из необходимых инструментов анализа, все хорошо знакомы аналитику и у него имеется достаточный опыт их использования.',
            factorEstimate: ManualQAStore.getInfraFactor().toString(),
        },
        {
            key: '6',
            factorName: '5. Состояние спецификаций',
            factorVariant: 'Из необходимых инструментов анализа, все хорошо знакомы аналитику и у него имеется достаточный опыт их использования.',
            factorEstimate: ManualQAStore.getSpecsFactor().toString(),
        },
        {
            key: '7',
            factorName: '6. Уровень понимания модели данных',
            factorVariant: 'Аналитику понятна структура модели данных и атрибутивный состав таблиц.',
            factorEstimate: ManualQAStore.getModelFactor().toString(),
        },
        {
            key: '8',
            factorName: '7. Уровень заполнения таблиц тестовыми данными',
            factorVariant: 'Аналитику понятна структура модели данных и атрибутивный состав таблиц.',
            factorEstimate: ManualQAStore.getTestDataFactor().toString(),
        },
        {
            key: '9',
            factorName: '8. Количество тест-кейсов',
            factorVariant: 'Аналитику понятна структура модели данных и атрибутивный состав таблиц.',
            factorEstimate: ManualQAStore.getTestCaseFactor().toString(),
        },
        {
            key: '10',
            factorName: '9. Количество методов/тестов',
            factorVariant: 'Аналитику понятна структура модели данных и атрибутивный состав таблиц.',
            factorEstimate: ManualQAStore.getMethodTestFactor().toString(),
        },
        {
            key: '11',
            factorName: '10. Предполагаемое количество баг-репортов',
            factorVariant: 'Аналитику понятна структура модели данных и атрибутивный состав таблиц.',
            factorEstimate: ManualQAStore.getBugReportFactor().toString(),
        },
        {
            key: '12',
            factorName: '11. Понимание структуры и содержания наборов входных/выходных данных',
            factorVariant: 'Аналитику понятна структура модели данных и атрибутивный состав таблиц.',
            factorEstimate: ManualQAStore.getIoDataFactor().toString(),
        },
        {
            key: '13',
            factorName: '',
            factorVariant: 'Сумма',
            factorEstimate: ManualQAStore.getAccum().toString().toString(),
        },
    ];

    return <Table columns={columns} dataSource={data} />;
}

export default ManualQATable;