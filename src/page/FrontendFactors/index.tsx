import React, { useState } from 'react';
import {Button, Form, Input, Radio, RadioChangeEvent, Space} from 'antd';
import {CenterDivWrapper} from "../style";
import { Divider, Typography } from 'antd';
import {СhooseFrontVariant} from "../../helper/handlerFront";

type LayoutType = Parameters<typeof Form>[0]['layout'];

export const FrontendFactors: React.FC = () => {

    const [value, setValue] = useState(1);

    return (
        <CenterDivWrapper>
            <СhooseFrontVariant />
        </CenterDivWrapper>
    );
};

export default FrontendFactors;