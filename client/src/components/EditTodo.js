import React, { Fragment, useState, useStateCallback, useEffect } from 'react'
import { Button, Grid, Modal, TextField, makeStyles, Typography } from '@material-ui/core'



const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: 500,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

const EditTodo = ({ todo }) => {
    const classes = useStyles();
    const [description, setDescription] = useState(todo.description)
    const [modalOpen, setModalOpen] = useState(false)

    const modalStyle = {
        top: 60,
        left: 60,
        transform: `translate(60%, 60%)`,
      }

    const openEditDialog = () => {
        setModalOpen(true)
    }

    const closeEditDialog = () => {
        setModalOpen(false)
    }

    useEffect(() => {
        if (modalOpen === false) {
            setDescription(todo.description)
        }
    }, [modalOpen])

    const updateDescription = async event => {
        event.preventDefault()
        try {
            const body = { description }
            const response = await fetch(`http://localhost:3000/todos/${todo.id}`, {
                method: 'PUT',
                headers: { "Content-type": 'application/JSON' },
                body: JSON.stringify(body)
            })

            window.location = '/'

        } catch (error) {
            console.log(error.message)
        }
    }

    return <Fragment>
        <Button variant="outlined" color="primary" onClick={openEditDialog}> Edit </Button>

        <Modal
            open={modalOpen}
            onClose={closeEditDialog}
            aria-labelledby="editModal-title"
            aria-describedby="editModal-description"
        >
            <Grid container direction="row" justify="center" alignItems="center">
                <div style={modalStyle} className={classes.paper}>
                    <Typography variant="h6" align="center"> Editing TODO Item </Typography>
                    <TextField
                        style={{ "width": 500 }}
                        variant="outlined"
                        type="text"
                        value={description}
                        onChange={event => setDescription(event.target.value)}
                        InputProps={{ endAdornment: <Button variant="contained" color="primary" onClick={event => updateDescription(event)} > Save </Button> }}
                    />
                </div>
            </Grid>
        </Modal>
    </Fragment>
}

export default EditTodo
