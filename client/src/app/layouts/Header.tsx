import { AppBar, Switch, Toolbar, Typography } from "@mui/material";
import AboutPage from "../../features/about/AboutPage";

interface Props{
    theme : boolean;
    handleThemeChange : () => void;
}

export default function Header({theme, handleThemeChange} : Props)
{
    return(
        <AppBar position="static" sx={{mb : 4}} >
            <Toolbar>
            <Typography variant="h6">RE-STORE</Typography>
            <Switch checked={theme} onClick={handleThemeChange} />
           
            </Toolbar>
        </AppBar>
    )
}