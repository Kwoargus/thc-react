import React, { useState } from 'react';
import {Button, Form, Input, Radio, RadioChangeEvent, Space} from 'antd';
import {CenterDivWrapper} from "../style";
import { Divider, Typography } from 'antd';
import {СhooseAnalistVariant} from "../../helper/handlerAnalist";

type LayoutType = Parameters<typeof Form>[0]['layout'];

export const AnalistFactors: React.FC = () => {

    const [value, setValue] = useState(1);

    return (
        <CenterDivWrapper>
            <СhooseAnalistVariant />
        </CenterDivWrapper>
    );
};

export default AnalistFactors;

