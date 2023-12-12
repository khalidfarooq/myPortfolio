import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'


const Work = () => (
  <Layout title="Health Chain">
    <Container>
      <Title>
        Health Chain <Badge>Feb 2022 - April 2022</Badge>
      </Title>
      <P>
      Enabled coherent accessibility of health data amongst caregivers, health practitioners and patients.
      </P>
      <P>An <span style={{fontWeight: "bold"}}>enhanced secure protocol to share private health data</span>. To provide an economically feasible health data
management system.</P>
      <P>A Frontend accessible to <span style={{fontWeight: "bold"}}>patients, doctors, hospitals and pharmacies</span> to upload patient’s clinical data.</P>
      <P>All the <span style={{fontWeight: "bold"}}>textual data is stored on the permissioned blockchain and documents are stored in off-chain storage.</span></P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Research Paper</Meta>
          <Link _target="_blank" isExternal href="https://drive.google.com/file/d/1xNHmc07lrbpzUSk0wSZjoZcm8tLffID0/view">
            Drive Link <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Github</Meta>
          <Link _target="_blank" isExternal href="https://github.com/khalidfarooq/Health-Chain">
          https://github.com/khalidfarooq/Health-Chain <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Hyperledger fabric, ExpressJS, NodeJS, Go, JavaScript </span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/patient.jpg" alt="patient" />
      <WorkImage src="/images/works/patient-1.jpg" alt="patient" />
      <WorkImage src="/images/works/patient-2.jpg" alt="patient" />
      <WorkImage src="/images/works/patient-3.jpg" alt="patient" />
      <WorkImage src="/images/works/patient-4.jpg" alt="patient" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
