import React, { useContext, useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col, Card, ListGroup, Figure,FigureImage} from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';
import ProjectImg from '../Image/ProjectImg';

const Experiences = () => {
  const {experiences} = useContext(PortfolioContext);

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="Experiences">
      <Container>
        <div className="experience-wrapper">
          <Title title="Work Experiences" />
          {experiences.map((experience) => {
            const {id,company,title,info,url,repo, img} = experience;
            return (
              <Row key={id}>
                <Col>
                  <Fade
                    left={isDesktop}
                    bottom={isMobile}
                    duration={1000}
                    delay={500}
                    distance="30px"
                  >
                    <Figure>
                    <div>
                    <ProjectImg alt={title} filename={img} />
                    <h2>{company}</h2>
                    <p>{title}</p>
                    </div>
                    </Figure>
                  </Fade>
                </Col>
              </Row>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default Experiences;
