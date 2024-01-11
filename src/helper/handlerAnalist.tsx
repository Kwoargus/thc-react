import { AnalistForm1 } from "../page/AnalistFactors/Components/AnalistForm1";
import { AnalistForm2 } from "../page/AnalistFactors/Components/AnalistForm2";
import { AnalistForm3 } from "../page/AnalistFactors/Components/AnalistForm3";
import { AnalistForm4 } from "../page/AnalistFactors/Components/AnalistForm4";
import { AnalistForm5 } from "../page/AnalistFactors/Components/AnalistForm5";
import { AnalistForm6 } from "../page/AnalistFactors/Components/AnalistForm6";
import { AnalistForm7 } from "../page/AnalistFactors/Components/AnalistForm7";
import { AnalistForm8 } from "../page/AnalistFactors/Components/AnalistForm8";
import { AnalistForm9 } from "../page/AnalistFactors/Components/AnalistForm9";
import { AnalistForm10 } from "../page/AnalistFactors/Components/AnalistForm10";
import {observer} from "mobx-react-lite";
import React from "react";
// import {AnalistStore} from "../stores/analist";
import {useStores} from "../stores";

let accum = 0;

let back_access = 0; //back_tag === 1
let back_job = 0; //back_tag === 2
let back_model = 0; //back_tag === 3
let back_instrument = 0; //back_tag === 4
let back_infra = 0; //back_tag === 5
let back_specs = 0; //back_tag === 6
let back_tables = 0; //back_tag === 7
let back_test_data = 0; //back_tag === 8
let back_entity = 0; //back_tag === 9
let back_biz_func = 0; //back_tag === 10
let back_end_point = 0; //back_tag === 11
let back_IO_data = 0; //back_tag === 12
let back_web_client = 0; //back_tag === 13
let back_brocker = 0; //back_tag === 14
let back_r_and_d = 0; //back_tag === 15
let back_unit_test = 0; //back_tag === 16
let back_log = 0; //back_tag === 17
let back_migration = 0; //back_tag === 18
let back_comments = 0; //back_tag === 19
let back_auto_label = 0;
let back_user_label_sp = 0;
let back_user_label_hr = 0;
let back_user_nazvanie = "";
let back_user_description = "";
let back_user_comments = "";
//create_date заполняется на бэке
let back_user_id = 0;
//status заполняется на бэке
let back_status = 0;
//1.
var back_access_string = new Array(13);
back_access_string[0] =
    "У разработчика есть все необходимые доступы к ресурсам инфрастуктуры и лицензии.";
back_access_string[1] =
    "У разработчика нет одного из доступов к ресурсам инфрастуктуры и/или лицензий, которые будет легко получить за незначительное время.";
back_access_string[2] =
    "У разработчика нет доступа к нескольким ресурсам инфрастуктуры и/или лицензий, получить которые можно за 1-2 дня.";
back_access_string[3] =
    "У разработчика нет доступа к половине ресурсов инфрастуктуры и/или лицензий, получить которые можно за 3-5 дней.";
back_access_string[5] =
    "У разработчика нет доступа к большей части инфрастуктуры и/или лицензий, на получение этих доступов потребуется значителтное время.";
back_access_string[8] =
    "У разработчика нет доступа к инфрастуктуре и нет лицензий, на получение этих доступов потребуется много время.";
back_access_string[13] = "";
//2.
var back_job_string = new Array(13);
back_job_string[0] =
    "Разработчику понятны формулировка задачи и бизнес логика, которую необходимо реализовать.";
back_job_string[1] =
    "Разработчику не понятны небольшая часть описания задачи и некоторые функции бизнес логики, которую необходимо реализовать.";
back_job_string[2] =
    "Разработчику не понятны примерно половина описания задачи и примерно половина функций бизнес логики, которую необходимо реализовать.";
back_job_string[3] =
    "Разработчику не понятны бОльшая часть описания задачи и и бОльшая часть функции бизнес логики, которую необходимо реализовать.";
back_job_string[5] =
    "Разработчику не понятны все описания задачи и все функции бизнес логики, которую необходимо реализовать.";
back_job_string[8] = "";
back_job_string[13] = "";
//3.
var back_model_string = new Array(13);
back_model_string[0] =
    "Разработчику понятна структура модели данных и атрибутивный состав таблиц.";
back_model_string[1] =
    "Разработчику не понятна небольшая часть структуры модели данных и/или назначение некоторых атрибутов.";
back_model_string[2] =
    "Разработчику не понятна примерно половина структуры модели данных и/или назначение половины атрибутов.";
back_model_string[3] =
    "Разработчику не понятна бОльшая часть структуры модели данных и/или назначение бОльшей части атрибутов.";
back_model_string[5] =
    "Разработчику не понятна вся структура модели данных и атрибутивный состав таблиц.";
back_model_string[8] = "";
back_model_string[13] = "";
//4.
var back_instrument_string = new Array(13);
back_instrument_string[0] =
    "Из необходимых инструментов разработки, все хорошо знакомы разработчику и у него имеется достаточный опыт их использования.";
back_instrument_string[1] =
    "Из необходимых инструментов разработки, все, кроме одного, хорошо знакомы разработчику, и у него имеется достаточный опыт их использования всех кроме одного.";
back_instrument_string[2] =
    "Из необходимых инструменты разработки, большая часть знакомы разработчику, и у него имеется достаточный опыт их использования с остальными опыта нет или его недостаточно.";
back_instrument_string[3] =
    "Из необходимых инструменты разработки, половина, хорошо знакомы разработчику, и у него имеется достаточный опыт их использования с остальными опыта нет или его недостаточно.";
back_instrument_string[5] =
    "Из необходимых инструменты разработки, большая часть не знакомы и опыта их использования недостаточно.";
back_instrument_string[8] =
    "Из необходимых инструменты разработки, все не знакомы и опыта их использования нет.";
back_instrument_string[13] = "";
//5.
var back_infra_string = new Array(13);
back_infra_string[0] =
    "Все элементы инфраструктуры корректно настроены и работают стабильно.";
back_infra_string[1] =
    "Все элементы инфраструктуры корректно настроены но некоторые работают иногда не стабильно.";
back_infra_string[2] = "";
back_infra_string[3] =
    "Некоторые элементы инфраструктуры настроены не вполне корректно и работают не стабильно.";
back_infra_string[5] = "";
back_infra_string[8] =
    "Некоторые элементы инфраструктуры не корректно настроены и работают нестабильно.";
back_infra_string[13] = "";
//6.
var back_specs_string = new Array(13);
back_specs_string[0] = "";
back_specs_string[1] =
    "Все спецификации в наличии, их содержание полно и корректно.";
back_specs_string[2] =
    "Все спецификаци в наличии, но их содержание не полно и/или не корректно.";
back_specs_string[3] = "Часть спецификаций отсутствует.";
back_specs_string[5] = "Спецификации полностью отсутствуют.";
back_specs_string[8] = "";
back_specs_string[13] = "";
//7.
var back_tables_string = new Array(13);
back_tables_string[0] =
    "Все таблицы в БД созданы, атрибутивный состав полон и корректен и все необходимые связи по ключам определены.";
back_tables_string[1] =
    "Все таблицы в БД созданы, но их атрибутивный состав не полон и/или не корректен и/или не все необходимые связи по ключам определены.";
back_tables_string[2] =
    "Небольшая часть таблиц в БД не созданы, их атрибутивный состав ещё не сформирован.";
back_tables_string[3] =
    "Примерно половина таблиц в БД не созданы, их атрибутивный состав ещё не сформирован.";
back_tables_string[5] =
    "Большая часть таблиц в БД не созданы, их атрибутивный состав ещё не сформирован.";
back_tables_string[8] =
    "Таблицы в БД не созданы, их атрибутивный состав неопределён.";
back_tables_string[13] = "";
//8.
var back_test_data_string = new Array(13);
back_test_data_string[0] =
    "Необходимые тестовые данные в таблицы внесены, они полны и корректны.";
back_test_data_string[1] = "";
back_test_data_string[2] =
    "Часть необходимых тестовых данных в таблицы не внесены или некорректны и/или не определена часть связей.";
back_test_data_string[3] = "";
back_test_data_string[5] =
    "Необходимые тестовые данные в таблицах полностью отсутствуют.";
back_test_data_string[8] = "";
back_test_data_string[13] = "";
//9.
var back_entity_string = new Array(13);
back_entity_string[0] = "В задаче не будут использоваться сущности.";
back_entity_string[1] = "В задаче будет использовано от 1 до 10 сущностей.";
back_entity_string[2] = "В задаче будет использовано от 11 до 20 сущностей.";
back_entity_string[3] = "В задаче будет использовано от 21 до 30 сущностей.";
back_entity_string[5] = "В задаче будет использовано от 31 до 40 сущностей.";
back_entity_string[8] = "В задаче будет использовано от 41 до 50 сущностей.";
back_entity_string[13] = "";
//10.
var back_biz_func_string = new Array(13);
back_biz_func_string[0] =
    "В задаче не будут реализовываться функции бизнес/прикладной логики.";
back_biz_func_string[1] =
    "В бизнес логике задачи потребуется реализовать от 1 до 10 функции бизнес/прикладной логики.";
back_biz_func_string[2] =
    "В бизнес логике задачи потребуется реализовать от 11 до 20 функции бизнес/прикладной логики.";
back_biz_func_string[3] =
    "В бизнес логике задачи потребуется реализовать от 21 до 30 функции бизнес/прикладной логики.";
back_biz_func_string[5] =
    "В бизнес логике задачи потребуется реализовать от 31 до 40 функции бизнес/прикладной логики.";
back_biz_func_string[8] =
    "В бизнес логике задачи потребуется реализовать от 41 до 50 функции бизнес/прикладной логики.";
back_biz_func_string[13] = "";
//11.
var back_end_point_string = new Array(13);
back_end_point_string[0] = "В задаче не будут реализовываться ендпоинты.";
back_end_point_string[1] =
    "Потребуется реализовать API с количеством ендпоинтов от 1 до 10.";
back_end_point_string[2] =
    "Потребуется реализовать API с количеством ендпоинтов от 11 до 20.";
back_end_point_string[3] =
    "Потребуется реализовать API с количеством ендпоинтов от 21 до 30.";
back_end_point_string[5] =
    "Потребуется реализовать API с количеством ендпоинтов от 31 до 40.";
back_end_point_string[8] =
    "Потребуется реализовать API с количеством ендпоинтов от 41 до 50.";
back_end_point_string[13] = "";
//12.
var back_IO_data_string = new Array(13);
back_IO_data_string[0] =
    "В задаче не будут использоваться входные/выходные данные.";
back_IO_data_string[1] =
    "Разработчику понятны все форматы входных и выходных данных для ендпоинтов / брокера сообщений / web-клиента.";
back_IO_data_string[2] =
    "Разработчику понятны только часть форматов входных и выходных данных для ендпоинтов / брокера сообщений / web-клиента.";
back_IO_data_string[3] =
    "Разработчику НЕ понятны форматы входных и выходных данных для ендпоинтов / брокера сообщений / web-клиента.";
back_IO_data_string[5] = "";
back_IO_data_string[8] = "";
back_IO_data_string[13] = "";
//13.
var back_web_client_string = new Array(13);
back_web_client_string[0] =
    "В задаче не будут реализовываться REST вызовы смежных сервисов с помощью web-слиентов.";
back_web_client_string[1] =
    "Потребуется реализовать REST вызовы смежных сервисов с помощью web-слиентов в от 1 до 10 бизнес-функций.";
back_web_client_string[2] =
    "Потребуется реализовать REST вызовы смежных сервисов с помощью web-слиентов в от 11 до 20 бизнес-функций.";
back_web_client_string[3] =
    "Потребуется реализовать REST вызовы смежных сервисов с помощью web-слиентов в от 21 до 30 бизнес-функций.";
back_web_client_string[5] =
    "Потребуется реализовать REST вызовы смежных сервисов с помощью web-слиентов в от 31 до 40 бизнес-функций.";
back_web_client_string[8] =
    "Потребуется реализовать REST вызовы смежных сервисов с помощью web-слиентов в от 41 до 50 бизнес-функций.";
back_web_client_string[13] = "";
//14.
var back_brocker_string = new Array(13);
back_brocker_string[0] =
    "В задаче не требуется реализовывать передачу/получение сообщений через брокера.";
back_brocker_string[1] =
    "Потребуется реализовать передачу/получение сообщений в/от брокера в от 1 до 10 бизнес-функцях.";
back_brocker_string[2] =
    "Потребуется реализовать передачу/получение сообщений в/от брокера в от 11 до 20 бизнес-функцях.";
back_brocker_string[3] =
    "Потребуется реализовать передачу/получение сообщений в/от брокера в от 21 до 30 бизнес-функцях.";
back_brocker_string[5] =
    "Потребуется реализовать передачу/получение сообщений в/от брокера в от 31 до 40 бизнес-функцях.";
back_brocker_string[8] =
    "Потребуется реализовать передачу/получение сообщений в/от брокера в от 41 до 50 бизнес-функцях.";
back_brocker_string[13] = "";
//15.
var back_r_and_d_string = new Array(13);
back_r_and_d_string[0] =
    "В задаче не потребуется проводить исследование (R&D) работы новых модулей/библиотек/компонентов.";
back_r_and_d_string[1] =
    "Потребуется провести исследование (R&D) работы одного-двух модулей/библиотек/компонентов.";
back_r_and_d_string[2] = "";
back_r_and_d_string[3] =
    "Потребуется провести исследование (R&D) работы от 3 до 5 модулей/библиотек/компонентов.";
back_r_and_d_string[5] = "";
back_r_and_d_string[8] =
    "Потребуется провести исследование (R&D) работы от 6 до 10 модулей/библиотек/компонентовх.";
back_r_and_d_string[13] =
    "Потребуется провести исследование (R&D) работы более 10 модулей/библиотек/компонентовх.";
//16.
var back_unit_test_string = new Array(13);
back_unit_test_string[0] = "Покрывать unit-тестами методы не требуется.";
back_unit_test_string[1] =
    "Покрывать unit-тестами требуется лишь единичные методы.";
back_unit_test_string[2] = "Покрыть тестами необходимо менее 30 % методов.";
back_unit_test_string[3] = "Покрыть тестами необходимо от 30 до 50 % методов.";
back_unit_test_string[5] = "Покрыть тестами необходимо от 50 до 70 % методов.";
back_unit_test_string[8] = "Покрыть тестами необходимо от 70 до 90 % методов.";
back_unit_test_string[13] = "";
//17.
var back_log_string = new Array(13);
back_log_string[0] = "Логировать события/методы не требуется.";
back_log_string[1] = "Требуется логировать единичные события/методы.";
back_log_string[2] = "Требуется логировать меньшую часть событий/методов.";
back_log_string[3] = "Требуется логировать примерно половину событий/методов.";
back_log_string[5] = "Требуется логировать большую часть событий/методов";
back_log_string[8] = "Требуется логировать почти все события/методы.";
back_log_string[13] = "";
//18.
var back_migration_string = new Array(13);
back_migration_string[0] = "Создавать скрипты миграции не требуется.";
back_migration_string[1] =
    "Создавать потребуется лишь единичные скрипты миграции.";
back_migration_string[2] =
    "Создавать потребуется небольшое количество скриптов миграции.";
back_migration_string[3] =
    "Создавать потребуется умеренное количество скриптов миграции.";
back_migration_string[5] =
    "Создавать потребуется большое количество скриптов миграции.";
back_migration_string[8] =
    "Создавать потребуется очень большое количество скриптов миграции.";
back_migration_string[13] = "";
//19.
var back_comments_string = new Array(13);
back_comments_string[0] = "Писать комментарии не потребуется.";
back_comments_string[1] =
    "Требуется писать комментарии только для самых алгоритмически сложных фрагментов кода.";
back_comments_string[2] =
    "Требуется писать комментарии для сигнатур классов и методов, логически обособленных блоков кода и для алгоритмически сложных фрагментов кода.";
back_comments_string[3] =
    "Требуется писать комментарии для большинства строк кода.";
// back_comments_string[2] = "Требуется писать комментарии для алгоритмически сложных фрагментов кода, а так же для сигнатур классов и методов."
// back_comments_string[3] = "Требуется писать комментарии для сигнатур классов и методов, логически обособленных блоков кода и для алгоритмически сложных фрагментов кода."
// back_comments_string[5] = "Требуется писать комментарии для заголовков классов, полей класса, сигнатур методов локальных переменных, логически обособленных блоков кода и для алгоритмически сложных фрагментов кода."
back_comments_string[5] = "";
back_comments_string[8] = "";
back_comments_string[13] = "";


let analist_access = 0              //analist_tag === 1
let analist_job = 0                 //analist_tag === 2
let analist_model = 0               //analist_tag === 3
let analist_instrument = 0          //analist_tag === 4
let analist_information = 0         //analist_tag === 5
let analist_business = 0            //analist_tag === 6
let analist_colleagues = 0          //analist_tag === 7
let analist_ui_back = 0             //analist_tag === 8
let analist_auto_label = 0
let analist_user_label = 0
let analist_user_description = ""
let analist_user_nazvanie = ""
let analist_user_comments = ""
let analist_user_label_sp = ""
let analist_user_label_hr = ""

//create_date заполняется на бэке
let analist_user_id = 0
//status заполняется на бэке
let analist_status = 0

var analist_access_string = new Array(13);
analist_access_string[0] = "У аналитика есть все необходимые доступы к ресурсам инфрастуктуры и лицензии."
analist_access_string[1] = "У аналитика нет одного из доступов к ресурсам инфрастуктуры и/или лицензий, которые будет легко получить за незначительное время."
analist_access_string[2] = "У аналитика нет доступа к нескольким ресурсам инфрастуктуры и/или лицензий, получить которые можно за 1-2 дня."
analist_access_string[3] = "У аналитика нет доступа к половине ресурсов инфрастуктуры и/или лицензий, получить которые можно за 3-5 дней."
analist_access_string[5] = "У аналитика нет доступа к большей части инфрастуктуры и/или лицензий, на получение этих доступов потребуется значительное время."
analist_access_string[8] = "У аналитика нет доступа к большей части инфрастуктуры и/или лицензий, на получение этих доступов потребуется значительное время."

var analist_job_string = new Array(13);
analist_job_string[0] = "Аналитику понятно описание задачи и все функции бизнес логики, которые необходимо описать."
analist_job_string[1] = "Аналитику не понятны небольшая часть описания задачи и некоторые функции бизнес логики, которую необходимо описать."
analist_job_string[2] = "Аналитику не понятны примерно половина описания задачи и примерно половина функций бизнес логики, которую необходимо описать."
analist_job_string[3] = "Аналитику не понятны бОльшая часть описания задачи и и бОльшая часть функции бизнес логики, которую необходимо описать."
analist_job_string[5] = "Аналитику не понятны бОльшая часть описания задачи и и бОльшая часть функции бизнес логики, которую необходимо описать."
analist_job_string[8] = "Аналитику не понятны все описания задачи и все функции бизнес логики, которую необходимо описать."
analist_job_string[13] = ""

var analist_model_string = new Array(13);
analist_model_string[0] = "Аналитику понятна структура модели данных и атрибутивный состав таблиц."
analist_model_string[1] = "Аналитику не понятна небольшая часть структуры модели данных и/или назначение некоторых атрибутов."
analist_model_string[2] = "Аналитику не понятна примерно половина структуры модели данных и/или назначение половины атрибутов."
analist_model_string[3] = "Аналитику не понятна бОльшая часть структуры модели данных и/или назначение бОльшей части атрибутов."
analist_model_string[5] = "Аналитику не понятна вся структура модели данных и атрибутивный состав таблиц."
analist_model_string[8] = ""
analist_model_string[13] = ""

var analist_instrument_string = new Array(13);
analist_instrument_string[0] = "Из необходимых инструментов анализа, все хорошо знакомы аналитику и у него имеется достаточный опыт их использования."
analist_instrument_string[1] = "Из необходимых инструментов анализа, все, кроме одного, хорошо знакомы аналитику, и у него имеется достаточный опыт их использования всех кроме одного."
analist_instrument_string[2] = ""
analist_instrument_string[3] = "Из необходимых инструменты анализа, половина, хорошо знакомы аналитику, и у него имеется достаточный опыт их использования с остальными опыта нет или его недостаточно."
analist_instrument_string[5] = ""
analist_instrument_string[8] = "Из необходимых инструменты анализа, все не знакомы и опыта их использования нет или недостаточно."
analist_instrument_string[13] = ""

var analist_information_string = new Array(13);
analist_information_string[0] = "В задаче не потребуются исходные данные/информация."
analist_information_string[1] = "Из необходимых исходных данных/информации аналитику доступны все необходимые исходные данные."
analist_information_string[2] = "Из необходимых исходных данных/информации аналитику доступны все кроме малого числа незначительных сведений."
analist_information_string[3] = "Из необходимых исходных данных аналитику доступны примерно половина, а на получение пока недоступных потребуется много времени."
analist_information_string[5] = "Из необходимых исходных данных аналитику доступны меньшая часть, а на получение пока недоступных потребуется очень много времени."
analist_information_string[8] = "Необходимые исходные данные аналитику не доступны, а на их получение потребуется неопределённо много времени."
analist_information_string[13] = ""

var analist_business_string = new Array(13);
analist_business_string[0] = "Взаимодействие с бизнес-заказчиком максимально эффективное – быстрый отклик, функциональные требования всегда корректны и полны, ответы на вопросы содержательны и полезны."
analist_business_string[1] = "Взаимодействие с бизнес-заказчиком по большей части эффективное –  отклик достаточно быстрый, функциональные требования всегда корректны и полны, ответы на вопросы иногда недостаточно содержательны или полезны."
analist_business_string[2] = "Взаимодействие с бизнес-заказчиком не всегда эффективное –  отклик не редко с задержкой, функциональные требования иногда не корректны и/или не полны, ответы на вопросы не редко недостаточно  содержательны или полезны."
analist_business_string[3] = "Взаимодействие с бизнес-заказчиком часто не эффективное –  отклик часто с задержкой, функциональные требования часто не корректны и/или не полны, ответы на вопросы часто недостаточно содержательны или полезны."
analist_business_string[5] = "Взаимодействие с бизнес-заказчиком не эффективное –  отклик с большой задержкой, функциональные требования не корректны и/или не полны, ответы на вопросы безсодержательны и безполезны."
analist_business_string[8] = ""
analist_business_string[13] = ""

var analist_colleagues_string = new Array(13);
analist_colleagues_string[0] = "Взаимодействие с коллегами из других команд не потребуется."
analist_colleagues_string[1] = "Взаимодействие с коллегами из других команд, максимально эффективное – быстрый отклик на запросы, ответы на вопросы содержательны и полезны согласование позиций ничем не затруднено."
analist_colleagues_string[2] = "Взаимодействие с коллегами из других команд по большей части эффективное –  задержка отклика  отклика на запрос небольшая, ответы на вопросы по большей части содержательны и полезны, согласование позиций не затруднено в большинстве случаев."
analist_colleagues_string[3] = "Взаимодействие с коллегами из других команд в половине случаев эффективное –  задержка отклика отклика на запрос может быть значительной, ответы на вопросы в половине случаев содержательны и полезны, согласование позиций часто затруднено."
analist_colleagues_string[5] = "Взаимодействие с коллегами из других команд мало эффективное –  задержка отклика на запрос  может быть значительной, ответы на вопросы в половине случаев содержательны и полезны, согласование позиций часто затруднено."
analist_colleagues_string[8] = "Взаимодействие с коллегами из других команд не эффективное –  задержка отклика на запрос  слишком большая, ответы на вопросы безсодержательны и безполезны, согласование позиций почти невозможно."
analist_colleagues_string[13] = ""

var analist_ui_back_string = new Array(13);
analist_ui_back_string[0] = "В задаче не требуется описать ни UI ни бэкенд."
analist_ui_back_string[1] = "В задаче требуется описать только UI и не требуется описывать бэкенд."
analist_ui_back_string[2] = "В задаче требуется описать только бэкенд и не требуется описывать UI."
analist_ui_back_string[3] = "В задаче требуется описать не только бэкенд но и UI."
analist_ui_back_string[5] = ""
analist_ui_back_string[8] = ""
analist_ui_back_string[13] = ""
export const СhooseAnalistVariant = observer((): JSX.Element => {
    const{AnalistStore}=useStores();
    const renderContent = (): JSX.Element => {

        switch (AnalistStore.factorValue) {
            case 1:
                return  <AnalistForm1  />;
            case 2:
                return  <AnalistForm2 />;
            case 3:
                return  <AnalistForm3 />;
            case 4:
                return  <AnalistForm4 />;
            case 5:
                return  <AnalistForm5 />;
            case 6:
                return  <AnalistForm6 />;
            case 7:
                return  <AnalistForm7 />;
            case 8:
                return  <AnalistForm8 />;
            case 9:
                return  <AnalistForm9 />;
            case 10:
                return  <AnalistForm10 />;
            default:
                return <AnalistForm1 />;
        }
    };

    return renderContent();
});







// type LayoutType = Parameters<typeof Form>[0]['layout'];

// export const __chooseBackendVariant = (obj: string) => {
//     const { Title, Paragraph, Text, Link } = Typography;
//     const [form] = Form.useForm();
//     const [formLayout, setFormLayout] = useState<LayoutType>('vertical');
//     const onFormLayoutChange = ({ layout }: { layout: LayoutType }) => {
//         setFormLayout(layout);
//     };
//
//     const buttonItemLayout =
//         formLayout === 'horizontal' ? { wrapperCol: { span: 14, offset: 4 } } : null;
//     const [value, setValue] = useState(1);
//     const formItemLayout =
//         formLayout === 'horizontal' ? { labelCol: { span: 4 }, wrapperCol: { span: 14 } } : null;
//     const onChange = (e: RadioChangeEvent) => {
//         console.log('radio checked', e.target.value);
//         setValue(e.target.value);
//     };
//     console.log("chooseBackendVariant")
//     var objComponents = obj.split(",", 3);
//     console.log(objComponents)
//     accum = accum + Number(objComponents[2])
//     console.log("accum: "+accum)
//     if(objComponents[0] === "1") {
//
//     const handleClick = (): void => {
//         console.log("click")
//         let obj="0,access,"+value;
//         // chooseBackendVariant(1, obj)
//         console.log("checked: "+value)
//         chooseBackendVariant(obj)
//
//     };
//     return (
//         //команда замены контента в центральном блоке
//         <CenterDivWrapper>
//             <Title level={4}>Факторы влияющие на трудоёмкость задач для аналитика</Title>
//         <Form
//             {...formItemLayout}
//             layout={formLayout}
//             form={form}
//             // initialValues={{ layout: formLayout }}
//             onValuesChange={onFormLayoutChange}
//             // style={{ maxWidth: formLayout === 'inline' ? 'none' : 600 }}
//         >
//             <Form.Item label="2. Выберите вариант уровня понимания задачи: ">
//                 <Radio.Group onChange={onChange} value={value}>
//                     <Space direction="vertical">
//                         <Radio value={1}> 1. У разработчика есть все необходимые доступы к ресурсам инфрастуктуры и все необходимые лицензии. [0 storypionts]</Radio>
//                         <Radio value={2}> 2. У разработчика нет одного из доступов к ресурсам инфрастуктуры и/или лицензий, которые будет легко получить за незначительное время. [1 storypionts]</Radio>
//                         <Radio value={3}> 3. У разработчика нет доступа к нескольким ресурсам инфрастуктуры и/или лицензий, получить которые можно за 1-2 дня. [2 storypionts]</Radio>
//                         <Radio value={4}> 4. У разработчика нет доступа к половине ресурсов инфрастуктуры и/или лицензий, получить которые можно за 3-5 дней. [3 storypionts]</Radio>
//                         <Radio value={5}> 5. У разработчика нет доступа к большей части инфрастуктуры и/или лицензий, на получение этих доступов потребуется значителтное время. [5 storypionts]</Radio>
//                         <Radio value={6}> 6. У разработчика нет доступа к большей части инфрастуктуры и/или лицензий, на получение этих доступов потребуется значителтное время. [8 storypionts]</Radio>
//                     </Space>
//                 </Radio.Group>
//             </Form.Item>
//
//             <Form.Item {...buttonItemLayout}>
//                 <Button type="primary" onClick={handleClick}>Делее</Button>
//             </Form.Item>
//         </Form>
//         </CenterDivWrapper>);
//
//     }
//
//     if(objComponents[0] === "2") {
//         return (<CenterDivWrapper></CenterDivWrapper>);
//     }
//     if(objComponents[0] === "3") {
//         return (<CenterDivWrapper></CenterDivWrapper>);
//     }
//     if(objComponents[0] === "4") {
//         return (<CenterDivWrapper></CenterDivWrapper>);
//     }
//     if(objComponents[0] === "5") {
//         return (<CenterDivWrapper></CenterDivWrapper>);
//     }
//
// };

export function _chooseBackendVariant({back_tag, obj}: { back_tag: any, obj: any }) {
    console.log("chooseBackendVariant")
    console.log(back_tag, obj)
    for (const v of obj) {
        if(v.checked){
            accum = accum + Number(v.value)

            if(back_tag === 1) {
                back_access = Number(v.value)
                //
                //     "<form name = frm>" +
                //     "<div id=\"variant\">\n" +
                //     "<label id=\"lbl\">2. Выберите вариант уровня понимания задачи: </label>" +
                //     "<p>\n" +
                //     "<input type=\"radio\" id=\"job0\" name=\"job\" value=\"0\">\n" +
                //     "<label for=\"job0\">1. "+back_job_string[0]+" [0 storypoints]</label>\n" +
                //     "</p>\n" +
                //     "<p>\n" +
                //     "<input type=\"radio\" id=\"job1\" name=\"job\" value=\"1\" checked=\"checked\">\n" +
                //     "<label for=\"job1\">2. "+back_job_string[1]+" [1 storypoints]</label>\n" +
                //     "</p>\n" +
                //     "<p>\n" +
                //     "<input type=\"radio\" id=\"job2\" name=\"job\" value=\"2\">\n" +
                //     "<label for=\"job2\">3. "+back_job_string[2]+" [2 storypoints]</label>\n" +
                //     "</p>\n" +
                //     "<p>\n" +
                //     "<input type=\"radio\" id=\"job3\" name=\"job\" value=\"3\">\n" +
                //     "<label for=\"job3\">4. "+back_job_string[3]+" [3 storypoints]</label>\n" +
                //     "</p>\n" +
                //     "<p>\n" +
                //     "<input type=\"radio\" id=\"job5\" name=\"job\" value=\"5\">\n" +
                //     "<label for=\"job5\">5. "+back_job_string[5]+" [5 storypoints]</label>\n" +
                //     "</p>\n" +
                //     "<button id=\"sbmt\" name=\"button\" value=\"Вычислить\" onclick=\"chooseBackendVariant({back_tag : 2, obj : job})\">Далее</button>\n" +
                //     "</div>" +
                //     "</form>"
            }
            if(back_tag === 2) {
                back_job = Number(v.value)
                // document.querySelector("form").outerHTML =
                //     "<form name = frm>" +
                //     "<div id=\"variant\">\n" +
                //     "<label id=\"lbl\">3. Выберите вариант уровня понимания модели данных: </label>" +
                //     "<p>\n" +
                //     "<input type=\"radio\" id=\"model0\" name=\"model\" value=\"0\">\n" +
                //     "<label for=\"model0\">1. "+back_model_string[0]+" [0 storypoints]</label>\n" +
                //     "</p>\n" +
                //     "<p>\n" +
                //     "<input type=\"radio\" id=\"model1\" name=\"model\" value=\"1\" checked=\"checked\">\n" +
                //     "<label for=\"model1\">2. "+back_model_string[1]+" [1 storypoints]</label>\n" +
                //     "</p>\n" +
                //     "<p>\n" +
                //     "<input type=\"radio\" id=\"model2\" name=\"model\" value=\"2\">\n" +
                //     "<label for=\"model2\">3. "+back_model_string[2]+" [2 storypoints]</label>\n" +
                //     "</p>\n" +
                //     "<p>\n" +
                //     "<input type=\"radio\" id=\"model3\" name=\"model\" value=\"3\">\n" +
                //     "<label for=\"model3\">4. "+back_model_string[3]+" [3 storypoints]</label>\n" +
                //     "</p>\n" +
                //     "<p>\n" +
                //     "<input type=\"radio\" id=\"model5\" name=\"model\" value=\"5\">\n" +
                //     "<label for=\"model5\">5. "+back_model_string[5]+" [5 storypoints]</label>\n" +
                //     "</p>\n" +
                //     "<button id=\"sbmt\" name=\"button\" value=\"Вычислить\" onclick=\"chooseBackendVariant({back_tag : 3, obj : model})\">Далее</button>\n" +
                //     "</div>"
                // "</form>"
            }
            if(back_tag === 3) {
                back_model = Number(v.value)
                // document.querySelector("form").outerHTML =
                //     "<form name = frm>" +
                //     "<div id=\"variant\">\n" +
                //     "<label id=\"lbl\">4. Выберите вариант уровня владения инструментарием: </label>" +
                //     "<p>\n" +
                //     "<input type=\"radio\" id=\"instrument0\" name=\"instrument\" value=\"0\" checked=\"checked\">\n" +
                //     "<label for=\"instrument0\">1. "+back_instrument_string[0]+" [0 storypoints]</label>\n" +
                //     "</p>\n" +
                //     "<p>\n" +
                //     "<input type=\"radio\" id=\"instrument1\" name=\"instrument\" value=\"1\">\n" +
                //     "<label for=\"instrument1\">2. "+back_instrument_string[1]+" [1 storypoints]</label>\n" +
                //     "</p>\n" +
                //     "<p>\n" +
                //     "<input type=\"radio\" id=\"instrument2\" name=\"instrument\" value=\"2\">\n" +
                //     "<label for=\"instrument2\">3. "+back_instrument_string[2]+" [2 storypoints]</label>\n" +
                //     "</p>\n" +
                //     "<p>\n" +
                //     "<input type=\"radio\" id=\"instrument3\" name=\"instrument\" value=\"3\">\n" +
                //     "<label for=\"instrument3\">4. "+back_instrument_string[3]+" [3 storypoints]</label>\n" +
                //     "</p>\n" +
                //     "<p>\n" +
                //     "<input type=\"radio\" id=\"instrument5\" name=\"instrument\" value=\"5\">\n" +
                //     "<label for=\"instrument5\">5. "+back_instrument_string[5]+" [5 storypoints]</label>\n" +
                //     "</p>\n" +
                //     "<p>\n" +
                //     "<input type=\"radio\" id=\"instrument8\" name=\"instrument\" value=\"8\">\n" +
                //     "<label for=\"instrument8\">6. "+back_instrument_string[8]+" [8 storypoints]</label>\n" +
                //     "</p>\n" +
                //     "<button id=\"sbmt\" name=\"button\" value=\"Вычислить\" onclick=\"chooseBackendVariant({back_tag : 4, obj : instrument})\">Далее</button>\n" +
                //     "</div>"
                // "</form>"
            }
            if(back_tag === 4) {
                back_instrument = Number(v.value)
                // document.querySelector("form").outerHTML =
                //     "<form name = frm>" +
                //     "<div id=\"variant\">\n" +
                //     "<label id=\"lbl\">5. Выберите вариант состояния инфраструктуры: </label>" +
                //     "<p>\n" +
                //     "<input type=\"radio\" id=\"infra0\" name=\"infra\" value=\"0\" checked=\"checked\">\n" +
                //     "<label for=\"infra0\">1. "+back_infra_string[0]+" [0 storypoints]</label>\n" +
                //     "</p>\n" +
                //     "<p>\n" +
                //     "<input type=\"radio\" id=\"infra1\" name=\"infra\" value=\"1\">\n" +
                //     "<label for=\"infra1\">2. "+back_infra_string[1]+" [1 storypoints]</label>\n" +
                //     "</p>\n" +
                //     "<p>\n" +
                //     "<input type=\"radio\" id=\"infra3\" name=\"infra\" value=\"3\">\n" +
                //     "<label for=\"infra3\">3. "+back_infra_string[3]+" [3 storypoints]</label>\n" +
                //     "</p>\n" +
                //     "<p>\n" +
                //     "<input type=\"radio\" id=\"infra8\" name=\"infra\" value=\"8\">\n" +
                //     "<label for=\"infra8\">4. "+back_infra_string[8]+" [8 storypoints]</label>\n" +
                //     "</p>\n" +
                //     "<button id=\"sbmt\" name=\"button\" value=\"Вычислить\" onclick=\"chooseBackendVariant({back_tag : 5, obj : infra})\">Далее</button>\n" +
                //     "</div>"
                // "</form>"
            }
            if(back_tag === 5) {
                back_infra = Number(v.value)
                // document.querySelector("form").outerHTML =
                //     "<form name = frm>" +
                //     "<div id=\"variant\">\n" +
                //     "<label id=\"lbl\">6. Выберите вариант состояния спецификаций: </label>" +
                //     "<p>\n" +
                //     "<input type=\"radio\" id=\"specs0\" name=\"specs\" value=\"1\">\n" +
                //     "<label for=\"specs0\">1. "+back_specs_string[1]+"  [1 storypoints]</label>\n" +
                //     "</p>\n" +
                //     "<p>\n" +
                //     "<input type=\"radio\" id=\"specs1\" name=\"specs\" value=\"2\" checked=\"checked\">\n" +
                //     "<label for=\"specs1\">2. "+back_specs_string[2]+" [2 storypoints]</label>\n" +
                //     "</p>\n" +
                //     "<p>\n" +
                //     "<input type=\"radio\" id=\"specs3\" name=\"specs\" value=\"3\">\n" +
                //     "<label for=\"specs3\">3. "+back_specs_string[3]+" [3 storypoints]</label>\n" +
                //     "</p>\n" +
                //     "<p>\n" +
                //     "<input type=\"radio\" id=\"specs5\" name=\"specs\" value=\"5\">\n" +
                //     "<label for=\"specs5\">4. "+back_specs_string[5]+" [5 storypoints]</label>\n" +
                //     "</p>\n" +
                //     "<button id=\"sbmt\" name=\"button\" value=\"Вычислить\" onclick=\"chooseBackendVariant({back_tag : 6, obj : specs})\">Далее</button>\n" +
                //     "</div>"
                // "</form>"
            }
            if(back_tag === 6) {
                back_specs = Number(v.value)
                // document.querySelector("form").outerHTML =
                //     "<form name = frm>" +
                //     "<div id=\"variant\">\n" +
                //     "<label id=\"lbl\">7. Выберите степень готовности таблиц в БД: </label>" +
                //     "<p>\n" +
                //     "<input type=\"radio\" id=\"tables0\" name=\"tables\" value=\"0\">\n" +
                //     "<label for=\"tables0\">1. "+back_tables_string[0]+" [0 storypoints]</label>\n" +
                //     "</p>\n" +
                //     "<p>\n" +
                //     "<input type=\"radio\" id=\"tables1\" name=\"tables\" value=\"1\">\n" +
                //     "<label for=\"tables1\">2. "+back_tables_string[1]+" [1 storypoints]</label>\n" +
                //     "</p>\n" +
                //     "<p>\n" +
                //     "<input type=\"radio\" id=\"tables2\" name=\"tables\" value=\"2\" checked=\"checked\">\n" +
                //     "<label for=\"tables2\">3. "+back_tables_string[2]+" [2 storypoints]</label>\n" +
                //     "</p>\n" +
                //     "<p>\n" +
                //     "<input type=\"radio\" id=\"tables3\" name=\"tables\" value=\"3\">\n" +
                //     "<label for=\"tables3\">4. "+back_tables_string[3]+" [3 storypoints]</label>\n" +
                //     "</p>\n" +
                //     "<p>\n" +
                //     "<input type=\"radio\" id=\"tables5\" name=\"tables\" value=\"5\">\n" +
                //     "<label for=\"tables5\">5. "+back_tables_string[5]+" [5 storypoints]</label>\n" +
                //     "</p>\n" +
                //     "<p>\n" +
                //     "<input type=\"radio\" id=\"tables8\" name=\"tables\" value=\"8\">\n" +
                //     "<label for=\"tables8\">6. "+back_tables_string[8]+" [8 storypoints]</label>\n" +
                //     "</p>\n" +
                //     "<button id=\"sbmt\" name=\"button\" value=\"Вычислить\" onclick=\"chooseBackendVariant({back_tag : 7, obj : tables})\">Далее</button>\n" +
                //     "</div>"
                // "</form>"
            }
            if(back_tag === 7) {
                back_tables = Number(v.value)
                // document.querySelector("form").outerHTML =
                //     "<form name = frm>" +
                //     "<div id=\"variant\">\n" +
                //     "<label id=\"lbl\">8. Выберите вариант уровня заполнения таблиц тестовыми данными: </label>" +
                //     "<p>\n" +
                //     "<input type=\"radio\" id=\"test_data0\" name=\"test_data\" value=\"0\">\n" +
                //     "<label for=\"test_data0\">1. "+back_test_data_string[0]+" [0 storypoints]</label>\n" +
                //     "</p>\n" +
                //     "<p>\n" +
                //     "<input type=\"radio\" id=\"test_data2\" name=\"test_data\" value=\"2\">\n" +
                //     "<label for=\"test_data2\">2. "+back_test_data_string[2]+" [2 storypoints]</label>\n" +
                //     "</p>\n" +
                //     "<p>\n" +
                //     "<input type=\"radio\" id=\"test_data5\" name=\"test_data\" value=\"5\" checked=\"checked\">\n" +
                //     "<label for=\"test_data5\">3. "+back_test_data_string[5]+" [5 storypoints]</label>\n" +
                //     "</p>\n" +
                //     "<button id=\"sbmt\" name=\"button\" value=\"Вычислить\" onclick=\"chooseBackendVariant({back_tag : 8, obj : test_data})\">Далее</button>\n" +
                //     "</div>"
                // "</form>"
            }
            if(back_tag === 8) {
                back_test_data = Number(v.value)
                // document.querySelector("form").outerHTML =
                //     "<form name = frm>" +
                //     "<div id=\"variant\">\n" +
                //     "<label id=\"lbl\">9. Выберите вариант количесва сущностей: </label>" +
                //     "<p>\n" +
                //     "<input type=\"radio\" id=\"entity0\" name=\"entity\" value=\"0\">\n" +
                //     "<label for=\"entity0\">1. "+back_entity_string[0]+" [0 storypoints]</label>\n" +
                //     "</p>\n" +
                //     "<p>\n" +
                //     "<input type=\"radio\" id=\"entity1\" name=\"entity\" value=\"1\">\n" +
                //     "<label for=\"entity1\">2. "+back_entity_string[1]+" [1 storypoints]</label>\n" +
                //     "</p>\n" +
                //     "<p>\n" +
                //     "<input type=\"radio\" id=\"entity2\" name=\"entity\" value=\"2\" checked=\"checked\">\n" +
                //     "<label for=\"entity2\">3. "+back_entity_string[2]+" [2 storypoints]</label>\n" +
                //     "</p>\n" +
                //     "<p>\n" +
                //     "<input type=\"radio\" id=\"entity3\" name=\"entity\" value=\"3\">\n" +
                //     "<label for=\"entity3\">4. "+back_entity_string[3]+" [3 storypoints]</label>\n" +
                //     "</p>\n" +
                //     "<p>\n" +
                //     "<input type=\"radio\" id=\"entity5\" name=\"entity\" value=\"5\">\n" +
                //     "<label for=\"entity5\">5. "+back_entity_string[5]+" [5 storypoints]</label>\n" +
                //     "</p>\n" +
                //     "<p>\n" +
                //     "<input type=\"radio\" id=\"entity8\" name=\"entity\" value=\"8\">\n" +
                //     "<label for=\"entity8\">6. "+back_entity_string[8]+" [8 storypoints]</label>\n" +
                //     "</p>\n" +
                //     "<button id=\"sbmt\" name=\"button\" value=\"Вычислить\" onclick=\"chooseBackendVariant({back_tag : 9, obj : entity})\">Далее</button>\n" +
                //     "</div>"
                // "</form>"
            }
            if(back_tag === 9) {
                back_entity = Number(v.value)
                // document.querySelector("form").outerHTML =
                //     "<form name = frm>" +
                //     "<div id=\"variant\">\n" +
                //     "<label id=\"lbl\">10. Выберите вариант количества реализуемых бизнес-функций: </label>" +
                //     "<p>\n" +
                //     "<input type=\"radio\" id=\"biz_func0\" name=\"biz_func\" value=\"0\">\n" +
                //     "<label for=\"biz_func0\">1. "+back_biz_func_string[0]+" [0 storypoints]</label>\n" +
                //     "</p>\n" +
                //     "<p>\n" +
                //     "<input type=\"radio\" id=\"biz_func1\" name=\"biz_func\" value=\"1\" checked=\"checked\">\n" +
                //     "<label for=\"biz_func1\">2. "+back_biz_func_string[1]+" [1 storypoints]</label>\n" +
                //     "</p>\n" +
                //     "<p>\n" +
                //     "<input type=\"radio\" id=\"biz_func2\" name=\"biz_func\" value=\"2\">\n" +
                //     "<label for=\"biz_func2\">3. "+back_biz_func_string[2]+" [2 storypoints]</label>\n" +
                //     "</p>\n" +
                //     "<p>\n" +
                //     "<input type=\"radio\" id=\"biz_func3\" name=\"biz_func\" value=\"3\">\n" +
                //     "<label for=\"biz_func3\">4. "+back_biz_func_string[3]+" [3 storypoints]</label>\n" +
                //     "</p>\n" +
                //     "<p>\n" +
                //     "<input type=\"radio\" id=\"biz_func5\" name=\"biz_func\" value=\"5\">\n" +
                //     "<label for=\"biz_func5\">5. "+back_biz_func_string[5]+" [5 storypoints]</label>\n" +
                //     "</p>\n" +
                //     "<p>\n" +
                //     "<input type=\"radio\" id=\"biz_func8\" name=\"biz_func\" value=\"8\">\n" +
                //     "<label for=\"biz_func8\">6. "+back_biz_func_string[8]+" [8 storypoints]</label>\n" +
                //     "</p>\n" +
                //     "<button id=\"sbmt\" name=\"button\" value=\"Вычислить\" onclick=\"chooseBackendVariant({back_tag : 10, obj : biz_func})\">Далее</button>\n" +
                //     "</div>"
                // "</form>"
            }
            if(back_tag === 10) {
                back_biz_func = Number(v.value)
                // document.querySelector("form").outerHTML =
                //     "<form name = frm>" +
                //     "<div id=\"variant\">\n" +
                //     "<label id=\"lbl\">11. Выберите вариант количества реализуемых ендпоинтов: </label>" +
                //     "<p>\n" +
                //     "<input type=\"radio\" id=\"end_point0\" name=\"end_point\" value=\"0\">\n" +
                //     "<label for=\"end_point0\">1. "+back_end_point_string[0]+" [0 storypoints]</label>\n" +
                //     "</p>\n" +
                //     "<p>\n" +
                //     "<input type=\"radio\" id=\"end_point1\" name=\"end_point\" value=\"1\" checked=\"checked\">\n" +
                //     "<label for=\"end_point1\">2. "+back_end_point_string[1]+" [1 storypoints]</label>\n" +
                //     "</p>\n" +
                //     "<p>\n" +
                //     "<input type=\"radio\" id=\"end_point2\" name=\"end_point\" value=\"2\">\n" +
                //     "<label for=\"end_point2\">3. "+back_end_point_string[2]+" [2 storypoints]</label>\n" +
                //     "</p>\n" +
                //     "<p>\n" +
                //     "<input type=\"radio\" id=\"end_point3\" name=\"end_point\" value=\"3\">\n" +
                //     "<label for=\"end_point3\">4. "+back_end_point_string[3]+" [3 storypoints]</label>\n" +
                //     "</p>\n" +
                //     "<p>\n" +
                //     "<input type=\"radio\" id=\"end_point5\" name=\"end_point\" value=\"5\">\n" +
                //     "<label for=\"end_point5\">5. "+back_end_point_string[5]+" [5 storypoints]</label>\n" +
                //     "</p>\n" +
                //     "<p>\n" +
                //     "<input type=\"radio\" id=\"end_point8\" name=\"end_point\" value=\"8\">\n" +
                //     "<label for=\"end_point8\">6. "+back_end_point_string[8]+" [8 storypoints]</label>\n" +
                //     "</p>\n" +
                //     "<button id=\"sbmt\" name=\"button\" value=\"Вычислить\" onclick=\"chooseBackendVariant({back_tag : 11, obj : end_point})\">Далее</button>\n" +
                //     "</div>"
                // "</form>"
            }
            if(back_tag === 11) {
                back_end_point = Number(v.value)
            //     document.querySelector("form").outerHTML =
            //         "<form name = frm>" +
            //         "<div id=\"variant\">\n" +
            //         "<label id=\"lbl\">12. Выберите вариант уровня понимания структуры и содержания наборов входных/выходных данных: </label>" +
            //         "<p>\n" +
            //         "<input type=\"radio\" id=\"IO_data0\" name=\"IO_data\" value=\"0\">\n" +
            //         "<label for=\"IO_data0\">1. "+back_IO_data_string[0]+" [0 storypoints]</label>\n" +
            //         "</p>\n" +
            //         "<p>\n" +
            //         "<input type=\"radio\" id=\"IO_data1\" name=\"IO_data\" value=\"1\" checked=\"checked\">\n" +
            //         "<label for=\"IO_data1\">2. "+back_IO_data_string[1]+" [1 storypoints]</label>\n" +
            //         "</p>\n" +
            //         "<p>\n" +
            //         "<input type=\"radio\" id=\"IO_data2\" name=\"IO_data\" value=\"2\">\n" +
            //         "<label for=\"IO_data2\">3. "+back_IO_data_string[2]+" [2 storypoints]</label>\n" +
            //         "</p>\n" +
            //         "<p>\n" +
            //         "<input type=\"radio\" id=\"IO_data3\" name=\"IO_data\" value=\"3\">\n" +
            //         "<label for=\"IO_data3\">4. "+back_IO_data_string[3]+" [3 storypoints]</label>\n" +
            //         "</p>\n" +
            //         "<button id=\"sbmt\" name=\"button\" value=\"Вычислить\" onclick=\"chooseBackendVariant({back_tag : 12, obj : IO_data})\">Далее</button>\n" +
            //         "</div>"
            //     "</form>"
            }
            if(back_tag === 12) {
                back_IO_data = Number(v.value)
            //     document.querySelector("form").outerHTML =
            //         "<form name = frm>" +
            //         "<div id=\"variant\">\n" +
            //         "<label id=\"lbl\">13. Выберите вариант использования REST вызовов смежных сервисов с помощью web-слиентов : </label>" +
            //         "<p>\n" +
            //         "<input type=\"radio\" id=\"web_client0\" name=\"web_client\" value=\"0\">\n" +
            //         "<label for=\"web_client0\">1. "+back_web_client_string[0]+" [0 storypoints]</label>\n" +
            //         "</p>\n" +
            //         "<p>\n" +
            //         "<input type=\"radio\" id=\"web_client1\" name=\"web_client\" value=\"1\" checked=\"checked\">\n" +
            //         "<label for=\"web_client1\">2. "+back_web_client_string[1]+" [1 storypoints]</label>\n" +
            //         "</p>\n" +
            //         "<p>\n" +
            //         "<input type=\"radio\" id=\"web_client2\" name=\"web_client\" value=\"2\">\n" +
            //         "<label for=\"web_client2\">3. "+back_web_client_string[2]+" [2 storypoints]</label>\n" +
            //         "</p>\n" +
            //         "<p>\n" +
            //         "<input type=\"radio\" id=\"web_client3\" name=\"web_client\" value=\"3\">\n" +
            //         "<label for=\"web_client3\">4. "+back_web_client_string[3]+" [3 storypoints]</label>\n" +
            //         "</p>\n" +
            //         "<p>\n" +
            //         "<input type=\"radio\" id=\"web_client5\" name=\"web_client\" value=\"5\">\n" +
            //         "<label for=\"web_client5\">5. "+back_web_client_string[5]+" [5 storypoints]</label>\n" +
            //         "</p>\n" +
            //         "<p>\n" +
            //         "<input type=\"radio\" id=\"web_client8\" name=\"web_client\" value=\"8\">\n" +
            //         "<label for=\"web_client8\">6. "+back_web_client_string[8]+" [8 storypoints]</label>\n" +
            //         "</p>\n" +
            //         "<button id=\"sbmt\" name=\"button\" value=\"Вычислить\" onclick=\"chooseBackendVariant({back_tag : 13, obj : web_client})\">Далее</button>\n" +
            //         "</div>"
            //     "</form>"
            }
            if(back_tag === 13) {
                back_web_client = Number(v.value)
            //     document.querySelector("form").outerHTML =
            //         "<form name = frm>" +
            //         "<div id=\"variant\">\n" +
            //         "<label id=\"lbl\">14. Выберите вариант количества случаев использования брокера сообщений: </label>" +
            //         "<p>\n" +
            //         "<input type=\"radio\" id=\"brocker0\" name=\"brocker\" value=\"0\" checked=\"checked\">\n" +
            //         "<label for=\"brocker0\">1. "+back_brocker_string[0]+" [0 storypoints]</label>\n" +
            //         "</p>\n" +
            //         "<p>\n" +
            //         "<input type=\"radio\" id=\"brocker1\" name=\"brocker\" value=\"1\">\n" +
            //         "<label for=\"brocker1\">2. "+back_brocker_string[1]+" [1 storypoints]</label>\n" +
            //         "</p>\n" +
            //         "<p>\n" +
            //         "<input type=\"radio\" id=\"brocker2\" name=\"brocker\" value=\"2\">\n" +
            //         "<label for=\"brocker2\">3. "+back_brocker_string[2]+" [2 storypoints]</label>\n" +
            //         "</p>\n" +
            //         "<p>\n" +
            //         "<input type=\"radio\" id=\"brocker3\" name=\"brocker\" value=\"3\">\n" +
            //         "<label for=\"brocker3\">4. "+back_brocker_string[3]+" [3 storypoints]</label>\n" +
            //         "</p>\n" +
            //         "<p>\n" +
            //         "<input type=\"radio\" id=\"brocker5\" name=\"brocker\" value=\"5\">\n" +
            //         "<label for=\"brocker5\">5. "+back_brocker_string[5]+" [5 storypoints]</label>\n" +
            //         "</p>\n" +
            //         "<p>\n" +
            //         "<input type=\"radio\" id=\"brocker8\" name=\"brocker\" value=\"8\">\n" +
            //         "<label for=\"brocker8\">6. "+back_brocker_string[8]+" [8 storypoints]</label>\n" +
            //         "</p>\n" +
            //         "<button id=\"sbmt\" name=\"button\" value=\"Вычислить\" onclick=\"chooseBackendVariant({back_tag : 14, obj : brocker})\">Далее</button>\n" +
            //         "</div>"
            //     "</form>"
            }
            if(back_tag === 14) {
                back_brocker = Number(v.value)
            //     document.querySelector("form").outerHTML =
            //         "<form name = frm>" +
            //         "<div id=\"variant\">\n" +
            //         "<label id=\"lbl\">15. Выберите вариант возможности провести исследование (R&D) работы новых модулей/библиотек/компонентов: </label>" +
            //         "<p>\n" +
            //         "<input type=\"radio\" id=\"r_and_d0\" name=\"r_and_d\" value=\"0\" checked=\"checked\">\n" +
            //         "<label for=\"r_and_d0\">1. "+back_r_and_d_string[0]+" [0 storypoints]</label>\n" +
            //         "</p>\n" +
            //         "<p>\n" +
            //         "<input type=\"radio\" id=\"r_and_d1\" name=\"r_and_d\" value=\"1\">\n" +
            //         "<label for=\"r_and_d1\">2. "+back_r_and_d_string[1]+" [1 storypoints]</label>\n" +
            //         "</p>\n" +
            //         "<p>\n" +
            //         "<input type=\"radio\" id=\"r_and_d3\" name=\"r_and_d\" value=\"3\">\n" +
            //         "<label for=\"r_and_d3\">3. "+back_r_and_d_string[3]+" [3 storypoints]</label>\n" +
            //         "</p>\n" +
            //         "<p>\n" +
            //         "<input type=\"radio\" id=\"r_and_d8\" name=\"r_and_d\" value=\"8\">\n" +
            //         "<label for=\"r_and_d8\">4. "+back_r_and_d_string[8]+" [8 storypoints]</label>\n" +
            //         "</p>\n" +
            //         "<p>\n" +
            //         "<input type=\"radio\" id=\"r_and_d13\" name=\"r_and_d\" value=\"13\">\n" +
            //         "<label for=\"r_and_d13\">5. "+back_r_and_d_string[13]+" [13 storypoints]</label>\n" +
            //         "</p>\n" +
            //         "<button id=\"sbmt\" name=\"button\" value=\"Вычислить\" onclick=\"chooseBackendVariant({back_tag : 15, obj : r_and_d})\">Далее</button>\n" +
            //         "</div>"
            //     "</form>"
            }
            if(back_tag === 15) {
                back_r_and_d = Number(v.value)
            //     document.querySelector("form").outerHTML =
            //         "<form name = frm>" +
            //         "<div id=\"variant\">\n" +
            //         "<label id=\"lbl\">16. Выберите вариант уровня покрытия методов unit-тестами: </label>" +
            //         "<p>\n" +
            //         "<input type=\"radio\" id=\"unit_test0\" name=\"unit_test\" value=\"0\">\n" +
            //         "<label for=\"unit_test0\">1. "+back_unit_test_string[0]+" [0 storypoints]</label>\n" +
            //         "</p>\n" +
            //         "<p>\n" +
            //         "<input type=\"radio\" id=\"unit_test1\" name=\"unit_test\" value=\"1\">\n" +
            //         "<label for=\"unit_test1\">2. "+back_unit_test_string[1]+" [1 storypoints]</label>\n" +
            //         "</p>\n" +
            //         "<p>\n" +
            //         "<input type=\"radio\" id=\"unit_test2\" name=\"unit_test\" value=\"2\">\n" +
            //         "<label for=\"unit_test2\">3. "+back_unit_test_string[2]+" [2 storypoints]</label>\n" +
            //         "</p>\n" +
            //         "<p>\n" +
            //         "<input type=\"radio\" id=\"unit_test3\" name=\"unit_test\" value=\"3\">\n" +
            //         "<label for=\"unit_test3\">4. "+back_unit_test_string[3]+" [3 storypoints]</label>\n" +
            //         "</p>\n" +
            //         "<p>\n" +
            //         "<input type=\"radio\" id=\"unit_test5\" name=\"unit_test\" value=\"5\" checked=\"checked\">\n" +
            //         "<label for=\"unit_test5\">5. "+back_unit_test_string[5]+" [5 storypoints]</label>\n" +
            //         "</p>\n" +
            //         "<p>\n" +
            //         "<input type=\"radio\" id=\"unit_test8\" name=\"unit_test\" value=\"8\">\n" +
            //         "<label for=\"unit_test8\">6. "+back_unit_test_string[8]+" [8 storypoints]</label>\n" +
            //         "</p>\n" +
            //         "<button id=\"sbmt\" name=\"button\" value=\"Вычислить\" onclick=\"chooseBackendVariant({back_tag : 16, obj : unit_test})\">Далее</button>\n" +
            //         "</div>"
            //     "</form>"
            }
            if(back_tag === 16) {
                back_unit_test = Number(v.value)
            //     document.querySelector("form").outerHTML =
            //         "<form name = frm>" +
            //         "<div id=\"variant\">\n" +
            //         "<label id=\"lbl\">17. Выберите вариант уровня покрытия методов логами: </label>" +
            //         "<p>\n" +
            //         "<input type=\"radio\" id=\"log0\" name=\"log\" value=\"0\">\n" +
            //         "<label for=\"log0\">1. "+back_log_string[0]+" [0 storypoints]</label>\n" +
            //         "</p>\n" +
            //         "<p>\n" +
            //         "<input type=\"radio\" id=\"log1\" name=\"log\" value=\"1\">\n" +
            //         "<label for=\"log1\">2. "+back_log_string[1]+" [1 storypoints]</label>\n" +
            //         "</p>\n" +
            //         "<p>\n" +
            //         "<input type=\"radio\" id=\"log2\" name=\"log\" value=\"2\" checked=\"checked\">\n" +
            //         "<label for=\"log2\">3. "+back_log_string[2]+" [2 storypoints]</label>\n" +
            //         "</p>\n" +
            //         "<p>\n" +
            //         "<input type=\"radio\" id=\"log3\" name=\"log\" value=\"3\">\n" +
            //         "<label for=\"log3\">4. "+back_log_string[3]+" [3 storypoints]</label>\n" +
            //         "</p>\n" +
            //         "<p>\n" +
            //         "<input type=\"radio\" id=\"log5\" name=\"log\" value=\"5\">\n" +
            //         "<label for=\"log5\">5. "+back_log_string[5]+" [5 storypoints]</label>\n" +
            //         "</p>\n" +
            //         "<p>\n" +
            //         "<input type=\"radio\" id=\"log8\" name=\"log\" value=\"8\">\n" +
            //         "<label for=\"log8\">6. "+back_log_string[8]+" [8 storypoints]</label>\n" +
            //         "</p>\n" +
            //         "<button id=\"sbmt\" name=\"button\" value=\"Вычислить\" onclick=\"chooseBackendVariant({back_tag : 17, obj : log})\">Далее</button>\n" +
            //         "</div>"
            //     "</form>"
            }
            if(back_tag === 17) {
                back_log = Number(v.value)
            //     document.querySelector("form").outerHTML =
            //         "<form name = frm>" +
            //         "<div id=\"variant\">\n" +
            //         "<label id=\"lbl\">18. Выберите вариант создания скриптов миграции: </label>" +
            //         "<p>\n" +
            //         "<input type=\"radio\" id=\"migration0\" name=\"migration\" value=\"0\" checked=\"checked\">\n" +
            //         "<label for=\"migration0\">1. "+back_migration_string[0]+" [0 storypoints]</label>\n" +
            //         "</p>\n" +
            //         "<p>\n" +
            //         "<input type=\"radio\" id=\"migration1\" name=\"migration\" value=\"1\">\n" +
            //         "<label for=\"migration1\">2. "+back_migration_string[1]+" [1 storypoints]</label>\n" +
            //         "</p>\n" +
            //         "<p>\n" +
            //         "<input type=\"radio\" id=\"migration2\" name=\"migration\" value=\"2\">\n" +
            //         "<label for=\"migration2\">3. "+back_migration_string[2]+" [2 storypoints]</label>\n" +
            //         "</p>\n" +
            //         "<p>\n" +
            //         "<input type=\"radio\" id=\"migration3\" name=\"migration\" value=\"3\">\n" +
            //         "<label for=\"migration3\">4. "+back_migration_string[3]+" [3 storypoints]</label>\n" +
            //         "</p>\n" +
            //         "<p>\n" +
            //         "<input type=\"radio\" id=\"migration5\" name=\"migration\" value=\"5\">\n" +
            //         "<label for=\"migration5\">5. "+back_migration_string[5]+" [5 storypoints]</label>\n" +
            //         "</p>\n" +
            //         "<p>\n" +
            //         "<input type=\"radio\" id=\"migration8\" name=\"migration\" value=\"8\">\n" +
            //         "<label for=\"migration8\">6. "+back_migration_string[8]+" [8 storypoints]</label>\n" +
            //         "</p>\n" +
            //         "<button id=\"sbmt\" name=\"button\" value=\"Вычислить\" onclick=\"chooseBackendVariant({back_tag : 18, obj : migration})\">Далее</button>\n" +
            //         "</div>"
            //     "</form>"
            }
            if(back_tag === 18) {
                back_migration = Number(v.value)
            //     document.querySelector("form").outerHTML =
            //         "<form name = frm>" +
            //         "<div id=\"variant\">\n" +
            //         "<label id=\"lbl\">19. Выберите вариант степени подробности комментирования кода: </label>" +
            //         "<p>\n" +
            //         "<input type=\"radio\" id=\"comments0\" name=\"comments\" value=\"0\">\n" +
            //         "<label for=\"comments0\">1. "+back_comments_string[0]+" [0 storypoints]</label>\n" +
            //         "</p>\n" +
            //         "<p>\n" +
            //         "<input type=\"radio\" id=\"comments1\" name=\"comments\" value=\"1\">\n" +
            //         "<label for=\"comments1\">2. "+back_comments_string[1]+" [1 storypoints]</label>\n" +
            //         "</p>\n" +
            //         "<p>\n" +
            //         "<input type=\"radio\" id=\"comments2\" name=\"comments\" value=\"2\" checked=\"checked\">\n" +
            //         "<label for=\"comments2\">3. "+back_comments_string[2]+" [2 storypoints]</label>\n" +
            //         "</p>\n" +
            //         "<p>\n" +
            //         "<input type=\"radio\" id=\"comments3\" name=\"comments\" value=\"3\">\n" +
            //         "<label for=\"comments3\">4. "+back_comments_string[3]+" [3 storypoints]</label>\n" +
            //         "</p>\n" +
            //         // "<p>\n" +
            //         // "<input type=\"radio\" id=\"comments5\" name=\"comments\" value=\"5\">\n" +
            //         // "<label for=\"comments5\">5. "+back_comments_string[5]+" [5 storypoints]</label>\n" +
            //         // "</p>\n" +
            //         // "<p>\n" +
            //         // "<input type=\"radio\" id=\"comments8\" name=\"comments\" value=\"8\">\n" +
            //         // "<label for=\"comments8\">6. "+back_comments_string[8]+" [8 storypoints]</label>\n" +
            //         // "</p>\n" +
            //         // "<p>!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!</p>" +
            //         // "<p>!!!!!!!!!!!!! &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp В А Ж  Н А Я  &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp  И Н Ф О Р М А Ц И Я &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp !!!!!!!!!!!!!</p>" +
            //         // "<p>!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!</p>" +
            //         "<div id=\"user_estimate\">\n" +
            //         "<p><label>Для обучения нейросети мы собираем ваши описания и комментарии в текстовом виде, а также ваши экспертные колличественные оценки. </label></p>" +
            //         "<p><label>Нейросетевой модуль построенный в соответствии с архитектурой \"Bag of words\" будет обучаться на внесённых текстах и экспертных оценках и формировать собственное предсказание трудоёмкости. </label></p>" +
            //         "<p><label>Вставьте название задачи: </label></p><p><textarea class=\"\" type=\"text\" name=\"nazvanie\"  placeholder=\"название\" value=\"\" onChange=\"backNazvanieInputChange(nazvanie)\"></textarea></p>" +
            //         "<p><label>Вставьте текстовое описание задачи: </label></p><p><textarea class=\"\" type=\"text\" name=\"descr\"  placeholder=\"описание\" value=\"\" onChange=\"backDescrInputChange(descr)\"></textarea></p>" +
            //         "<p><label>Вставьте комментарии к задаче: </label></p><p><textarea class=\"\" type=\"text\" name=\"user_comments\"  placeholder=\"комментарии\" value=\"\" onChange=\"backCommentsInputChange(user_comments)\"></textarea></p>" +
            //         "<p><label id=\"lbl\">Дайте свою оценку трудоёмкости задачи:</label></p>" +
            //         "<p><label>В сторипоинтах: </label><input class=\"\" type=\"text\" name=\"storyPoint\"  placeholder=\"стори поинты\" value=\"0\" onChange=\"backStoryPointInputChange(storyPoint)\"/></p>" +
            //         "<p><label>Или в человеко-часах: </label><input class=\"\" type=\"text\" name=\"hour\"  placeholder=\"часы\" value=\"0\" onChange=\"backHourInputChange(hour)\"/></p>" +
            //         "</div>" +
            //         "<p><button id=\"sbmt\" name=\"button\" value=\"Вычислить\" onclick=\"chooseBackendVariant({back_tag : 19, obj : comments})\">Далее</button></p>\n" +
            //         "</div>" +
            //         "</form>"
            }
            if(back_tag === 19) {
                back_comments = Number(v.value)

                let front_table_string =
                    "<style type=\"text/css\">\n" +
                    "   .row_cell { \n" +
                    "      text-align: left; /* Выравнивание по левому краю */\n" +
                    "      border: 1px solid black; /* Рамка вокруг таблицы */\n" +
                    "      padding: 5px;" +
                    "   }\n" +
                    "   .right_cell { \n" +
                    "      text-align: center; /* Выравнивание по левому краю */\n" +
                    "      border: 1px solid black; /* Рамка вокруг таблицы */\n" +
                    "   }\n" +
                    "   .summ_cell { \n" +
                    "      text-align: right; /* Выравнивание по левому краю */\n" +
                    "      border: 1px solid black; /* Рамка вокруг таблицы */\n" +
                    "   }\n" +
                    "   .head_cell { \n" +
                    "      font-weight: bold; /* Жирное начертание текста */\n" +
                    "      text-align: center; /* Выравнивание по левому краю */\n" +
                    "      border: 1px solid black; /* Рамка вокруг таблицы */\n" +
                    "   }\n" +
                    "   .astimation_line { \n" +
                    "      font-weight: bold; /* Жирное начертание текста */\n" +
                    "      text-align: center; /* Выравнивание по левому краю */\n" +
                    "      size: 20; /* Размер шрифта */\n" +
                    "   }\n" +
                    "</style>\n" +
                    "<table>\n" +
                    "<tr>\n" +
                    "<th class = \"head_cell\">Фактор</th>\n" +
                    "<th class = \"head_cell\">Вариант</th>\n" +
                    "<th class = \"head_cell\">Сторипоинты</th>\n" +
                    "</tr>\n" +
                    "<tr>\n" +
                    "<td class = \"row_cell\">1. Наличие необходимых лицензий и доступов к ресурсам инфрастуктуры. </td>\n" +
                    "<td class = \"row_cell\">"+back_access_string[back_access]+"</td>\n" +
                    "<td class = \"right_cell\">"+back_access+"</td>\n" +
                    "</tr>\n" +
                    "<tr>\n" +
                    "<td class = \"row_cell\">2. Уровень понимания задачи. </td>\n" +
                    "<td class = \"row_cell\">"+back_job_string[back_job]+"</td>\n" +
                    "<td class = \"right_cell\">"+back_job+"</td>\n" +
                    "</tr>\n" +
                    "<tr>\n" +
                    "<td class = \"row_cell\">3. Уровень понимания модели данных. </td>\n" +
                    "<td class = \"row_cell\">"+back_model_string[back_model]+"</td>\n" +
                    "<td class = \"right_cell\">"+back_model+"</td>\n" +
                    "</tr>\n" +
                    "<tr>\n" +
                    "<td class = \"row_cell\">4. Уровень владения инструментарием. </td>\n" +
                    "<td class = \"row_cell\">"+back_instrument_string[back_instrument]+"</td>\n" +
                    "<td class = \"right_cell\">"+back_instrument+"</td>\n" +
                    "</tr>\n" +
                    "<tr>\n" +
                    "<td class = \"row_cell\">5. Состояние инфраструктуры. </td>\n" +
                    "<td class = \"row_cell\">"+back_infra_string[back_infra]+"</td>\n" +
                    "<td class = \"right_cell\">"+back_infra+"</td>\n" +
                    "</tr>\n" +
                    "<tr>\n" +
                    "<td class = \"row_cell\">6. Состояние спецификаций. </td>\n" +
                    "<td class = \"row_cell\">"+back_specs_string[back_specs]+"</td>\n" +
                    "<td class = \"right_cell\">"+back_specs+"</td>\n" +
                    "</tr>\n" +
                    "<tr>\n" +
                    "<td class = \"row_cell\">7. Степень годовности таблиц в БД. </td>\n" +
                    "<td class = \"row_cell\">"+back_tables_string[back_tables]+"</td>\n" +
                    "<td class = \"right_cell\">"+back_tables+"</td>\n" +
                    "</tr>\n" +
                    "<tr>\n" +
                    "<td class = \"row_cell\">8. Уровень заполнения таблиц тестовыми данными. </td>\n" +
                    "<td class = \"row_cell\">"+back_test_data_string[back_test_data]+"</td>\n" +
                    "<td class = \"right_cell\">"+back_test_data+"</td>\n" +
                    "</tr>\n" +
                    "<tr>\n" +
                    "<td class = \"row_cell\">9. Количесво сущностей. </td>\n" +
                    "<td class = \"row_cell\">"+back_entity_string[back_entity]+"</td>\n" +
                    "<td class = \"right_cell\">"+back_entity+"</td>\n" +
                    "</tr>\n" +
                    "<tr>\n" +
                    "<td class = \"row_cell\">10. Количество реализуемых бизнес-функций. </td>\n" +
                    "<td class = \"row_cell\">"+back_biz_func_string[back_biz_func]+"</td>\n" +
                    "<td class = \"right_cell\">"+back_biz_func+"</td>\n" +
                    "</tr>\n" +
                    "<tr>\n" +
                    "<td class = \"row_cell\">11. Количество реализуемых ендпоинтов. </td>\n" +
                    "<td class = \"row_cell\">"+back_end_point_string[back_end_point]+"</td>\n" +
                    "<td class = \"right_cell\">"+back_end_point+"</td>\n" +
                    "</tr>\n" +
                    "<tr>\n" +
                    "<td class = \"row_cell\">12. Уровень понимания структуры и содержания наборов входных/выходных данных. </td>\n" +
                    "<td class = \"row_cell\">"+back_IO_data_string[back_IO_data]+"</td>\n" +
                    "<td class = \"right_cell\">"+back_IO_data+"</td>\n" +
                    "</tr>\n" +
                    "<tr>\n" +
                    "<td class = \"row_cell\">13. Количество случаев использования брокера сообщений. </td>\n" +
                    "<td class = \"row_cell\">"+back_brocker_string[back_brocker]+"</td>\n" +
                    "<td class = \"right_cell\">"+back_brocker+"</td>\n" +
                    "</tr>\n" +
                    "<tr>\n" +
                    "<td class = \"row_cell\">14. Использования REST вызовов смежных сервисов с помощью web-слиентов. </td>\n" +
                    "<td class = \"row_cell\">"+back_web_client_string[back_web_client]+"</td>\n" +
                    "<td class = \"right_cell\">"+back_web_client+"</td>\n" +
                    "</tr>\n" +
                    "<tr>\n" +
                    "<td class = \"row_cell\">15. Выберите вариант возможности провести исследование (R&D) работы новых модулей/библиотек/компонентов. </td>\n" +
                    "<td class = \"row_cell\">"+back_r_and_d_string[back_r_and_d]+"</td>\n" +
                    "<td class = \"right_cell\">"+back_r_and_d+"</td>\n" +
                    "</tr>\n" +
                    "<tr>\n" +
                    "<td class = \"row_cell\">16. Уровень покрытия методов unit-тестами. </td>\n" +
                    "<td class = \"row_cell\">"+back_unit_test_string[back_unit_test]+"</td>\n" +
                    "<td class = \"right_cell\">"+back_unit_test+"</td>\n" +
                    "</tr>\n" +
                    "<tr>\n" +
                    "<td class = \"row_cell\">17. Уровень покрытия методов логами. </td>\n" +
                    "<td class = \"row_cell\">"+back_log_string[back_log]+"</td>\n" +
                    "<td class = \"right_cell\">"+back_log+"</td>\n" +
                    "</tr>\n" +
                    "<tr>\n" +
                    "<td class = \"row_cell\">18. Вариант создания скриптов миграции. </td>\n" +
                    "<td class = \"row_cell\">"+back_migration_string[back_migration]+"</td>\n" +
                    "<td class = \"right_cell\">"+back_migration+"</td>\n" +
                    "</tr>\n" +
                    "<tr>\n" +
                    "<td class = \"row_cell\">19. Cтепень подробности комментирования кода. </td>\n" +
                    "<td class = \"row_cell\">"+back_comments_string[back_comments]+"</td>\n" +
                    "<td class = \"right_cell\">"+back_comments+"</td>\n" +
                    "</tr>\n" +
                    "<tr>\n" +
                    "<td class = \"row_cell\"></td>\n" +
                    "<td class = \"summ_cell\">Сумма:</td>\n" +
                    "<td class = \"right_cell\">" + accum + "</td>\n" +
                    "</tr>\n" +
                    "</table>\n" +
                    "<p></p>" +
                    "<p></p>"



                if (accum<=3) {
                    // document.querySelector("form").outerHTML =
                    //     front_table_string +
                    //     "<div id=\"result\">\n" +
                    //     "<label id=\"lbl\">Задача относится к классу простых, на реализацию потребуется не более 1 рабочего дня.</label>" +
                    //     "</div>"
                }
                else if (accum>3 && accum<=5) {
                    // document.querySelector("form").outerHTML =
                    //     front_table_string +
                    //     "<div id=\"result\">\n" +
                    //     "<label id=\"lbl\">Задача небольшой сложности ~2 рабочих дней  для разработчика уровня мидл.</label>" +
                    //     "</div>"
                }
                else if (accum>5 && accum<=10) {
                    // document.querySelector("form").outerHTML =
                    //     front_table_string +
                    //     "<div id=\"result\">\n" +
                    //     "<label id=\"lbl\">Задача средней сложности ~5 рабочих дней  для разработчика уровня мидл.</label>" +
                    //     "</div>"
                }
                else if (accum>10 && accum<=20) {
                    // document.querySelector("form").outerHTML =
                    //     front_table_string +
                    //     "<div id=\"result\">\n" +
                    //     "<label id=\"lbl\">Задача выше средней сложности ~10 рабочих дней  для разработчика уровня мидл+.</label>" +
                    //     "</div>"
                }
                else if (accum>20 && accum<=40) {
                    // document.querySelector("form").outerHTML =
                    //     front_table_string +
                    //     "<div id=\"result\">\n" +
                    //     "<label id=\"lbl\">Задача высокой сложности ~20 рабочих дней  для разработчика уровня мидл+.</label>" +
                    //     "</div>"
                }
                else if (accum>=40) {
                    // document.querySelector("form").outerHTML =
                    //     front_table_string +
                    //     "<div id=\"result\">\n" +
                    //     "<label id=\"lbl\">Задача сверх высокой сложности/трудоёмкости, как правило нуждается в декомпозиции.</label>" +
                    //     "</div>"
                }

                back_user_description = "Нужен WebService на Spring с jetty и netty под капотом для реализации простейших CRUD операций над базой Postgrtes с Spring JDBC Template. Бизнес-логика должна быть оформляема в виде динамически подключаемых модулей"


                let xhr_back = new XMLHttpRequest();

                let json_back = JSON.stringify({
                    // "id": 0,
                    "access": back_access,
                    "job": back_job,
                    "model": back_model,
                    "instrument": back_instrument,
                    "infra": back_infra,
                    "specs": back_specs,
                    "tbls": back_tables,
                    "testData": back_test_data,
                    "entity": back_entity,
                    "bizFunc": back_biz_func,
                    "endPoint": back_end_point,
                    "ioData": back_IO_data,
                    "webClient": back_web_client,
                    "brckr": back_brocker,
                    "RAndD": back_r_and_d,
                    "unitTest": back_unit_test,
                    "log": back_log,
                    "migration": back_migration,
                    "comment": back_comments,
                    "autoLabel": accum,
                    "userLabelHr": back_user_label_hr,
                    "userLabelSP": back_user_label_sp,
                    "nazvanie": back_user_nazvanie,//Вэб сервис расчёта трудоёмкости задач разработки
                    // "description": back_user_description,//Нужен WebService на Spring с jetty и netty под капотом для реализации простейших CRUD операций над базой Postgrtes с Spring JDBC Template. Бизнес-логика должна быть оформляема в виде динамически подулючаемых модулей
                    "description": back_user_description,
                    "userComments": back_user_comments,//Использовать Hibernate, Swagger, GSON, REST, Docker
                    // "userId": 0
                });

                xhr_back.open("POST", 'http://localhost:8081/taskHardnessCalc/v1/taskAnalistt')
                xhr_back.setRequestHeader('Content-type', 'application/json; charset=utf-8');

                xhr_back.send(json_back);

            }
        }
    }
}
