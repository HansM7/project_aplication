import { BrowserRouter as Router, Routes,Route } from "react-router-dom"
import Index from "../containers/Index"
import DashboardPage from "../pages/DashboardPage"
import Error404 from "../pages/Error404"
import UsersPage from "../pages/UsersPage"

function AppRouting() {
  return (
        <Routes>
            {/* <Route path="/login" element={<Login/>} /> */}
            {/* {/* <Route path="/register" element={<Register/>} />*/}
            <Route path="/home" element={<DashboardPage/>} /> 
            <Route path="/users" element={<UsersPage/>} /> 
            <Route path="/" element={<Index />} /> 
            <Route path="*" element={<Error404 />} />
        </Routes>
  )
}

export default AppRouting