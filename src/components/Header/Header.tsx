import { Box, Button, Image, Text } from '@chakra-ui/react'
import { useContext } from 'react'
import { AppContext } from '../AppContext';
import { useNavigate } from 'react-router-dom';
import { changeDarkModeLocalStorage, changeLocalStorage } from '../../services/storage';
import { Colors } from '../../Colors';


export const Header = () => {

    const { isLoggedIn, setIsLoggedIn, isDarkMode, setIsDarkMode, transition } = useContext(AppContext)
    const navigate = useNavigate();
    
    const logout = () => {
        changeLocalStorage({ login:false });
        navigate('/');
        setIsLoggedIn(false);
    }

    const handleDarkMode = () => {
        
        if(isDarkMode) {
            setIsDarkMode(false);
            changeDarkModeLocalStorage(false);
        }
        else {
            setIsDarkMode(true);
            changeDarkModeLocalStorage(true);
        } 
    }

    return (
        
        <Box padding='50px 0' display='flex' alignItems='center' justifyContent='space-around' > 
            <Image borderRadius='50%' width='100px' src="https://play-lh.googleusercontent.com/P3xTS7gQrh0S2e_99KmHVGiVUcvepvj4eFFhqU_y6XFRegRoo1fTZ8r6t1MUsmfRxXNJ=w240-h480-rw" alt="Logo Dio" />
            <Box display="flex" gap={3}>
                <Text fontWeight='bold' textTransform='uppercase' fontSize='25px'>Dio Bank</Text>
                {
                    isLoggedIn && (
                        <Button 
                            backgroundColor={!isDarkMode ? Colors.lightApp.secondaryColor : Colors.darkApp.secondaryColor}
                            onClick={() => logout()}
                            transition={transition}>
                            Sair
                        </Button>
                    )
                }
            </Box>
            <Button 
                onClick={() => handleDarkMode()}
                backgroundColor={!isDarkMode ? Colors.lightApp.secondaryColor : Colors.darkApp.secondaryColor}
                transition={transition}> 
                    {isDarkMode ? "LightMode" : "DarkMode"}
            </Button>
        </Box>
    )
}