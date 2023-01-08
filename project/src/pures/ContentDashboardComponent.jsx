import { useContext, useEffect } from "react"
import { DataContext } from "../context/UserContext"
import { Bar } from "react-chartjs-2"
import axios from "axios"

import { BASE, BASE_JSON } from "../utils/api.utils"
import 'chart.js/auto'
import INSTANCE from "../config/config"
function ContentDashboardComponent() {


    const {dataUsers,setDataUsers} = useContext(DataContext)

    useEffect(() => {
        (async () =>{
            if(INSTANCE==="NO_BACKEND"){
                await axios.get(`${BASE_JSON}/users`)
                .then((response)=> {
                    setDataUsers(response.data)
                })
                .catch((error) =>{})
            }else{
                await axios.get(`${BASE}/users`)
                .then((response)=> {
                    setDataUsers(response.data)
                })
                .catch((error) =>{})
            }
            
        })()
    }, [])


    let labelsArray=[]
    let valuesArray=[]

    for (const key in dataUsers) {
        labelsArray.push(dataUsers[key].name)
        valuesArray.push(dataUsers[key].level)
    }

    const data={
        labels:labelsArray,
        datasets:[
            {
                label:"Nivel",
                backgroundColor:"rgba(0,255,0,1)",
                borderColor:"black",
                borderWidth:1,
                hoverBackgroundColor:"rgba(0,255,0,1)",
                data:valuesArray
            }
        ]
    }

    const options={
        maintainAspectRatio:false,
        responsive:true
    }

    return (
    <>
        <div className="col-xl-12 col-lg-12">
            <div className="card shadow mb-4">
                <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                    <h6 className="m-0 font-weight-bold text-primary">Grafico nivel de usuarios</h6>
                    <div className="dropdown no-arrow">
                        <a className="dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown"
                            aria-haspopup="true" aria-expanded="false">
                            <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                        </a>
                    </div>
                </div>
                <div className="card-body">
                    <div className="chart-area">
                        <Bar
                            data={data}
                            options={options}
                        />
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}

export default ContentDashboardComponent