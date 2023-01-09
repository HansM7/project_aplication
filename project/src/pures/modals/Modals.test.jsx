import { render, screen } from "@testing-library/react";
import { describe, it } from "vitest";
import ModalRegister from "./ModalRegister";


describe("Testing modals",()=>{
    it("Modal register",()=>{
        render(<ModalRegister />)
        expect(screen.getByText('Registrar usuario')).toBeInTheDocument()
    })
})