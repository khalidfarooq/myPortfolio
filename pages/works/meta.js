import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'


const Work = () => (
  <Layout title="Yifan Liu, SWE @Meta">
    <Container>
      <Title>
      Yifan Liu, SWE @Meta
      </Title>
      <P>
      I worked with Yifan Liu, SWE @Meta to build an POC AI business advisory chatbot. 
      </P>
      <P>It was a big milestone for me personally as i got to work with one of the best programming mind that i've known.</P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Client's Profile</Meta>
          <Link _target="_blank" isExternal href="https://www.linkedin.com/in/yifan-ivan-liu/?locale=en_US">
          Link <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <Meta>Snippets</Meta><br></br><br></br>
      <WorkImage src="/images/works/yifan-1.jpg" alt="yifan-1" />
      <WorkImage src="/images/works/yifan-2.jpg" alt="yifan-2" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
