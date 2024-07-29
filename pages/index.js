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
import { IconBrandLinktree, IconCalendarTime, IconFileTypePdf, IconBrandGithub } from '@tabler/icons-react'
import Works from '../components/works'
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
            src="/images/khalidfarooq.png"
            alt="Profile image"
          />
        </Box>
        <Box flexGrow={1} mt={'30px'}>
          <Heading as="h2" variant="page-title">
            Khalid Farooq
          </Heading>
          <p>SDE <Link isExternal href='https://www.nasdaq.com/' style={{fontWeight:'800'}}>@Nasdaq</Link></p>
          <p>Creator behind <Link isExternal href='https://www.mediscribe.pro/' style={{fontWeight:'800'}}>MediScribePro</Link>
          , <Link isExternal href='https://www.lucidwaveai.com/' style={{fontWeight:'800'}}>LucidWaveAI</Link>
          , <Link isExternal href='https://topemr.com/' style={{fontWeight:'800'}}>@TopEMR</Link></p>
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
            leftIcon={<IconBrandLinktree size={15}/>} colorScheme={useColorModeValue('yellow', 'orange')}>
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
            leftIcon={<IconCalendarTime size={15} />} colorScheme={useColorModeValue('green', 'green')}>
              Book a call
            </Button>
          </NextLink>

      </Flex>
      <Flex
          my={4}
          direction={["row", "row"]}
          justifyContent="center"
          gap={4}
        >

          <NextLink 
            href="https://calendly.com/lucidwaveai/consulation-call"
            isExternal
          >
            <Button 
            as="a"
            style={{marginRight:"10px"}}
            href="https://github.com/khalidfarooq"
            target="_blank"
            rel="noopener noreferrer"
            leftIcon={<IconBrandGithub size={20} />} colorScheme={useColorModeValue('green', 'green')}>
              Github
            </Button>
          </NextLink>
          <NextLink 
            href="https://linktr.ee/khalidfarooq"
            isExternal
          >
            <Button 
            as="a"
            href="https://drive.google.com/file/d/1aplpr7caI3nBRnrvSaCR_IAiyQPbiEi-/view"
            target="_blank"
            rel="noopener noreferrer"
            leftIcon={<IconFileTypePdf size={20}/>} colorScheme={useColorModeValue('yellow', 'orange')}>
              Resume
            </Button>
          </NextLink>

      </Flex>
      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
        About My Side-Hustles
        </Heading>
        <Paragraph>
          <List>
            {/* <ListItem>I am currently working as a full-time Senior Software Developer at Nasdaq.</ListItem>
            <ListItem> 
              In addition to that , I am the founder and driving force behind&nbsp;
              <Link style={{fontWeight:'800'}} _target="_blank" isExternal href="https://www.mediscribe.pro/">MediScribe Pro</Link>
              , <Link style={{fontWeight:'800'}}  _target="_blank" isExternal href="https://www.lucidwaveai.com/">LucidWave AI</Link>.
              Co-Founder <Link isExternal href='https://topemr.com/' style={{fontWeight:'800'}}>@TopEMR</Link>
              </ListItem> */}
            <ListItem><Link style={{fontWeight:'800'}} _target="_blank" isExternal href="https://www.mediscribe.pro/">MediScribe Pro</Link> is an AI SaaS medical scribing, charting and documentation tool for all health care professionals. Reducing clinical note taking time by upto 90%.</ListItem>
            <ListItem><Link style={{fontWeight:'800'}}  _target="_blank" isExternal href="https://www.lucidwaveai.com/">LucidWave AI</Link> is an AI Automation Agency that helps business utilise AI in their existing flow and build AI SaaS for businesses.</ListItem>
            <ListItem>
              <Link style={{fontWeight:'800'}}  _target="_blank" isExternal href="https://topemr.com/">Top EMR</Link> is a full scale EMR for healthcare providers. Unlike conventional EMRs, which demand approximately 30 minutes for clinical notes and billing per patient, topEMR's integrated AI technology slashes this time to just 5 minutes.
            </ListItem>
          
          </List> 
        </Paragraph>
      </Section>
    </Container>
    <Works/>
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
  </Layout>
)


export default Home
export { getServerSideProps } from '../components/chakra'
