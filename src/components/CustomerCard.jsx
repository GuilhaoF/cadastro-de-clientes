import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import { red } from '@mui/material/colors';

import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'

import  ModalConfirm  from './ModalConfirm'

function CustomerCard({ id,name, lastname, avatar, email ,onRemoveCustomer}) {


  const [openModal, setOpenModal] = useState(false)


  function handleToggleOpenModal() {
    setOpenModal(!openModal)
  }
  function handleModalConfirm(id){
    onRemoveCustomer(id)
    handleToggleOpenModal()
  }
  function handleRemoveCustomer(){
    handleToggleOpenModal()
  }

  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe" src={avatar}>
              R
            </Avatar>
          }
          title={name}
          subheader={email}
        />
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <EditIcon />
          </IconButton>
          <IconButton aria-label="share" onClick={handleRemoveCustomer}>
            <DeleteIcon />
          </IconButton>
        </CardActions>
      </Card>
      <ModalConfirm
        title="Deseja Excluir Cadastro?"
        message="Ao confirmar impossivel remover alteracao 🙁"
        open={openModal}
        onClose={handleToggleOpenModal}
        onConfirm={() =>handleModalConfirm(id)}
      />
    </>
  );
}

export default CustomerCard