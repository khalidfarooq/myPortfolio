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
          <p>SDE <Link isExternal href='https://www.nasdaq.com/' style={{fontWeight:'800'}}>@Nasdaq</Link></p>
          <p>Founder <Link isExternal href='https://www.lucidwaveai.com/' style={{fontWeight:'800'}}>@LucidWaveAI</Link></p>
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
            href="https://calendly.com/lucidwaveai/consulation-call"
            isExternal
          >
            <Button 
            as="a"
            style={{marginLeft:"10px"}}
            href="https://calendly.com/lucidwaveai/consulation-call"
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
            <ListItem>I am a proficient full-time Senior Software Developer at Nasdaq.</ListItem>
            <ListItem> 
              In addition to my role at Nasdaq, I am the founder and driving force behind&nbsp;
              <Link _target="_blank" isExternal href="https://www.lucidwaveai.com/">LucidWave AI</Link>
              , an innovative AI Automation Agency.<br></br> <Link _target="_blank" isExternal href="https://www.lucidwaveai.com/">LucidWave AI</Link> is dedicated to transforming 
              businesses by leveraging cutting-edge technologies, crafting bespoke Chatbot solutions, and developing advanced AI SaaS and CRM applications.
              </ListItem>
            <ListItem>My mission is to elevate your business's online presence and efficiency through the power of AI.&nbsp; 
            Join me on this journey as we navigate the intersection of technology and imagination, pushing the boundaries of what's possible in the digital realm.
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
