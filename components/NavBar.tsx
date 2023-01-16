import { AppBar, Toolbar } from "@mui/material";
import Button from "@mui/material/Button";
import Link from "next/link";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { lightBlue } from '@mui/material/colors';

const navbarItems = [
    {
        name: "Home",
        path: "/"
    }, 
    {
        name: "About",
        path: "/about"
    },
    {
        name: "Players",
        path: "/players"
    }
];

const navbarTheme = createTheme({
    palette: {
        primary: {
            main: lightBlue[500]
        }
    },
    typography: {
        fontFamily: 'Nunito'
        
    }
})

function NavBar(){
    return (
        <ThemeProvider theme={navbarTheme}>
            <AppBar component="nav">
                <Toolbar>
                    {navbarItems.map((item) => 
                        <Link key={item.path} href={item.path} legacyBehavior><Button sx={{color: "#fff", fontWeight: 'bold'}}>{item.name}</Button></Link>
                    )}
                </Toolbar>
            </AppBar>
        </ThemeProvider>
    )
}

export default NavBar;