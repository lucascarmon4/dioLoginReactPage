import { Button, Center, SimpleGrid, Spinner } from "@chakra-ui/react";
import { useParams, useNavigate } from "react-router-dom";
import { CardInfo } from "../components/Card/CardInfo";
import { api } from "../api";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../components/AppContext";

export interface UserData {
    email: string;
    password: string;
    name: string;
    balance: number;
    id: string;
  }
export const Conta = () => {
    const [userData, setUserData] = useState<null | UserData>();
    const { id } = useParams();
    const navigate = useNavigate();
    
    const { isLoggedIn } = useContext(AppContext);

    !isLoggedIn && navigate('/');


    useEffect(() => {
        const getData = async () => {
            const data: any = await api;
            setUserData(data);
        };
        
        getData();
    }, []);
    


    const timeElapsed = Date.now();
    const actualData = new Date(timeElapsed);


    if(userData && id !== userData.id) {
        navigate('/');
    }
    
    return (
        <Center>
            <SimpleGrid columns={2} spacing={8} paddingTop={10}>
                {
                    userData === undefined || userData === null ?
                    (
                        <Center>
                            <Spinner size='xl' color="white"/>
                        </Center>
                    ) : 
                    (
                        <>
                            <CardInfo mainContent={`Bem vindo(a) ${userData?.name}`} content={`
                                ${actualData.getDate()}/${actualData.getMonth()+1}/${actualData.getFullYear()} ${actualData.getHours()}:${actualData.getMinutes()}
                            `}/>
                            <CardInfo mainContent={`Saldo`} content={`
                                R$ ${userData.balance}
                            `}/>
                            <Button onClick={() => navigate('/infoconta')}>Informações da conta</Button>
                        </>
                    )
                }
                
            </SimpleGrid>
        </Center>
    )
}   

