import { useState } from "react";

export const ToDoForm = ({addTask}) => {

    const [inputValue, setInputValue] = useState(''); 

    const handleSubmit = e => {
        e.preventDefault();
        addTask(inputValue);
        setInputValue('');
    }

    const handleKeyPress = e => {
        if(e.key === 'Enter') handleSubmit(e);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                value={inputValue}
                placeholder="Введите задачу"
                onChange={e => setInputValue(e.target.value)}
                onKeyDown={handleKeyPress}
            />
            <button>Добавить задачу</button>
        </form>
    )
}