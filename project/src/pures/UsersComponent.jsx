import { useContext } from "react"
import { DataContext } from "../context/UserContext"
import axios from "axios"
import {BASE, BASE_JSON} from '../utils/api.utils'
import { useEffect, useState } from "react"
import TableUsers from "./tables/TableUsers"
import FormSearchUser from "./forms/FormSearchUser"
import INSTANCE from "../config/config"

function UsersComponent() {


    const {dataUsers,setDataUsers} = useContext(DataContext)

    useEffect(() => {

        if(INSTANCE==="NO_BACKEND"){
            (async () =>{
                await axios.get(`${BASE_JSON}/users`)
                .then((response)=> {
                    setDataUsers(response.data)
                })
                .catch((error) =>{
                    
                })
            })()
        }else{
            (async () =>{
                await axios.get(`${BASE}/users`)
                .then((response)=> {
                    setDataUsers(response.data)
                })
                .catch((error) =>{
                    
                })
            })()
        }

        
    }, [])

    const handleChangeInputUser=async(name)=>{
        
        if(INSTANCE==="NO_BACKEND"){
            await axios.get(`${BASE_JSON}/users/${name}`)
            .then((response)=> {
                setDataUsers(response.data)
            })
            .catch((error) =>{})
        }else{
            await axios.get(`${BASE}/users/${name}`)
            .then((response)=> {
                setDataUsers(response.data)
            })
            .catch((error) =>{})
        }
        
    }


    return (
        <>
            <div className="col-xl-12 col-lg-12">
                <div className="card shadow mb-4">
                    <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                        <h6 className="m-0 font-weight-bold text-primary">Listado de usuarios</h6> 
                    </div>
                    <div className="card-body">
                        <div>
                            <div>
                                <FormSearchUser
                                    handleChangeInputUser={handleChangeInputUser}
                                ></FormSearchUser>
                            </div>
                        </div>
                        <div>
                            <TableUsers
                                dataUsers={dataUsers}
                                setDataUsers={setDataUsers}
                            ></TableUsers>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UsersComponent