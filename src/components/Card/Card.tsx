import { Form } from "./Form";
import { Center, Box } from "@chakra-ui/react";
import { Layout } from "../Layout";

export const Card = () => {
    return(
        <>
          <Layout>
            <Center>
              <Box backgroundColor='#FFFFFF' borderRadius='25px' padding='15px' minWidth='350px' minHeight='300px' display="flex"
              flexDirection='column' justifyContent='space-around'> 
                  <Center fontSize={23} fontWeight='bold'>
                      <h1>Faça o login:</h1>
                  </Center>
                  <Form/>
              </Box>
            </Center>
          </Layout>  
        </>
    )
}