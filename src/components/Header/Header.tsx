import { Box, Button, Image, Text } from '@chakra-ui/react'
import { useContext } from 'react'
import { AppContext } from '../AppContext';
import { useNavigate } from 'react-router-dom';
import { changeLocalStorage } from '../../services/storage';


export const Header = () => {
    
    const { isLoggedIn, setIsLoggedIn } = useContext(AppContext)
    const navigate = useNavigate();
    
    const logout = () => {
        changeLocalStorage({ login:false });
        navigate('/');
        setIsLoggedIn(false);
    }

    return (
        
        <Box padding='50px 0' display='flex' alignItems='center' justifyContent='space-around'> 
            <Image borderRadius='50%' width='100px' src="https://play-lh.googleusercontent.com/P3xTS7gQrh0S2e_99KmHVGiVUcvepvj4eFFhqU_y6XFRegRoo1fTZ8r6t1MUsmfRxXNJ=w240-h480-rw" alt="Logo Dio" />
            <Box display="flex" gap={3}>
                <Text fontWeight='bold' textTransform='uppercase' fontSize='25px'>Dio Bank</Text>
                {
                    isLoggedIn && (
                        <Button onClick={() => logout()}>Sair</Button>
                    )
                }
            </Box>
        </Box>
    )
}