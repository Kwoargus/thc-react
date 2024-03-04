import React, { useState } from 'react';
import {Button, Form, Input, Radio, RadioChangeEvent, Space} from 'antd';

import {CenterDivWrapper} from "./style";
import { Divider, Typography } from 'antd';
import {СhooseSqlVariant} from "../../helper/handlerSql";

type LayoutType = Parameters<typeof Form>[0]['layout'];

export const SqlFactors: React.FC = () => {

    const [value, setValue] = useState(1);

    return (
        <CenterDivWrapper>
            <СhooseSqlVariant />
        </CenterDivWrapper>
    );
};

export default SqlFactors;

