import React, { Fragment, useState } from "react";
import { Box, Grid, Button, TextField, Typography } from '@material-ui/core'

const InputTodo = () => {

    const [description, setDescription] = useState('')

    const onSubmitForm = async (event) => {
        event.preventDefault()
        try {

            const body = { description }
            const response = await fetch('http://localhost:3000/todos', {
                method: 'POST',
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify(body)
            })

            // console.log(response)
            window.location = '/'


        } catch (error) {
            console.log(error.message)
        }

    }

    return (
        <Fragment>

            <Box m={5}>
                <Typography variant="h5" align="center"> TO-DO LIST</Typography>

                <Grid container direction="row" justify="center" alignItems="center">
                    <form onSubmit={onSubmitForm}>
                        <TextField
                            style={{ "width": "50vw" }}
                            variant="outlined"
                            value={description}
                            onChange={event => setDescription(event.target.value)}
                            InputProps={{ endAdornment: <Button variant="contained" color="primary" type="submit"> Add </Button> }} />
                    </form>
                </Grid>
            </Box>
        </Fragment>
    );
};

export default InputTodo;
