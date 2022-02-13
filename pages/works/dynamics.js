import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'


const Work = () => (
  <Layout title="Dynamics">
    <Container>
      <Title>
        Dynamics <Badge>Jan 2021 - Apr 2021</Badge>
      </Title>
      <P>
      A web application for dynamics, a project oriented community.
      </P>
      <P>
      It was used for registration and other works related to, organising a couple of <span style={{fontWeight: "bold"}}>national-level coding events and hackathons,
with participants across India</span>.
During the time of the event, traffic stats were <span style={{fontWeight: "bold"}}>4500 unique page views, 3800 sessions and 1400 users</span>.
      </P>
      <P>
      To prevent data loss, participant’s information was stored in an SQL database as well as in a private Google Drive
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Live Demo</Meta>
          <Link href="http://www.dynamicspoc.in/">
          http://www.dynamicspoc.in/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Github</Meta>
          <Link href="https://github.com/Dynamics-POC/Dynamics-Official-Website">
          https://github.com/Dynamics-POC<ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Django, JavaScript, HTML, CSS, PostgreSQL </span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/dynamics1.png" alt="dynamics" />
      <WorkImage src="/images/works/dynamics2.png" alt="dynamics" />
      <WorkImage src="/images/works/dynamics3.png" alt="dynamics" />
      <WorkImage src="/images/works/dynamics4.png" alt="dynamics" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
