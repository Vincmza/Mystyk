import {render,screen,cleanup,waitFor, fireEvent}from "@testing-library/react"
import { BrowserRouter} from "react-router-dom";
import Header from "../Header";

const CustomRender = (boolean) =>{
   return (
    <BrowserRouter>
        <Header 
        navDisplayed={boolean}
        />
    </BrowserRouter>
   )
}
describe("Header", ()=>{
    describe("icon should either display or hide nav bar", ()=>{
        it("should render nav bar invisible", ()=>{
            render(<CustomRender navDisplayed={false}/>)
            const nav = screen.findByRole("ul", {name : /nav/i})
            // waitFor(()=>expect(CustomRender().navDisplayed).toBeTruthy)
            waitFor(()=>expect(nav).toBeVisible())
        })
    })
    
})