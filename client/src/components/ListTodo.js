import React, { Fragment, useState, useEffect } from 'react'
import { Button } from '@material-ui/core'
import EditTodo from './EditTodo'
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core'

const ListTodo = () => {

    const [todos, setTodos] = useState([])

    const getTodos = async () => {
        try {
            const response = await fetch('http://localhost:3000/todos')
                .then(response => response.json())
                .then(incomingDataJSON => setTodos(incomingDataJSON))
        } catch (error) {
            console.log(error.message)
        }
    }

    useEffect(() => {
        getTodos()
    }, [])

    const deleteTodo = async (id) => {
        try {
            const deleteTodo = await fetch(`http://localhost:3000/todos/${id}`, {
                method: 'DELETE',
            })

            setTodos(todos.filter(todo => todo.id !== id))


        } catch (error) {
            console.log(error.message)
        }
    }

    console.log(todos)

    return <Fragment>

        <Box m={5}>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell >Description</TableCell>
                            <TableCell >Edit</TableCell>
                            <TableCell >Delete</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {/*<tr>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                </tr>*/}

                        {todos.map(todo =>
                            <TableRow key={todo.id}>
                                <TableCell>{todo.description}</TableCell>
                                <TableCell><EditTodo todo={todo} /></TableCell>
                                <TableCell><Button variant="contained" color="secondary" onClick={() => deleteTodo(todo.id)}>Delete</Button></TableCell>
                            </TableRow>
                        )}


                    </TableBody>
                </Table>
            </TableContainer>
        </Box>

    </Fragment>
}

export default ListTodo