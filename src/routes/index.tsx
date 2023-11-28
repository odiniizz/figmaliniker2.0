import { Routes, Route } from "react-router-dom"
import { PageCadastrar, PageLogin, PageLayout, PageHome, PageLiniker, PageMliniker, PageVcliniker, PagePerfilvazio, PageLogin } from "../pages"
import protectedRoute from "./ProtectedRoute";

const Rotas = () => {}
export function RouteSoftware() {
    return (
        <Routes>
            <Route path="/" element={<PageLayout/>} >
                <Route path="" element={<PageHome/>} />
                <Route path="/Liniker" element={<PageLiniker/>} />
                <Route path="/Mliniker" element={<PageMliniker/>} />
                <Route path="/Vcliniker" element={<PageVcliniker/>} />
                <Route path="/Perfilvazio" element={<PagePerfilvazio/>} />
                <Route path="/Login" element={<PageLogin/>} />
                <Route path="/Cadastrar" element={<PageCadastrar/>} />
                <Route element = {<ProtectedRoute />}>
                    <Route path = "/Adm" element = {PageAdm />}>
                </Route>

            </Route>
            
        </Routes>
    )
}