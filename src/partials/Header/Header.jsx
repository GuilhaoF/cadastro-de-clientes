import { useState } from 'react';


import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import GroupAddIcon from '@mui/icons-material/GroupAdd';

import Drawer from '@mui/material/Drawer';


import {useHistory} from 'react-router-dom'

import useStyles from './Header.style';
import { List, ListItemIcon, ListItemText, ListItem, IconButton } from '@mui/material';


export function Header() {

    const styles = useStyles()

    const [menuOpen, setMenuOpen] = useState(false)

    const history = useHistory()


    function handleToggleMenu() {
        setMenuOpen(!menuOpen)
    }
    function handleMenuClick(route){
        history.push(route)
    }

    return (
        <AppBar position="static" color='appbar'>
            <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                    onClick={()=>handleToggleMenu()}
                >
                    <MenuIcon />
                </IconButton>
                <Typography textAlign='center' variant="h4" className={styles.title}>
                 Usuarios do Sistema
                </Typography>
            </Toolbar>
            <Drawer open={menuOpen} onClose={() => handleToggleMenu()}>
                <List>
                    <ListItem button onClick={()=>handleMenuClick('/')}>
                        <ListItemIcon>
                            <HomeIcon/>
                        </ListItemIcon>
                        <ListItemText>Pagina Inicial</ListItemText>
                    </ListItem>
                    <ListItem button onClick={()=>handleMenuClick('/customers')}>
                        <ListItemIcon>
                            <GroupAddIcon/>
                        </ListItemIcon>
                        <ListItemText>Lista de Clientes</ListItemText>
                    </ListItem>
                </List>
            </Drawer>
        </AppBar>
    )
}