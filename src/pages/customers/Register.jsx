import { useState } from 'react'

import axios from 'axios'

import { makeStyles } from '@material-ui/styles';

import Toasty from '../../components/Toasty'

import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box';

const useStyles = makeStyles(() => ({
    registerForm: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    }
}))

function Register() {

    const styles = useStyles()

    const [form, setForm] = useState({
        name: {
            value: '',
            error: false,
        },
        job: {
            value: '',
            error: false,
        }
    })
    const [openToasty, setOpenToasty] = useState(false)

    function handleInputChange(e) {
        const { name, value } = e.target

        setForm({
            ...form,
            [name]: {
                value,
            },
        })
    }
    function handleRegisterButton() {
        let hasError = false

        let newFormState = {
            ...form,
        }

        if (!form.name.value) {
            hasError = true
            newFormState.name = {
                value: form.name.value,
                error: true,
                helperText: 'Digite o Campo Corretamente !'
            }
        }
        if (!form.job.value) {
            hasError = true
            newFormState.job = {
                value: form.job.value,
                error: true,
                helperText: 'Digite o Campo Corretamente !'
            }
        }
        if (hasError) {
            setForm(newFormState)
        }

        axios.post('https://reqres.in/api/users', {
            name: form.name.value,
            job: form.job.value,
        }).then((response) => {
            setOpenToasty(true)
        })

    }

    return (
        <div className={styles.registerForm}>
            <Box sx={{ marginTop: 8 }}>
                <TextField
                    error={form.name.error}
                    fullWidth
                    label="Digite seu Nome"
                    margin='normal'
                    name="name"
                    value={form.name.value}
                    onChange={handleInputChange}
                    helperText={form.name.error ? form.name.helperText : ''}
                />
                <TextField
                    error={form.job.error}
                    fullWidth label="Digite seu Cargo"
                    margin='normal'
                    name='job'
                    value={form.job.value}
                    onChange={handleInputChange}
                    helperText={form.job.error ? form.job.helperText : ''}
                />
                <Button variant='contained' color='primary' sx={{ marginTop: 2, padding: 1.5 }} onClick={handleRegisterButton}>
                    Adicionar Usuario
                </Button>
            </Box>
            <Toasty
                open={openToasty}
                onClose={() => setOpenToasty(false)}
                severity="success"
                textToasty="Cadastro Feito"
            />
        </div>
    )
}

export default Register