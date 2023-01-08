import { Link } from "react-router-dom"

function NavbarComponent() {
	return (
		<>
			<ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
				<div className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
					<div className="sidebar-brand-icon rotate-n-15">
						<i className="fas fa-laugh-wink"></i>
					</div>
					<div className="sidebar-brand-text mx-3">DASHBOARD</div>
				</div>
				<hr className="sidebar-divider my-0" />
				<li className="nav-item active">
					<Link className="nav-link" to={'/home'}>
						<i className="fas fa-fw fa-tachometer-alt"></i>
						<span>Inicio</span>
					</Link>
				</li>
				<hr className="sidebar-divider" />

				<li className="nav-item active">
					<Link className="nav-link" to={'/users'}>
						<i className="fas fa-fw fa-tachometer-alt"></i>
						<span>Usuarios</span>
					</Link>
					
						
				</li>
				<hr className="sidebar-divider" />


			</ul>
		</>
	)
}

export default NavbarComponent