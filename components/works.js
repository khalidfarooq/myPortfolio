import { Container, Heading, SimpleGrid, List, ListItem } from '@chakra-ui/react'
import Layout from './layouts/article'
import Section from './section'
import { WorkGridItem } from './grid-item'
import { Meta } from './work'
import thunmbNcov19india from '../public/images/works/ncov19india.png'
import thunmbShalimar from '../public/images/works/shalimar1.png'
import thunmbDynamics from '../public/images/works/dynamics1.png'
import heathchain from '../public/images/works/healthchain.jpg'
import indiverse from '../public/images/works/indiverse-1.jpg'
import metabolic from '../public/images/works/metabolic-1.jpg'
import pushngyun from '../public/images/works/push-1.jpg'
import tcengine from '../public/images/works/tcengine-1.jpg'
import meta from '../public/images/works/yifan-4.png'
import fiverr from '../public/images/works/fiver-1.png'
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
          <Meta>AI Technologies</Meta>
          <span>Langchain, OpenAI API, Pinecone, AutoGPT</span>
        </ListItem>
        <ListItem>
          <Meta>Web Technologies</Meta>
          <span>NextJs, ReactJs, OfficeJs, Django, jQuery, HTML5, CSS3</span>
        </ListItem>
        <ListItem>
          <Meta>Developer Tools</Meta>
          <span>GitHub, GitLab, BitBucket, VS Code, Pycharm</span>
        </ListItem>
        <ListItem>
          <Meta>Coursework</Meta>
          <span>Data structures & Algorithms, DBMS, OOP, OS</span>
        </ListItem>
      </List>
    </Container>

    <Container style={{marginTop:'30px'}}>
      <Heading as="h3" variant="section-title" fontSize={20} mb={4} >
        LucidWave AI Portfolio
      </Heading>
      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.1}>
          <WorkGridItem id="pushngyun" title="PUSCH & NGUYEN" thumbnail={pushngyun}>
          Pusch & Nguyen, leading experts in personal injury law, partnered with LucidWaveAI to seamlessly incorporate advanced AI Chatbot and robust AI automations across multiple facets of their legal practice.
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem id="indiverse" title="In-Diverse Chatbot" thumbnail={indiverse}>
          In-Diverse Company collaborated with LucidWaveAI to seamlessly integrate cutting-edge AI Chatbot and robust AI automations across diverse facets of their business operations.
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem id="meta" title="Yifan Liu, SWE@Meta" thumbnail={meta}>
          Yifan Liu, SWE @Meta collaborated with us at LucidWaveAI to build an POC AI business advisory chatbot. 
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem id="tcengine" title="Trade Collaboration Engine" thumbnail={tcengine}>
          TC Engine collaborated with us at LucidWaveAI to build an advance AI SAAS chatbot platform, trained on data. 
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem id="metabolic" title="Metabolic-Shop Chatbot" thumbnail={metabolic}>
            Metabolic Shop's Dr Donald Layman collaborated with us at LucidWaveAI to integrate AI Chatbot.
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem id="fiverr" title="Fiverr (Freelancer)" thumbnail={fiverr}>
          I've and continue to work with some amazing businesses on fiverr as a freelancer particularly in the field of AI.
          </WorkGridItem>
        </Section>

      </SimpleGrid>

    </Container>
    <Container>
      <Heading as="h3" variant="section-title" fontSize={20} mb={4}>
        Personal/College Projects
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
export { getServerSideProps } from './chakra'
