import { Routes, Route } from "react-router-dom"
import { PageLayout, PageHome, PageLiniker, PageMliniker, PageVcliniker } from "../pages"



export function RouteSoftware() {
    return (
        <Routes>
            <Route path="/" element={<PageLayout/>} >
                <Route path="" element={<PageHome/>} />
                <Route path="/Liniker" element={<PageLiniker/>} />
                <Route path="/Mliniker" element={<PageMliniker/>} />
                <Route path="/Vcliniker" element={<PageVcliniker/>} />

            </Route>
            
        </Routes>
    )
}