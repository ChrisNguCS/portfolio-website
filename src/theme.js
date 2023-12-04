import { createTheme } from "@mui/material";

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
            }
        }
    }
  });

export default theme;