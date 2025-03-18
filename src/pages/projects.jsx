import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import ProjectsHero from '../components/projecthero';
import ProjectsGrid from '../components/projectcards';
const Projects = () => {
  return (
    <div>
      <Navbar />
      <ProjectsHero></ProjectsHero>
      <ProjectsGrid></ProjectsGrid>
      <Footer></Footer>

    </div>
  );
}

export default Projects;
