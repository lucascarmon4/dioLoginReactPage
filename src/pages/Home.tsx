import { Box, Center, Text } from "@chakra-ui/react"
import { Card } from "../components/Card/Card"
import { Form } from "../components/Card/Form"
import { AppContext } from "../components/AppContext"
import { useContext } from 'react'
import { Colors } from '../Colors'

export const Home = () => {
    const { isDarkMode, transition } = useContext(AppContext)



    return (
        <Card> 
            <Center>
                <Box backgroundColor={!isDarkMode ? Colors.lightApp.secondaryColor : Colors.darkApp.secondaryColor} 
                     borderRadius='25px'
                     padding='15px' 
                     minWidth='350px' 
                     minHeight='300px' 
                     display="flex"
                     flexDirection='column' 
                     justifyContent='space-around'
                >
                    <Center fontSize={23} fontWeight='bold'>
                        <Text>
                            Faça o login: 
                        </Text>

                    </Center>
                    <Form />
                </Box>
            </Center>
            <Box 
                color={!isDarkMode ? Colors.lightApp.thirdyColor : Colors.darkApp.thirdyColor} 
                textAlign='center' 
                marginTop={3}
                transition={transition}
            >
                <h1>Credentials</h1>
                <h1>login: lucas@gmail.com</h1>
                <h1>password: pass123</h1>
            </Box>
        </Card>
    )
}