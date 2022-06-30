import { Outlet } from "react-router-dom"
import { Goback } from "../../atoms/Goback"

export const Detail = () => {
    return (
        <>
            <Goback />
            <Outlet />
        </>
    )
}