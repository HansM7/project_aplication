import axios from 'axios'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import INSTANCE from '../config/config'
import { schema } from '../model/LoginSchema'
import { BASE, BASE_JSON, TOKEN_USER } from '../utils/api.utils'


function Login() {

	const navigate = useNavigate()

	const [loading, setLoading] = useState({
		status:false,
		alert:false,
	})

	const handleSubmitForm = async(data)=>{
		if(INSTANCE==="NO_BACKEND"){
			let state=false
			await axios.post(`${BASE_JSON}/login`,data)
			.then((response)=> {
				window.localStorage.setItem(TOKEN_USER,response.data.token)
				navigate('/home')
				state = true
			})
			.catch((error) =>{
				alert("erro en la petición")
			})

			return state
		}else{
			let state=false
			await axios.post(`${BASE}/login`,data)
			.then((response)=> {
				window.localStorage.setItem(TOKEN_USER,response.data.token)
				navigate('/home')
				state = true
			})
			.catch((error) =>{
				alert("erro en la petición")
			})

			return state
		}
		
	}

	return (

		<Formik 
	
			initialValues={{
				username:"",
				password:""
			}}

			validationSchema={schema}

			onSubmit={ async (values,{resetForm}) => {
				const res = await handleSubmitForm(values)
				if(res){
					resetForm({values:''})
					setLoading({...loading,status:true,alert:false})
				}else{setLoading({...loading,alert:true})}
			}}
			>

			{({ values,touched,errors,handleChange,handleBlur,isSubmitting }) => (
				<Form className="col-6 flex-center mt-5 border p-5" style={{margin:'auto'}}>
					<div className='text-center'><h3>Bienvenido</h3></div>
					<br />
					<div className="form-outline mb-4">
						<Field 
						name="username" 
						type="text" 
						autoComplete="off"
						className="form-control"
						placeholder="Ingrese su usuario"
						/>
						<div className='mt-2 text-danger'>
							<ErrorMessage name='username'></ErrorMessage>
						</div>
					</div>

					<div className="form-outline mb-4">
						<Field 
						name="password" 
						type="password" 
						className="form-control"
						placeholder="Ingrese su contraseña"
						/>
						
						<div className='mt-2 text-danger'>
							<ErrorMessage name='password'></ErrorMessage>
						</div>
					</div>

					<button type="submit" className="btn btn-primary btn-block mb-4">
						{
						(loading.status)?(
							<div className="d-flex align-items-center">
								<strong style={{marginRight:"10px"}}>Ingresando...  </strong>
								<div className="spinner-border ms-auto" role="status" aria-hidden="true"></div>
							</div>
						):(
							<div className="d-flex align-items-center">
								<strong>Ingresar </strong>
							</div>
						)
					}
					</button>

					{
						(loading.alert)?(
							<div className="alert alert-warning alert-dismissible fade show" role="alert">
								<strong>Error!</strong> Credenciales incorrectas.
								<button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
							</div>
						):""
					}
				
					
				</Form>
				
			)}
		</Formik>
	)
}

export default Login