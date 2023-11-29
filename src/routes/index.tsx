import { Routes, Route } from "react-router-dom"
import { PageCadastrar, AdmPage, PageLogin, PageLayout, PageHome, PageLiniker, PageMliniker, PageVcliniker, PagePerfilvazio } from "../pages"
import ProtectedRoute from "../routes/ProtectedRoute";


export function Rotas () {
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
                <Route element = {<ProtectedRoute />}/>
                    <Route path = "/Adm" element = {<AdmPage />}>
                </Route>

            </Route>
            
        </Routes>
    )
}