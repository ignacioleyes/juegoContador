import { useState } from "react";
import { Button, Text, HStack, VStack } from "@chakra-ui/react";

function App() {
    const [count, setCount] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [disableClickMe, setDisableClickMe] = useState(true);

    const handleIsPlaying = () => {
        setCount(!isPlaying ? 0 : count);
        setIsPlaying(true);
        setTimeout(() => {
            setIsPlaying(false);
            setDisableClickMe(false);
        }, 5000);
    };

    const handleClick = () => {
        if (isPlaying) {
            setCount(count + 1);
        }
    };

    return (
        <HStack w={"100vw"} h={"100vh"} p={0} m={0} spacing={0}>
            <VStack
                width={"50%"}
                h={"100%"}
                bg={"lightgray"}
                justifyContent={"center"}
            >
                <Button
                    disabled={isPlaying}
                    variant={"solid"}
                    colorScheme={"teal"}
                    size={"lg"}
                    onClick={handleIsPlaying}
                >
                    Start Playing
                </Button>
            </VStack>
            <VStack
                width={"50%"}
                h={"100%"}
                bg={"coral"}
                justifyContent={"center"}
            >
                <Button
                    onClick={handleClick}
                    disabled={disableClickMe}
                    variant={"solid"}
                    colorScheme={"teal"}
                    size={"lg"}
                >
                    Click Me!
                </Button>
                <Text fontSize={"2rem"} fontWeight={"bold"}>
                    Total Clicks: {count}
                </Text>
            </VStack>
        </HStack>
    );
}

export default App;
