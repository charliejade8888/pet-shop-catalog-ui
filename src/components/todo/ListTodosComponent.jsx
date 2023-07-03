import { useEffect, useState } from "react"
// import { retrievePets } from '../../api/todo/HelloWorldApiService'

import { BrowserRouter, Link, Route, Routes, useNavigate, useParams } from 'react-router-dom'
import { deletePetApi, retrievePetsApi } from "../../api/todo/PetShopApiService"

function ListTodosComponent() {
// console.log(sessionStorage)
    const navigate = useNavigate()
    const today = new Date()
    const targetDate = new Date(today.getFullYear() + 12, today.getMonth(), today.getDay())
    // const todos = [
    // { id: 1, description: 'Learn AWS', done: false, targetDate: targetDate },
    // { id: 2, description: 'Learn Full Stack Dev', done: false, targetDate: targetDate },
    // { id: 3, description: 'Learn Dev Ops', done: false, targetDate: targetDate }
    // ]
    const [todos, setTodos] = useState([])
    const [message, setMessage] = useState(null)
    // retrievePets()
    useEffect(
        () => refreshTodos(), [] // 2nd param is deps (other components)
    )
    function refreshTodos() {
        retrievePetsApi()
            .then(response => {
                console.log(response)
                setTodos(response.data)
            })
            .catch((error) => console.log(error))
            .finally(() => console.log('clean up'))
    }
    function deletePet(name) {
        console.log(`clicked + ${name}`)
        deletePetApi(name)
            .then(
                () => {
                    setMessage(`Delete of pet with name ${name} successful`)
                    refreshTodos()
                }
            )
            .catch((error) => console.log(error))
            .finally(() => console.log('clean up'))
    }
    function updatePet(name) {
        console.log(`clicked + ${name}`)
        navigate(`/pet/${name}`)
    }
    return (
        <div className="container">
            <h1>Pets In Store!</h1>
            {message && <div className="alert alert-warning">{message}</div>}
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            {/* <td>Id</td> */}
                            <th>Name</th>
                            <th>Description</th>
                            <th>Breed</th>
                            <th>Type</th>
                            <th>Price</th>
                            <th>Delete</th>
                            <th>Update</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            todos.map(
                                todo => (
                                    <tr key={todo.id}>
                                        {/* <td>{todo.id}</td> */}
                                        <td>{todo.name}</td>
                                        <td>{todo.description}</td>
                                        <td>{todo.breed}</td>
                                        <td>{todo.type}</td>
                                        <td>{todo.price}</td>
                                        <td><button className="btn btn-warning" onClick={() => { deletePet(todo.name) }}>Delete</button></td>
                                        <td><button className="btn btn-success" onClick={() => { updatePet(todo.name) }}>Update</button></td>

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