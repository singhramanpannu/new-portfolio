import React from 'react';
import Navbar from '../components/navbar';
import HoverComponent from '../components/hovercomponent';
import MyWork from '../components/mywork';
import ProjectSection from '../components/mywork';
import Footer from '../components/footer';
const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <HoverComponent></HoverComponent>
      <ProjectSection></ProjectSection>
      <Footer></Footer>

    </div>
  );
}

export default Dashboard;
