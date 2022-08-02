import { ShoppingCart } from "@mui/icons-material";
import { AppBar, Badge, Box, IconButton, List, ListItem, Switch, Toolbar, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import AboutPage from "../../features/about/AboutPage";

interface Props{
    theme : boolean;
    handleThemeChange : () => void;
}

const midLink = [
    {title : 'catalog',path : '/catalog'},
    {title : 'about',path : '/about'},
    {title : 'contact',path : '/contact'},
]


const rightLink = [
    {title : 'login',path : '/login'},
    {title : 'register',path : '/register'},
    
]

const navStyle = {
color : 'inherit',
textDecoration : 'none',
typography : 'h6',
'&:hover': {
    color : 'grey.500'
},
'&.active' : {
    color : 'text.secondary'
}
}

export default function Header({theme, handleThemeChange} : Props)
{
    return(
        <AppBar position="static" sx={{mb : 4}} >
            <Toolbar sx={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                <Box display='flex' alignItems='center'>
            <Typography variant="h6" component={NavLink} to='/' sx={navStyle}>RE-STORE</Typography>
            <Switch checked={theme} onClick={handleThemeChange} />
            </Box>
            <List sx={{display :'flex'}}>
                {midLink.map(({title,path}) => (
                    <ListItem
                    component={NavLink} 
                    to ={path}
                    key ={path}
                sx={navStyle}
                    >
                        {title.toUpperCase()}
                    </ListItem>

                )  )}
                </List>  
                

<Box display='flex' alignItems='center'>
                <IconButton size='large' sx={{color : 'inherit'}}>
                    <Badge badgeContent={4} color="secondary">
                        <ShoppingCart />
                    </Badge>

                </IconButton>
                <List sx={{display :'flex'}}>
                {rightLink.map(({title,path}) => (
                    <ListItem
                    component={NavLink} 
                    to ={path}
                    key ={path}
                sx={navStyle}
                    >
                        {title.toUpperCase()}
                    </ListItem>

                )  )}
                </List>  
                </Box>
            </Toolbar>
        </AppBar>
    )
}