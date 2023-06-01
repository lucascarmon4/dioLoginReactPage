import {
   ChakraProvider,
   Input,
   Box,
   Center,
   Button,
  } from "@chakra-ui/react";
import { Card } from "./components/Card/Card";

function App() {
  return (
    <ChakraProvider>
      <Box minHeight='100vh' backgroundColor="#723792" padding='25px'>
        <Card/>
      </Box>
    </ChakraProvider>
  );
}

export default App;
