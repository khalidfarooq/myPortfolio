import { Container, Heading, SimpleGrid, List, ListItem } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import { Meta } from '../components/work'
import thunmbNcov19india from '../public/images/works/ncov19india.png'
import thunmbShalimar from '../public/images/works/shalimar1.png'
import thunmbDynamics from '../public/images/works/dynamics1.png'
import heathchain from '../public/images/works/healthchain.jpg'
const Works = () => (
  <Layout title="Technical Skills">
     <Container>
      <Heading as="h3" variant="section-title" fontSize={20} mb={4}>
      Technical Skills
      </Heading>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Programming Languages</Meta>
          <span>JavaScript, TypeScript, Python, C/C++, SQL</span>
        </ListItem>
        <ListItem>
          <Meta>ChatBot Technologies</Meta>
          <span>Langchain, OpenAI API, Pinecone</span>
        </ListItem>
        <ListItem>
          <Meta>Web Technologies</Meta>
          <span>NextJs, ReactJs, OfficeJs, Django, jQuery, HTML5, CSS3</span>
        </ListItem>
        <ListItem>
          <Meta>Developer Tools</Meta>
          <span>GitHub, GitLab, BitBucket VS Code, Pycharm</span>
        </ListItem>
        <ListItem>
          <Meta>Coursework</Meta>
          <span>Data structures & Algorithms, DBMS, OOP, OS</span>
        </ListItem>
      </List>
    </Container>
    <Container>
      <Heading as="h3" variant="section-title" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.1}>
          <WorkGridItem id="healthchain" title="Health Chain" thumbnail={heathchain}>
            An blockchain based application that enables coherent accessibility of health data amongst caregivers, health practitioners and patients.
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem id="ncov19india" title="nCov19 India" thumbnail={thunmbNcov19india}>
            An application for latest updates on covid stats in india, with very good UI/UX
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem id="shalimar" title="Shalimar" thumbnail={thunmbShalimar}>
          A secure application for storage and retrieval of confidential documents, as well as enabling user’s to store all 
their documents in one place.
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem id="dynamics" title="Dynamics" thumbnail={thunmbDynamics}>
          A web application for dynamics, a project oriented community.
          </WorkGridItem>
        </Section>
      </SimpleGrid>

    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
