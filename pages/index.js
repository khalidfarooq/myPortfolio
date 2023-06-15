import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Image,
  Button,
  List,
  ListItem,
  Icon,
  Flex
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import {IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'
import {useColorModeValue } from '@chakra-ui/react'
const Home = () => (
  <Layout>
    <Container>
      <Box display='flex' flexDirection="row-reverse">
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="100px"
            display="inline-block"
            borderRadius="full"
            src="/images/khalidfarooq.jpg"
            alt="Profile image"
          />
        </Box>
        <Box flexGrow={1} mt={'30px'}>
          <Heading as="h2" variant="page-title">
            Khalid Farooq
          </Heading>
          <p>Software Engineer @Nasdaq</p>
        </Box>

      </Box>
      <Flex
          my={4}
          direction={["row", "row"]}
          justifyContent="center"
          gap={4}
        >
          <NextLink 
            href="https://linktr.ee/khalidfarooq"
            isExternal
          >
            <Button 
            as="a"
            href="https://linktr.ee/khalidfarooq"
            target="_blank"
            rel="noopener noreferrer"
            rightIcon={<ChevronRightIcon />} colorScheme={useColorModeValue('yellow', 'orange')}>
              Link Tree
            </Button>
          </NextLink>
          <NextLink 
            href="https://calendly.com/khalidanswers404/consulation-cal"
            isExternal
          >
            <Button 
            as="a"
            style={{marginLeft:"10px"}}
            href="https://calendly.com/khalidanswers404/consulation-call"
            target="_blank"
            rel="noopener noreferrer"
            rightIcon={<ChevronRightIcon />} colorScheme={useColorModeValue('green', 'green')}>
              Book a call
            </Button>
          </NextLink>
        </Flex>
      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          <List>
            <ListItem>I am a proficient full-time Software Engineer at Nasdaq.</ListItem>
            <ListItem>Additionally working as a dedicated part-time freelance Full-Stack Developer.</ListItem>
            <ListItem>My expertise as a freelancer lies in crafting cutting-edge Chatbot solutions, 
              leveraging the power of ChatGPT technology to elevate your business&apos;s online presence.
            </ListItem>
             
          </List>
        </Paragraph>
        <Flex
          align="center"
          my={4}
          direction={["column", "column"]}
          justifyContent="center"
          gap={4}
        >
          <NextLink href="/works">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My portfolio
            </Button>
          </NextLink>
        </Flex>
      </Section>


      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          Problem solving, Coding, Poetry.{' '}
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/khalidfarooq" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoGithub} />}
              >
                @khalidfarooq
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.linkedin.com/in/khalid-farooq-886990173/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoLinkedin} />}
              >
                @khalidfarooq
              </Button>
            </Link>
          </ListItem>
        </List>

      </Section>
    </Container>
  </Layout>
)


export default Home
export { getServerSideProps } from '../components/chakra'
