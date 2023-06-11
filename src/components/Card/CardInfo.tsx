import { Box, Text } from "@chakra-ui/react"
import { useContext } from "react";
import { AppContext } from "../AppContext";
import { Colors } from "../../Colors";

interface ICardInfo {
    mainContent: string;
    content: string;
}

export const CardInfo = ({ mainContent, content }: ICardInfo) => {
    const { isDarkMode, transition } = useContext(AppContext)

    return (
        <Box 
            backgroundColor={!isDarkMode ? Colors.lightApp.secondaryColor : Colors.darkApp.secondaryColor}
            transition={transition}
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
