
import axios from 'axios'
import { createContext, useState } from 'react'
import INSTANCE from '../config/config'

import { BASE, BASE_JSON } from '../utils/api.utils'
export const DataContext=createContext()


const DataProvider =({children})=>{

    const [dataUsers, setDataUsers] = useState([])

    const [dataModalEdit, setDataModalEdit] = useState({
        id:"",
        name:"",
        email:"",
        status:"",
        level:""
    })

    

    const getUsers = async()=>{


        if(INSTANCE==="NO_BACKEND"){
            await axios.get(`${BASE_JSON}/users`)
            .then((result) => {
                setDataUsers(result.data)
            }).catch((err) => {});
        }else{
            await axios.get(`${BASE}/users`)
            .then((result) => {
                setDataUsers(result.data)
            }).catch((err) => {});
        }

        
    }


    return (
        <DataContext.Provider value={{
            dataUsers,
            setDataUsers,
            getUsers,
            dataModalEdit,
            setDataModalEdit
        }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataProvider