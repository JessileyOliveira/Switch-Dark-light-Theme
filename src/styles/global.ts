import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    *{
        margin:  0px;
        padding: 0px;
        box-sizing: border-box;
    }

    body {
        background: ${(props) => props.theme.colors.background};
        font-size: 14px;
        color: ${(props) => props.theme.colors.text};
        font-family: sans-serif;
    }
`;
