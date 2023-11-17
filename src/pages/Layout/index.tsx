import { Outlet } from "react-router-dom"
import { ComponentHeader } from "../../components"
import * as S from "./styles"

export function Layout() {
    return (
        <>
            <S.Fundo>
                <Outlet />
            </S.Fundo>
        </>
    )
}