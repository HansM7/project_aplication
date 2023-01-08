import { useContext } from "react"
import { Link } from "react-router-dom"
import { DataContext } from "../../context/UserContext"


function TableUsers({dataUsers}) {

    const {setDataModalEdit} = useContext(DataContext)

    const styleActive='bg-success'
    const styleInactive='bg-warning'

    const openModal=(user)=>{
        setDataModalEdit({
            id:user.id,
            name: user.name,
            email: user.email,
            status: user.status,
            level: user.level
        })
    }

    return (
        <>
        <table className="table table-bordered mt-5 text-black">
            <thead>
                <tr>
                    <th>NOMBRES</th>
                    <th>CORREO</th>
                    <th>ESTADO</th>
                    <th>NIVEL</th>
                    <th colSpan={2}>ACCIONES</th>
                </tr>
            </thead>
            <tbody>
                {
                    dataUsers.map((user,key)=>(
                        <tr key={key}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td 
                            className={
                                (user.status==="active")?styleActive:styleInactive
                            }
                            >{user.status}</td>
                            <td>{user.level}</td>
                            <td> <Link className="btn btn-sm btn-outline-secondary" onClick={()=>{openModal(user)}} data-toggle="modal" data-target="#editModal">Editar</Link> </td>
                            <td> <Link className="btn btn-sm btn-outline-danger" onClick={()=>{openModal(user)}} data-toggle="modal" data-target="#deleteModal">Eliminar</Link> </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
        </>
    )
}

export default TableUsers