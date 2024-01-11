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

// let accessFactor: string = "";
// let jobFactor: string = "";
// let modelFactor: string = "";
// let instrumentFactor: string = "";
// let informationFactor: string = "";
// let buzinessFactor: string = "";
// let colleguesFactor: string = "";
// let uiBackFactor: string = "";
// let accum: string = "";

// const columns: ColumnsType<DataType> = [
//     {
//         title: 'Наименование фактора',
//         dataIndex: 'factorName',
//     },
//     {
//         title: 'Вариант влияния фактора на итоговую трудоёмкость задачи',
//         dataIndex: 'factorVariant',
//     },
//     {
//         title: 'Сторипоинты варианта фактора',
//         dataIndex: 'factorEstimate',
//     },
// ];



// const onChange: TableProps<DataType>['onChange'] = (pagination, filters, sorter, extra) => {
//     console.log('params', pagination, filters, sorter, extra);
// };



const AnalistTable: React.FC = () => {

    const {AnalistStore} = useStores();

    // accessFactor = AnalistStore.getAccessFactor().toString();
    // jobFactor = AnalistStore.getJobFactor().toString();
    // modelFactor = AnalistStore.getModelFactor().toString();
    // instrumentFactor = AnalistStore.getInstrumentFactor().toString();
    // informationFactor = AnalistStore.getInformationFactor().toString();
    // buzinessFactor = AnalistStore.getBuzinessFactor().toString();
    // colleguesFactor = AnalistStore.getColleguesFactor().toString();
    // uiBackFactor = AnalistStore.getUiBackFactor().toString();
    // accum = AnalistStore.getAccum().toString();
    // let dt = data

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
        // {
        //     key: '1',
        //     name: 'John Brown',
        //     age: 0,
        //     address: '0',
        // },
        {
            key: '2',
            factorName: '1. Наличие необходимых лицензий и доступов к ресурсам инфрастуктуры.',
            factorVariant: 'У аналитика есть все необходимые доступы к ресурсам инфрастуктуры и лицензии.',
            factorEstimate: AnalistStore.getAccessFactor().toString(),
        },
        {
            key: '3',
            factorName: '2. Уровень понимания задачи',
            factorVariant: 'Аналитику понятно описание задачи и все функции бизнес логики, которые необходимо описать.',
            factorEstimate: AnalistStore.getJobFactor().toString(),
        },
        {
            key: '4',
            factorName: '3. Уровень понимания модели данных',
            factorVariant: 'Аналитику понятна структура модели данных и атрибутивный состав таблиц.',
            factorEstimate: AnalistStore.getModelFactor().toString(),
        },
        {
            key: '5',
            factorName: '4. Уровень владения инструментарием',
            factorVariant: 'Из необходимых инструментов анализа, все хорошо знакомы аналитику и у него имеется достаточный опыт их использования.',
            factorEstimate: AnalistStore.getInstrumentFactor().toString(),
        },
        {
            key: '6',
            factorName: '5. Уровень достаточности исходных данных',
            factorVariant: 'В задаче не потребуются исходные данные/информация.',
            factorEstimate: AnalistStore.getInformationFactor().toString(),
        },
        {
            key: '7',
            factorName: '6. Уровень взаимодействия с бизнес заказчиком',
            factorVariant: 'Взаимодействие с бизнес-заказчиком максимально эффективное – быстрый отклик, функциональные требования всегда корректны и полны, ответы на вопросы содержательны и полезны.',
            factorEstimate: AnalistStore.getBuzinessFactor().toString(),
        },
        {
            key: '8',
            factorName: '7. Уровень взаимодействия с коллегами из других команд',
            factorVariant: 'Взаимодействие с коллегами из других команд не потребуется.',
            factorEstimate: AnalistStore.getColleguesFactor().toString(),
        },
        {
            key: '9',
            factorName: '8. Комплексность описания задачи в спецификации',
            factorVariant: 'В задаче не требуется описать ни UI ни бэкенд.',
            factorEstimate: AnalistStore.getUiBackFactor().toString(),
        },
        {
            key: '10',
            factorName: '',
            factorVariant: 'Сумма',
            factorEstimate: AnalistStore.getAccum().toString().toString(),
        },
    ];

    return <Table columns={columns} dataSource={data} />;
}

export default AnalistTable;