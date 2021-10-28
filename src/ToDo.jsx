export const ToDo = ({todo, removeTask, handleComplete}) => {
    return (
        <div key={todo.id} className={!todo.complete ? 'item-todo' : 'todo-complete'}>
            <div onClick={() => handleComplete(todo.id)} className={todo.complete ? 'text-complete' : ''}>
                {todo.text}
            </div>
            <div onClick={() => removeTask(todo.id)} className='item-delete'>
                +
            </div>
        </div>
    )
}