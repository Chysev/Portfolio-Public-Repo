import { Text, Flex, Box } from "@mantine/core"

// Component

const FooterCo = () => {

    const date = new Date();
    const year = date.getFullYear()

    return (
        <Box
            mah="90px" h="100%" display="flex"
            bg="#111827">

            <Flex
                m="auto" maw="1300px" w="100%"
                justify="center" px="30px" py="10px" align="center">
                <Text color="whitesmoke" display="flex" >
                    <Text>Created by</Text>
                    <Text color="#dc143c" ml="5px">John Layda | Chysev {year} </Text>
                </Text>
            </Flex>

        </Box >
    )
}

export default FooterCo