import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import DataProvider from "../context/UserContext"
import ContentDashboardComponent from "../pures/ContentDashboardComponent"
import ModalLogout from "../pures/modals/ModalLogout"
import NavbarComponent from "../pures/NavbarComponent"
import TopBarComponent from "../pures/TopBarComponent"
import { TOKEN_USER } from "../utils/api.utils"


function Dashboard() {

	const navigate = useNavigate()

	const token = window.localStorage.getItem(TOKEN_USER)

	useEffect(() => {
		if(!token){
			navigate('/')
		}
	}, [])
	

	return (
	<>
        <DataProvider>

			<div id="wrapper">

				<NavbarComponent></NavbarComponent>
				
				<div id="content-wrapper" className="d-flex flex-column">

					<div id="content">
						<TopBarComponent></TopBarComponent>
						<div className="container-fluid">

							<div className="d-sm-flex align-items-center justify-content-between mb-4">
								<h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
							</div>


							<div className="row">
								<ContentDashboardComponent></ContentDashboardComponent>
							</div>
						</div>
					</div>
				</div>
			</div>

			<ModalLogout></ModalLogout>
        </DataProvider>

	</>
	)
}

export default Dashboard