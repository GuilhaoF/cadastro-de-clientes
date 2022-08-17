
import { useState, useEffect } from 'react'
import axios from 'axios'
import { CustomerCard } from '../components/CustomerCard'
import { Grid } from '@mui/material'




export function Customers() {

    const [users, setUsers] = useState([])

    console.log(users)


    useEffect(() => {
        axios.get('https://reqres.in/api/users')
            .then(response => {
                const { data } = response.data
                setUsers(data)

            })
    }, [])

    return (
        <div>
            <Grid container spacing={4}>
                {

                    users.map(user => (
                        <Grid item xs={12} md={4}>
                            <CustomerCard
                                key={user.id}
                                name={user.first_name}
                                lastname={user.last_name}
                                email={user.email}
                                avatar={user.avatar}
                            />
                        </Grid>
                    ))
                }
            </Grid>
        </div>
    )
}