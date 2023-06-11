import { Box } from "@chakra-ui/react"
import { Header } from "./Header/Header"
import { useContext } from 'react'
import { AppContext } from "./AppContext"
import { Colors } from "../Colors"

export const Layout = ( {children}: any) => {
    const { isDarkMode, transition } = useContext(AppContext)

    return(
        <Box minHeight='100vh' backgroundColor={!isDarkMode ? Colors.lightApp.primaryColor : Colors.darkApp.primaryColor} transition={transition}>
            <Header/>
            { children }
        </Box>
    )
}