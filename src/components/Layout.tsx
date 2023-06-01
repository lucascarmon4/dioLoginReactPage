import { Header } from "./Header/Header"

export const Layout = ( {children}: any) => {
    return(
        <>
            <Header/>
            { children }
        </>
    )
}