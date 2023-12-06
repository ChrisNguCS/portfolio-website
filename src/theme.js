import { createTheme} from "@mui/material";

const theme = createTheme({
    palette: {
        background:{
            lightgray: '#323232',
        },
        primary:{
            main: '#ec751a',
        },        
    },
    typography: {
        fontFamily: [
            'Poppins',
            'sans-serif',
        ].join(',')
    },
    components: {
        MuiChip:{
            props: { variant: 'stack' },
            style: {
                color: '#ffffff',
                border: '2px solid'
            },
        },
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1536,
        },
    },
});

export default theme;