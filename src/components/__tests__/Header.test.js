import {render,screen,cleanup,waitFor, fireEvent}from "@testing-library/react"
import { BrowserRouter} from "react-router-dom";
import Header from "../Header";

function customRender(children) {
    return render(
      <BrowserRouter>
        {children}
      </BrowserRouter>
    )
  }
describe("Header", ()=>{
    describe("icon should either display or hide nav bar", ()=>{
        it("should render nav bar visible", ()=>{
            customRender(<Header/>)
            const icon = screen.getByTitle("icon-header")
            fireEvent.click(icon)
            const nav = screen.getByTitle("nav")
            waitFor(()=>expect(nav).toBeVisible())
        })
    })
    
})