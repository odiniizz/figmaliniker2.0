import { Routes, Route } from "react-router-dom"
import { PageLayout, PageHome } from "../pages"
import { Liniker } from "../pages/Liniker"

export function RouteSoftware() {
    return (
        <Routes>
            <Route path="/" element={<PageLayout/>} >
                <Route path="" element={<PageHome/>} />
                <Route path="Liniker" element={<Liniker/>} />
            </Route>
            
        </Routes>
    )
}