import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import tracker from "../../Assets/Projects/jobtrackr.jpg";
import workMate from "../../Assets/Projects/workmate.jpg";
import skillShare from "../../Assets/Projects/skillshare.jpg";
import rollcall from "../../Assets/Projects/rollcall.jpg";
import petalHaven from "../../Assets/Projects/petal-haven.jpg";
import ravenous from "../../Assets/Projects/ravenous.jpg"
import jammming from "../../Assets/Projects/jammming.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          Portfolio
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={jammming}
              isBlog={false}
              title="Jammming"
              description="A React application that employs the Spotify API to enable users to search for music on Spotify, craft a personalized playlist, and then save it to their own Spotify account."
              stack="React, Spotify API, JavaScript, HTML/CSS, Authentication"
              ghLink="https://github.com/AndreaJasper/jammming"
              demoLink="https://jammming-theta.vercel.app/"
            />
          </Col>
          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={ravenous}
              isBlog={false}
              title="Ravenous"
              description="A dynamic React website that harnesses the full potential of Yelp's API, empowering users to easily explore nearby restaurants by inputting specific location and keyword preferences. With an intuitive interface and real-time updates, users can efficiently find their desired dining options and make informed choices."
              stack="React, JavaScript, HTML/CSS, Authenticaion"
              ghLink="https://github.com/AndreaJasper/ravenous"
              demoLink="https://ravenous-sooty.vercel.app/"
            />
          </Col>
        <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={petalHaven}
              isBlog={false}
              title="Petal Haven"
              description="A fictional website brushing up on HTML/CSS skills. AI chipped in for 75% of the groundwork, and I fine-tuned the rest. See how old-school coding meets new-gen AI, leveling up my skills and diving into AI territory at the same time!"
              stack="HTML, CSS, ChatGPT."
              ghLink="https://github.com/AndreaJasper/petal-haven"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>
          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={tracker}
              isBlog={false}
              title="Job Trackr"
              description="A personal Job Tracking app to monitor my job search endeavors, including the progress of every application. In addition, this project provided me with an opportunity to hone my skills in implementing authentication."
              stack="Linux, Rails and Bootstrap."
              ghLink="https://github.com/AndreaJasper/application-tracker"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={workMate}
              isBlog={false}
              title="WorkMate"
              description="Inspired by my husband's grievances about his antiquated work order tracking system, I developed a project that incorporates comprehensive CRUD funcationality and authentication."
              stack="Rails and Bootstrap"
              ghLink="https://github.com/AndreaJasper/work-mate"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={rollcall}
              isBlog={false}
              title="RollCall"
              description="As an avid Dungeons and Dragons player, I often accumulate a large number of character sheets. To enhance my coding abilities, I developed a character archive that enables me to do away with paper records while preserving my character's statistics."
              stack="Rails and Bootstrap"
              ghLink="https://github.com/AndreaJasper/dnd-character-tracker"
              // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          {/* <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={skillShare}
              isBlog={false}
              title="Practice Portfolio"
              description="In order to keep my HTML and CSS skills up-to-date, I prefer to write code from scratch, without relying on frameworks. This particular site is designed with responsive layout in mind, emphasizing the use of flex-box."
              stack="HTML, CSS, Responsive Design"
              ghLink="https://github.com/AndreaJasper/old-skillshare-portfolio"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
