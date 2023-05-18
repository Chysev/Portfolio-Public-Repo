import { Header, Text, Flex } from "@mantine/core"
import { BrowserRouter } from "react-router-dom"

// Component
import LinkText from "./LinkText"

const HeaderCo = () => {
    return (
        <Header
            mah="90px" height="100%" display="flex"
            bg="#111827" fixed>

            <Flex
                m="auto" maw="1300px" w="100%"
                justify="space-between" px="30px" align="center">

                <Text size={32} ff="system-ui" weight={500} color="whitesmoke">
                    Portfolio
                </Text>
                <BrowserRouter>
                    <Flex gap="32px">
                        <LinkText to="#Hero" navName="Home" />
                        <LinkText to="#Projects" navName="Projects" />
                        <LinkText to="#Email" navName="Email" />
                    </Flex>
                </BrowserRouter>
            </Flex>

        </Header >
    )
}

export default HeaderCo