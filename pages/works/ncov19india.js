import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'


const Work = () => (
  <Layout title="ncov19india">
    <Container>
      <Title>
        nCov19india <Badge>June 2020 - Dec 2020</Badge>
      </Title>
      <P>
        A user-friendly covid19 stats application, with over <span style={{fontWeight: "bold"}}>1800 unique pageviews, 1200 sessions and more than 500
      users.</span>
      </P>
      <P>Keeping the user experience in mind, built an interactive nation map that allows users to readily check covid figures in
the country.</P>
      <P>Processed data and then rendered data asynchronously, increasing rendering speed by 3times</P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Demo Video</Meta>
          <Link href="https://drive.google.com/file/d/1rT1B5da1T83VRxdT-IdYZWMOqA_hHlEr/view">
            https://www.ncov19india.in/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Github</Meta>
          <Link href="https://github.com/khalidfarooq/ncov19india">
          https://github.com/khalidfarooq/ncov19india <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Django, JavaScript, jQuery, HTML5, CSS3 </span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/ncov19india.png" alt="nCov19india" />
      <WorkImage src="/images/works/ncov3.png" alt="nCov19india" />
      <WorkImage src="/images/works/ncov1.png" alt="nCov19india" />
      <WorkImage src="/images/works/ncov2.png" alt="nCov19india" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
