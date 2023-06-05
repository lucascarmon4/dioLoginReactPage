import { Route, Routes } from "react-router-dom"
import { ContaInfo } from "./pages/ContaInfo"
import { Conta } from "./pages/Conta"
import { Home } from "./pages/Home"
import { AppContext } from "./components/AppContext"
import { useContext } from 'react';

export const MainRoutes = () => {
    const { isLoggedIn } = useContext(AppContext);
    
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/conta/:id" element={isLoggedIn ? <Conta/> : <Home/>} />
            <Route path="/infoconta" element={isLoggedIn ? <ContaInfo/> : <Home/>} />
        </Routes>
    )

}