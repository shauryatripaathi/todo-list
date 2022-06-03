import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import './style.css'
import { todoAdd, toDoRemove } from '../../features/counter/todoSlice';

export default function Todo() {
    const displayText = useSelector((state) => state.toDo.value)
    const [text, setText] = useState('')
    const dispatch = useDispatch()

    const onClick = () => {
        dispatch(todoAdd({ text }))
    }

    const removeButton = (e)=>{
        const evt =e.target.id
        dispatch(toDoRemove({evt}))
        console.log(displayText.filter((item)=> console.log(item.id)))
        console.log('remove btn',e.target.id)
    }
 
    return (
        <div>
            <div className="todoApp">
                <input value={text} onChange={(e) => { (setText(e.target.value)) }} type='text' placeholder='Add task' />
                <button onClick={onClick}> Add</button>
            </div>
            <div>
                <h4>Your Tasks :</h4>
                <ul>{displayText.map((item, index) => {
                    return (
                        <li key={index}> {item} <button id = {index} onClick={removeButton}>Remove</button></li>
                    )
                })}
                </ul>
            </div>
        </div>
    )
}