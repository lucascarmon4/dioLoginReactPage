import { InputComponent } from "./Input";
import {
     Center,
     Box, 
     Button
} from "@chakra-ui/react";
import { login } from "../../services/login";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../AppContext";
import { changeLocalStorage } from "../../services/storage";


export const Form = () => {
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const { setIsLoggedIn } = useContext(AppContext);
  const navigate = useNavigate();
  
  const  validateUser = async (email: string, password: string) => {
    const loggedIn = await login(email, password);

    if(!loggedIn) {
      return alert('Credenciais inválidas!');
    } 

    setIsLoggedIn(true);
    changeLocalStorage({ login: true })
    navigate('/conta/1');
    
  } 
  return(
    <> 

          <Box display='flex' flexDirection='column'>
            <Center height='100%' display='flex' flexDirection='column' alignItems='space-around'>
              <InputComponent styleInput= {{marginBottom: '20px',}} type="email" id="emailInput" label="Email" value={email} onChange={(e:any) => {
                setEmail(e.target.value)
              }}/>
              <InputComponent styleInput={{marginBottom: '20px',}} type="password" id="passwordInput" label="Password" value={password} onChange={(e:any) => {
                setPassword(e.target.value)
              }}/>
            </Center>
            <Center fontWeight='bold'>
                <Button onClick={() => validateUser(email, password)}>Entrar</Button>
            </Center>
          </Box> 
        </>
    )
}