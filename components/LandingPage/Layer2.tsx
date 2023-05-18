import { Box, Grid, Text, Button, Flex, Anchor } from "@mantine/core"
import { useMediaQuery } from '@mantine/hooks';
import { AiFillHtml5 } from "@react-icons/all-files/ai/AiFillHtml5"
import { DiVisualstudio } from "@react-icons/all-files/di/DiVisualstudio"
import { FaCss3 } from "@react-icons/all-files/fa/FaCss3"
import { IoLogoJavascript } from "@react-icons/all-files/io/IoLogoJavascript"
import { FaVuejs } from "@react-icons/all-files/fa/FaVuejs"
import { DiMongodb } from "@react-icons/all-files/di/DiMongodb"
import { GoDatabase } from "@react-icons/all-files/go/GoDatabase"
import { FaNodeJs } from "@react-icons/all-files/fa/FaNodeJs"
import { AiFillGithub } from "@react-icons/all-files/ai/AiFillGithub"
import { BsFillTerminalFill } from "@react-icons/all-files/bs/BsFillTerminalFill"


const Layer2 = () => {
    const max1024 = useMediaQuery('(max-width: 1024px)');
    const max640 = useMediaQuery('(max-width: 640px)');

    return (
        <Box
            id="Aboutme"
            w="100%" py="40px" bg="whitesmoke" display="flex" >
            <Flex m="auto" maw="1260px" w="100%" justify="space-between" align="center" gap={90} px="30px" direction={max1024 ? "column" : "row"} >
                <img src="assets/Layda.png" alt="" height={max1024 ? "380" : "450px"} />

                <Grid align="center" >
                    <Grid.Col >
                        <Text weight={400} size={30} m="auto" maw={max1024 ? "700px" : "900px"} align="justify" ff="'Poppins', sans-serif" >
                            I am John Albert Layda
                        </Text>
                    </Grid.Col>
                    <Grid.Col>
                        <Text weight={400} size={20} maw={max1024 ? "700px" : "900px"} m="auto" align="justify" ff="'Poppins', sans-serif">
                            A Programmer, Web Developer, Student GitHub Developer and a Basketball player. I am currently a Senior High School Student Studying in The Philippine School Dubai.
                        </Text>
                    </Grid.Col>

                    <Grid.Col maw={max1024 ? "730px" : "900px"} m={max1024 ? "auto" : "0"}>
                        <Text ff="'Poppins', sans-serif" size={28}>
                            Language and Tools
                        </Text>
                        <Flex align="center">
                            <DiVisualstudio size={40} color="blue" />
                            <AiFillHtml5 size={38} color="orange" />
                            <FaCss3 size={35} color="blue" />
                            <IoLogoJavascript size={35} color="black" />
                            <FaVuejs size={35} color="green" />
                            <DiMongodb size={35} color="green" />
                            <GoDatabase size={35} color="blue" />
                            <FaNodeJs size={35} color="green" />
                            <AiFillGithub size={35} />
                            <BsFillTerminalFill size={35} />

                        </Flex>
                        <Flex gap="1rem" align="center" mt="15px">
                            <Button py={max640 ? '10px' : '10px'} px={max640 ? '17px' : '25px'}
                                radius="8px" color="red">
                                <Anchor href="#Projects" size={18} color="whitesmoke">Projects</Anchor>
                            </Button>
                            <Anchor download={true}>
                                Download Resume
                            </Anchor>
                        </Flex>
                    </Grid.Col>
                </Grid>
            </Flex>
        </Box>
    )
}

export default Layer2