import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'


const Work = () => (
  <Layout title="Pusch & Nguyen">
    <Container>
      <Title>
      PUSCH & NGUYEN
      </Title>
      <P>
      Pusch & Nguyen are premier personal injury lawyers based in Houston & San Antonio.
      </P>
      <P>I worked with them to integrate AI Chatbot and Robust AI Automations into various aspects of their Law Firm.</P>
      <P>A Chatbot trained on PUSCH & NGUYEN's for clients to connect directly with the support staff, ask questions & clarifications.</P>
      <P>We also developed AI automattions for auto deposition summary generation. Which saved them about 22hours of effort every week per deposition.</P>
      <P>Also worked on automating many core business flows using AI. (Information Protected by NDA)</P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Automation Demo</Meta>
          <Link _target="_blank" isExternal href="https://youtu.be/JaTWQkaJpBA">
          Demo Link <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Chatbot Demo</Meta>
          <Link _target="_blank" isExternal href="https://puschnguyen.com/">
          Demo Link <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <Meta>Snippets</Meta><br></br><br></br>
      <WorkImage src="/images/works/push-2.jpg" alt="PUSCH & NGUYEN" />
      <WorkImage src="/images/works/push-3.jpg" alt="PUSCH & NGUYEN" />
      <WorkImage src="/images/works/push-4.jpg" alt="PUSCH & NGUYEN" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
