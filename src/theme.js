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
    }
  });

export default theme;