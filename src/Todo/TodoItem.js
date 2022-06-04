import React, {useContext} from "react"
import PropTypes from "prop-types"
import Context from "../context";

const styles = {
    li: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '.5rem 1rem',
        border: '1px solid #ccc',
        borderRadius: '4px',
        marginBottom: '.5rem'
    },
    input: {
        marginRight: '1rem'
    }
}

function TodoItem({todo, index, OnChange}) {
    const {RemoveTodo} = useContext(Context)
    const classes = []
    if (todo.completed) {
        classes.push('done')
    }
    return <li style={styles.li}>
        <span className={classes.join('')}>
            <input checked={todo.completed}
                   style={styles.input} type="checkbox" onChange={() => OnChange(todo.id)}/>
            &nbsp;
            <strong>{index + 1}</strong>
            {todo.title}
        </span>
        <button onClick={() => RemoveTodo(todo.id)} className='rm'>&times;</button>
    </li>
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    index: PropTypes.number,
    OnChange: PropTypes.func.isRequired
}
export default TodoItem