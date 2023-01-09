import FormSearchUser from "./FormSearchUser"
import { render, screen } from '@testing-library/react'
import {describe,expect,it,test} from 'vitest'


describe('Form test',()=>{
    it('Form search user', () => { 
        const handleChangeInputUser=()=>{
        }
        render(<FormSearchUser handleChangeInputUser={handleChangeInputUser}/>)
        screen.debug()
    })
})