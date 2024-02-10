import React, { useState } from 'react';
import {Button, Form, Input, Radio, RadioChangeEvent, Space} from 'antd';
import {CenterDivWrapper} from "./style";
import { Divider, Typography } from 'antd';
import {СhooseManualQAVariant} from "../../helper/handlerManualQA";

type LayoutType = Parameters<typeof Form>[0]['layout'];

export const ManualQAFactors: React.FC = () => {

    const [value, setValue] = useState(1);

    return (
        <CenterDivWrapper>
            <СhooseManualQAVariant />
        </CenterDivWrapper>
    );
};

export default ManualQAFactors;

