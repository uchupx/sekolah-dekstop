import { createGlobalStyle } from 'styled-components';

import robotoBlack from './Roboto/Roboto-Black.ttf';
import robotoBlackItalic from './Roboto/Roboto-BlackItalic.ttf';
import robotoBold from './Roboto/Roboto-Bold.ttf';
import robotoBoldItalic from './Roboto/Roboto-BoldItalic.ttf';
import robotoItalic from './Roboto/Roboto-Italic.ttf';
import robotoLightItalic from './Roboto/Roboto-LightItalic.ttf';
import robotoLight from './Roboto/Roboto-Light.ttf';
import robotoMedium from './Roboto/Roboto-Medium.ttf';
import robotoMediumItalic from './Roboto/Roboto-MediumItalic.ttf';
import robotoThin from './Roboto/Roboto-Thin.ttf';
import robotoThinItalic from './Roboto/Roboto-ThinItalic.ttf';
import robotoRegular from './Roboto/Roboto-Regular.ttf';

export default createGlobalStyle`
    @font-face {
        font-family: 'Roboto';
        src: local('Roboto'), local('Roboto'),
        url(${robotoRegular}) format('truetype');
        font-weight: 300;
        font-style: normal;
    }
    body {
        margin:0
    }
`;