import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';


import useStyles from './Header.style';


export function Header() {

    const styles = useStyles()

    return (
        <AppBar position="static" color='appbar'>
            <Toolbar>
                <Typography textAlign='center' variant="h4" className={styles.title}>
                    My App
                </Typography>
            </Toolbar>
        </AppBar>
    )
}