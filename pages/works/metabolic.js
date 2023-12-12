import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'


const Work = () => (
  <Layout title="Metabolic-Shop Chatbot">
    <Container>
      <Title>
      Metabolic-Shop Chatbot
      </Title>
      <P>
      I worked with Metabolic Shop's Dr Donald Layman collaborated with LucidWaveAI to integrate AI Chatbot.
      </P>
      <P>A chatbot trained on Metabolic Shop's data with the capabilty to answer any question regarding their business.</P>
      <P>Also worked on automating many core business flows using AI. (Information Protected by NDA)</P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Demo</Meta>
          <Link _target="_blank" isExternal href="https://youtu.be/-Pstj6_SQ6Q">
          Demo Link <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <Meta>Snippets</Meta><br></br><br></br>
      <WorkImage src="/images/works/metabolic-2.jpg" alt="Metabolic-Shop" />
      <WorkImage src="/images/works/metabolic-1.jpg" alt="Metabolic-Shop" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
