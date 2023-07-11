import { Box, Text } from "@chakra-ui/react";

interface Props {
    score: number;
}

const BestScore = ({ score }: Props) => {
    return (
        <Box
            bg={"blackAlpha.500"}
            borderRadius={"0.5rem"}
            height={"3rem"}
            width={"12rem"}
            position={"absolute"}
            top={3}
            right={3}
            boxShadow={"2px 2px 2px 1px rgba(0, 0, 0, 0.6)"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
        >
            <Text fontSize={"1.5rem"} fontWeight={"bold"} color={"whitesmoke"}>
                Best Score: {score}
            </Text>
        </Box>
    );
};

export default BestScore;
