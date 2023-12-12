import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'


const Work = () => (
  <Layout title="Fiverr">
    <Container>
      <Title>
      Fiverr (Freelancer)
      </Title>
      <P>
      I've and continue to work with some amazing clients on fiverr as a freelancer particularly in the field of AI. 
      </P>
      <P>You can visit my profile for various AI services i offer.</P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Fiverr Profile</Meta>
          <Link _target="_blank" isExternal href="https://www.fiverr.com/codesofkhalid">
            Link <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <Meta>Client Feedbacks</Meta><br></br><br></br>
      <WorkImage src="/images/works/feedback/feedback1.jpg" alt="fiverr" />
      <WorkImage src="/images/works/feedback/feedback2.jpg" alt="fiverr 2" />
      <WorkImage src="/images/works/feedback/feedback3.jpg" alt="fiverr 3" />
      <WorkImage src="/images/works/feedback/feedback4.jpg" alt="fiverr 4" />
      <WorkImage src="/images/works/feedback/feedback5.jpg" alt="fiverr 5" />
      <WorkImage src="/images/works/feedback/feedback6.jpg" alt="fiverr 6" />
      <WorkImage src="/images/works/feedback/feedback7.jpg" alt="fiverr 7" />
      <WorkImage src="/images/works/feedback/feedback8.jpg" alt="fiverr 8" />
      <WorkImage src="/images/works/feedback/feedback9.jpg" alt="fiverr 9" />
      <WorkImage src="/images/works/feedback/feedback10.jpg" alt="fiverr 10" />
      <WorkImage src="/images/works/feedback/feedback11.jpg" alt="fiverr 11" />
      <WorkImage src="/images/works/feedback/feedback12.jpg" alt="fiverr 12" />
      <WorkImage src="/images/works/feedback/feedback13.jpg" alt="fiverr 13" />
      <WorkImage src="/images/works/feedback/feedback14.jpg" alt="fiverr 14" />
      <WorkImage src="/images/works/feedback/feedback15.jpg" alt="fiverr 15" />
      <WorkImage src="/images/works/feedback/feedback16.jpg" alt="fiverr 16" />
      <WorkImage src="/images/works/feedback/feedback17.jpg" alt="fiverr 17" />
      <WorkImage src="/images/works/feedback/feedback18.jpg" alt="fiverr 18" />
      <WorkImage src="/images/works/feedback/feedback19.jpg" alt="fiverr 19" />
      <WorkImage src="/images/works/feedback/feedback20.jpg" alt="fiverr 20" />
      <WorkImage src="/images/works/feedback/feedback21.jpg" alt="fiverr 21" />
      <WorkImage src="/images/works/feedback/feedback22.jpg" alt="fiverr 22" />
      <WorkImage src="/images/works/feedback/feedback23.jpg" alt="fiverr 23" />
      <WorkImage src="/images/works/feedback/feedback24.jpg" alt="fiverr 24" />
      <WorkImage src="/images/works/feedback/feedback25.jpg" alt="fiverr 25" />
      <WorkImage src="/images/works/feedback/feedback26.jpg" alt="fiverr 26" />
      <WorkImage src="/images/works/feedback/feedback27.jpg" alt="fiverr 27" />

    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
