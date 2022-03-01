import React from 'react'

const TodoList = ({ item, items, setItems }) => {


    const handleCheckClick = (e, id) => {
        setItems(items.map((todo) => {
            if (todo.id == id) {
                return {...todo,completed:e.target.checked}
            } else {
                return todo
            }
        }))
       
    }

    return (
        <div className={` text-center w-8/12 p-4 m-3 ${item.completed?"bg-blue-700":"bg-white"}`}>

            {item.text}
            <input className='ml-3' type="checkbox" 
                checked={item.completed} onChange={(e) => handleCheckClick(e, item.id)} />

        </div>
    )
}

export default TodoList