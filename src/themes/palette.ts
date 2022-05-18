import { PaletteOptions } from '@mui/material';

// VARIABLES
const black = '#161616';
const white = '#FBFAF8';
const gray10 = '#F4F4F4';
const gray30 = '#C6C6C6';
const gray50 = '#8D8D8D';
const gray70 = '#525252';
const gray90 = '#262626';

const blueDark = '#001531';
const blueMain = '#0C2C5A';
const blueMedium = '#113D7D';
const blueLight = '#D2E1F9';
const blueULight = '#F5F9FE';

const redDark = '#A0181A';
const redMain = '#E62326';
const redMedium = '#EC494C';
const redLight = '#FF9D9E';
const redULight = '#FFE2E2';

const yellowMain = '#E6AF00';
const yellowMedium = '#E6CD00';

// PALETTE
const palette: PaletteOptions = {
    primary: {
        main: white,
        dark: gray30,
        light: gray10,
        contrastText: black,
    },
    secondary: {
        main: blueMain,
        dark: blueDark,
        light: blueLight,
        contrastText: white,
    },
    // paletteColors: {
    //     white,
    //     gray10,
    //     gray30,
    //     gray50,
    //     gray70,
    //     gray90,
    //     black,
    //     blue: {
    //         blueDark,
    //         blueMain,
    //         blueMedium,
    //         blueLight,
    //         blueULight,
    //     },
    //     red: {
    //         redDark,
    //         redMain,
    //         redMedium,
    //         redLight,
    //         redULight,
    //     },
    //     yellow: {
    //         yellowMain,
    //         yellowMedium,
    //     }
    // },
};

export default palette;
