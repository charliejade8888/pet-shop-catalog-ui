import { useEffect, useState } from "react"
// import { retrievePets } from '../../api/todo/HelloWorldApiService'

import { BrowserRouter, Link, Route, Routes, useNavigate, useParams } from 'react-router-dom'
import { retrievePets } from "../../api/todo/HelloWorldApiService"

function ListTodosComponent() {

    const today = new Date()
    const targetDate = new Date(today.getFullYear() + 12, today.getMonth(), today.getDay())
    // const todos = [
        // { id: 1, description: 'Learn AWS', done: false, targetDate: targetDate },
        // { id: 2, description: 'Learn Full Stack Dev', done: false, targetDate: targetDate },
        // { id: 3, description: 'Learn Dev Ops', done: false, targetDate: targetDate }
    // ]
    const [todos,setTodos] = useState([])
    // retrievePets()
    useEffect(
        () => refreshTodos(), [] // 2nd param is deps (other components)
    )
    function refreshTodos() {
        retrievePets()
        .then(response => {
            console.log(response)
            setTodos(response.data)
        })
        .catch((error) => console.log(error))
        .finally(() => console.log('clean up'))
    }
    return (
        <div className="container">
            <h1>Pets In Store!</h1>
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <td>Id</td>
                            <td>Name</td>
                            <td>Description</td>
                            <td>Breed</td>
                            <td>Type</td>
                            <td>Price</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            todos.map(
                                todo => (
                                    <tr key={todo.id}>
                                         <td>{todo.id}</td>
                                        <td>{todo.name}</td>
                                        <td>{todo.description}</td>
                                        <td>{todo.breed}</td>
                                        <td>{todo.type}</td>
                                        <td>{todo.price}</td>
                                        {/* <td>{todo.done.toString()}</td>
                                        <td>{todo.targetDate.toDateString()}</td> */}
                                    </tr>
                                )
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ListTodosComponent