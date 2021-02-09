import React, { Fragment, useState } from 'react'

const EditTodo = ({todo}) => {
    const [description, setDescription] = useState(todo.description)
    // console.log(todo)

    const updateDescription = async event => {
        event.preventDefault()
        try {
            const body = {description}
            const response = await fetch(`http://localhost:3000/todos/${todo.id}`, {
                method: 'PUT',
                headers: {"Content-type": 'application/JSON'},
                body: JSON.stringify(body)
            })
            
            window.location = '/'

        } catch (error) {
            console.log(error.message)
        }
    }

    return <Fragment>

        <button type="button" className="btn btn-warning" data-toggle="modal" data-target={`#id${todo.id}`} >
            Edit
        </button>


        <div className="modal fade" id={`id${todo.id}`} tab-index="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" onClick={() => setDescription(todo.description)} >
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={() => setDescription(todo.description)}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <input type="text" className="form-control" value={description} onChange={event=> setDescription(event.target.value)}/>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={() => setDescription(todo.description)}>Close</button>
                        <button type="button" className="btn btn-warning" onClick={event=>updateDescription(event)}>Save Changes</button>
                    </div>
                </div>
            </div>
        </div>
    </Fragment>
}

export default EditTodo
