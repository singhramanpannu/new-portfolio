import React from 'react';
import Navbar from '../components/navbar';
import HoverComponent from '../components/hovercomponent';
import MyWork from '../components/mywork';
import Footer from '../components/footer';
const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <HoverComponent></HoverComponent>
      <MyWork></MyWork>
      <Footer></Footer>

    </div>
  );
}

export default Dashboard;
