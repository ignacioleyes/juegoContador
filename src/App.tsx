import { useEffect, useState } from "react";
import { Button, Text, HStack, VStack, Heading } from "@chakra-ui/react";
import CountDown from "./CountDown";

function App() {
    const [count, setCount] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [disableClickMe, setDisableClickMe] = useState(true);
    const [message, setMessage] = useState("");

    const handleIsPlaying = () => {
        setIsPlaying(true);
        setCount(0);

        setTimeout(() => {
            setMessage("Ready");
        }, 1000);

        setTimeout(() => {
            setMessage("Set");
        }, 2000);

        setTimeout(() => {
            setMessage("Go!");
            setDisableClickMe(false);
        }, 3000);
    };

    const hadleStartGame = () => {
        setTimeout(() => {
            setMessage("");
            setIsPlaying(false);
            setDisableClickMe(true);
        }, 5000);
    };

    const handleClick = () => {
        if (isPlaying && message === "Go!") {
            setCount(count + 1);
        }
    };

    useEffect(() => {
        if (message === "Go!") hadleStartGame();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [message]);

    return (
        <HStack w={"100vw"} h={"100vh"} p={0} m={0} spacing={0}>
            <VStack
                width={"50%"}
                h={"100%"}
                bg={"lightgray"}
                justifyContent={"center"}
            >
                <Button
                    isDisabled={isPlaying === true}
                    variant={"solid"}
                    colorScheme={"blackAlpha"}
                    size={"lg"}
                    onClick={handleIsPlaying}
                >
                    Start Playing
                </Button>
            </VStack>
            <VStack
                width={"50%"}
                h={"100%"}
                bg={"whitesmoke"}
                justifyContent={"center"}
            >
                {message === "Go!" && <CountDown isPlaying />}
                <Heading
                    color={
                        message === "Ready"
                            ? "#bb1e10"
                            : message === "Set"
                            ? "#f7b500 "
                            : "#32A431"
                    }
                >
                    {message}
                </Heading>

                <Button
                    onClick={handleClick}
                    isDisabled={disableClickMe}
                    variant={"solid"}
                    colorScheme={"blackAlpha"}
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
