
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Header } from '../partials/Header/Header'




export function Customers() {

    const [users, SetUsers] = useState([])


    useEffect(() => {
        axios.get('https://reqres.in/api/users')
            .then(response => {
                console.log(response)
            })
    }, [])


    return (
        <div>
            <h2>Lista de Usuarios</h2>
        </div>
    )
}