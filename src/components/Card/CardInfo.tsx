import { Box, Text } from "@chakra-ui/react"

interface ICardInfo {
    mainContent: string;
    content: string;
}

export const CardInfo = ({ mainContent, content }: ICardInfo) => {
    return (
        <Box backgroundColor='white'
        width={320} 
        minHeight='120px'
        borderRadius='25px'
        padding={8}
        >
            <Text fontSize='2xl' fontWeight='bold'>{mainContent}</Text>
            <Text fontSize='xl'>{content}</Text>
        </Box>
    )
}
