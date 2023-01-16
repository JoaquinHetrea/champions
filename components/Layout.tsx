import NavBar from "./NavBar";
import { Box, Toolbar } from "@mui/material";
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
    typography: {
        fontFamily: 'Nunito'
    }
})

function Layout ({ children } : { children: React.ReactNode })  {
    return (
        <ThemeProvider theme={theme}>
            <Box sx={{maxWidth: 960, marginLeft: 'auto', marginRight: 'auto', marginTop: 0}}>
                <NavBar />
                <Toolbar />
                { children }
            </Box>
        </ThemeProvider>
    );
}
 
export default Layout;