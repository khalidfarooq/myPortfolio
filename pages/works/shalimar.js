import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'


const Work = () => (
  <Layout title="Shalimar">
    <Container>
      <Title>
        Shalimar <Badge>Jan 2021 - July 2021</Badge>
      </Title>
      <P>
       A  <span style={{fontWeight: "bold"}}>secure application for storage and retrieval of confidential documents</span>, as well as enabling user’s to store
their documents in one place.
      </P>
      <P>
      Worked on a <span style={{fontWeight: "bold"}}>secure death certificate authenticity consensus mechanism</span>, allowing safe transfer of user’s digital assets
to their family or others named in their will.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Demo Report</Meta>
          <Link _target="_blank" isExternal href="https://drive.google.com/file/d/1OsuJkqhHV6pAK886Oa9YD2qyT_wEa-KO/edit">
            Drive Link <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Github</Meta>
          <Link _target="_blank" isExternal href="https://github.com/khalidfarooq/shalimar">
          https://github.com/khalidfarooq/shalimar <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>ReactJs, Django-rest-framework, Django, Fernet, MongoDB</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/shalimar1.png" alt="nCov19india" />
      <WorkImage src="/images/works/shalimar2.png" alt="nCov19india" />
      <WorkImage src="/images/works/shalimar3.png" alt="nCov19india" />
      <WorkImage src="/images/works/shalimar4.png" alt="nCov19india" />

    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
