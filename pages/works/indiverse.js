import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'


const Work = () => (
  <Layout title="In Diverse Company">
    <Container>
      <Title>
      In Diverse Company
      </Title>
      <P>
      I worked with In-Diverse Company to integrate AI Chatbot and Robust AI Automations
            into various aspects of their business.
      </P>
      <P>A chatbot trained on In-Diverse Company's data with the capabilty to answer any question regarding their business.</P>
      <P>The chatbot was also integrated to help user's subscribe to in-diverse company's newsletter.</P>
      <P>Also worked on automating many core business flows using AI. (Information Protected by NDA)</P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Demo</Meta>
          <Link _target="_blank" isExternal href="https://youtu.be/tbU5q5NvUt8">
          Demo Link <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <Meta>Snippets</Meta><br></br><br></br>
      <WorkImage src="/images/works/indiverse-1.jpg" alt="In Diverse Company" />
      <WorkImage src="/images/works/indiverse-2.jpg" alt="In Diverse Company" />
      <WorkImage src="/images/works/indiverse-3.jpg" alt="In Diverse Company" />
      <WorkImage src="/images/works/indiverse-4.jpg" alt="In Diverse Company" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
