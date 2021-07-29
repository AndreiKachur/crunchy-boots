import React from 'react';
import BeatLoader from "react-spinners/BeatLoader";
import { css } from "@emotion/react";

const Spinner = () => {
    const override = css`
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        `;
    return <BeatLoader css={override} size={20} color={'#F25287'} />
}

export default Spinner;