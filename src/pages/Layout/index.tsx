import { Outlet } from "react-router-dom"
import { ComponentHeader, ComponentFooter } from "../../components"
import * as S from "./styles"

export function Layout() {
    return (
        <>
            <S.Fundo>
                <Outlet />
            </S.Fundo>
            <ComponentFooter />
        </>
    )
}