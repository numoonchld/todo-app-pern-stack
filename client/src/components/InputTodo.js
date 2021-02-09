import React, { Fragment, useState } from "react";

const InputTodo = () => {

    const [description, setDescription] = useState('')

    const onSubmitForm = async (event) => {
        event.preventDefault()
        try {
    
            const body = { description }
            const response = await fetch( 'http://localhost:3000/todos', {
                method: 'POST',
                headers: { 'Content-type': 'application/json'},
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
            <h1 className="text-center"> To-Do List </h1>

            <form className="input-group p-5" onSubmit={onSubmitForm}>
                <input type='text' className="form-control" value={description} onChange={event => setDescription(event.target.value)}/>
                <div className="input-group-append">
                    <button className="btn btn-success"> Add </button>
                </div>
            </form>

        </Fragment>
    );
};

export default InputTodo;
