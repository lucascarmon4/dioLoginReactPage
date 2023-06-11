import { Box } from "@chakra-ui/react";
import { AppContext } from '../AppContext';
import { useContext } from 'react'
import { Colors } from "../../Colors";




export const Card = ({ children }: any) => {
  const { isDarkMode, transition } = useContext(AppContext)

  return (
    <>
      <Box minHeight='100vh' transition={transition} backgroundColor={!isDarkMode ? Colors.lightApp.primaryColor : Colors.darkApp.primaryColor} padding='25px'>
        {children}  
      </Box>
    </>
  )
}