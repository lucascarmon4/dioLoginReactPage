import { Box, Center } from "@chakra-ui/react"
import { Card } from "../components/Card/Card"
import { Form } from "../components/Card/Form"

export const Home = () => {
    return (
        <Card> 
            <Center>
                <Box backgroundColor='#FFFFFF' borderRadius='25px' padding='15px' minWidth='350px' minHeight='300px' display="flex"
                    flexDirection='column' justifyContent='space-around'>
                    <Center fontSize={23} fontWeight='bold'>
                        <h1>Faça o login: </h1>

                    </Center>
                    <Form />
                </Box>
            </Center>
            <Box color='white' textAlign='center' marginTop={3}>
                <h1>Credentials</h1>
                <h1>login: lucas@gmail.com</h1>
                <h1>password: pass123</h1>
            </Box>
        </Card>
    )
}