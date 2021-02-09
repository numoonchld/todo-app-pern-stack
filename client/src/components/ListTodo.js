import React, { Fragment, useState, useEffect } from 'react'

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
    },[])

    console.log(todos)

    return <Fragment>
        <table className="table table-striped text-center">
            <thead>
                <tr>
                    <th scope="col">Description</th>
                    <th scope="col">Edit </th>
                    <th scope="col">Delete</th>

                </tr>
            </thead>
            <tbody>
                {/*<tr>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                </tr>*/}

                {todos.map(todo => 
                    <tr key={todo.id}>
                        <td>{todo.description}</td>
                        <td>Edit</td>
                        <td>Delete</td>
                    </tr>
                )}


            </tbody>
        </table>
    </Fragment>
}

export default ListTodo