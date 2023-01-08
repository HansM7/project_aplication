
function FormSearchUser({handleChangeInputUser}) {
    return (
        <>
            <div>
                <input onChange={(e)=>{handleChangeInputUser(e.target.value)}}  className="form-control" type="text" />
            </div>
        </>
    )
}

export default FormSearchUser