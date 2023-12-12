import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'


const Work = () => (
  <Layout title="Trade Collaboration Engine">
    <Container>
      <Title>
      Trade Collaboration Engine
      </Title>
      <P>
      I worked with Trade Collaboration Engine to build an advance AI SAAS chatbot platform, trained on data for their clients. 
      </P>
      <P>Prior to working with me they had a conversational chatbot but were spending thousands every week to operate it.</P>
      <P>I build a custom conversational chatbot powered by our in-house LLMs and saved them about 95% of their prior cost of operations.</P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Client's Website</Meta>
          <Link _target="_blank" isExternal href="https://tcengine.com/">
            Link <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <Meta>Snippets</Meta><br></br><br></br>
      <WorkImage src="/images/works/tcengine-1.jpg" alt="tcengine" />
      <WorkImage src="/images/works/tcengine-2.jpg" alt="tcengine" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
