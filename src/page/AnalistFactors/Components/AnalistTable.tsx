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

//1
export const analist_access_string = new Array(13);
analist_access_string[0] = "У аналитика есть все необходимые доступы к ресурсам инфрастуктуры и лицензии."
analist_access_string[1] = "У аналитика нет одного из доступов к ресурсам инфрастуктуры и/или лицензий, которые будет легко получить за незначительное время."
analist_access_string[2] = "У аналитика нет доступа к нескольким ресурсам инфрастуктуры и/или лицензий, получить которые можно за 1-2 дня."
analist_access_string[3] = "У аналитика нет доступа к половине ресурсов инфрастуктуры и/или лицензий, получить которые можно за 3-5 дней."
analist_access_string[5] = "У аналитика нет доступа к большей части инфрастуктуры и/или лицензий, на получение этих доступов потребуется значительное время."
analist_access_string[8] = "У аналитика нет доступа к большей части инфрастуктуры и/или лицензий, на получение этих доступов потребуется значительное время."
//2
export const analist_job_string = new Array(13);
analist_job_string[0] = "Аналитику понятно описание задачи и все функции бизнес логики, которые необходимо описать."
analist_job_string[1] = "Аналитику не понятны небольшая часть описания задачи и некоторые функции бизнес логики, которую необходимо описать."
analist_job_string[2] = "Аналитику не понятны примерно половина описания задачи и примерно половина функций бизнес логики, которую необходимо описать."
analist_job_string[3] = "Аналитику не понятны бОльшая часть описания задачи и и бОльшая часть функции бизнес логики, которую необходимо описать."
analist_job_string[5] = "Аналитику не понятны бОльшая часть описания задачи и и бОльшая часть функции бизнес логики, которую необходимо описать."
analist_job_string[8] = "Аналитику не понятны все описания задачи и все функции бизнес логики, которую необходимо описать."
analist_job_string[13] = ""
//3
export const analist_model_string = new Array(13);
analist_model_string[0] = "Аналитику понятна структура модели данных и атрибутивный состав таблиц."
analist_model_string[1] = "Аналитику не понятна небольшая часть структуры модели данных и/или назначение некоторых атрибутов."
analist_model_string[2] = "Аналитику не понятна примерно половина структуры модели данных и/или назначение половины атрибутов."
analist_model_string[3] = "Аналитику не понятна бОльшая часть структуры модели данных и/или назначение бОльшей части атрибутов."
analist_model_string[5] = "Аналитику не понятна вся структура модели данных и атрибутивный состав таблиц."
analist_model_string[8] = ""
analist_model_string[13] = ""
//4
export const analist_instrument_string = new Array(13);
analist_instrument_string[0] = "Из необходимых инструментов анализа, все хорошо знакомы аналитику и у него имеется достаточный опыт их использования."
analist_instrument_string[1] = "Из необходимых инструментов анализа, все, кроме одного, хорошо знакомы аналитику, и у него имеется достаточный опыт их использования всех кроме одного."
analist_instrument_string[2] = ""
analist_instrument_string[3] = "Из необходимых инструменты анализа, половина, хорошо знакомы аналитику, и у него имеется достаточный опыт их использования с остальными опыта нет или его недостаточно."
analist_instrument_string[5] = ""
analist_instrument_string[8] = "Из необходимых инструменты анализа, все не знакомы и опыта их использования нет или недостаточно."
analist_instrument_string[13] = ""
//5
export const analist_information_string = new Array(13);
analist_information_string[0] = "В задаче не потребуются исходные данные/информация."
analist_information_string[1] = "Из необходимых исходных данных/информации аналитику доступны все необходимые исходные данные."
analist_information_string[2] = "Из необходимых исходных данных/информации аналитику доступны все кроме малого числа незначительных сведений."
analist_information_string[3] = "Из необходимых исходных данных аналитику доступны примерно половина, а на получение пока недоступных потребуется много времени."
analist_information_string[5] = "Из необходимых исходных данных аналитику доступны меньшая часть, а на получение пока недоступных потребуется очень много времени."
analist_information_string[8] = "Необходимые исходные данные аналитику не доступны, а на их получение потребуется неопределённо много времени."
analist_information_string[13] = ""
//6
export const analist_buziness_string = new Array(13);
analist_buziness_string[0] = "Взаимодействие с бизнес-заказчиком максимально эффективное – быстрый отклик, функциональные требования всегда корректны и полны, ответы на вопросы содержательны и полезны."
analist_buziness_string[1] = "Взаимодействие с бизнес-заказчиком по большей части эффективное –  отклик достаточно быстрый, функциональные требования всегда корректны и полны, ответы на вопросы иногда недостаточно содержательны или полезны."
analist_buziness_string[2] = "Взаимодействие с бизнес-заказчиком не всегда эффективное –  отклик не редко с задержкой, функциональные требования иногда не корректны и/или не полны, ответы на вопросы не редко недостаточно  содержательны или полезны."
analist_buziness_string[3] = "Взаимодействие с бизнес-заказчиком часто не эффективное –  отклик часто с задержкой, функциональные требования часто не корректны и/или не полны, ответы на вопросы часто недостаточно содержательны или полезны."
analist_buziness_string[5] = "Взаимодействие с бизнес-заказчиком не эффективное –  отклик с большой задержкой, функциональные требования не корректны и/или не полны, ответы на вопросы безсодержательны и безполезны."
analist_buziness_string[8] = ""
analist_buziness_string[13] = ""
//7
export const analist_collegues_string = new Array(13);
analist_collegues_string[0] = "Взаимодействие с коллегами из других команд не потребуется."
analist_collegues_string[1] = "Взаимодействие с коллегами из других команд, максимально эффективное – быстрый отклик на запросы, ответы на вопросы содержательны и полезны согласование позиций ничем не затруднено."
analist_collegues_string[2] = "Взаимодействие с коллегами из других команд по большей части эффективное –  задержка отклика  отклика на запрос небольшая, ответы на вопросы по большей части содержательны и полезны, согласование позиций не затруднено в большинстве случаев."
analist_collegues_string[3] = "Взаимодействие с коллегами из других команд в половине случаев эффективное –  задержка отклика отклика на запрос может быть значительной, ответы на вопросы в половине случаев содержательны и полезны, согласование позиций часто затруднено."
analist_collegues_string[5] = "Взаимодействие с коллегами из других команд мало эффективное –  задержка отклика на запрос  может быть значительной, ответы на вопросы в половине случаев содержательны и полезны, согласование позиций часто затруднено."
analist_collegues_string[8] = "Взаимодействие с коллегами из других команд не эффективное –  задержка отклика на запрос  слишком большая, ответы на вопросы безсодержательны и безполезны, согласование позиций почти невозможно."
analist_collegues_string[13] = ""
//8
export const analist_ui_back_string = new Array(13);
analist_ui_back_string[0] = "В задаче не требуется описать ни UI ни бэкенд."
analist_ui_back_string[1] = "В задаче требуется описать только UI и не требуется описывать бэкенд."
analist_ui_back_string[2] = "В задаче требуется описать только бэкенд и не требуется описывать UI."
analist_ui_back_string[3] = "В задаче требуется описать не только бэкенд но и UI."
analist_ui_back_string[5] = ""
analist_ui_back_string[8] = ""
analist_ui_back_string[13] = ""



const AnalistTable: React.FC = () => {

    const {AnalistStore} = useStores();

    const accessFactor :string = analist_access_string[AnalistStore.getAccessFactor()];
    const jobFactor :string = analist_job_string[AnalistStore.getJobFactor()];
    const modelFactor :string = analist_model_string[AnalistStore.getModelFactor()];
    const instrumentFactor :string = analist_instrument_string[AnalistStore.getInstrumentFactor()];
    const informationFactor :string = analist_information_string[AnalistStore.getInformationFactor()];
    const buzinessFactor :string = analist_buziness_string[AnalistStore.getBuzinessFactor()];
    const colleguesFactor :string = analist_collegues_string[AnalistStore.getColleguesFactor()];
    const uiBackFactor :string = analist_ui_back_string[AnalistStore.getUiBackFactor()];

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
            factorVariant: accessFactor,
            factorEstimate: AnalistStore.getAccessFactor().toString(),
        },
        {
            key: '3',
            factorName: '2. Уровень понимания задачи',
            factorVariant: jobFactor,
            factorEstimate: AnalistStore.getJobFactor().toString(),
        },
        {
            key: '4',
            factorName: '3. Уровень понимания модели данных',
            factorVariant: modelFactor,
            factorEstimate: AnalistStore.getModelFactor().toString(),
        },
        {
            key: '5',
            factorName: '4. Уровень владения инструментарием',
            factorVariant: instrumentFactor,
            factorEstimate: AnalistStore.getInstrumentFactor().toString(),
        },
        {
            key: '6',
            factorName: '5. Уровень достаточности исходных данных',
            factorVariant: informationFactor,
            factorEstimate: AnalistStore.getInformationFactor().toString(),
        },
        {
            key: '7',
            factorName: '6. Уровень взаимодействия с бизнес заказчиком',
            factorVariant: buzinessFactor,
            factorEstimate: AnalistStore.getBuzinessFactor().toString(),
        },
        {
            key: '8',
            factorName: '7. Уровень взаимодействия с коллегами из других команд',
            factorVariant: colleguesFactor,
            factorEstimate: AnalistStore.getColleguesFactor().toString(),
        },
        {
            key: '9',
            factorName: '8. Комплексность описания задачи в спецификации',
            factorVariant: uiBackFactor,
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