
import { useState, useEffect } from 'react'
import axios from 'axios'
import CustomerCard  from '../../components/CustomerCard'
import { Grid } from '@mui/material'


function List() {

    const [customers, setCustomers] = useState([])

    console.log(customers)


    useEffect(() => {
        axios.get('https://reqres.in/api/users')
            .then(response => {
                const { data } = response.data
                setCustomers(data)

            })
    }, [])

    function handleRemoveCustomer(id) {
        axios.delete(`https://reqres.in/api/users/${id}`)
            .then(response => {
                console.log(response)
                const newCustomersState = customers.filter(customer => customer.id !== id)
                setCustomers(newCustomersState)
            })
    }

    return (
        <div>
            <Grid container spacing={4}>
                {

                    customers.map(customer => (
                        <Grid item xs={12} md={4} >
                            <CustomerCard
                                id={customer.id}
                                name={customer.first_name}
                                lastname={customer.last_name}
                                email={customer.email}
                                avatar={customer.avatar}
                                onRemoveCustomer={handleRemoveCustomer}
                            />
                        </Grid>
                    ))
                }
            </Grid>
        </div>
    )
}

export default List