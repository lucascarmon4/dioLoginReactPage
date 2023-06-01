import { Input } from "./Input";
import {
     Center,
     Box, 
} from "@chakra-ui/react";
import { Button } from "./Button";
import { login } from "../../services/login";

export const Form = () => {
    return(
        <> 
          <Box display='flex' flexDirection='column'>
            <Input type="email" id="emailInput" label="Email"/>
            <Input type="password" id="passwordInput" label="Senha"/>
            <Center fontWeight='bold'>
                <Button buttonText="Entrar" onClick={login}/>
            </Center>
          </Box> 
        </>
    )
}