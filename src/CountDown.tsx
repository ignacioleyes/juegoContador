import { useState, useEffect } from "react";
import { Heading } from "@chakra-ui/react";

interface Props {
    isPlaying: boolean;
}

const CountDown = ({ isPlaying }: Props) => {
    const [seconds, setSeconds] = useState(5);

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(seconds - 1);
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, [seconds]);

    return (
        <>
            {isPlaying && (
                <Heading
                    bg="gray.400"
                    borderRadius="50%"
                    height="5rem"
                    width="5rem"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                >
                    {seconds}
                </Heading>
            )}
        </>
    );
};

export default CountDown;
