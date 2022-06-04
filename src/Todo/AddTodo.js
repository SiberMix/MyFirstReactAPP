import React, {useState} from "react";
import PropTypes from "prop-types";

function AddTodo({onCreate}) {
    const [value, setValue] = useState('')

    function submitHandler(event) {
        event.preventDefault()
        if (value.trim()) {
            onCreate(value)
        }

    }

    return (
        <form onSubmit={submitHandler}>
            <input value={value} className='addtext' onChange={event => setValue(event.target.value)} type="text"/>
            <button className='add' type='submit'>Добавить</button>
        </form>
    )
}

AddTodo.propTypes = {
    onCreate: PropTypes.func.isRequired
}
export default AddTodo