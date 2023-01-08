import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import LoginPage from "../pages/LoginPage"
import { TOKEN_USER } from "../utils/api.utils"


function Index() {

	const navigate=useNavigate()

	const tokenUser=window.localStorage.getItem(TOKEN_USER)


    useEffect(() => {
        if(tokenUser){
            navigate("/home")
        }
    }, [])

    
    return (
        <div className="App">
            <LoginPage></LoginPage>
        </div>
    )
    

    

	
}

export default Index
