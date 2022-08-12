import React from 'react'
import ReactDOM from 'react-dom/client'

import { createTheme} from '@mui/material/styles';
import {ThemeProvider} from '@mui/material/styles'

import { App } from './App'
import './index.css'


const theme = createTheme({
    palette: {
        appbar:{
            main: '#3498db',
        },
        button: {
            main: '#27ae60'
        }
    },
})


ReactDOM.createRoot(document.getElementById('root')).render(
    <ThemeProvider theme={theme}>
        <App />
    </ThemeProvider>

)
