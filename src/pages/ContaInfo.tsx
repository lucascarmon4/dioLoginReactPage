import { Box, Card, Center, Spinner, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { api } from '../api';
import { UserData } from './Conta';

export const ContaInfo = () => {
    const [userData, setUserData] = useState<null | UserData>();

    useEffect(() => {
        const getData = async () => {
            const data: any = await api;
            setUserData(data);
        };

        getData();
    }, []);
    return (
        <>
            {
                userData === null || userData === undefined ? (
                    <Center>
                        <Spinner size='xl' color="white" />
                    </Center>
                ) :
                    <Center>
                        <Card width='450px' height='350px' padding={3}>
                            <Link to='/conta/1'>
                                <Text fontSize='xl'>
                                    Voltar
                                </Text>
                            </Link>
                            <Box textAlign='center'>
                                <Text fontSize='3xl' fontWeight='bold'>
                                    Informações da Conta
                                </Text><Text>
                                    nome: {userData?.name};
                                </Text><Text>
                                    email: {userData?.email};
                                </Text><Text>
                                    saldo: {userData?.balance};
                                </Text><Text>
                                    senha: {userData?.password}
                                </Text>
                            </Box>
                        </Card>
                    </Center>
            }
        </>
    )
} 