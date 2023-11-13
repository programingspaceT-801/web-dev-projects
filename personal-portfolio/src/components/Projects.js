import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import headerImg from "../assets/img/womanbanner.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { Columns } from "react-bootstrap-icons";

export const Projects = () => {

  const steps = [
    {
      title: "1 Acesse o app do FGTS",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "2 Opte pelo saque aniversário",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "3 Autorize a consulta de suas informações",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: "4Autorize a QI SOCIEDADE DE CREDITO DIRETO S. A.a consultar suas informações",
      description: "Design & Development",
      imgUrl: projImg1,
    },
  ];

  const know = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
  ];

  const conditions = [
    {
      title: "1 Acesse o app do FGTS",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "2 Opte pelo saque aniversário",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "3 Autorize a consulta de suas informações",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: "4Autorize a QI SOCIEDADE DE CREDITO DIRETO S. A.a consultar suas informações",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Como Fazer?</h2>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Passo a Passo</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Conheça as Vantagens</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Saiba as condições</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {
                            steps.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          <div style={{ display: 'flex', flexDirection: "row", alignItems: "center", width: '100%', justifyContent: 'center', gap: '100px' }}>

                            <div>
                              <div style={{ width: '100%', background: 'white', borderRadius: '5px', height: '100px', display: "flex", color: "black", flexDirection: 'row', marginBottom: '20px' }}>
                                <p>Sem consulta nos órgãos de proteção de crédito</p>
                              </div>

                              <div style={{ width: '100%', background: 'white', borderRadius: '5px', height: '100px', display: "flex", color: "black", flexDirection: 'row', marginBottom: '20px' }}>
                                <p>Sem consulta nos órgãos de proteção de crédito</p>
                              </div>

                              <div style={{ width: '100%', background: 'white', borderRadius: '5px', height: '100px', display: "flex", color: "black", flexDirection: 'row', marginBottom: '20px' }}>
                                <p>Sem consulta nos órgãos de proteção de crédito</p>
                              </div>
                            </div>

                            <div>
                              <div style={{ width: '100%', background: 'white', borderRadius: '5px', height: '100px', display: "flex", color: "black", flexDirection: 'row', marginBottom: '20px' }}>
                                <p>Sem consulta nos órgãos de proteção de crédito</p>
                              </div>
                              <div style={{ width: '100%', background: 'white', borderRadius: '5px', height: '100px', display: "flex", color: "black", flexDirection: 'row', marginBottom: '20px' }}>
                                <p>Sem consulta nos órgãos de proteção de crédito</p>
                              </div>
                              <div style={{ width: '100%', background: 'white', borderRadius: '5px', height: '100px', display: "flex", color: "black", flexDirection: 'row', marginBottom: '20px' }}>
                                <p>Sem consulta nos órgãos de proteção de crédito</p>
                              </div>
                            </div>
                          </div>
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          <div style={{ display: 'flex', flexDirection: "row", justifyContent: "space-between" }}>
                            <div>
                              <img src={headerImg} />
                            </div>

                            <div style={{ display: "flex", flexDirection: 'column', width: '70%', justifyContent: "center" }}>

                              <div style={{ width: '100%', background: 'white', borderRadius: '5px', height: '100px', display: "flex", color: "black", flexDirection: 'row', marginBottom: '20px', alignItems: "center" }}>
                                <p style={{ width: '100%' }}>Sem consulta nos órgãos de proteção de crédito</p>
                              </div>
                              <div style={{ width: '100%', background: 'white', borderRadius: '5px', height: '100px', display: "flex", color: "black", flexDirection: 'row', marginBottom: '20px', alignItems: "center" }}>
                                <p style={{ width: '100%' }}>Sem consulta nos órgãos de proteção de crédito</p>
                              </div>
                              <div style={{ width: '100%', background: 'white', borderRadius: '5px', height: '100px', display: "flex", color: "black", flexDirection: 'row', marginBottom: '20px', alignItems: "center" }}>
                                <p style={{ width: '100%' }}>Sem consulta nos órgãos de proteção de crédito</p>
                              </div>
                              <div style={{ width: '100%', background: 'white', borderRadius: '5px', height: '100px', display: "flex", color: "black", flexDirection: 'row', marginBottom: '20px', alignItems: "center" }}>
                                <p style={{ width: '100%' }}>Sem consulta nos órgãos de proteção de crédito</p>
                              </div>
                            </div>
                          </div>
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
